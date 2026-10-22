<?php
/**
 * Φόρμα επικοινωνίας Prelude.
 * Δέχεται POST από τη φόρμα του site και στέλνει email με τη mail() του hosting.
 * Απαντά πάντα σε JSON: {"ok":true} ή {"ok":false,"error":"..."}.
 */

// ---- Ρυθμίσεις ----
$TO        = 'info@preludedma.gr';       // πού έρχονται τα μηνύματα
$FROM      = 'no-reply@preludedma.gr';   // πρέπει να είναι διεύθυνση του δικού σου domain
$SUBJECT   = 'Νέο μήνυμα από το site';
$MIN_GAP   = 30;                         // δευτερόλεπτα ανάμεσα σε δύο αποστολές από την ίδια IP
// -------------------

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function reply(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    reply(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

// Μόνο από το δικό μας site
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !preg_match('#^https?://(www\.)?preludedma\.gr$#i', $origin)) {
    reply(403, ['ok' => false, 'error' => 'forbidden']);
}

// Παγίδα για bots: το κρυφό πεδίο πρέπει να είναι κενό
if (!empty($_POST['website'])) {
    reply(200, ['ok' => true]);
}

$clean = function (string $key, int $max): string {
    $v = trim((string)($_POST[$key] ?? ''));
    $v = str_replace("\0", '', $v);
    return mb_substr($v, 0, $max, 'UTF-8');
};

$name    = $clean('name', 120);
$contact = $clean('contact', 160);
$message = $clean('message', 4000);

if ($name === '' || $contact === '' || $message === '') {
    reply(422, ['ok' => false, 'error' => 'missing_fields']);
}

// Προστασία από header injection στα πεδία που μπαίνουν σε headers
if (preg_match('/[\r\n]/', $name . $contact)) {
    reply(422, ['ok' => false, 'error' => 'invalid_input']);
}

// Απλό όριο συχνότητας ανά IP (αρχείο στον προσωρινό φάκελο του server)
$ip   = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$lock = sys_get_temp_dir() . '/prelude_cf_' . md5($ip);
if (is_file($lock) && (time() - filemtime($lock)) < $MIN_GAP) {
    reply(429, ['ok' => false, 'error' => 'too_many_requests']);
}
@touch($lock);

$body  = "Όνομα: {$name}\n";
$body .= "Επικοινωνία: {$contact}\n";
$body .= "IP: {$ip}\n";
$body .= "Ημερομηνία: " . date('Y-m-d H:i') . "\n\n";
$body .= "Μήνυμα:\n{$message}\n";

$headers   = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'Content-Transfer-Encoding: 8bit';
$headers[] = 'From: Prelude Site <' . $FROM . '>';
if (filter_var($contact, FILTER_VALIDATE_EMAIL)) {
    $headers[] = 'Reply-To: ' . $contact;
}

$subject = '=?UTF-8?B?' . base64_encode($SUBJECT . ' · ' . $name) . '?=';
$sent = @mail($TO, $subject, $body, implode("\r\n", $headers), '-f' . $FROM);

if (!$sent) {
    reply(500, ['ok' => false, 'error' => 'send_failed']);
}

reply(200, ['ok' => true]);

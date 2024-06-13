<?php

error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once('connect.php');

$data = json_decode(file_get_contents("php://input"));
$data->key;

$database = new Database();
$db = $database->connect();

if(!$db) {
    die(json_encode(array('message' => 'Verbindung zur Datenbank fehlgeschlagen')));
}

// Daten vom Frontend erhalten
// $mitarbeiter_id = $_POST['Mitarbeiter'];
// $art_id = $_POST['Art'];
// $datum = $_POST['Datum'];
// $handelspartner_id = $_POST['Kunde'];
// $text = $_POST['Text'];
// $erledigt = $_POST['Erledigt'];
// $rueckrufWer = $_POST['Rückrufer'];

// Prüfen, ob Erledigt-Checkbox gesetzt ist
$erledigt = ($erledigt === 'true') ? 1 : 0;

// Vorbereiteter SQL-Query mit Platzhaltern für die Werte
$query = 'INSERT INTO anrufe
          (handelspartner_id, mitarbeiter_id, art_id, datum, dauer, rueckruf, text, erledigt, kategorie, datumRueckruf, rueckrufWer, geloescht)
          VALUES
          (:h, :m, :a, :d, :t, :e, :r, ?, ?, ?, ?, ?)';
          
$stmt = $db->prepare($query);

if (!$stmt) {
    die(json_encode(array('message' => 'Fehler beim Vorbereiten des Statements')));
}

// Bind parameters und execute query
$stmt->bind_param(':h', $handelspartner_id);
$stmt->bind_param(':m', $mitarbeiter_id);
$stmt->bind_param(':a', $art_id);
$stmt->bind_param(':d', $datum);
$stmt->bind_param(':t', $text);
$stmt->bind_param(':e', $erledigt);
$stmt->bind_param(':r', $rueckrufWer);

//   $rueckruf,
//   $kategorie,
//   $datumRueckruf,
//   $geloescht,
//   $dauer
                  
if (!$stmt->execute()) {
    die(json_encode(array('message' => 'Fehler beim Einfügen der Daten')));
}

$stmt->close();
$db->close();

echo json_encode(array('message' => 'Eintrag erfolgreich hinzugefügt'));
?>
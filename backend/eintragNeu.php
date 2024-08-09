<?php

error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once('connect.php');

$data = json_decode(file_get_contents("php://input"));

// Extrahiere die Daten aus dem JSON-Objekt
$mitarbeiter = $data->mitarbeiter;
$art = $data->art;
$eintragDatum = $data->eintragDatum;
$kunde = $data->kunde;
$kategorie = $data->kategorie;
$rueckruf = $data->rueckruf;
$datumRueckruf = $data->datumRueckruf;
$aktuellerText = $data->aktuellerText;
$erledigt = $data->erledigt;
$mitarbeiterRR = $data->mitarbeiterRR;
$dauer = $data->dauer;

$database = new Database();
$db = $database->connect();

if(!$db) {
    die(json_encode(array('message' => 'Verbindung zur Datenbank fehlgeschlagen')));
}

// Umwandlung der Checkbox-Werte
$erledigt = ($erledigt === true) ? 1 : 0;
$rueckruf = ($rueckruf === true) ? 1 : 0;

// Vorbereiteter SQL-Query mit Platzhaltern für die Werte
$query = 'INSERT INTO anrufe
          (handelspartner_id, mitarbeiter_id, art_id, datum, dauer, rueckruf, text, erledigt, kategorie_id, datumRueckruf, rueckrufWer, geloescht)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

$stmt = $db->prepare($query);

if (!$stmt) {
    die(json_encode(array('message' => 'Fehler beim Vorbereiten des Statements')));
}

// Setze Standardwerte für nicht definierte Felder 
$geloescht = 0; 

// Bind parameters und execute query
$stmt->bind_param('sssssssssssi', $kunde, $mitarbeiter, $art, $eintragDatum, $dauer, $rueckruf, $aktuellerText, $erledigt, $kategorie, $datumRueckruf, $mitarbeiterRR, $geloescht);

if (!$stmt->execute()) {
    die(json_encode(array('message' => 'Fehler beim Einfügen der Daten: ' . $stmt->error)));
}

$stmt->close();
$db->close();

echo json_encode(array('message' => 'Eintrag erfolgreich hinzugefügt'));
?>
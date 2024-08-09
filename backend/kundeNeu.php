<?php

error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once('connect.php');

$data = json_decode(file_get_contents("php://input"));

$suchbegriff = $data->suchbegriff;
$name1 = $data->name1;
$name2 = $data->name2;
$strasse = $data->strasse;
$plz = $data->plz;
$ort = $data->ort;
$telefon = $data->telefon;
$eMail = $data->eMail;
$memo = $data->memo;

$database = new Database();
$db = $database->connect();

if(!$db) {
  die(json_encode(array('message' => 'Verbindung zur Datenbank fehlgeschlagen')));
}

$query = 'INSERT INTO handelspartner
          (suchbegriff, name1, name2, strasse, plz, ort, telefon, eMail, memo)
          VALUES (?,?,?,?,?,?,?,?,?)';

$stmt = $db->prepare($query);

if (!$stmt) {
  die(json_encode(array('message' => 'Fehler beim Vorbereiten des Statements')));
}

$stmt->bind_param('ssssisiss', $suchbegriff, $name1, $name2, $strasse, $plz, $ort, $telefon, $eMail, $memo);

if (!$stmt->execute()) {
  die(json_encode(array('message' => 'Fehler beim Einfügen der Daten: ' . $stmt->error)));
}

$stmt->close();
$db->close();

echo json_encode(array('message' => 'Eintrag erfolgreich hinzugefügt'));

?>
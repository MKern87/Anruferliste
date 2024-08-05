<?php

error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once('connect.php');

$database = new Database();
$db = $database->connect();

if(!$db) {
        die(json_encode(array('message' => 'Verbindung zur Datenbank fehlgeschlagen')));
}

$data = json_decode(file_get_contents("php://input"));

$arr=array();

$query = 'SELECT * FROM handelspartner';

$abruf = mysqli_query($db, $query);

if ($abruf) { // Prüfen, ob der Abruf erfolgreich war
        while ($row = mysqli_fetch_array($abruf, MYSQLI_ASSOC)) {
            $id = $row['id'];
            $suchbegriff = $row['suchbegriff'];
            $name1 = $row['name1'];
            $name2 = $row['name2'];
            $strasse = $row['strasse'];
            $plz = $row['plz'];
            $ort = $row['ort'];
            $telefon = $row['telefon'];
            $memo = $row['memo'];
            
            array_push($arr, array(
                'id' => $id,
                'suchbegriff' => $suchbegriff,
                'name1' => $name1,
                'name2' => $name2,
                'strasse' => $strasse,
                'plz' => $plz,
                'ort' => $ort,
                'telefon' => $telefon,
                'memo' => $memo
            ));
        }
        
        mysqli_free_result($abruf); // Abruf freigeben
        mysqli_close($db); // Verbindung schließen
        
        echo json_encode(array(
            'handelspartnerData' => $arr
        ));
    } else {
        // Fehler beim Abrufen der Daten
        die(json_encode(array('message' => 'Fehler beim Abrufen der Daten')));
    }


?>
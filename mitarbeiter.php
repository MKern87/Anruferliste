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

$query = 'SELECT * FROM mitarbeiter WHERE aktiv = 1';

$abruf = mysqli_query($db, $query);

if ($abruf) { // Prüfen, ob der Abruf erfolgreich war
        while ($row = mysqli_fetch_array($abruf, MYSQLI_ASSOC)) {
            $mitarbeiter = $row['mitarbeiter'];
            $id = $row['id'];
            $aktiv = $row['aktiv'];
            
            array_push($arr, array(
                'mitarbeiter' => $mitarbeiter,
                'mitarbeiter_id' => $id,
                'aktiv' => $aktiv
            ));
        }
        
        mysqli_free_result($abruf); // Abruf freigeben
        mysqli_close($db); // Verbindung schließen
        
        echo json_encode(array(
            'mitarbeiterData' => $arr
        ));
    } else {
        // Fehler beim Abrufen der Daten
        die(json_encode(array('message' => 'Fehler beim Abrufen der Daten')));
    }


?>
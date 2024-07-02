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

$query = 'SELECT anrufe.*,
                handelspartner.suchbegriff as kunde,
                mitarbeiter.mitarbeiter as mitarbeiter,
                art.art as art,
                kategorie.kategorie as kategorie,
                (SELECT mitarbeiter.mitarbeiter 
                FROM mitarbeiter 
                WHERE mitarbeiter.id = anrufe.rueckrufWer) as mitarbeiterRR
                FROM anrufe
                JOIN handelspartner ON anrufe.handelspartner_id = handelspartner.id
                JOIN mitarbeiter ON anrufe.mitarbeiter_id = mitarbeiter.id
                JOIN art ON anrufe.art_id = art.id
                JOIN kategorie ON anrufe.kategorie_id = kategorie.id';

$abruf = mysqli_query($db, $query);

if ($abruf) { // Prüfen, ob der Abruf erfolgreich war
        while ($row = mysqli_fetch_array($abruf, MYSQLI_ASSOC)) {
            $id = $row['id'];
            $hpId = $row['kunde'];
            $mId = $row['mitarbeiter'];
            $aId = $row['art'];
            $date = $row['datum'];
            $dauer = $row['dauer'];
            $rruf = $row['rueckruf'];
            $text = $row['text'];
            $done = $row['erledigt'];
            $categorie = $row['kategorie'];
            $dateRR = $row['datumRueckruf'];
            $rrWer = $row['mitarbeiterRR'];

            // Datum konvertiert
            $datumKonvertiert = (new DateTime($date))->format('d.m.Y');
            $datumKonvertiertRR = (new DateTime($dateRR))->format('d.m.Y');
            
            array_push($arr, array(
                'id' => $id,
                'handelspartner_id' => $hpId,
                'mitarbeiter_id' => $mId,
                'art_id' => $aId,
                'datum' => $datumKonvertiert,
                'dauer' => $dauer,
                'rueckruf' => $rruf,
                'text' => $text,
                'erledigt' => $done,
                'kategorie_id' => $categorie,
                'datumRueckruf' => $datumKonvertiertRR,
                'rueckrufWer' => $rrWer,
            ));
        }
        
        mysqli_free_result($abruf); // Abruf freigeben
        mysqli_close($db); // Verbindung schließen
        
        echo json_encode(array(
            'anrufeData' => $arr
        ));
    } else {
        // Fehler beim Abrufen der Daten
        die(json_encode(array('message' => 'Fehler beim Abrufen der Daten')));
    }


?>
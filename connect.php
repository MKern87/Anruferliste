<?php

class Database {

    private $Servername = 'localhost';
    private $Database = 'anruferliste';
    private $Username = 'root';
    private $Password = '';

    public $conn;
    
    public function connect() {
        if ($this->conn != null) {
            // Die Verbindung besteht bereits
            return $this->conn;
        } else {
            // Verbindung herstellen
            $check = mysqli_connect(
                $this->Servername,
                $this->Username,
                $this->Password,
                $this->Database
            );
            
            // Verbindung überprüfen
            if ($check) {
                $this->conn = $check;
                return $this->conn;
            } else {
                // Fehlermeldung ausgeben und Skript beenden
                die("Verbindung fehlgeschlagen: " . mysqli_connect_error());
            }
        }
    }
}

?>

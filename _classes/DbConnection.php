<?php 

class Dbconnection{

    public $host = "localhost";
    public $name = "root";
    public $dbName = "php_quizes";
    public $psw = "";

    public function  connection(){
        try{
            $dsn = "mysql:host =$this->host;dbname=$this->dbName" ;
            $options = [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC];
            $conn = new PDO($dsn , $this->name ,$this->psw,$options);
            return $conn ;
        }catch(PDOException $e){
            echo "connection is failed".$e->getMessage();
        }
    }

}

$con =  new Dbconnection();
$con->connection();
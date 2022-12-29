<?php 

class Dbconnection{

    public $host = "localhost";
    public $name = "root";
    public $dbName = "php_quizes";
    public $psw = "";

    public function  connection(){
        try{
            $dsn = "mysql:host =$this->host;dbname=$this->dbName" ;
            $conn = new PDO($dsn , $this->name ,$this->psw);
            return $conn ;
            echo 'nady';
        }catch(PDOException $e){
            echo "connection is failed".$e->getMessage();
        }
    }

}
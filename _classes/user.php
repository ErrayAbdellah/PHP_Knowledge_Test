<?php
require 'DbConnection.php';

session_start();
class User{
    public $name ;
    public $lastname ;
    public $email ;
    public $pwd ;
    public $score ;


    public function __construct($name,$lastname,$email,$pwd,$score)
    {
        $this->name     = $name     ;
        $this->lastnam  = $lastname ;
        $this->email    = $email    ;
        $this->pwd      = $pwd      ;
        $this->score    = $score    ;
    }

    public static function signUp($name,$lastNmae,$email,$pwd){
        $con = new Dbconnection();
        $qry = "INSERT INTO `usere`(`name`, `lastName`, `email`, `psw`) VALUES ('$name','$lastNmae','$email','$pwd')";
        $stmt = $con->connection()->prepare($qry);
        $stmt->execute();
    }
    
    public static function signIn($email,$pwd){
        $con = new Dbconnection();
        $qry = "SELECT * FROM usere where email like '$email' and psw like '$pwd'";
        $stmt = $con->connection()->prepare($qry);
        $stmt->execute();
        $result = $stmt->fetchAll();
        if($stmt->rowcount()!=0){
            header("location: ../");
        }
        return $_SESSION[''] = $result = $stmt->fetchAll();
        // echo "<pre>";
        // print_r($stmt->rowCount());
        // echo "</pre>";
    }
}
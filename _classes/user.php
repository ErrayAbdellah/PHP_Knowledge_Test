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
        $this->lastname  = $lastname ;
        $this->email    = $email    ;
        $this->pwd      = $pwd      ;
        $this->score    = $score    ;
    }

    public static function signUp($name,$lastNmae,$email,$pwd){
       try{
        $con = new Dbconnection();
        $qry = "INSERT INTO `usere`(`name`, `lastName`, `email`, `psw`,`score`) VALUES ('$name','$lastNmae','$email','$pwd',0)";
        $stmt = $con->connection()->prepare($qry);
        $stmt->execute();
            header('location:../views/signIn.php');
       }catch(PDOException $e){
            echo "error" . $e->getMessage();
       }
    }
    
    public static function signIn($email,$pwd){
        $con = new Dbconnection();
        $qry = "SELECT * FROM usere where email like '$email' and psw like '$pwd'";
        $stmt = $con->connection()->prepare($qry);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        if($stmt->rowcount()!=0){

            $_SESSION['user'] = $result;
            header('location:../'); 

        }else{
            $_SESSION['errorLogin'] = 'User is not registered <br> !! Please recheck email or password' ;
        }
    }

    
}
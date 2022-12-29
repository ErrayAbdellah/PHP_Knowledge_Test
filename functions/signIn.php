<?php
require '../_classes/DbConnection.php';

function signUp($name,$lastNmae,$email,$pwd){
    $con = new Dbconnection();
    $qry = "INSERT INTO `usere`(`name`, `lastName`, `email`, `psw`) VALUES ('$name','$lastNmae','$email','$pwd')";
    $stmt = $con->connection()->prepare($qry);
    $stmt->execute();
}
$email  = "a@gmail.com";
$pwd = "123";
signIn($email,$pwd);

function signIn($email,$pwd){
    $con = new Dbconnection();
    $qry = "SELECT * FROM usere where email like '$email' and psw like '$pwd'";
    $stmt = $con->connection()->prepare($qry);
    $stmt->execute();
    $result = $stmt->fetchAll();
    if($stmt->rowcount()!=0){
        header("location: ../");
    }
    echo "<pre>";
    print_r($stmt->rowCount());
    echo "</pre>";

    
}
<?php
echo  "hi";
// function signIn($name,$lastNmae,$email,$pwd){
//     $con = new Dbconnection();
//     $qry = "INSERT INTO `usere`(`name`, `lastName`, `email`, `psw`) VALUES ('name','lastNmae','email','pwd')";
//     $stmt = $con->connection()->prepare($qry);
//     $stmt->execute([":name"=>$name,":lastName"=>$lastNmae,":email"=>$email,":pwd"=>$pwd]);
// }
$name = "abdellah";
$lastNmae = "erray" ;
$email = "abdellag@gmail.com";
$pwd  ="123";
signIn($name,$lastNmae,$email,$pwd);
function signIn($name,$lastNmae,$email,$pwd){
    $con = new Dbconnection();
    $qry = "INSERT INTO `usere`(`name`, `lastName`, `email`, `psw`) VALUES ('name','lastNmae','email','pwd')";
    $stmt = $con->connection()->prepare($qry);
    $stmt->execute([":name"=>$name,":lastName"=>$lastNmae,":email"=>$email,":pwd"=>$pwd]);
}
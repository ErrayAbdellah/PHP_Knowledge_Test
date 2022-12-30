<?php

require '../_classes/DbConnection.php';
$con = new DbConnection();

$qyr = "SELECT * FROM questions";
$stmt = $con->connection()->prepare($qyr);
$stmt->execute();
$result = $stmt->fetchAll();


$data = array();


foreach($result as $row){
    $data[] = $row;
}
       echo json_encode($data);
       
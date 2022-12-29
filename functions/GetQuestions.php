<?php
require '../_classes/DbConnection.php';
$con = new DbConnection();

$qyr = "SELECT * FROM questions";
$stmt = $con->connection()->prepare($qyr);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_OBJ);

// echo "<pre>" ;
//     var_dump($result) ;
// echo "</pre>" ;
// die() ;

// // echo "<pre>";
// $mydata = (object)$result ;

// echo "<pre>" ;
//     var_dump($mydata) ;
// echo "</pre>" ;
// die() ;

foreach($result as $row){


    // echo "<pre>" ;
        var_dump((object)$row) ;

    // $mydata = (object)$row ;
    // // echo "<pre>" ;
    // echo $mydata->id."-" ;
    //     echo $mydata->question ;
    //     echo "<hr>" ;

    // echo "</pre>" ;
    // foreach($mydata as $data){
        // echo $data->id ;
    // }

}


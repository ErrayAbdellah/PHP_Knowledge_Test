<?php
// require '../_classes/DbConnection.php';
// require '../_classes/user.php';
// if(isset($_POST['btnX'])) score();


function score(){
    
    $con = new Dbconnection();

     echo $_SESSION['user']['score'];
    if(isset($_GET['txtScore'])){
        
        if($_SESSION['user']['score'] <= $_GET['txtScore'] ){

            unset($_SESSION['user']['score']);
            $_SESSION['user']['score'] = $_GET['txtScore'];
            
            $qry = "update usere set score = ".$_GET['txtScore']." WHERE id = ".$_SESSION['user']['id'];
            $stmt = $con->connection()->prepare($qry);
            $stmt->execute();
        }
    } 

    

}




// score();
// $_SESSION['scor']='ggggggggg';
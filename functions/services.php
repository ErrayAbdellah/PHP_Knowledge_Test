<?php
// require '../_classes/DbConnection.php';
// require '../_classes/user.php';
// if(isset($_POST['btnX'])) score();


function score(){
    // echo " <script>console.log('hhhhhhhhhhhh')</script>";
    $con = new Dbconnection();
    // $result = $stmt->fetch();
    
    // print_r($_SESSION);
     echo $_SESSION['user']['score'];
    // echo $_POST['txtScore'];
    // if(isset($_POST['txtScore'])){
        
    //     if($_SESSION['user']['score'] <= $_POST['txtScore'] ){

    //         unset($_SESSION['user']['score']);
    //         $_SESSION['user']['score'] = $_POST['txtScore'];
            
    //         $qry = "update usere set score = ".$_POST['txtScore']." WHERE id = ".$_SESSION['user']['id'];
    //         $stmt = $con->connection()->prepare($qry);
    //         $stmt->execute();
    //     }
    // } 

    

}




// score();
// $_SESSION['scor']='ggggggggg';
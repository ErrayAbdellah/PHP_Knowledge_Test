<?php
// require '../_classes/DbConnection.php';
// require '../_classes/user.php';

function score(){
    // echo " <script>console.log('hhhhhhhhhhhh')</script>";

    unset($_SESSION['scor']);
    print_r($_SESSION);
    if(isset($_GET['txtScore'])) echo $_GET['txtScore'] ;


}




// score();
// $_SESSION['scor']='ggggggggg';
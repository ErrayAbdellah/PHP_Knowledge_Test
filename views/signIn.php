<link rel="stylesheet" href="../assets/styles/login.css">
<?php 
    require 'view/head.php';
    require '../_classes/user.php';
    
    if(isset($_POST['bntSingInLogin'])){
    $email = htmlspecialchars(trim(strtolower($_POST['signInEmail'])));
    $pwd = $_POST['signInPwd'];
        User::signIn($email,$pwd); 
        
    }
?>
<link rel="stylesheet" href="../assets/styles/login.css">

<div id="myMove1"></div>
<div id="myMove2"></div>
<?php
if(isset($_SESSION['errorLogin'])) { ?>
    <div class='mssgerror'><h3><?= $_SESSION['errorLogin'] ?></h3></div>
 <?php   
    unset($_SESSION['errorLogin']);
}
 ?>
<section id="singIn">
    <h3>Sign In</h3>
    <form method="post" action="signIn.php">
        <div>
            <label for="Username" class="lbl">Email   </label><br>
            <input type="email" class="txt-input" name="signInEmail">
        </div>
        <div>
            <label for="Password" class="lbl">Password</label><br>
            <input type="password" class="txt-input" name="signInPwd">
        </div>
        <input type="submit" value="Sign In" name="bntSingInLogin" class="bntLogin">
    </form>
    <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="SignUp.php"
                        style="color: #2233f0;">Register here</a></p>
</section>
<?php require 'view/footer.php'?>
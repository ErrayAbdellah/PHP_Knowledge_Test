<link rel="stylesheet" href="../assets/styles/login.css">
<?php require 'view/head.php';
require '../_classes/user.php';

if(isset($_POST['bntSingInLogin'])){
   $email = $_POST['signInEmail'];
   $pwd = $_POST['signInPwd'];
    User::signIn($email,$pwd); 
}
?>
<link rel="stylesheet" href="../assets/styles/login.css">
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
</section>
<?php require 'view/footer.php'?>
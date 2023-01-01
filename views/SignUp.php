<link rel="stylesheet" href="../assets/styles/login.css">
<?php require 'view/head.php' ;
require '../_classes/user.php';

      if(isset($_POST['btnSingUp']) )
      {
        if(isset($_POST['txtName']) && isset($_POST['txtTastname']) && isset($_POST['txtEmail']) && isset($_POST['txtPwd'])){
            $name = $_POST['txtName'] ;
            $lastName = $_POST['txtTastname'];
            $email = htmlspecialchars(trim(strtolower($_POST['txtEmail']))); 
            $pwd = $_POST['txtPwd'];
         User::signUp($name,$lastName,$email,$pwd);
        }else{
            echo "walo";
        }
      }
?>

<div id="myMove1"></div>
<div id="myMove2"></div>
<section id="singIn">
    <h3>Sign In</h3>
    <form method="POST" action="SignUp.php" >
        <div>
            <label for="Username" class="lbl">name</label><br>
            <input type="text" class="txt-input" name="txtName">
        </div>
        <div>
            <label for="Username" class="lbl">Lastname</label><br>
            <input type="text" class="txt-input" name="txtTastname" required>
        </div>
        <div>
            <label for="Username" class="lbl">email</label> <br>
            <input type="email" class="txt-input" name="txtEmail" required>
        </div>
        <div>
            <label for="Password" class="lbl">Password</label> <br>
            <input type="password" class="txt-input" required>
        </div>
        <div>
            <label for="Password" class="lbl">Conferme Password</label><br>
            <input type="password" class="txt-input" name="txtPwd">
        </div>
        <input type="submit" value="Sign In" class="bntLogin" name="btnSingUp">
    </form>
    <p class="mb-5 pb-lg-2" style="color: #393f81;">You have an account? <a href="signIn.php"
                        style="color: #2233f0;">Sign in</a></p>
</section>
<?php require 'view/footer.php'?>
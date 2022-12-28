<link rel="stylesheet" href="../assets/styles/login.css">
<?php require 'view/head.php' ;
// require '../_classes/DbConnection.php';
    require '../functions/signIn.php';

      if(isset($_POST['btnSingUp']) )
      {
        if(isset($_POST['txtName']) && isset($_POST['txtTastname']) && isset($_POST['txtEmail']) && isset($_POST['txtPwd'])){
            $name = $_POST['txtName'] ;
            $lastName = $_POST['txtTastname'];
            $email = $_POST['txtEmail'];
            $pwd = $_POST['txtPwd'];
        signUp($name,$lastName,$email,$pwd);
        }else{
            echo "walo";
        }
      }
?>
<section id="singIn">
    <h3>Sign In</h3>
    <form method="POST" action="SignUp.php">
        <div>
            <label for="Username" class="lbl">name</label>
            <input type="text" class="txt-input" name="txtName">
        </div>
        <div>
            <label for="Username" class="lbl">Lastname</label>
            <input type="text" class="txt-input" name="txtTastname">
        </div>
        <div>
            <label for="Username" class="lbl">email</label>
            <input type="email" class="txt-input" name="txtEmail">
        </div>
        <div>
            <label for="Password" class="lbl">Password</label>
            <input type="password" class="txt-input" name="txtPwd">
        </div>
        <input type="submit" value="Sign In" class="bntLogin" name="btnSingUp">
    </form>
</section>
<?php require 'view/footer.php'?>
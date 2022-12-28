<link rel="stylesheet" href="../assets/styles/login.css">
<?php require 'view/head.php';?>
<section id="singIn">
    <h3>Sign In</h3>
    <form method="post">
        <div>
            <label for="Username" class="lbl">Username</label>
            <input type="text" class="txt-input">
        </div>
        <div>
            <label for="Password" class="lbl">Password</label>
            <input type="text" class="txt-input">
        </div>
        <input type="submit" value="Sign In" class="bntLogin">
    </form>
</section>
<?php require 'view/footer.php'?>
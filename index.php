<?php 
    require './views/view/head.php';
    require '_classes/user.php';
    require "functions/services.php" ;

    if(isset($_POST['btnLogout'])){
        // User::logout();
        unset($_SESSION['user']);
        header('location:views/signIn.php');
    }
    if(!isset($_SESSION['user'])){
        header('location:views/signIn.php');
        }    
        
        //var_dump($_SESSION);
?>
    <!-- <H1 style="color: aliceblue;"></H1> -->
    <nav class="navUser">
        <span style='font-size:2rem;'>&#128519;</span>
        <h3>score <span><?php score(); ?></span></h3>
        <h3 class="dropdown">Hi!
            <a>
                <?=$_SESSION['user']['name'];  ?> 
                <i class="fa fa-caret-down"></i>
            </a>
            <form  method="POST">
                <div class="dropdown-content"><input type="submit" name="btnLogout" href="views/signIn.php" value="Logout" ></div>
            </form>
        </h3>        
    </nav>
        <section id="imgsHome">
            <img src="images/1x/stars.png" id="imgStars" alt="">
            <img src="images/1x/moom.png" id="moom" alt="">
            <img src="images/1x/mountains_behind.png" id="mountains_behind" alt="">
            <img src="images/1x/mountains_front.png" id="mountains_front" alt="">
            <a href="views/home.php" id="play">PLay</a>
        </section>
        
<?php require 'views/view/footer.php'?>
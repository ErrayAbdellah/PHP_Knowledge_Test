<?php  require "view/head.php" ;?>


    <div id="light"></div>
    <div id="myMove1"></div>
    <div id="myMove2"></div>
    <nav>
        <div></div>
        <div></div>
        
    </nav>
    <!------------ Stepper component ------------>
    
    <ul class="stepper-component">
        <li>
            <div class="active progress one">
                <p>1</p>
                <i class="checkMark fa-solid fa-check"></i>
            </div>
        </li>
        <li>
            <div class="progress two">
                <p>2</p>
                <i class="checkMark fa-solid fa-check"></i>
            </div>
        </li>
        <li>
            <div class="progress three">
                <p>3</p>
                <i class="checkMark fa-solid fa-check"></i>
            </div>
        </li>
    </ul>
    
    <!-- title -->

    <section class="info">
        <h1>PHP Knowledge Test - Frontend</h1>
        <p>When we think of the online quiz, we automatically think of
            a fun and entertaining question-and-answer game, which allows you to test
            your knowledge dominates.
            and here it is app to test the knowledge of the candidates at the PHP level. </p>
            <button onclick="bntNext()"> NEXT</button>
    </section>
    <div class="question">
        <h2 id="title">PHP Knowledge Test-Frontend</h2>
        <!-- Question -->
        <div id="card-Question">
            <div id="circle">
                <img src="../images/php.png" alt="" width="102%">
        </div>
        <p id="text" >
            <span></span>
        </p>
        <span class="timer"></span>
        <span id="NmbrQst"></span>
    </div>
    <!-- images -->
    <div id="TowImage">
        <img class="imgQuestion" src="../images/circleQuistion.png" alt="">
        <img class="imgQuestion" src="../images/circleQuistion.png" alt="">
    </div>
    <h1 id="checking" ></h1>
    
    <!-- Responses -->
    <div class="cards">
        <button type="button" class="card" id="card1" onclick="reponse(this)" value="1"></button>
        <button type="button" class="card" id="card2" onclick="reponse(this)" value="2"></button>
        <button type="button" class="card" id="card3" onclick="reponse(this)" value="3"></button>
        <button type="button" class="card" id="card4" onclick="reponse(this)" value="4"></button>
        <!-- <div class="bf"></div> -->
    </div>
   </div>
   <div class="result">
       <h1>All Done !!!</h1>
       <p>Your score is <span id="score"></span></p>
       <p>Click Submit To see the Questions's explication</p>
       <button onclick="location.href='../index.php'" >Submit</button>
       <!-- <button onclick="bntNext()">Go Back</button> -->
   </div>
   
<?php require 'view/footer.php'; ?>
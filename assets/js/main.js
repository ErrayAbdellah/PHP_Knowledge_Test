let card1       = document.getElementById('card1');
let card2       = document.getElementById('card2');
let card3       = document.getElementById('card3');
let card4       = document.getElementById('card4');
let qstCard     = document.getElementById('text');
let bottun      = document.querySelector('.card');
let scoreResult = document.getElementById('score');
let txtScore    = document.getElementById('txtScore');
let timer       = document.querySelector('.timer');


getQuestions();
let indexQst      = 0 ;
 var light        = document.getElementById('light');
 var questionObjs = [];
 let countQst     = 0;
 let countRandom  = [];
 let score        = 0;




  // ajax get DATA
  function getQuestions(){
    let aj = new XMLHttpRequest();

    aj.onreadystatechange = function(){
      if(this.readyState===4 && this.status===200){

         questionObjs = JSON.parse(this.responseText);
         countQst     = questionObjs.length ;
         countRandom  = randomCount(countQst);
         arrTest      = questionObjs;       
         getData();

        }
      }
      aj.open("POST","http://localhost/PHP_Knowledge_Test-Frontend/functions/GetQuestions.php");
      aj.send();
    } 
  
  function getData(){
    if(indexQst <countQst){
      getQuestions();
      document.querySelector("#NmbrQst").innerText = (indexQst+1)+"/"+countQst;
      qstCard.innerText = questionObjs[indexQst]['question'];
      card1.innerText   = questionObjs[indexQst]['choice1'];
      card2.innerText   = questionObjs[indexQst]['choice2'];
      card3.innerText   = questionObjs[indexQst]["choice3"];
      card4.innerText   = questionObjs[indexQst]['choice4'];
      let answer        = questionObjs[indexQst]['answer'] ;
     
      return answer;
    }else{
      $(".question").css({'display':'none'});
      $(".info").css({'display':'none'});
      $(".result").css({'display':'block'});
      document.querySelector(".three").classList.add("active");
      scoreResult.innerText = score+"/"+countQst;
      txtScore.value = score ;
      
    }
  }
  
  function reponse(index)
  {
    clearInterval(t);
    tm(9);
    getQuestions();
    test(getData(),index);
    setTimeout(() => {
      indexQst++;
    }, 500);
    
  }
  
  function test(question,index){
    if(question==index.value)
    {
      
      $("#card"+index.value).css({'background':'rgb(105, 243, 158)'});
      setTimeout(() => {
        $("#card"+index.value).css({'background':'#F299EC'});
      }, 500);
      score++;
    }else{
      $("#card"+index.value).css({'background':'rgb(218, 87, 87)'});
      $("#card"+question).css({'background':'rgb(105, 243, 158)'});
      
      setTimeout(() => {
        $("#card"+index.value).css({'background':'#F299EC'});
        $("#card"+question).css({'background':'#F299EC'});
      }, 500);
      }        
  }

  function randomCount(Count) {
    let arr = []
    let result = [];
    for (let i = 1; i <= Count; i++) {
      arr.push(i)
    }
    for (let i = 1; i <= Count; i++) {
      const random = Math.floor(Math.random() * (Count - i));
      result.push(arr[random]);
      arr[random] = arr[Count - i];
    }
    return result;
  }

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  $(".question").css({'display':'none'});
  $(".result").css({'display':'none'});
  // $(".info").css({'display':'none'});
  
  function bntNext(){
    $(".question").css({'display':'block'});
    $(".info").css({'display':'none'});
    $(".result").css({'display':'none'});
    document.querySelector(".two").classList.add("active");
    tm(9);
    
  }

   let t ;
   function tm(sec){
     t = setInterval(tms,1000);

     function tms(){
        if(sec===-1)
          {
            sec = 9;
            indexQst++;
          }else{
            timer.innerHTML = '00:0'+sec;
            sec --;
          }
     }
    }

    // setTimeout(sendScore(),3000);

    // function sendScore(){
    //  setTimeout(() => {
      
    //    location.readyState();
    //  }, 3000);
    //   //location.href = "../index.php"
    // }


 
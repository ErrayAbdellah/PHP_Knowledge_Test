let card1      = document.getElementById('card1');
let card2      = document.getElementById('card2');
let card3      = document.getElementById('card3');
let card4      = document.getElementById('card4');
let qstCard    = document.getElementById('text');
let bottun     =  document.querySelector('.card');


getQuestions();
let indexQst = 0 ;
 var light = document.getElementById('light');
 var questionObjs =[];
 let countQst = 0;
 let countRandom =[];
 let score = 0;




  // ajax get DATA
  function getQuestions(){
    let aj = new XMLHttpRequest();

    aj.onreadystatechange = function(){
      if(this.readyState===4 && this.status===200){
         questionObjs = JSON.parse(this.responseText);
         countQst = questionObjs.length ;
         countRandom = randomCount(countQst);
         arrTest = questionObjs;       
       getData();
      }
    }
    aj.open("GET","../../questions.json",true);
    aj.send();
  }
  
  function getData(){
    //console.log()
    if(indexQst <countQst){
      getQuestions();
      qstCard.innerText = questionObjs[indexQst]['question'];
      card1.innerText   = questionObjs[indexQst]['choice1'];
      card2.innerText   = questionObjs[indexQst]['choice2'];
      card3.innerText   = questionObjs[indexQst]["choice3"];
      card4.innerText   = questionObjs[indexQst]['choice4'];
      let answer        = questionObjs[indexQst]['answer'] ;
      return answer;
    }else{
      window.location.href="../../views/home.html";
    }
  }
  
  function reponse(index)
  {
    getQuestions();
    test(getData(),index);

    setTimeout(() => {
      indexQst++;
    }, 500);
  }
  
  function test(question,index){
    if(question==index.value)
    {
      $("#checking").text("Correct !!!");
      $("#checking").css({'color':'green'});
      setTimeout(() => {
        $("#checking").text("");
      }, 500);
      
      score++;
    }else{
      $("#checking").text("Incorrect !!!");
      $("#checking").css({'color':'red'});
      setTimeout(() => {
        $("#checking").text("");
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

  //console.log(randomUniqueNum(10))
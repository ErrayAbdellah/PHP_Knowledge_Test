let indexQst = 0 ;
 let card1      = document.getElementById('card1');
 let card2      = document.getElementById('card2');
 let card3      = document.getElementById('card3');
 let card4      = document.getElementById('card4');
 let qstCard    = document.getElementById('text');
 let bottun     =  document.querySelector('.card');

 
 getQuestions();
 
 var light = document.getElementById('light');



  // ajax get DATA
  function getQuestions(index){
    let aj = new XMLHttpRequest();

    aj.onreadystatechange = function(){
      if(this.readyState===4 && this.status===200){
        let questionObjs = JSON.parse(this.responseText);
        let countQst = questionObjs.length ;
        //console.log(countQst);
        addData(questionObjs[indexQst],countQst,index);
      }
    }
    
    aj.open("GET","../../questions.json",true);
    aj.send();
  }
  
  function addData(question,count,index){
    if(indexQst <count){
      qstCard.innerText = question['question'];
      card1.innerText   = question['choice1'];
      card2.innerText   = question['choice2'];
      card3.innerText   = question["choice3"];
      card4.innerText   = question['choice4'];
      let answer = question['answer'];
      indexQst++;
      // checkAnswer(answer,index);
      return answer;
    }else{
      location.reload()
      alert("fin");
    }
  }
  answer = addData();
  console.log(answer);
  function reponse(index)
  {
    //getQuestions(index.index);
    console.log(index.value)
  }
  function test(question,index){
    console.log(question);
      if(question==index)
      {
        alert("true");
        
      }else{
        alert("false");
      }
      
  }
 
  function randomUniqueNum(Count) {

    let arr = []
    for (let i = 1; i <= Count; i++) {
      arr.push(i)
    }
  
    let result = [];
  
    for (let i = 1; i <= Count; i++) {
      const random = Math.floor(Math.random() * (Count - i));
      result.push(arr[random]);
      arr[random] = arr[Count - i];
    }
  
    return result;
  }

  //console.log(randomUniqueNum(10))
let indexQst = 0 ;
 let card1      = document.getElementById('card1');
 let card2      = document.getElementById('card2');
 let card3      = document.getElementById('card3');
 let card4      = document.getElementById('card4');
 let qstCard    = document.getElementById('text');
 let bottun     =  document.querySelector('.card');

function reponse(index)
{
  //console.log(index.value)
    getQuestions(index.value);
}

getQuestions();

var light = document.getElementById('light');

document
  .documentElement
  .addEventListener('mousemove', function handleMouseMove(event) {
    light.style.setProperty('--light-position-y', (event.clientY - 50) + 'px');
    light.style.setProperty('--light-position-x', (event.clientX - 50) + 'px');
  });

// ajax get DATA
  function getQuestions(index){
    let aj = new XMLHttpRequest();

    aj.onreadystatechange = function(){
      if(this.readyState===4 && this.status===200){
        let questionObjs = JSON.parse(this.responseText);
        let countQst = questionObjs.length ;
        console.log(countQst);
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
      
      // test(answer,index);
      indexQst++;
    }else{
      // location.reload()
      alert("fin");
    }
  }
  
  function test(question,index){

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
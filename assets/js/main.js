let indexQst = 0 ;
 let card1      = document.getElementById('card1');
 let card2      = document.getElementById('card2');
 let card3      = document.getElementById('card3');
 let card4      = document.getElementById('card4');
 let qstCard    = document.getElementById('text');
 let bottun     =  document.querySelector('.card');

//  qstCard.innerText = questions[0].question;
//  card1.innerText = questions[0].choice1;
//  card2.innerText = questions[0].choice2;
//  card3.innerText = questions[0].choice3;
//  card4.innerText = questions[0].choice4;


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
        
        addData(questionObjs[indexQst],countQst,index);
      }
    }

    aj.open("GET","../../questions.json",true);
    aj.send();
  }

  // getQuestions();

  function addData(question,count,index){
    if(indexQst <count){
      qstCard.innerText = question['question'];
      card1.innerText   = question['choice1'];
      card2.innerText   = question['choice2'];
      card3.innerText   = question["choice3"];
      card4.innerText   = question['choice4'];
      let answer = question['answer'];
      //console.log(index);
      test(answer,index);
      indexQst++;
    }else{
      // location.reload()
      alert("fin");
    }
  }
  
  function test(question,index){
   
    // console.log(question);
    // console.log(index);

    if(question==index)
    {
      alert("true");
      
    }else{
      alert("false");
    }
  }
 
  //  switch(answer){
  //   case 1 :
  //     if(card1.value==answer)
  //     {
  //       alert("trus");
  //     }else{
  //       alert("false");
  //     }
  //   break;
  //   case 2 :
  //     if(card2.value==answer)
  //     {
  //       alert("trus");
  //     }else{
  //       alert("false");
  //     }
  //   break;
  //   case 3 :
  //     if(card3.value==answer)
  //     {
  //       alert("trus");
  //     }else{
  //       alert("false");
  //     }
  //   break;
  //   case 4 :
  //     if(card4.value==answer)
  //     {
  //       alert("trus");
  //     }else{
  //       alert("false");
  //     }
  //   break;

  //  }
   
   
    // if(card1.valus===answer){

    // }else if(card2.valus===answer){

    // }else if(card3.valus===answer){

    // }else if(card3.valus===answer)
    // {

    // }
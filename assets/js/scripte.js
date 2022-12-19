var questions = 
      [
        {
          question: "Que signifie PHP?",
          choice1: "Personal Home Page Hypertext Preprocessor", 
          choice2: "Pretext Hypertext Processor", 
          choice3: "Preprocessor Home Page", 
          choice4: "Pretext Hypertext Processor",
          answer: 1
        },

        {
          question: "Les fichiers PHP ont l’extension …. ?",
          choice1: ".html", 
          choice2: ".xml", 
          choice3: ".php", 
          choice4: ".ph",
          answer: 3
        },
        {
          question: "Un script PHP devrait commencer par ___ ?",
          choice1: "<php", 
          choice2: "<?", 
          choice3: "<?php", 
          choice4: "php",
          answer: 3
        },
        {
          question: "Quelle version de PHP a introduit Try/catch Exception?",
          choice1: "PHP 4", 
          choice2: "PHP 5", 
          choice3: "PHP 5.3", 
          choice4: "PHP 7.2",
          answer: 2
        },
        {
          question: "Les espaces de noms ou « namespaces » sont disponibles depuis quelle version ?",
          choice1: "PHP 4", 
          choice2: "PHP 5", 
          choice3: "PHP 5.3", 
          choice4: "PHP 6",
          answer: 4
        },
        {
          question: "Laquelle des portées suivantes n’est pas prise en charge en PHP?",
          choice1: "static", 
          choice2: "final", 
          choice3: "public", 
          choice4: "friendly",
          answer: 4
        },
        {
          question: "Les variables membres d’une classe sont également appelées __?",
          choice1: "les attributs", 
          choice2: "des propriétés", 
          choice3: "des instances", 
          choice4: "tous les réponses sont vrais",
          answer: 4
        },
        {
          question: "Les méthodes sont également appelées des___?",
          choice1: "fonction membre", 
          choice2: "instances", 
          choice3: "objects", 
          choice4: "constructeurs",
          answer: 1
        },
        {
          question: " Quelle mot-clé empêche une méthode d’être redéfinie par une classe file?",
          choice1: "abstract", 
          choice2: "protected", 
          choice3: "final", 
          choice4: "static",
          answer: 3
        },
        {
          question: " Quelle mot-clé empêche une méthode d’être redéfinie par une classe file?",
          choice1: "abstract", 
          choice2: "protected", 
          choice3: "final", 
          choice4: "static",
          answer: 3
        },
        {
          question: " Quelle mot-clé empêche une méthode d’être redéfinie par une classe file?",
          choice1: "abstract", 
          choice2: "protected", 
          choice3: "final", 
          choice4: "static",
          answer: 3
        },
        {
          question: " Quelle mot-clé empêche une méthode d’être redéfinie par une classe file?",
          choice1: "abstract", 
          choice2: "protected", 
          choice3: "final", 
          choice4: "static",
          answer: 3
        },
        {
          question: "Nous pouvons utiliser ___ pour commenter une seule ligne?",
          choice1: "/?", 
          choice2: "#", 
          choice3: "//", 
          choice4: "/* */",
          answer: 3
        }
      ];

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


// function reponse()
// {
//     //alert(this);
//     for(let i=0;i<questions.length;i++)
//     {
//         qstCard.innerText   = questions[i].question;
//         card1.innerText     = questions[i].choice1;
//         card2.innerText     = questions[i].choice2;
//         card3.innerText     = questions[i].choice3;
//         card4.innerText     = questions[i].choice4;
//         if(questions[i].answer == 1 ){
//             alert(bottun.value);
//         }
//     }
// }



var light = document.getElementById('light');

document
  .documentElement
  .addEventListener('mousemove', function handleMouseMove(event) {
    light.style.setProperty('--light-position-y', (event.clientY - 50) + 'px');
    light.style.setProperty('--light-position-x', (event.clientX - 50) + 'px');
  });
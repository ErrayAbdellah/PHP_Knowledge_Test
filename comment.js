
// HttpRequest -->  client server

// ajax = new XMLHttpRequest();

//ajax.open("GET","index.php",true,"user","password")

// trus  ---> asynchronous
// false ---> synchronous
  
//ajax.send()


// XMLHttpRequest 

// onreadyStateChange
// readyState 0 1 2 3 4
// responseText 
// status 200->ok 404->not found
// statusText


// CREATE TABLE questions(
// 	id int PRIMARY KEY AUTO_INCREMENT,
//     question varchar(255),
//     choice1  varchar(255),
//     choice2  varchar(255),
//     choice3  varchar(255),
//     choice4  varchar(255),
//     answer int 
// )











// INSERT INTO `questions`(`question`, `choice1`, `choice2`, `choice3`, `choice4`, `answer`) VALUES
// ('Que signifie PHP?','Personal Home Page Hypertext Preprocessor','Pretext Hypertext Processor','Preprocessor Home Page','Pretext Hypertext Processor',1),
// ('Les fichiers PHP ont l’extension …. ?','.html','.xml','.php','.ph',3),
// ('Un script PHP devrait commencer par ___ ?','<php','<?','<?php','php',3),
// ('Quelle version de PHP a introduit Try/catch Exception?','PHP 4','PHP 5','PHP 5.3','PHP 7.2',2),
// ('Les espaces de noms ou « namespaces » sont disponibles depuis quelle version ?','PHP 4','PHP 5','PHP 5.3','PHP 6',4),
// ('Laquelle des portées suivantes n’est pas prise en charge en PHP?','static','final','public','friendly',4),
// ('Les variables membres d’une classe sont également appelées __?','les attributs','des propriétés','des instances','tous les réponses sont vrais',4),
// ('Les méthodes sont également appelées des___?','fonction membre','instances','objects','constructeurs',1),
// ('Quelle mot-clé empêche une méthode d’être redéfinie par une classe file?','abstract','protected','final','static',3),
// ('Nous pouvons utiliser ___ pour commenter une seule ligne?','/?','#','//','/* */',3)





// function getQuestions(){
//     let aj = new XMLHttpRequest();

//     aj.onreadystatechange = function(){
//       if(this.readyState===4 && this.status===200){
//          questionObjs = JSON.parse(this.responseText);
//          countQst = questionObjs.length ;
//          countRandom = randomCount(countQst);
//          arrTest = questionObjs;       
//          getData();
//         }
//       }
//       aj.open("GET","http://localhost/test/PHP_Knowledge_Test-Frontend/questions.json",true);
//       aj.send();
//     }
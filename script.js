//your code here

let userData ; //creating an object to call the functions

let age =document.querySelector('.age') 
let email=document.getElementsByClassName('email')
let phone = document.getElementsByClassName('phone')

let info =document.getElementsByClassName('info')   // creating a div giving the classname in HTML to display the message
 
let name1 = document.querySelector(".name") // we need to display the name by default
let lastn1 = document.getElementsByClassName("lastn") // we need to display lastname by default
let image = document.getElementsByClassName("pic") // we need to display pic by default

fetch('https://randomuser.me/api/')

 .then(response => response.json() ) 
 .then(result =>{ userData = result;
    name1.innerHTML =result.results[0].name.first + "       " + result.results[0].name.last + "        "+ result.results[0].picture.large 
    // displaying name and last name and image
  
} )
 
 
 function myFunction1() { 
  
    info[0].innerHTML = userData.results[0].dob.age
 }
 function myFunction2() {
    info[0].innerHTML = userData.results[0].email
 }
 function myFunction3() {
    info[0].innerHTML = userData.results[0].phone
 }
 
 function myFunction4(){
   // name1.innerHTML = result.results[1].name.first 
 }

 //console.log(age);

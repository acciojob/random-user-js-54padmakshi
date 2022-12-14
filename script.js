//your code here

 
let name1 = document.querySelector("#name"); // we need to display the name by default
let image = document.querySelector(".pic"); // we need to display pic by default
let headingadd =document.querySelector(".addinfo");
let btngrp =document.querySelector(".btngrp");
let agebtn =document.querySelector('[data-attr="age"]');
let emailbtn =document.querySelector('[data-attr="email"]');
let phonebtn =document.querySelector('[data-attr="phone"]'); 
let additionalInfo = document.querySelector(".additionalinfo");
let getuser =document.querySelector("#getUser");
// 1.fetching the url

const url ="https://randomuser.me/api/";
let user = {}; // taking an empty variable to get all the data

const getData = async ()=>{
   try {
      const result = await fetch(url);
      const data = await result.json();
      user = data.results[0];
      //console.log(user);
   } catch (error) {
      alert (error);
      console.log(error);
    }
}
//getData();

const displayData = async()=>{
   await getData();
   name1.textContent = `Name : ${user.name.title}  ${user.name.first} ${user.name.last}`;
   image.src=user.picture.large;
   btngrp.style.display = "none";
   additionalInfo.textContent = "";
} 
/* const toggleAdditionalInfo =()=>{
   if(btngrp.style.display === "none"){
      btngrp.style.display = "block";
   }else{
      btngrp.style.display = "none";
   }
 }*/
const showAdditionalInfo = (e)=>{
   const att = e.target.getAttribute("data-attr");
   if (att == "age") {
     additionalInfo.textContent = user.dob.age;
   } else if (att == "phone") {
     additionalInfo.textContent = user.phone;
   } else if (att == "email") {
     additionalInfo.textContent = user.email;
   }
}
displayData();

// headingadd.addEventListener("click",toggleAdditionalInfo);
agebtn.addEventListener("click",showAdditionalInfo);
emailbtn.addEventListener("click",showAdditionalInfo);
phonebtn.addEventListener("click",showAdditionalInfo);
getuser.addEventListener("click",displayData);
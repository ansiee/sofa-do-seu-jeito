const registerbtn02 = document.querySelector("#btn-ava02");
const fullEmail = document.querySelector("#emailInp")
const fullSenha = document.querySelector("#senha")
const fullCosenha = document.querySelector("#confSenha")

let spanEmail = document.querySelector("#emailErro");
let spanSenha = document.querySelector("#senhaErro");
let spanCosenha = document.querySelector("#cosenhaErro");

registerbtn02.addEventListener("click", () => {
    if (fullEmail.value.trim() === "" ) {
      (document.querySelector("#emailErro" ).innerHTML = "*Preencha este campo");
   } else {
     emailErro.style.display = "none"
   }
     if(fullSenha.value.trim(true) && fullCosenha.value.trim(true)){
     window.location.href = "../login/login.html";
    }
   
  });
  
  registerbtn02.addEventListener("click", () => {
    if (fullSenha.value.trim() === "" ) {
      return (document.querySelector("#senhaErro").innerHTML = "*Preencha este campo");
   } else {
     senhaErro.style.display = "none"
   }
     if(fullEmail.value.trim(true) && fullCosenha.value.trim(true)){
     window.location.href = "../login/login.html";
    }
   
  });
  
  registerbtn02.addEventListener("click", () => {
    if (fullCosenha.value.trim() === "" ) {
      return (document.querySelector("#cosenhaErro").innerHTML = "*Preencha este campo");
   } else {
     cosenhaErro.style.display = "none"
   }
     if(fullEmail.value.trim(true) && fullSenha.value.trim(true)){
     window.location.href = "../login/login.html";
    } 
   
  });

//   registerbtn02.addEventListener("click", () => {
//   if(fullSenha.value.trim(true) === fullCosenha.value.trim(true)){
//     window.location.href = "./cadastro01.html";
//   } else{
//     return (document.querySelector("#cosenhaErro").innerHTML = "*A senha informada não confere");
//   }
// });
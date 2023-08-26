const registerbtn = document.querySelector("#btn-avanco");
const fullName = document.querySelector("#name");
const fullCpf = document.querySelector("#cpf");
const fullNas = document.querySelector("#datNasc");
const fullTel = document.querySelector("#tel");


let spanName = document.querySelector("#nameErro");
let spanCpf = document.querySelector("#cpfErro");
let spanNas = document.querySelector("#nascErro");
let spanTel = document.querySelector("#telErro");


registerbtn.addEventListener("click", () => {
    if (fullName.value.trim() === "" ) {
    return (document.querySelector("#nameErro" ).innerHTML = "*Preencha este campo");
 } else {
   nameErro.style.display = "none"
 }
   if(fullCpf.value.trim(true) && fullNas.value.trim(true) && fullTel.value.trim(true)){
   window.location.href = "./cadastro02.html";
  }
   
});

registerbtn.addEventListener("click", () => {
    if (fullCpf.value.trim() === ""  ) {
    return (document.querySelector("#cpfErro" ).innerHTML = "*Preencha este campo (Somente números)");
 } else {
   cpfErro.style.display = "none"
 }
   if(fullName.value.trim(true) && fullNas.value.trim(true) && fullTel.value.trim(true)){
   window.location.href = "./cadastro02.html";
  }
   
   
 });

registerbtn.addEventListener("click", () => {
    if (fullNas.value.trim() === ""  ) {
    return (document.querySelector("#nascErro" ).innerHTML = "*Preencha este campo (Somente números)");
 } else {
   nascErro.style.display = "none"
 }
   if(fullName.value.trim(true) && fullCpf.value.trim(true) && fullTel.value.trim(true)){
   window.location.href = "./cadastro02.html";
  }
   
});

registerbtn.addEventListener("click", () => {
    if (fullTel.value.trim() === ""  ) {
    return (document.querySelector("#telErro" ).innerHTML = "*Preencha este campo (Somente números)");
 } else {
   telErro.style.display = "none"
 }
   if(fullName.value.trim(true) && fullCpf.value.trim(true) && fullNas.value.trim(true)){
      window.location.href = "./cadastro02.html";
     }
    
});


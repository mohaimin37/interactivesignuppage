const button = document.getElementById("button");
const anas = document.getElementById("name")
const fullname = document.getElementById('fullname')
const abdullah = document.getElementById("abdullah")
const email = document.getElementById('email')
const password = document.getElementById("password")


button.addEventListener("click",(e)=>{
e.preventDefault()
nme()

})

const nme = ()=>{
   if(fullname.value.length==""){
   anas.innerHTML="name is required"
   }
  else if(!(fullname.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))){
    anas.innerHTML="write full name"
   }

   else{
    anas.innerHTML=""
   }

  if(email.value.length==""){
    abdullah.innerHTML="email is required"
  }
  else if(!(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))){
    abdullah.innerHTML="write correct email"
   }

   else{
    abdullah.innerHTML=""
   }

   
  if(password.value.length==""){
    arsh.innerHTML="password is required"
  }
  else if(!(password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/))){
    arsh.innerHTML="Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 special character[*<#etc]";
   }
   else{
    arsh.innerHTML=""
   }
   
}








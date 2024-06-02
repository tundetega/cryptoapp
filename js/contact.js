


const bars = document.getElementById("bars");
const xmark = document.getElementById("xmark")
const hidden = document.getElementById("nav")
const navbar = document.getElementById("navbar")
const ul = document.getElementById("ul")

const form = document.querySelector("form")
const al = document.getElementById("alert-one")
const text = document.querySelectorAll("input[type='text']")




bars.onclick = function(){
    this.classList.add("change1")
    this.style.opacity = "0"
    xmark.classList.add("change2")
    navbar.style.transition = "all ease 1s 0.5s";
    navbar.style.opacity = "1"
    xmark.style.opacity = "1"
    hidden.style.left = "0"
    hidden.style.transitionDelay = "0s"
    ul.classList.add("slide1");
    ul.classList.remove("slide2")
}


xmark.onclick = function(){
     this.style.opacity = "0"
     hidden.style.transitionDelay = "2.3s"
     hidden.style.left = "-100%"
     bars.style.opacity = "1"
     navbar.style.transition =  "all ease 1.5s ";
     navbar.style.opacity = "0";
     ul.classList.remove("slide1");
     ul.classList.add("slide2")   
}


form.addEventListener("submit",function(e){
    e.preventDefault();
    const reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if(text.value === "" || form.email.value === ""){
        e.preventDefault();
        al.textContent = "fill all fields!"
        al.classList.add("come");
        setTimeout(() => {
            al.classList.remove("come")
        }, 3000);
    } else if(reg.test(form.email.value.trim())){
            console.log("success")
            form.reset()
        }else{
            al.textContent = "email is not correct!"
            al.classList.add("come")
            form.email.style.borderColor = "red"
            setTimeout(() => {
                al.classList.remove("come")
                form.email.style.borderColor = ""
            }, 3000)
        }
})
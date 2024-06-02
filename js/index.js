
const form = document.querySelector("form")
const al = document.getElementById("alert-one")
const text = document.querySelectorAll("input[type='text']")
const buttonOne =document.querySelector("body > article > div.article.py-5 > div > div.tab2 > button")
const buttonTwo = document.querySelector("body > article > div.article.py-5 > div > div.tab1 > button")
const pageOne = document.querySelector("body > article > div.box.d-lg-flex.my-4.justify-content-between")
const pageTwo = document.querySelector("body > article > div.container-fluid.d-none")
const section = document.querySelectorAll("div.section1")
const numbOne = document.querySelector(".count1");
const numbTwo= document.querySelector(".count2")
const numbThree= document.querySelector(".count3")
const numbFour= document.querySelector(".count4")
const bars = document.getElementById("bars");
const xmark = document.getElementById("xmark")
const hidden = document.getElementById("nav")
const navbar = document.getElementById("navbar")
const ul = document.getElementById("ul")

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

buttonOne.addEventListener('click',function(){
    buttonTwo.classList.remove("first");
    this.classList.add("first")
    pageOne.classList.add("d-none");
    pageOne.classList.add("d-lg-none");
    pageTwo.classList.remove("d-none")

})

buttonTwo.addEventListener("click",function(){
    pageTwo.classList.add("d-none")
    this.classList.add("first")
    pageOne.classList.remove("d-none");
    pageOne.classList.remove("d-lg-none");
    buttonOne.classList.remove("first");

})
section.forEach(function(section){
    section.addEventListener("mouseleave",function(){
        this.style.animation = "twirl 0.5s ease-in forwards reverse";
    })
    section.addEventListener("animationend",function(){
        this.style.animation = "";
    })
})


 let num = [1000,1000,500,1500]

function down(num,no,it,clear){
    num[it]--
    if(num[it] === no){
        clearInterval(clear)
    }
}
function up(num,no,it,clear){
    num[it]+=10
    if(num[it] === no){
        clearInterval(clear)
    }
}
    
let int = setInterval(function(){
    down(num,10,0,int)
    numbOne.innerHTML = `<h3>${num[0].toLocaleString()}+</h3>Years of Experience`;
},2)
 let int2 = setInterval(()=>{
    up(num,17390,1,int2)
      numbTwo.innerHTML = `<h3>${num[1].toLocaleString()}+</h3> Positive Reviews`;
 },0.1)

 let int3 = setInterval(()=>{
    down(num,96,2,int3)
    numbThree.innerHTML = `<h3>${num[2].toLocaleString()}% </h3> Chance of Recovery`
 },10)
 let int4 = setInterval(function(){
    up(num,23600,3,int4)
    numbFour.innerHTML = `<h3>${num[3].toLocaleString()}+</h3> Clients Worldwide`
},0.1)

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

const article = document.querySelector("article");

const observer = new IntersectionObserver(entries =>{
 entries[0].target.classList.toggle('show',entries[0].isIntersecting)
 if(entries[0].isIntersecting) {observer.unobserve(entries[0].target)
 }
},{
    threshold: 0.2,
})

observer.observe(article);






const bars = document.getElementById("bars");
const xmark = document.getElementById("xmark")
const hidden = document.getElementById("nav")
const navbar = document.getElementById("navbar")
const ul = document.getElementById("ul")




const numbOne = document.querySelector(".count1");
const numbTwo= document.querySelector(".count2")
const numbThree= document.querySelector(".count3")
const numbFour= document.querySelector(".count4")





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
const article = document.querySelector("article");
const observer = new IntersectionObserver(entries =>{
    console.log(entries[0])
 entries[0].target.classList.toggle('show',entries[0].isIntersecting)
 if(entries[0].isIntersecting) {observer.unobserve(entries[0].target)
    console.log(entries[0].target)
 }
},{
    threshold: 0.4,
})

observer.observe(article)
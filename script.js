const text = "For Someone Very Special ❤️";
let index = 0;

function typeEffect(){

if(index < text.length){

document.getElementById("typing").innerHTML += text.charAt(index);

index++;

setTimeout(typeEffect,80);

}

}

typeEffect();


function startStory(){

let music = document.getElementById("bgMusic")
music.play()

setTimeout(function(){

document.querySelector(".intro").style.display="none"
document.getElementById("timeline").style.display="block"

showTimeline()

startLoveCounter()

},5000)

}

function createHeart(){

const heart=document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"

heart.style.animationDuration=(Math.random()*3+2)+"s"

document.querySelector(".hearts").appendChild(heart)

setTimeout(()=>{
heart.remove()
},5000)

}

setInterval(createHeart,300)

const items = document.querySelectorAll(".timeline-item")

function showTimeline(){

const trigger = window.innerHeight * 0.85

items.forEach(item =>{

const top = item.getBoundingClientRect().top

if(top < trigger){

item.style.opacity = 1
item.style.transform = "translateY(0)"

}

})

}

window.addEventListener("scroll", showTimeline)

const canvas = document.getElementById("loveConstellation")

if(canvas){

const ctx = canvas.getContext("2d")

canvas.width = 260
canvas.height = 220

let stars = []

for(let i=0;i<25;i++){

stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.3,
vy:(Math.random()-0.5)*0.3
})

}

function animateStars(){

ctx.clearRect(0,0,canvas.width,canvas.height)

for(let i=0;i<stars.length;i++){

let s = stars[i]

s.x += s.vx
s.y += s.vy

if(s.x<0||s.x>canvas.width) s.vx*=-1
if(s.y<0||s.y>canvas.height) s.vy*=-1

ctx.beginPath()
ctx.arc(s.x,s.y,2,0,Math.PI*2)
ctx.fillStyle="#ff4b6e"
ctx.fill()

}

requestAnimationFrame(animateStars)

}

animateStars()

}

const heart = document.querySelector(".heart-3d-wrapper")

window.addEventListener("scroll",()=>{

const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50

if(bottom){

heart.classList.add("explode")

}

})

function updateLoveTime(){

const startDate = new Date("2023-06-10"); // GANTI tanggal jadian

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / (1000*60*60*24));

const hours = Math.floor((diff/(1000*60*60))%24);

document.getElementById("loveTime").innerHTML =
days + " days<br>" + hours + " hours";

}

setInterval(updateLoveTime,1000);

updateLoveTime();

function animateCounter(id, target, duration){

let start = 0
let startTime = null

function update(timestamp){

if(!startTime) startTime = timestamp

let progress = timestamp - startTime

let value = Math.min(Math.floor(progress / duration * target), target)

document.getElementById(id).innerText = value

if(value < target){
requestAnimationFrame(update)
}

}

requestAnimationFrame(update)

}

function startLoveCounter(){

const startDate = new Date("2024-10-25") // GANTI tanggal jadian

function updateTime(){

const now = new Date()

const diff = now - startDate

const days = Math.floor(diff / (1000*60*60*24))
const hours = Math.floor((diff/(1000*60*60))%24)
const minutes = Math.floor((diff/(1000*60))%60)

updateFlip("days", days)
updateFlip("hours", hours)
updateFlip("minutes", minutes)

}

updateTime()

setInterval(updateTime, 1000)

}

function updateFlip(id, value){

const el = document.getElementById(id)

if(el.innerText != value){

el.innerText = value

el.classList.add("flip")

setTimeout(()=>{
el.classList.remove("flip")
},600)

}

}

function checkLoveKey(){

const correctDate = "25-10-2024" // ganti tanggal jadian
const input = document.getElementById("loveKey").value

if(input === correctDate){

const portal = document.getElementById("portal")


/* animasi portal */
portal.classList.add("portal-open")
startWarp()

/* setelah portal muncul */
setTimeout(()=>{

/* sembunyikan form unlock */
document.querySelector(".love-key").style.display = "none"

/* tampilkan teks happy birthday */
document.getElementById("typing").innerHTML =
"Happy Birthday <br> The Most Beautiful Part of My Life"

},1200)

/* lanjut ke Our Story */

setTimeout(()=>{

startStory()

},3000)

}else{

document.getElementById("keyMessage").innerHTML =
"That doesn't seem to be the day our story began"

}

}

window.addEventListener("load", function(){

const canvasPortal = document.getElementById("galaxyPortal")
const ctxPortal = canvasPortal.getContext("2d")

canvasPortal.width = 500
canvasPortal.height = 500

let portalStars = []

for(let i=0;i<120;i++){

portalStars.push({
angle:Math.random()*Math.PI*2,
radius:Math.random()*200,
speed:0.002 + Math.random()*0.003
})

}

function animatePortal(){

ctxPortal.clearRect(0,0,canvasPortal.width,canvasPortal.height)

portalStars.forEach(s=>{

s.angle += s.speed

const x = canvasPortal.width/2 + Math.cos(s.angle)*s.radius
const y = canvasPortal.height/2 + Math.sin(s.angle)*s.radius

ctxPortal.beginPath()
ctxPortal.arc(x,y,2,0,Math.PI*2)
ctxPortal.fillStyle="#ff4b6e"
ctxPortal.fill()

})

requestAnimationFrame(animatePortal)

}

animatePortal()

})

function startWarp(){

const warp = document.getElementById("warp")

warp.classList.add("active")

setInterval(()=>{

const star = document.createElement("div")

star.classList.add("star")

star.style.left = Math.random()*100 + "vw"

star.style.animationDuration = (Math.random()*1+0.5)+"s"

warp.appendChild(star)

setTimeout(()=>{
star.remove()
},1500)

},50)

}
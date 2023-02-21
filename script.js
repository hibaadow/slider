const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}































/*let messages = document.getElementById("messages")
let text = document.getElementById("text")
let button = document.getElementById(button)

button.addEventListener("click", function(){
    let newMessages = document.createElement("li")
    newMessages.innerHTML = text.value;
    messages.appendChild(newMessages)
    text.value = "";

})*/




/*let messages = document.getElementById("messages")

let text = document.getElementById("text")

let button = document.getElementById("button")


button.addEventListener("click" , function(){

let newMessages = document.createElement("li");

newMessages.innerHTML = text.value;

messages.appendChild(newMessages);
localStorage.name = newMessages


text.value = "";

});*/






/*while(respons != password){
    respons = window.prompt("Enter the password")
}
alert("you got it!")*/

















/*let meseages = document.getElementById("messages")
let text = document.getElementById("text")
let button = document.getElementById("button")


button.addEventListener("click", function(){
    let newMessaged = document.createElement("li")
    newMessaged.innerHTML = text.value;
    meseages.appendChild(newMessaged);
    value = ""
    localStorage.name = text.value;
});
document.write(localStorage.name);*/








/*let questions =[
    {prompt: "what colors are apples?\n(a) red/green\n\ (b) blue?",
    answer: "a"

},
{
    prompt: "what color is banana?\n(a) blue\n\ (b)yellow",
    answer: "b"
},
{
    prompt:"what is my fav monster drinck?\n(a)pink\n\ (b) blue",
    answer: "b"
},
]
let score = 0;
for(let i = 0; i< questions.length; i++){
    let respons = window.prompt(questions[i].prompt)
    if(respons == questions[i].answer){
        score++;
        alert("you got it!");
    }else{
      alert("no try again");
    }
};
alert("you got" + score + "/" + questions.length);*/





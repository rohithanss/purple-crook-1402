import { navbar } from "../components/tlnavbar.js";
import {slider} from "../components/tlsection.js"
import {button4} from "../components/tlsection.js"
let nav = document.getElementById("navbar")
nav.innerHTML = navbar()

let buttn4 = document.getElementById("button4")
buttn4.innerHTML = button4()

let fa_bars = document.querySelector(".fa-bars")
fa_bars.onclick = ()=>{
  nav.style.marginBottom = "100px"
}

//slider---------------------------------------------
let slid  = document.getElementById("slider")
slid.innerHTML = slider()


let prev = document.querySelector(".prev")
let next  = document.querySelector(".next")

let slideIndex = 1;
showSlides(slideIndex);

prev.onclick = ()=>{
    plusSlides(-1)
}

next.onclick = ()=>{
    plusSlides(1)
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

let dot1 = document.querySelector(".dot1")
let dot2 = document.querySelector(".dot2")
let dot3 = document.querySelector(".dot3")
let dot4 = document.querySelector(".dot4")
let dot5 = document.querySelector(".dot5")

dot1.onclick = ()=>{
    currentSlide(1)
}
dot2.onclick = ()=>{
    currentSlide(2)
}
dot3.onclick = ()=>{
    currentSlide(3)
}
dot4.onclick = ()=>{
    currentSlide(4)
}
dot5.onclick = ()=>{
    currentSlide(5)
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//-----------------------------------------------

// Previous viewed------------------------
const test_data = async ()=>{
  const response  = await fetch("http://localhost:1010/admin/monu")
  let refine_data = await response.json()
  // {Lab_Test} = refine_data
  apendAll(refine_data.Lab_Tests[1].All_Test)
  apendHealth(refine_data.Lab_Tests[0].Health_Packages)
  apend(refine_data.Lab_Tests[1].All_Test)
  console.log(refine_data.Lab_Tests)
}
test_data()


const apend = (data)=>{
let browsed = document.getElementById("browsed")
browsed.textContent = null
for(let i=8; i<11; i++){
let div = document.createElement("div")
div.onclick = ()=>{
  localStorage.setItem("Lab_Test",JSON.stringify(data[i]))
}
div.setAttribute("class","browsedCard")
let img = document.createElement("img")
let h2  = document.createElement("h3")
let p1 = document.createElement("p")
let p2 = document.createElement("p")
let span1 = document.createElement("span")
let span2 = document.createElement("span")
img.src = data[i].image
h2.textContent = data[i].Test_name
p1.textContent = "Available at 1 certified lab"
span1.textContent = data[i].price
span2.textContent = "Onwards"
p2.append(span1,span2)
div.append(img,h2,p1,p2)
browsed.append(div)

}

}
// -------------------------------

const apendAll = (data)=>{
  let f_booked = document.getElementById("f_book")
  // f_booked.textContent = null
  data.forEach((el)=>{
    let div = document.createElement("div")
    div.setAttribute("class","f_Card")
    div.onclick = ()=>{
      localStorage.setItem("Lab_Test",JSON.stringify(el))
    }
    let img = document.createElement("img")
    let h2  = document.createElement("h3")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let btn = document.createElement("button")
    btn.innerHTML = `Book Now >`; 
    img.src = el.image
    h2.textContent = el.Test_name
    p1.textContent = "Available at 1 certified lab"
  p2.textContent = el.price
  let div2 = document.createElement("div")
  div2.append(p2,btn)
  div.append(img,h2,p1,div2)
  f_booked.append(div)
  })
  }


  
const apendHealth = (data)=>{
  let Health = document.getElementById("Health")
  // Health.textContent = null
  data.forEach((el)=>{
    let div = document.createElement("div")
    div.setAttribute("class","f_Card")
    div.onclick = ()=>{
      localStorage.setItem("Lab_Test",JSON.stringify(el))
    }
    let img = document.createElement("img")
    let h2  = document.createElement("h3")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let btn = document.createElement("button")
    // btn.innerHTML = `onwards`;
    img.src = el.image
    h2.textContent = el.name
    p1.textContent = "Available at 1 certified lab"
  p2.textContent = el.price + "  Onwards"
  let div2 = document.createElement("div")
  div2.append(p2,btn)
  div.append(img,h2,p1,p2)
  Health.append(div)
  })
  }


  let a1 = document.querySelector('.a1')
  a1.onclick = ()=>{
  let b1= document.querySelector(".b1")
  b1.style.display = "block"
  }
  a1.ondblclick = ()=>{
    let b1= document.querySelector('.b1')
    b1.style.display = "none"
  }

  
  
  let a2 = document.querySelector('.a2')
  a2.onclick = ()=>{
  let b2= document.querySelector(".b2")
  b2.style.display = "block"
  }
  a2.ondblclick = ()=>{
    let b2= document.querySelector('.b2')
    b2.style.display = "none"
  }

  
  let a3 = document.querySelector('.a3')
  a3.onclick = ()=>{
  let b3= document.querySelector(".b3")
  b3.style.display = "block"
  }
  a3.ondblclick = ()=>{
    let b3= document.querySelector('.b3')
    b3.style.display = "none"
  }

  
  let a4 = document.querySelector('.a4')
  a4.onclick = ()=>{
  let b4= document.querySelector(".b4")
  b4.style.display = "block"
  }
  a4.ondblclick = ()=>{
    let b4= document.querySelector('.b4')
    b4.style.display = "none"
  }

  
  let a5 = document.querySelector('.a5')
  a5.onclick = ()=>{
  let b5= document.querySelector(".b5")
  b5.style.display = "block"
  }
  a5.ondblclick = ()=>{
    let b5= document.querySelector('.b5')
    b5.style.display = "none"
  }

  
  let a6 = document.querySelector('.a6')
  a6.onclick = ()=>{
  let b6= document.querySelector(".b6")
  b6.style.display = "block"
  }
  a6.ondblclick = ()=>{
    let b6= document.querySelector('.b6')
    b6.style.display = "none"
  }

  
  let a7 = document.querySelector('.a7')
  a7.onclick = ()=>{
  let b7= document.querySelector(".b7")
  b7.style.display = "block"
  }
  a7.ondblclick = ()=>{
    let b7= document.querySelector('.b7')
    b7.style.display = "none"
  }

  
  let a8 = document.querySelector('.a8')
  a8.onclick = ()=>{
  let b8= document.querySelector(".b8")
  b8.style.display = "block"
  }
  a8.ondblclick = ()=>{
    let b8= document.querySelector('.b8')
    b8.style.display = "none"
  }

  
  let a9 = document.querySelector('.a9')
  a9.onclick = ()=>{
  let b9= document.querySelector(".b9")
  b9.style.display = "block"
  }
  a9.ondblclick = ()=>{
    let b9= document.querySelector('.b9')
    b9.style.display = "none"
  }

  
 
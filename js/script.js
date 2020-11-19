document.addEventListener("DOMContentLoaded", () => {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    animationTimingFunc: "ease-in-out",
    gap: 100,
    perView: 3
  }).mount();
});

var obj = [
  {
    title:"Bali",
    description:"L'Île des Dieux, plus connue sous le nom de Bali, est une île "+
    "indonésienne située entre Java et Lombok. Séparée de ces deux "+
    "dernières par le détroit de Bali à l’ouest et le détroit de "+
    "Lombok à l’est, sa superficie totale est de 5.637 km2. Bali est "+
    "la destination touristique la plus prisée et la plus connue d’Indonésie",
    background:"./img/bali-big.jpg"
  },
  {
    title:"Mexico",
    description:"Le Mexique est une terre d'extrêmes, avec de hautes montagnes "+
    "et de profonds canyons au centre du pays, des déserts au nord et "+
    "des forêts tropicales denses au sud et à l'est. ",
    background:"./img/mexico-big.jpg"
  },
  {
    title:"Thailand",
    description:"La Thaïlande est un pays d'Asie du Sud-Est. Elle est réputée pour "+
    "ses plages tropicales, ses palais royaux opulents, ses ruines "+
    "anciennes et ses temples ornés présentant des statues de Bouddha. ",
    background:"./img/thailand-big.jpg"
  }      
];

var currentIndex = 0;

function clickOnController(e){    
  if(e.target.id == 'next'){
    currentIndex++;
    if(currentIndex == obj.length) currentIndex = 0;
    display();
  } else {
    currentIndex--;
    if(currentIndex < 0) currentIndex = 2;
    display();
  }
}

function display(){  
  var title = document.querySelector('#title h4');
  var description = document.querySelector('#description p');

  title.innerHTML = obj[currentIndex].title;
  description.innerHTML = obj[currentIndex].description;
  document.querySelector('body').style.background = 'url('+(obj[currentIndex].background)+')center center fixed';  
}

document.querySelector('.controls').addEventListener('click',clickOnController)
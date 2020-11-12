
const allImg = document.querySelectorAll('.visible-pannel img');

//console.log(allImg);

allImg.forEach(element => {
  element.addEventListener('click',function(){
    console.log(this.src);
    //recuperer les parents de bouttons pour connaire l'emplacement de notre image
    //console.log(this.parentNode.parentNode.childNodes[3].scrollHeight); //hauteur de notre text
    const currentfq = this.parentNode.parentNode.childNodes[3];
    const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

    if(this.src.includes('haut')){
      this.src = 'images/arrow.png';
      //issue de la librairie d'animation js
      gsap.to(currentfq,{duration:0.2, height: height + 12, opacity : 1,
      padding: '20px 15px'})

    } else if(this.src.includes('arrow')){
      this.src = 'images/haut.png';
      gsap.to(currentfq,{duration:0.2, height: 0, opacity : 0,
      padding: '0px 15px'})
    }
    

  })
})

/*
class Faq {
  constructor() {
    this.questions = document.querySelectorAll('visible-pannel');
    this.init()
  }

  init(){
    // on crée l'evenement pour chaque article
    this.questions.forEach((element) =>{
      element.addEventListener(
        'click',
        ()=>{
          // on bascule avec ou sans current
          element.classList.toggle('current')

          // on gère la fermeture des autres elements ouverts.
          this.questions.forEach((element2) =>{
              if(element2.classList.contains('current') && element !== element2) {
                element2.classList.remove('current')
              }
          })
        }
      )
    });
  }
}

const faq = new Faq();
*/

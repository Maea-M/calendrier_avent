import quotes from "./quote.js"

const boxes =  document.querySelectorAll(".js-box")
const today =  new Date (Date.now())
const dayNumber = today.getDate()

/*Au clique sur la boite, tu as telle ou telle fonction qui s'active*/
boxes.forEach(box =>{
    box.addEventListener('click', ()=>{
        const boxNumber = parseInt(box.textContent)
        if (boxNumber <= dayNumber){
            playSong()
            showImage(box)
            openModal(boxNumber)
        }
    })
})

/* musique d'ouverture*/
const url =  "sass/assets/css/audios/opening-song.mp3"
const song = new Audio (url)
const playSong = () => {
    song.pause()
    song.currentTime = 0
    song.play()
}

/*Afficher l'image*/
const showImage = (boxToHide) =>{
    boxToHide.classList.add('hide')
}

/*Ajouter un citation*/
const modal = document.querySelector('.js-modal')
const quote = modal.querySelector('.js-quote')
const author = modal.querySelector('.js-author')
const openModal = (index) => {
    quote.textContent = quotes[index].quote
    author.textContent = quotes[index].author
    modal.showModal()
}
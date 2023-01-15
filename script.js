const paragraph = document.getElementById("paragraph");
paragraph.remove();

//SCRIPT UNTUK ACCORDION
const accordion = document.getElementsByClassName("accordion");
    for(let i = 0; i < accordion.length; i++){
        accordion[i].addEventListener("click", function (){
            const panel = this.nextElementSibling;

            if(panel.style.display === "block"){
                panel.style.display = "none";
            }
            else{
                panel.style.display = "block";
            }
        });
    }

//SCRIPT UNTUK SLIDER
let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
}

const showSlide = (n) => {
  const slides = document.getElementsByClassName("lesson");
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

showSlide(slideIndex);

//SCRIPT UNTUK DESKRIPSI
const modal = document.getElementById("myModal");
const openButton = document.getElementById("openModalButton");
const closeIcon = document.getElementById("closeModalIcon");

//ketika tombol openButton ditekan
openButton.addEventListener('click', () =>{
  modal.style.display = "block";
});

//ketika tombol closeButton ditekan
closeIcon.addEventListener('click', () => {
  modal.style.display = "none";
});

//SCRIPT NOTIFIKASI
const calculate = () =>{
  const p = document.getElementById('inputan').value;
  let hasil;
  const q = document.getElementById('result');
  
  if(p === ''){
      hasil = "Subject Tidak Boleh Kosong!!!";
      q.style.color = "red";
  }
  else{
      hasil = "";
  }

  q.innerText = hasil;

}
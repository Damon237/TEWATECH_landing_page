const navLinks=document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton=document.querySelector("#menu-open-button");
const menuCloseButton=document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",()=>{
    
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click",()=> menuOpenButton.click());

navLinks.forEach(link=>link.addEventListener("click",()=> menuOpenButton.click()));
// Initialize Swiper 
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0:{
        slidesPerView: 1,
    },
    768:{
        slidesPerView: 2,
    },
    1024:{
        slidesPerView: 3,
    }
  }
});


// for order now button
// ==== MODAL FUNCTIONALITY ====
const modal = document.getElementById("orderModal");
const orderBtn = document.querySelector(".order-now");
const closeBtn = document.querySelector(".close-btn");

// open modal
orderBtn.onclick = () => modal.style.display = "block";

// close modal
closeBtn.onclick = () => modal.style.display = "none";

// close modal if click outside
window.onclick = (e) => { if(e.target === modal) modal.style.display = "none"; };

// ==== EMAILJS INTEGRATION ====
(function() {
  emailjs.init("wEzZ8OvOkHfic2P5G");
})();

document.getElementById("order-form").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("service_707uv52", "template_t96qggr", this)
    .then(() => {
      // Success animation
      this.querySelector("button").textContent = "Sent!";
      this.querySelector("button").style.backgroundColor = "#febf4e";
      this.querySelector("button").style.color = "#254169";

      setTimeout(() => {
        this.reset();
        modal.style.display = "none";
        this.querySelector("button").textContent = "Submit Order";
        this.querySelector("button").style.backgroundColor = "#254169";
        this.querySelector("button").style.color = "#febf4e";
      }, 2000);

    }, (error) => {
      alert("Failed to send order. Please try again.");
      console.log(error);
    });
});

// For contact us form
// Initialize EmailJS
(function(){
  emailjs.init("wEzZ8OvOkHfic2P5G"); // replace with your EmailJS public key
})();

// Contact form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_707uv52", "template_f6wk4i6", this)
    .then(() => {
      // Success animation
      const btn = contactForm.querySelector("button");
      btn.textContent = "Sent!";
      btn.style.backgroundColor = "#febf4e";
      btn.style.color = "#254169";

      setTimeout(() => {
        contactForm.reset();
        btn.textContent = "Submit";
        btn.style.backgroundColor = "#254169";
        btn.style.color = "#febf4e";
      }, 2000);

    }, (error) => {
      alert("Failed to send your message. Please try again.");
      console.log(error);
    });
});
document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const destinatario = "martins.cjhon@gmail.com";
  const assunto = encodeURIComponent("Novo contato pelo site");
  const corpo = encodeURIComponent(
    `Nome: ${nome}
    E-mail: ${email}
    Mensagem: ${mensagem}`,
  );

  window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
});

function changeHeaderScroll() {
  const header = document.querySelector("#header");
  header.classList.toggle("scroll", window.scrollY >= 100);
}

const scroll = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 850,
  reset: true,
});

scroll.reveal(
  `#home .title, 
    #home .content,

    #about .about_image,

    #service .wrapper,

    #vantagens .container,

    #galeria .carousel
    `,
  { interval: 80 },
);

//

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
});

nav.addEventListener("click", () => {
  nav.classList.remove("active");
  toggle.classList.toggle("active");
});
//
document.getElementById("ano").textContent = new Date().getFullYear();

//
document.addEventListener("DOMContentLoaded", function () {
  // Galeria
  new Splide(".splide-galeria", {
    perPage: 4,
    gap: "2rem",
    breakpoints: {
      1024: { perPage: 2 },
      640: { perPage: 1 },
    },
  }).mount();

  // Depoimentos
  new Splide(".splide-depoimentos", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: true,
  }).mount();
});
//

window.addEventListener("scroll", function () {
  changeHeaderScroll();
});

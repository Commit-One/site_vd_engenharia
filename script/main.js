function changeHeaderScroll() {
    const header = document.querySelector('#header')
    header.classList.toggle('scroll', window.scrollY >= 100)
}
// 
// document.getElementById("leadForm").addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const nome = document.getElementById("nome").value;
//     const sobrenome = nome.split(" ")[1];
//     const email = document.getElementById("email").value;
//     const mensagem = document.getElementById("mensagem").value;

//     const payload = {
//         formProperties: {
//             formName: "Mensagens dos Leads",
//             formId: "comp-mjdhuyk61"
//         },
//         emailConfig: {
//             sendToOwnerAndEmails: {
//                 emailIds: []
//             }
//         },
//         viewMode: "Site",
//         fields: [
//             {
//                 fieldId: "comp-mjdhuyk8",
//                 label: "Seu Nome",
//                 firstName: { value: nome }
//             },
//             {
//                 fieldId: "comp-mjdhuyka1",
//                 label: "Sobrenome",
//                 lastName: { value: sobrenome }
//             },
//             {
//                 fieldId: "comp-mjdhuykb2",
//                 label: "Email",
//                 email: { value: email, tag: "main" }
//             },
//             {
//                 fieldId: "comp-mjdhuykd1",
//                 label: "Escreva sua mensagem",
//                 additional: { value: { string: mensagem } }
//             }
//         ],
//         labelKeys: [
//             "contacts.contacted-me",
//             "custom.mensagens-dos-leads"
//         ]
//     };

//     try {
//         const response = await fetch("https://www.vdengenhariarj.com.br/_api/wix-forms/v1/submit-form", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(payload)
//         });

//         if (response.ok) {
//             alert("Mensagem enviada com sucesso!");
//             document.getElementById("leadForm").reset();
//         } else {
//             alert("Erro ao enviar mensagem.");
//         }

//     } catch (error) {
//         alert("Erro na requisição.");
//     }
// });

// 
const scroll = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 850,
    reset: true
})

scroll.reveal(
    `#home .title, 
    #home .content,

    #about .about_image,

    #service .wrapper,

    #vantagens .container,

    #galeria .carousel
    `,
    { interval: 80 }
)

// 

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
});

nav.addEventListener('click', () => {
    nav.classList.remove('active');
    toggle.classList.toggle('active');
});
//
document.getElementById("ano").textContent = new Date().getFullYear();

// 
document.addEventListener('DOMContentLoaded', function () {

    // Galeria
    new Splide('.splide-galeria', {
        perPage: 4,
        gap: '2rem',
        breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 }
        }
    }).mount();

    // Depoimentos
    new Splide('.splide-depoimentos', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 3000,
        arrows: true,
        pagination: true,
    }).mount();

});
//   

window.addEventListener('scroll', function () {
    changeHeaderScroll()
})

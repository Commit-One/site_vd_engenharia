function changeHeaderScroll() {
    const header = document.querySelector('#header')
    header.classList.toggle('scroll', window.scrollY >= 100)
}

// 
const btnPrev = document.querySelector(".carousel-control-prev");
const btnNext = document.querySelector(".carousel-control-next");
const valueElement = document.getElementById("value_inicial");

let value = 1;

valueElement.textContent = value;

btnPrev.addEventListener("click", function () {
    value--;

    if (value < 1 || value == 0) value = 1;

    valueElement.textContent = value;
});

btnNext.addEventListener("click", function () {
    value++;
    valueElement.textContent = value;
});

const btnMore = document.getElementById("more");
const hiddenItems = document.querySelectorAll("#depoimentos .hidden");

let expanded = false;

btnMore.addEventListener("click", function () {

    hiddenItems.forEach(item => {
        item.classList.toggle("hidden");
    });

    expanded = !expanded;
    btnMore.textContent = expanded ? "Ver menos" : "Ver mais";

    document.getElementById("depoimentos").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// 
document.getElementById("leadForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const sobrenome = nome.split(" ")[1];
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const payload = {
        formProperties: {
            formName: "Mensagens dos Leads",
            formId: "comp-mjdhuyk61"
        },
        emailConfig: {
            sendToOwnerAndEmails: {
                emailIds: []
            }
        },
        viewMode: "Site",
        fields: [
            {
                fieldId: "comp-mjdhuyk8",
                label: "Seu Nome",
                firstName: { value: nome }
            },
            {
                fieldId: "comp-mjdhuyka1",
                label: "Sobrenome",
                lastName: { value: sobrenome }
            },
            {
                fieldId: "comp-mjdhuykb2",
                label: "Email",
                email: { value: email, tag: "main" }
            },
            {
                fieldId: "comp-mjdhuykd1",
                label: "Escreva sua mensagem",
                additional: { value: { string: mensagem } }
            }
        ],
        labelKeys: [
            "contacts.contacted-me",
            "custom.mensagens-dos-leads"
        ]
    };

    try {
        const response = await fetch("https://www.vdengenhariarj.com.br/_api/wix-forms/v1/submit-form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("Mensagem enviada com sucesso!");
            document.getElementById("leadForm").reset();
        } else {
            alert("Erro ao enviar mensagem.");
        }

    } catch (error) {
        alert("Erro na requisição.");
    }
});

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

window.addEventListener('scroll', function () {
    changeHeaderScroll()
})

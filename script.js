//Lógica para o menu responsivo
const responsiveMenu = document.querySelector('.navigation-responsive');

const openMenu = document.querySelector('#open-menu');
openMenu.addEventListener('click', () => {
    responsiveMenu.style.left = "0";
})

const closeMenu = document.querySelector('#close-menu');
closeMenu.addEventListener('click', () => {
    responsiveMenu.style.left = "-250px";
})

//Lógica para a janela modal de cada tecnologia
const techs = [
    {
        name: "HTML",
        icon: "./img/html.svg",
        description: "HTML (Hypertext Markup Language) é uma linguagem de marcação para criar páginas da web. É usada para estruturar o conteúdo e definir o layout de uma página, incluindo texto, imagens, vídeos e outros elementos."
    },
    {
        name: "CSS",
        icon: "./img/css.svg",
        description: "CSS (Cascading Style Sheets) é uma linguagem usada para estilizar a aparência de páginas da web. Com CSS, você pode controlar o layout, as cores, as fontes e outros aspectos visuais de um site."
    },
    {
        name: "JavaScript",
        icon: "./img/javascript.svg",
        description: "JavaScript é uma linguagem de programação de alto nível usada principalmente para criar interatividade em páginas da web. Com JavaScript, você pode adicionar comportamentos dinâmicos e reativos a um site."
    },
    {
        name: "React.js",
        icon: "./img/reactjs.svg",
        description: "React.js é uma biblioteca JavaScript de código aberto usada para construir interfaces de usuário (UI) em páginas da web. Ele permite criar componentes reutilizáveis e construir interfaces de usuário de forma declarativa."
    },
    {
        name: "Bootstrap",
        icon: "./img/bootstrap.svg",
        description: "Bootstrap é um framework front-end de código aberto usado para desenvolver sites e aplicativos da web responsivos e móveis. Ele fornece uma coleção de componentes e estilos pré-construídos que facilitam a criação de interfaces atraentes e consistentes."
    },
    {
        name: "Sass",
        icon: "./img/sass.svg",
        description: "Sass é um pré-processador CSS que estende a sintaxe do CSS com características como variáveis, aninhamento de regras e mixins. Ele ajuda a tornar o código CSS mais modular e fácil de manter."
    },
    {
        name: "Git",
        icon: "./img/git.svg",
        description: "Git é um sistema de controle de versão distribuído usado para rastrear as alterações no código-fonte durante o desenvolvimento de software. Ele permite que várias pessoas colaborem em projetos de forma eficiente e controlada."
    },
    {
        name: "SQL",
        icon: "./img/database.svg",
        description: "SQL (Structured Query Language) é uma linguagem de programação padrão usada para gerenciar e manipular bancos de dados relacionais. Com SQL, você pode consultar, atualizar e gerenciar dados armazenados em bancos de dados."
    },
];

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('#close-modal');
const modalTechIcon = document.querySelector('#tech-icon');
const modalTechName = document.querySelector('#tech-name');
const modalTechDescription = document.querySelector('#tech-description');

const techCards = document.querySelectorAll('.card-tech');

techCards.forEach((card, index) => card.addEventListener('click', () => {
    const selectedTech = techs[index];
    modalTechIcon.setAttribute('src', selectedTech.icon);
    modalTechName.textContent = selectedTech.name;
    modalTechDescription.textContent = selectedTech.description;
    modal.style.display = 'flex'
}));

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
})

//Lógica para alterar o estilo da Header conforme o scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style.backgroundColor = "#1D1D31"
    } else {
        header.style.backgroundColor = "#13131F"
    }
});

//
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('init-hidden-off');
        }
    });
}, {
    threshold: [0.5] // Ajuste o threshold conforme necessário
});

document.querySelectorAll('.init-hidden').forEach(element => {
    observer.observe(element);
});

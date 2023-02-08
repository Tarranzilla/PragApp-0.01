const statingLocation = window.location.pathname;

if (statingLocation == "/") {
    renderHome();
    console.log("Home Rendered ...");
}
if (statingLocation == "/about") {
    renderAbout();
    console.log("About Rendered ...");
}
if (statingLocation == "/contact") {
    renderContact();
    console.log("Contact Rendered ...");
}

// Quando Clicam nos Botoes
document.getElementById("home_btn").addEventListener("click", () => {
    history.pushState({ page: "home" }, null, "/");
    renderHome();
    console.log("Home Button Pressed");
});

document.getElementById("sobre_btn").addEventListener("click", () => {
    history.pushState({ page: "about" }, null, "about");
    renderAbout();
    console.log("About Button Pressed");
});

document.getElementById("contato_btn").addEventListener("click", () => {
    history.pushState({ page: "contact" }, null, "contact");
    renderContact();
    console.log("Contact Button Pressed");
});

// Quando Clicam no Botao Voltar e Avancar do Navegador
window.onpopstate = (event) => {
    if (event.state.page == "home") {
        renderHome();
    }
    if (event.state.page == "about") {
        renderAbout();
    }
    if (event.state.page == "contact") {
        renderContact();
    }
};

// Funcoes para Renderizar o Conteudo
appcontent = document.getElementById("app_content");
console.log(appcontent);

function renderHome() {
    console.log("Rendering Home...");
    document.getElementById("app_content").innerHTML = `
        <h1>Home</h1>
        <h2>This is the homepage</h2>
        <p>Esta é a página principal do PragApp.</p>
    `;
    console.log("Home Rendered ...");
}

function renderAbout() {
    document.getElementById("app_content").innerHTML = `
        <h1>About</h1>
        <h2>This is the about page</h2>
        <p>Nós somos mágicos e desginers.</p>
    `;
}

function renderContact() {
    document.getElementById("app_content").innerHTML = `
        <h1>Contact</h1>
        <h2>This is the contact page</h2>
        <p>Entre em Contato através de falapragmata@gmail.com.</p>
    `;
}


const $html = document.querySelector('html');
const $toggle = document.querySelector('#toggler');
let theme = "light";
let head = document.querySelector('head');
let body = document.querySelector('body');

favicon();
toHome();
changeTheme();

$toggle.addEventListener('change', function(){
    if(checkTheme() == "light"){
        localStorage.setItem('theme-preference', 'dark');
        changeTheme();
    }else if(checkTheme() == "dark"){
        localStorage.setItem('theme-preference', 'light');
        changeTheme();
    }
})

document.querySelectorAll('.skill').forEach((skill) => {
    // Dois laços de repetição pegam cada "skill" e cada "row" da página skils.html
    //se a row tiver a classe "stack-hidden" essa classe é removida para que a div fique visível
    // caso contrário ela é adicionada. Mas, se houver a classe main isso não acontece pois
    //"main" indica a primeira row, que deve ficar o tempo todo visível
    skill.addEventListener("click", function(){
        let rows = this.children
        for (let index = 0; index < rows.length; index++) {
            const row = rows[index];
            if(row.classList.contains("stack-hidden")){
                row.classList.remove("stack-hidden")
            }else if(row.classList.contains("row") && !row.classList.contains("main")){
                row.classList.add("stack-hidden")
            }
        }
    })  
})

function changeTheme(){
    //checar o tema guardado no localstorage e/ou criar a variável se não houver nada guardado
    theme = localStorage.getItem('theme-preference');

    if(theme == "light"){
        $html.classList.remove('dark-mode');
    }else if(theme == "dark"){
        $html.classList.add('dark-mode');
        $toggle.checked = true;
    }else{
        localStorage.setItem('theme-preference', 'dark');
        changeTheme();
    }
}

function checkTheme(){
    //verifica e retorna o tema que existe salvo no localstorage
    theme = localStorage.getItem('theme-preference');

    if(theme == "light"){
        return "light";
    }else if(theme == "dark"){
        return "dark";
    }else{
        localStorage.setItem('theme-preference', 'light');
        return "light";
    }
}

function favicon(){
    //define o favicon dinamicamente
    let link = "/favicon.png"
    let icon = document.createElement("link")
    icon.rel = "icon"
    icon.href = link
    head.appendChild(icon)
}

function toHome(){
    //adiciona o botão de voltar pro início em cada página
    let button = document.createElement("a")
    button.href = "/index.html"
    button.classList.add("tohome")
    button.title = "Voltar para o início"
    button.text = "⌂"

    body.appendChild(button)
}
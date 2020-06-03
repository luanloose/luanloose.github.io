
// red = basico, yellow = intermediario, green = avançado
var tec = [
    {
        title: 'PHP',
        color: 'red',
    },
    {
        title: 'VUE',
        color: 'yellow',
    },
    {
        title: 'JS',
        color: 'green',
    },
];

// Se quiser inserir outras linguagens ve como eu fiz pra inserir o php/js
var projects = [
    {
        title: 'Site',
        description: 'Insira uma descrição aleatória aqui',
        link: 'http://google.com',
        languages: ['PHP', 'JS']
    },
    {
        title: 'Site',
        description: 'Insira uma descrição aleatória aqui!!!!!!!',
        link: 'http://google.com',
        languages: ['PHP']
    },
    {
        title: 'Site',
        description: 'Insira uma descrição aleatória aqui!!!!!!!',
        link: 'http://google.com',
        languages: ['JS']
    },
];

function apply() {
    let html = '';
    let level = '';
    tec.forEach(element => {
        level = element.color === 'red' ? 'Básico' : element.color === 'yellow' ? 'Intermediário' : 'Avançado';
        html += 
        `
        <div class="box">
            <h2>${element.title}</h2>
            <div class="bar ${element.color}B"></div>
            <h4 class="gray-light">Nivel ${level}</h4>
        </div>
        `
    });
    document.getElementById("content1").innerHTML = html;

    html = '';
    let languages;
    projects.forEach(element => {
        languages = '';
        element.languages.forEach(item => languages += `<img class="language-icon" src="assets/${item}.svg"></img>`);
        html +=
        `
        <div class="box">
            <h2 class="green-strong">${element.title}</h2>
            <div class="bar greenS"></div>
            <h4 class="description white">${element.description}</h4>
            <div class="flex justify">
                <a class="link" target="_blank" href="${element.link}">Github</a>
                <div class="flex">
                    ${languages}
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("content2").innerHTML = html;
}

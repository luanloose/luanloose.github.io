
// red = basico, yellow = intermediario, green = avançado
var tec = [
    {
        title: 'PHP',
        color: 'yellow',
        framework: 'LUMEN | LARAVEL',
    },
    {
        title: 'PYTHON',
        color: 'yellow',
        framework: '',
    },
    {
        title: 'C',
        color: 'yellow',
        framework: '',
    },
    {
        title: 'JAVA',
        color: 'red',
        framework: '',
    },
    {
        title: 'SHELL SCRIPT',
        color: 'yellow',
        framework: '',
    },
    {
        title: 'JS',
        color: 'yellow',
        framework: 'VUE',
    },
];

// Se quiser inserir outras linguagens ve como eu fiz pra inserir o php/js
var projects = [
    {
        title: 'Api PicPay',
        description: 'Desafio de backend PicPay. Feito apenas para conhecimento.',
        link: 'https://github.com/luanloose/api-picpay',
        languages: ['PHP', 'LUMEN']
    },
    {
        title: 'Api McExperiencia',
        description: 'Gerador de cupom da promoção do Mc Donalds.',
        link: 'https://github.com/luanloose/api-mc-experiencia',
        languages: ['PHP', 'LARAVEL']
    },
    {
        title: 'Api Imobiliaria',
        description: 'Gestão de imóveis.',
        link: 'https://github.com/luanloose/api-imobiliaria',
        languages: ['PHP', 'LARAVEL']
    },
    {
        title: 'CS50X',
        description: 'Projetos do curso de programação de Harvard.',
        link: '',
        languages: ['PYTHON', 'C']
    },
    {
        title: 'Controle de Séries',
        description: 'Sistema para gestão de episodios assistidos.',
        link: 'https://github.com/luanloose/controle-series',
        languages: ['PHP', 'LARAVEL']
    },
    {
        title: 'Exemplos',
        description: 'Códigos do dia a dia para consulta.',
        link: 'https://github.com/luanloose/Examples',
        languages: ['PHP', 'LARAVEL', 'LUMEN', 'SELENIUM','DOCKER']
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
            <h4 class="gray-light">${element.framework}</h4>
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

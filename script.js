
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
        languages: ['PHP', 'LARAVEL', 'LUMEN', 'SELENIUM', 'DOCKER']
    },
];

var jobs = [
    {
        title: 'Analista de desenvolvimento',
        description: 'Desenvolvimento/Manutenção de API Rest, sistemas web',
        languages: ['LARAVEL', 'LUMEN', 'VUE', 'SELENIUM', 'PHP', 'HTML', 'JS', 'CSS', 'JQUERY'],
        period: "12/2019 - Atual",
        company: 'Genesis Tecnologia',
    },
    {
        title: 'Programador',
        description: 'Desenvolvimento/Manutenção no sistema da empresa.',
        languages: ['NOTES', 'HTML', 'JS', 'CSS', 'JQUERY'],
        period: "06/2017 - 12/2019",
        company: 'Integro Consultores'
    },
    {
        title: 'Técnico de Suporte | Administrador de Sistemas',
        description: 'Desenvolvimento/Manutenção de aplicação e scripts',
        languages: ['AWS', 'POWERSHELL', 'SHELL', 'PYTHON', 'BATCH'],
        period: "06/2017 - 06/2019",
        company: 'Telelaudo Tecnologia Médica'
    }
];

var courses = [
    {
        title: 'CIÊNCIAS DA COMPUTAÇÃO',
        languages: ['PHP', 'JAVA', 'PYTHON'],
        link: '',
        company: 'FAESA',
    },
    {
        title: 'TÉCNICO EM INFORMÁTICA',
        languages: ['PHP', 'PYTHON', 'C', 'HTML', 'JS', 'CSS', 'JQUERY'],
        link: 'https://drive.google.com/file/d/1dqVfNMKDLD9KDLGYBj0Z3VtO3ybJpgIU/view?usp=sharing',
        company: 'INSTITUTO FEDERAL DO ESPIRITO SANTO',
    },
    {
        title: 'LARAVEL',
        languages: ['PHP', 'LUMEN', 'LARAVEL'],
        link: 'https://drive.google.com/drive/folders/1vVdwc01vgk_eSe-nGv3frR1gmij533SM?usp=sharing',
        company: 'Udemy | TreinaWeb',
    },
    {
        title: 'VUEJS',
        languages: ['PHP', 'LUMEN', 'LARAVEL'],
        link: 'https://drive.google.com/drive/folders/1t-bFkY0FL4ppAUftRr2lVQ-jItL9xqxn?usp=sharing',
        company: 'Udemy | TreinaWeb',
    },
    {
        title: 'SELENIUM',
        languages: ['SELENIUM'],
        link: 'https://drive.google.com/file/d/16fmH8E8SjcDFXYhlKETzZIVaihby6MiY/view?usp=sharing',
        company: 'TreinaWeb'
    },
    {
        title: 'JAVASCRIPT',
        languages: ['JS'],
        link: 'https://drive.google.com/drive/folders/1FsQbaSSpHUeYV8v1MHHEED6Ap-9x9CwF?usp=sharing',
        company: 'TreinaWeb'
    }
];

function apply () {
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
            <div class="box-title">
                <h2 class="green-strong">${element.title}</h2>
            </div>
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

    html = '';
    languages = '';
    jobs.forEach(element => {
        languages = '';
        element.languages.forEach(item => languages += `<img class="language-icon" src="assets/${item}.svg"></img>`);
        html +=
            `
        <div class="box">
            <div class="box-title">
                <h2 class="green-strong">${element.title}</h2>
            </div>
            <div class="bar greenS"></div>
            <h4 class="description gray-light">Empresa: ${element.company}</h4>
            <h4 class="description gray-light">${element.description}</h4>
            <h4 class="description gray-light">${element.period}</h4>
            <div class="flex justify">
                <div class="flex">
                    ${languages}
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("content3").innerHTML = html;

    html = '';
    languages = '';
    courses.forEach(element => {
        languages = '';
        element.languages.forEach(item => languages += `<img class="language-icon" src="assets/${item}.svg"></img>`);
        html +=
            `
        <div class="box">
            <div class="box-title">
                <h2 class="green-strong">${element.title}</h2>
            </div>
            <div class="bar greenS"></div>
            <h4 class="description gray-light">Escola ${element.company}</h4>
            <div class="flex justify">
            <a class="link" target="_blank" href="${element.link}">Certificado</a>
                <div class="flex">
                    ${languages}
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("content4").innerHTML = html;

}

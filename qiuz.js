const mas = [
    {
        question: 'Как называется город, который стал  столицей России в эпоху Петра I?',
        answer: [
            {
                id: `${Math.random()}`,
                value: 'Санкт-Петербург',
                correct: true,
            },
            {
                id: `${Math.random()}`,
                value: 'Москва',
                correct: false,
            },
            {
                id: `${Math.random()}`,
                value: 'Киев',
                correct: false,
            }
        ]
    },
    {
        question: 'Кем был А.В. Суворов?',
        answer: [
            {
                id: `${Math.random()}`,
                value: 'Художник',
                correct: false,
            },
            {
                id: `${Math.random()}`,
                value: 'Полководец',
                correct: true,
            },
            {
                id: `${Math.random()}`,
                value: 'Учёный',
                correct: false,
            }
        ]
    },
    {
        question: 'При каком правителе в состав Россиийской Империи вошел  Крымский полуостров?',
        answer: [
            {
                id: `${Math.random()}`,
                value: 'Екатерина II',
                correct: true,
            },
            {
                id: `${Math.random()}`,
                value: 'Иван Грозный',
                correct: false,
            },
            {
                id: `${Math.random()}`,
                value: 'Павел I',
                correct: false,
            }
        ]
    },
    {
        question: 'Какая династия начала править в России с 1613 года?',
        answer: [
            {
                id: `${Math.random()}`,
                value: 'Годуновых',
                correct: false,
            },
            {
                id: `${Math.random()}`,
                value: 'Пожарских',
                correct: false,
            },
            {
                id: `${Math.random()}`,
                value: 'Романовых',
                correct: true,
            }
        ]
    },
    {
        question: 'От какого государства попала в зависимость Русь в ХIII веке?',
        answer: [
            {
                id: `${Math.random()}`,
                value: 'от Речи Посполитой',
                correct: false,
            },
            {
                id: `${Math.random()}`,
                value: 'от Золотой Орды',
                correct: true,
            },
            {
                id: `${Math.random()}`,
                value: 'от Османской Империи',
                correct: false,
            }
        ]
    },
    {
        question: 'Когда Русь приняла христианство?',
        answer: [
            {
                id: `${Math.random()}`,
                value: '988',
                correct: true,
            },
            {
                id: `${Math.random()}`,
                value: '866',
                correct: false,
            },
            {
                id: `${Math.random()}`,
                value: '1233',
                correct: false,
            }
        ]
    },
    {
        question: 'Вокруг какого торгового пути возникли первые княжества?',
        answer: [
            {
                id: `${Math.random()}`,
                value: 'Великий шелковый путь',
                correct: false,
            },
            {
                id: `${Math.random()}`,
                value: 'Путь благовоний',
                correct: false,
            },
            {
                id: `${Math.random()}`,
                value: 'Из варяг в греки',
                correct: true,
            }
        ]
    },
    {
        question: 'Просьба о помощи какого из правителей соседних земель, привела русских князей в битву на Калке 31 мая 1223 года?',
        answer: [
            {
                id: `${Math.random()}`,
                value: 'Котян Сутоевич хан Половцев',
                correct: true,
            },
            {
                id: `${Math.random()}`,
                value: 'Бела IV Король Венгрии',
                correct: false,
            },
            {
                id: `${Math.random()}`,
                value: 'Куря хан Печенегов',
                correct: false,
            }
        ]
    },
    {
        question: 'Как звали  последнего российского императора?',
        answer: [
            {
                id: `${Math.random()}`,
                value: 'Николай II',
                correct: true,
            },
            {
                id: `${Math.random()}`,
                value: 'Александр I',
                correct: false,
            },
            {
                id: `${Math.random()}`,
                value: 'Пётр III',
                correct: false,
            }
        ]
    },
    {
        question: 'Дата прихода большевиков к власти',
        answer: [
            {
                id: `${Math.random()}`,
                value: 'январь 1905',
                correct: false,
            },
            {
                id: `${Math.random()}`,
                value: '8 мар 1917 г.',
                correct: false,
            },
            {
                id: `${Math.random()}`,
                value: '25 октября 1917 г',
                correct: true,
            }
        ]
    },
]

let qestionsVivod = document.querySelector('.otvet')
let next = document.querySelector('#btn-next')
let restart = document.querySelector('#btn-restart')
let point = document.querySelector('.point');
let resultVivod = document.querySelector('.result');
let ballVivod = document.querySelector('.ball-vivod')
let localSave = {};
let ball = mas.length;
let i = 0;

function renderQestion(index) {
    renderPoint(index + 1)
    const renderAnswer = () => {
        return mas[index].answer.map((item) => {
            return `
            <li class="form_radio_btn">
                <label>
                    <input class="answer-input" type="radio" name="${index}" value="${item.id}">
                    <span class="span-text">${item.value}</span>
                </label>
            </li>
            `
        }).join('')
    }
    qestionsVivod.innerHTML = `
        <div class="vopros">${mas[index].question}</div>
        <ul>${renderAnswer()}</ul>
    `
}

function renderResult() {
    let contentResult = '';

    const getClassName = (answer, resultIndex) => {
        let classname = '';

        if (!answer.correct && answer.id === localSave[resultIndex]) {
            classname = 'answer--invalid'
            ball--
        } else if (answer.correct) {
            classname = 'answer--valid'

        }

        return [classname, ball]
    }

    const resultAnswer = (resultIndex) => {
        return mas[resultIndex].answer.map((answer) => {
            return `<li class="${getClassName(answer, resultIndex)[0]}"><span class="span-text-result ">${answer.value}</span></li>`
        }).join('');
    }

    mas.forEach((questionResult, index) => {
        contentResult += `
            <div class="vopros">${questionResult.question}</div>
            <ul class="result-ul">${resultAnswer(index)}</ul>
        `
    })
    resultVivod.innerHTML = contentResult;

}

function renderPoint(step) {
    point.innerHTML = `${step}/${mas.length}`;
}

qestionsVivod.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input')) {
        localSave[event.target.name] = event.target.value;
        next.disabled = false;
    }
})

next.addEventListener('click', () => {
    next.disabled = true;
    if ((i + 1) != mas.length) {
        i++
        renderQestion(i)
        return
    }
    renderResult()
    qestionsVivod.classList.add('hidden')
    next.classList.add('hidden')
    restart.classList.add('visible')
    point.classList.add('hidden')
    ballVivod.innerHTML = `Ваши баллы: ${ball}`
})

restart.addEventListener('click', () => {
    resultVivod.innerHTML = '';
    localSave = {}
    qestionsVivod.classList.remove('hidden')
    next.classList.remove('hidden')
    restart.classList.remove('visible')
    point.classList.remove('hidden')
    ballVivod.innerHTML = ''
    i = 0;
    renderQestion(i)
})

renderQestion(i)

const mas = [
    {
        question: 'Как называется город, который стал  столицей России в эпоху Петра I?',
        answer: [
            {
                id: '1',
                value: 'Санкт-Петербург',
                correct: true,
            },
            {
                id: '2',
                value: 'Москва',
                correct: false,
            },
            {
                id: '3',
                value: 'Киев',
                correct: false,
            }
        ]
    },
    {
        question: 'Кем был А.В. Суворов?',
        answer: [
            {
                id: '4',
                value: 'Художник',
                correct: false,
            },
            {
                id: '5',
                value: 'Полководец',
                correct: true,
            },
            {
                id: '6',
                value: 'Учёный',
                correct: false,
            }
        ]
    },
    {
        question: 'При каком правителе в состав Россиийской Империи вошел  Крымский полуостров?',
        answer: [
            {
                id: '7',
                value: 'Екатерина II',
                correct: true,
            },
            {
                id: '8',
                value: 'Иван Грозный',
                correct: false,
            },
            {
                id: '9',
                value: 'Павел I',
                correct: false,
            }
        ]
    },
    {
        question: 'Какая династия начала править в России с 1613 года?',
        answer: [
            {
                id: '10',
                value: 'Годуновых',
                correct: false,
            },
            {
                id: '11',
                value: 'Пожарских',
                correct: false,
            },
            {
                id: '12',
                value: 'Романовых',
                correct: true,
            }
        ]
    },
    {
        question: 'От какого государства попала в зависимость Русь в ХIII веке?',
        answer: [
            {
                id: '13',
                value: 'от Речи Посполитой',
                correct: false,
            },
            {
                id: '14',
                value: 'от Золотой Орды',
                correct: true,
            },
            {
                id: '15',
                value: 'от Османской Империи',
                correct: false,
            }
        ]
    },
    {
        question: 'Когда Русь приняла христианство?',
        answer: [
            {
                id: '16',
                value: '988',
                correct: true,
            },
            {
                id: '17',
                value: '866',
                correct: false,
            },
            {
                id: '18',
                value: '1233',
                correct: false,
            }
        ]
    },
    {
        question: 'Вокруг какого торгового пути возникли первые княжества?',
        answer: [
            {
                id: '10',
                value: 'Великий шелковый путь',
                correct: false,
            },
            {
                id: '11',
                value: 'Путь благовоний',
                correct: false,
            },
            {
                id: '12',
                value: 'Из варяг в греки',
                correct: true,
            }
        ]
    },
    {
        question: 'Просьба о помощи какого из правителей соседних земель, привела русских князей в битву на Калке 31 мая 1223 года?',
        answer: [
            {
                id: '13',
                value: 'Котян Сутоевич хан Половцев',
                correct: true,
            },
            {
                id: '14',
                value: 'Бела IV Король Венгрии',
                correct: false,
            },
            {
                id: '15',
                value: 'Куря хан Печенегов',
                correct: false,
            }
        ]
    },
    {
        question: 'Как звали  последнего российского императора?',
        answer: [
            {
                id: '16',
                value: 'Николай II',
                correct: true,
            },
            {
                id: '17',
                value: 'Александр I',
                correct: false,
            },
            {
                id: '18',
                value: 'Пётр III',
                correct: false,
            }
        ]
    },
    {
        question: 'Дата прихода большевиков к власти',
        answer: [
            {
                id: '16',
                value: 'январь 1905',
                correct: false,
            },
            {
                id: '17',
                value: '8 мар 1917 г.',
                correct: false,
            },
            {
                id: '18',
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
let ball = 10;
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

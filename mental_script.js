const quiz = [
    {
        question: "Q1: Have you felt particularly low or down for more than 2 weeks in a row?",
        a: "Very often",
        b: "Somewhat often",
        c: "Not so often",
        d: "Not at all",
        ans: "ans4"

    },
    {
        question: "Q2: Does your health limit you in doing daily activities? ",
        a: "Very less",
        b: "Moderately",
        c: "No problem at all",
        d: "Very much",
        ans: "ans3"

    },
    {
        question: "Q3: How often do you feel positive about your life?",
        a: "Never",
        b: "Most of the time",
        c: "Once in a while",
        d: "About half of the time.",
        ans: "ans2"

    },
    {
        question: "Q4:How is your quality of sleep?",
        a: "Bad",
        b: "Moderate",
        c: "Good",
        d: "Very bad",
        ans: "ans3"

    },
    {
        question: "Q5: Overall how would you rate your mental health? ",
        a: "Excellent",
        b: "Poor",
        c: "Average",
        d: "Not sure",
        ans: "ans1"

    },
]

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const showsurvey = document.querySelector("#showsurvey");

const answers = document.querySelectorAll(".answer");
let questionCount = 0;
let score = 0;

const loadfunction = () => {
    let questionList = quiz[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}
loadfunction();
const delselectAll = () => {
    answers.forEach((element) => {
        if (element.checked) {
            element.checked = false;
        }
    });
}
const getCheckanswer = () => {
    let answer;
    answers.forEach((element) => {
        if (element.checked) {
            answer = element.id;
        }
    });
    return answer;
};
submit.addEventListener("click", () => {
    const checkedanswer = getCheckanswer();
    console.log(checkedanswer);

    if (checkedanswer === quiz[questionCount].ans) {
        score += 20;
    }
    questionCount++;
    delselectAll();
    if (questionCount < quiz.length) {
        loadfunction();
    }
    else {
        if (score > 50) {
            showsurvey.innerHTML = `
        <div style="background-color:chartreuse;">
             <h3> You are ${score}% mentally fit!</h3>
             <h4> Good going! You're on right track!</h4>
             <button class="btn" onclick ="location.reload()"> Do Survey again</button>
        </div>`;

            showsurvey.classList.remove("survey");
           
        }
        else {
            showsurvey.innerHTML = `
        <div style="background-color:rgb(255, 49, 49);">   
             <h3> You are ${score}% mentally fit!</h3>
             <h4> You're mentally unhealhty! Take care and please do talk with our 'Online Buddy' .</h4>
             <button class="btn" onclick ="location.reload()"> Do Survey again</button>
             <button class="btn" onlcick="">Talk with our 'Online Buddy'</button>
        </div>`;
            showsurvey.classList.remove("survey");
            
        }
    }
});
//rgb(150, 98, 93);

const quiz = [
    {
        question: "Q1: How often do you workout?",
        a: "Rarely",
        b: "Never",
        c: "Regularly",
        d: "Occasionally",
        ans: "ans3"

    },
    {
        question: "Q2: According to you, How much time should be dedicated towards fitness?",
        a: "2 hours a day",
        b: "No, it's just a waste of time!",
        c: "There are no time limits when it comes to fitness",
        d: "None of the above",
        ans: "ans1"

    },
    {
        question: "Q3: Are you habitual to drugs and alcohol?",
        a: "Yes to both",
        b: "Only to drugs",
        c: "Only to alcohol",
        d: "I am not habituated to either.",
        ans: "ans4"

    },
    {
        question: "Q4:Do you have any hereditary conditions/diseases?",
        a: "High blood pressure",
        b: "Diabetes",
        c: "No, I am absolutely fine!",
        d: "Other herediatry disease",
        ans: "ans3"

    },
    {
        question: "Q5: How would you evaluate your overall health? Would you say you are: ",
        a: "In good physical health (No illness or disabilities)",
        b: "Mildy physically impaired. (Minor illness or disabilities)",
        c: "Severely physically impaired. (Requires extensive treatment)",
        d: "Totally physically impaired. (Confined to bed)",
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
             <h3> You are ${score}% healthy!</h3>
             <h4> Good going! You're on right track!</h4>
             <button class="btn" onclick ="location.reload()"> Do Survey again</button>
        </div>`;

            showsurvey.classList.remove("survey");
           
        }
        else {
            showsurvey.innerHTML = `
        <div style="background-color:rgb(255, 49, 49);">   
             <h3> You are ${score}% healthy!</h3>
             <h4> You're very unhealthy! Work hard and improve your eating habits.</h4>
             <button class="btn" onclick ="location.reload()"> Do Survey again</button>
        </div>`;
            showsurvey.classList.remove("survey");
            
        }
    }
});
//rgb(150, 98, 93);

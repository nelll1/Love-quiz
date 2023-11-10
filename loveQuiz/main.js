
//for answer button by 2 each question
//question1
const btn1 =  document.getElementById('answer1');
const btn2 =  document.getElementById('answer2');
//question2
const btn3 =  document.getElementById('answer3');
const btn4 =  document.getElementById('answer4');
//question3
const btn5 =  document.getElementById('answer5');
const btn6 =  document.getElementById('answer6');
//question4
const btn7 =  document.getElementById('answer7');
const btn8 =  document.getElementById('answer8');
//question4
const btn9 =  document.getElementById('answer9');
const btn10 =  document.getElementById('answer10');
//question4
const btn11 =  document.getElementById('answer11');
const btn12 =  document.getElementById('answer12');
//question4
const btn13 =  document.getElementById('answer13');
const btn14 =  document.getElementById('answer14');
//question4
const btn15 =  document.getElementById('answer15');
const btn16 =  document.getElementById('answer16');
//question4
const btn17 =  document.getElementById('answer17');
const btn18 =  document.getElementById('answer18');
//question4
const btn19 =  document.getElementById('answer19');
const btn20 =  document.getElementById('answer20');

//for question 
const question1 = document.getElementById('question-1')
const question2 = document.getElementById('question-2')
const question3 = document.getElementById('question-3')
const question4 = document.getElementById('question-4')
const question5 = document.getElementById('question-5')
const question6 = document.getElementById('question-6')
const question7 = document.getElementById('question-7')
const question8 = document.getElementById('question-8')
const question9 = document.getElementById('question-9')
const question10 = document.getElementById('question-10')


//score points
const scores = document.getElementById('love-score')
//scoreboard
const scoreBoard = document.getElementById('score')
//words result 
const result = document.getElementById('result')
//for
let loveCount = 0;

function start(){
    document.getElementById('start').style.display = "none"
    question1.style.display = "block"
}

//question1 for showing question 2
btn1.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 10;
    //hiding others questions
    question1.style.display = "none";
    question2.style.display = "block";
})
btn2.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 5;
    //hiding others questions
    question1.style.display = "none";
    question2.style.display = "block";
    console.log(loveCount)
})

// for showing question3
btn3.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 11;
    //hiding others questions
    question2.style.display = "none";
    question3.style.display = "block";
    console.log(loveCount)
})
btn4.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 10;
    //hiding others questions
    question2.style.display = "none";
    question3.style.display = "block";
    console.log(loveCount)
})

// for showing question4
btn5.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 9;
    //hiding others questions
    question3.style.display = "none";
    question4.style.display = "block";
})
btn6.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 3;
    //hiding others questions
    question3.style.display = "none";
    question4.style.display = "block";
})

// for showing question5
btn7.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 10;
    //hiding others questions
    question4.style.display = "none";
    question5.style.display = "block";
})
btn8.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 7;
    //hiding others questions
    question4.style.display = "none";
    question5.style.display = "block";
})

//for showing question6
btn9.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 10;
    //hiding others questions
    question5.style.display = "none";
    question6.style.display = "block";
})
btn10.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 4;
    //hiding others questions
    question5.style.display = "none";
    question6.style.display = "block";
})

//question7
btn11.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 9;
    //hiding others questions
    question6.style.display = "none";
    question7.style.display = "block";
})
btn12.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 6;
    //hiding others questions
    question6.style.display = "none";
    question7.style.display = "block";
})

//question8
btn13.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 11;
    //hiding others questions
    question7.style.display = "none";
    question8.style.display = "block";
})
btn14.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 6;
    //hiding others questions
    question7.style.display = "none";
    question8.style.display = "block";
})

//question9
btn15.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 10;
    //hiding others questions
    question8.style.display = "none";
    question9.style.display = "block";
})
btn16.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 9;
    //hiding others questions
    question8.style.display = "none";
    question9.style.display = "block";
})


//question10
btn17.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 10;
    //hiding others questions
    question9.style.display = "none";
    question10.style.display = "block";
})
btn18.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 2;
    //hiding others questions
    question9.style.display = "none";
    question10.style.display = "block";
})


//question 10 for showing score board
btn17.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 10;
    //condition
    if(loveCount >= 95 || loveCount === 100){
        let randomPercent = Math.floor(Math.random() * (100 - 95) + 95)
        scores.innerHTML = randomPercent + "%";
        result.innerHTML = "Your heart is deeply entwined with your crush. Your feelings are strong and genuine. It's time to consider taking a step forward and expressing your emotions."
    }
    else if(loveCount >= 70 || loveCount === 90){
        let randomPercent = Math.floor(Math.random() * (90 - 70) + 70)
        scores.innerHTML = randomPercent + "%";
        result.innerHTML = "You have a solid connection with your crush. Your affection is growing, and there's potential for something meaningful. Keep nurturing your bond and exploring your feelings."
    }
    else if (loveCount >= 50 || loveCount === 69){
        let randomPercent = Math.floor(Math.random() * (69 - 50) + 50)
        scores.innerHTML = randomPercent + "%";
        result.innerHTML = "Your feelings are developing, but there's room for growth. You might be in the early stages of attraction. Focus on building a strong foundation through friendship and shared experiences."
    }else{
        let randomPercent = Math.floor(Math.random() * (49 - 1) + 1)
        scores.innerHTML = randomPercent + "%";
        result.innerHTML = "Your feelings for your crush seem to be more on the casual side. It's important to assess whether there's true romantic interest or if your connection is better suited for friendship."
    }


    //hiding others questions
    question10.style.display = "none";
    scoreBoard.style.display = "block";
    console.log(loveCount)
    

})
btn18.addEventListener("click", ()=>{
    //adding value to the loveCount
    loveCount += 3;
    //condition
    if(loveCount >= 95 || loveCount === 100){
        let randomPercent = Math.floor(Math.random() * (100 - 95) + 95)
        scores.innerHTML = randomPercent + "%";
        result.innerHTML = "Your heart is deeply entwined with your crush. Your feelings are strong and genuine. It's time to consider taking a step forward and expressing your emotions."
    }
    else if(loveCount >= 70 || loveCount === 90){
        let randomPercent = Math.floor(Math.random() * (90 - 70) + 70)
        scores.innerHTML = randomPercent + "%";
        result.innerHTML = "You have a solid connection with your crush. Your affection is growing, and there's potential for something meaningful. Keep nurturing your bond and exploring your feelings."
    }
    else if (loveCount >= 60 || loveCount === 69){
        let randomPercent = Math.floor(Math.random() * (69 - 60) + 60)
        scores.innerHTML = randomPercent + "%";
        result.innerHTML = "Your feelings are developing, but there's room for growth. You might be in the early stages of attraction. Focus on building a strong foundation through friendship and shared experiences."
    }else{
        let randomPercent = Math.floor(Math.random() * (49 - 1) + 1)
        console.log(randomPercent + "random")
        scores.innerHTML = randomPercent + "%";
        result.innerHTML = "Your feelings for your crush seem to be more on the casual side. It's important to assess whether there's true romantic interest or if your connection is better suited for friendship."
    }


    //hiding others questions
    question10.style.display = "none";
    scoreBoard.style.display = "block";
    console.log(loveCount)
   
})

loveCount;
function startAgain(){
    location.reload()
}

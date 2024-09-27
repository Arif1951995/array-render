console.log('runining')


let data = [];
let curentIndex = 0;


const   fetchQuestions = async (params) => {
    fetch(`https://the-trivia-api.com/v2/questions`).then(res => res.json()).then(res => {
        console.log(res)
        data = res;

        const currentEle = data[curentIndex];

        const answers = [...currentEle.incorrectAnswers, currentEle.correctAnswer];
        

        document.getElementById('qs').innerHTML = `
            <div>${currentEle.question.text}
            
            </div>
        `

        answers.forEach(el => {
            document.getElementById('ans').innerHTML += `<div>
            <label>

    <input type="checkbox" />
    ${el}

</label>
            </div>`
        })

    })
}

document.getElementById('next').onclick = () => {
    console.log('clicked')
    if(curentIndex < data.length -1) {
        curentIndex++;
        const currentEle = data[curentIndex];

    const answers = [...currentEle.incorrectAnswers, currentEle.correctAnswer];
    

    document.getElementById('qs').innerHTML = `
        <div>${currentEle.question.text}
        
        </div>
    `

    document.getElementById('ans').innerHTML = '';
    answers.forEach(el => {
        document.getElementById('ans').innerHTML += `<div>
        <label>

<input type="checkbox" />
${el}

</label>
        </div>`
    })
    }
    



}

document.getElementById('prev').onclick = () => {
    console.log('clicked prev')
    if(curentIndex > 0) {
        curentIndex--;

        const currentEle = data[curentIndex];

        const answers = [...currentEle.incorrectAnswers, currentEle.correctAnswer];
        

        document.getElementById('qs').innerHTML = `
            <div>${currentEle.question.text}
            
            </div>
        `

    document.getElementById('ans').innerHTML = '';

        answers.forEach(el => {
            document.getElementById('ans').innerHTML += `<div>
            <label>

    <input type="checkbox" />
    ${el}

</label>
            </div>`
        })

    }
    


}






fetchQuestions()
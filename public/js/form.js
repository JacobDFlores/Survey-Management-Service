const submitForm = async (event) => {
    event.preventDefault();

    // Selecting question and answer input fields
    const surveyQuestions = document.querySelectorAll('.question');
    const userAnswers = document.querySelectorAll('.userAnswer');

    // Building Question and Answer arrays
    const questions = [];
    const answers = [];

    // Populating the arrays with actual values from the question and answer input fields
    surveyQuestions.forEach((questionInput) => {
        const questionValue = questionInput.innerHTML;
        if (questionValue != ''){
            questions.push(questionValue);
        }
    });
    userAnswers.forEach((answerChoice) => {
        const answerValue = answerChoice.innerHTML;
        if (answerValue != ''){
            answers.push(answerValue);
        }
    });

    // Checks to see if all prompts have been answered, if not leave script
    if (answers.length != questions.length){
        alert('Please answer all prompts before submitting.');
        return;
    }

    // This is the object that we are going to send in our fetch, we need to build its response array
    const userResponse = {
        user_response: [],
    }

    // This for loop iterates over the questions array and creates an object for each question and answer. 
    // Then pushes that object into our userResponse.response array
    for (let i = 0; i < questions.length; i++){
        const resObject = {};
        resObject.question = questions[i];
        resObject.userAnswer = answers[i];
        userResponse.user_response.push(resObject);
    }

    // Grab survey Id from url before fetch
    const url = window.location.toString().split("/");
    const surv_id = url[url.length - 1];
    
    const response = await fetch(`/api/responses/${surv_id}`, {
        method: 'POST',
        body: JSON.stringify(userResponse),
        headers: {
          'Content-Type': 'application/json',
        },
    });
  
    if (response.ok) {
        alert('created response successfully');
        document.location.replace('/');
    } else {
        alert('Failed to complete survey response');
    }  
}

document.querySelector('.survey-question').addEventListener('submit', submitForm);

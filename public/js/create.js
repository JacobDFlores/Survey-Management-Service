const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && description) {
    // Prepares the survey data, including dynamically added questions and answer choices
    const questions = document.querySelectorAll('.question-input');
    const answerInputs = document.querySelectorAll('.answer-input');

    const surveyData = {
      name,
      description,
      questions: [],
    };

    for (let i = 0; i < questions.length; i++) {
      const questionText = questions[i].value.trim();
      const answerChoices = [];
      // Collects answer choices for the current question
      const answerInputsForQuestion = document.querySelectorAll(`[name="question-${i}"]`);
      answerInputsForQuestion.forEach((answerInput) => {
        const answerText = answerInput.value.trim();
        if (answerText) {
          answerChoices.push(answerText);
        }
      });
      const surveyinfo = {
        question: questionText,
      }
      for (i = 0; i < answerChoices.length; i++){
       if (i == 0) {
        surveyinfo.answer1 = answerChoices[i];
       }
       if (i == 1) {
        surveyinfo.answer2 = answerChoices[i];
       }
       if (i == 2) {
        surveyinfo.answer3 = answerChoices[i];
       }
       if (i == 3) {
        surveyinfo.answer4 = answerChoices[i];
       }
      }

      console.log(answerChoices)
      if (questionText && answerChoices.length > 0) {
        surveyData.questions.push(surveyinfo);
      }
    }

    const response = await fetch('/api/surveys', {
      method: 'POST',
      body: JSON.stringify(surveyData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create survey');
    }
  }
};

document.querySelector('.new-project-form').addEventListener('submit', newFormHandler);

// Adds Question Button Click Event Listener
document.querySelector('#add-question-btn').addEventListener('click', (event) => {
  event.preventDefault();

  // Creates new question input element
  const questionInput = document.createElement('input');
  questionInput.setAttribute('type', 'text');
  questionInput.setAttribute('class', 'question-input form-input mt-2');
  questionInput.setAttribute('placeholder', 'Enter Question Text');

  // Creates a new container for answer inputs related to this question
  const answerContainer = document.createElement('div');
  answerContainer.setAttribute('class', 'answer-container');

  // Creates multiple answer choice input elements for the question
  for (let i = 0; i < 4; i++) {
    const answerInput = document.createElement('input');
    answerInput.setAttribute('type', 'text');
    answerInput.setAttribute('class', 'answer-input form-input mt-1');
    answerInput.setAttribute('name', `question-${i}`); 
    answerInput.setAttribute('placeholder', 'Enter Answer Choice');
    answerContainer.appendChild(answerInput);
  }

  // Adds the new input elements to the questions-container
  const questionsContainer = document.querySelector('#questions-container');
  questionsContainer.appendChild(questionInput);
  questionsContainer.appendChild(answerContainer);
});
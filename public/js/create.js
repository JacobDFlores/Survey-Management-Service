const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && description) {
    // Prepare the survey data, including dynamically added questions and answer choices
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
      // Collect answer choices for the current question
      for (let j = 0; j < answerInputs.length; j++) {
        if (answerInputs[j].dataset.questionIndex === i.toString()) {
          const answerText = answerInputs[j].value.trim();
          if (answerText) {
            answerChoices.push(answerText);
          }
        }
      }

      if (questionText && answerChoices.length > 0) {
        surveyData.questions.push({
          question: questionText,
          answers: answerChoices,
        });
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

// Add Question Button Click Event Listener
document.querySelector('#add-question-btn').addEventListener('click', (event) => {
  event.preventDefault();

  // Create new question input element
  const questionInput = document.createElement('input');
  questionInput.setAttribute('type', 'text');
  questionInput.setAttribute('class', 'question-input form-input mt-2');
  questionInput.setAttribute('placeholder', 'Enter Question Text');

  // Create a new container for answer inputs related to this question
  const answerContainer = document.createElement('div');
  answerContainer.setAttribute('class', 'answer-container');

  // Create multiple answer choice input elements for the question
  for (let i = 0; i < 4; i++) {
    const answerInput = document.createElement('input');
    answerInput.setAttribute('type', 'text');
    answerInput.setAttribute('class', 'answer-input form-input mt-1');
    answerInput.setAttribute('placeholder', 'Enter Answer Choice');

    // Set a custom data attribute to link the answer input to its question
    answerInput.dataset.questionIndex = document.querySelectorAll('.question-input').length - 1;

    answerContainer.appendChild(answerInput);
  }

  // Add the new input elements to the questions-container
  const questionsContainer = document.querySelector('#questions-container');
  questionsContainer.appendChild(questionInput);
  questionsContainer.appendChild(answerContainer);
});

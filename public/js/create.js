const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && description) {
    // Prepares the survey data, including dynamically added questions and answer choices
    // These two constants are getting ALL input fields for questions and answers into an array for each
    const questions = document.querySelectorAll('.question-input');
    const answerInputs = document.querySelectorAll('.answer-input');

    // This is the JSON.data this is getting sent to the survey model
    const surveyData = {
      name,
      description,
      questions: [],
    };

    // This is an outside variable starts at zero when the survey info is submitted
    // but is increasing during the second FOR loop to keep track of the answerChoices index
    let initIndex = 0;
    // This FOR loop keeps track of what question we are on and stores it as the first 
    // method in our surveyInfo object
    for (let i = 0; i < questions.length; i++) {

      const questionText = questions[i].value.trim();
      
      const surveyinfo = {
        question: questionText,
      }

      // Capturing the values from the answer input fields and storing them in an array
      const answerChoices = [];

      answerInputs.forEach((answerInput) => {
        const answerText = answerInput.value.trim();
        // If there is a value, then push that value into the array
        if (answerText) {
              answerChoices.push(answerText);
            }
        // If there isn't a value, then push "NULL" into the array
        else {
          answerChoices.push("NULL");
        }
      });
      // This lets us keep track of the four answer inputs for every question.
      // no matter which input fields have data

      // Looping through the answerChoices array to add answer values to 
      // our surveyInfo object
      for (let i = 0; i < 4; i++){
        if (i == 0) {
          if (answerChoices[initIndex] != "NULL"){
            surveyinfo.answer1 = answerChoices[initIndex];
          }
        }
        if (i == 1) {
          if (answerChoices[initIndex] != "NULL"){
            surveyinfo.answer2 = answerChoices[initIndex];
          }   
        }
        if (i == 2) {
          if (answerChoices[initIndex] != "NULL"){
            surveyinfo.answer3 = answerChoices[initIndex];
          }    
        }
        if (i == 3) {
          if (answerChoices[initIndex] != "NULL"){
            surveyinfo.answer4 = answerChoices[initIndex];
          }      
        }
        initIndex++;
      }
    
      // pushes our surveyInfo object into the actual surveyData array so that we
      // can send surveyData to our model
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
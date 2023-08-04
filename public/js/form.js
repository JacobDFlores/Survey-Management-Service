// const questionOne = async (event) => {
//     event.preventDefault();

//     console.log('Submit Pressed')
//     console.log(event)
//     console.log(event.target.innerText)
//     // console.log(index)

//     const url = window.location.toString().split("/");
//     const survey_id = url[url.length - 1];
//     console.log(survey_id)

    
//     // const user_id = event.session.user_id ;
//     // console.log(user_id)
    
//     const question = document.querySelector(`#question0`).innerHTML;
//     // const question = document.querySelector(`#question`).innerHTML;
//     console.log(question)

//     const user_choice = document.querySelector(`#answer0`).innerHTML;
//     // const user_choice = document.querySelector(`.buttsClass`).innerHTML;
//     // const user_choice = event.target.innerText;
//     console.log(user_choice)
  

//     const response = { question:question, user_choice:user_choice };
//     console.log(response)

      
//     if (response && survey_id) {
//             const responseFetch = 
//             await fetch
//             (`/api/responses/:survey_id`, {
//                 method: 'POST',
//                 body: JSON.stringify({ survey_id, response }),
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             if (responseFetch.ok) {
//                 console.log('Succeded to create project')
//                 // document.location.replace('/');
//             } else {
//                 console.log('Failed to create project')
//                 alert('Failed to create project');
//             }
//     } else {
//         console.log('no answer found')
//     }

//     // for (let i = 1; i < 5; i++) {
//     //     console.log(i);
//     //     const answer = document.querySelector(`#answer${i}`).value.trim();
      
//     //     if (answer) {
//     //         const response = await fetch(`/api/projects`, {
//     //             method: 'POST',
//     //             body: JSON.stringify({ answer }),
//     //             headers: {
//     //                 'Content-Type': 'application/json',
//     //             },
//     //         });

//     //         if (response.ok) {
//     //             document.location.replace('/profile');
//     //         } else {
//     //             alert('Failed to create project');
//     //         }
//     //     }
//     // }
// };

// const questionTwo = async (event) => {
//     event.preventDefault();

//     console.log('Submit Pressed')
//     console.log(event)
//     console.log(event.target.innerText)
//     // console.log(index)

//     const url = window.location.toString().split("/");
//     const survey_id = url[url.length - 1];
//     console.log(survey_id)

    
//     // const user_id = event.session.user_id ;
//     // console.log(user_id)
    
//     const question = document.querySelector(`#question1`).innerHTML;
//     // const question = document.querySelector(`#question`).innerHTML;
//     console.log(question)

//     const user_choice = document.querySelector(`#answer1`).innerHTML;
//     // const user_choice = document.querySelector(`.buttsClass`).innerHTML;
//     // const user_choice = event.target.innerText;
//     console.log(user_choice)
  

//     const response = { question:question, user_choice:user_choice };
//     console.log(response)

      
//     if (response && survey_id) {
//             const responseFetch = 
//             await fetch
//             (`/api/responses/:survey_id`, {
//                 method: 'POST',
//                 body: JSON.stringify({ survey_id, response }),
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             if (responseFetch.ok) {
//                 console.log('Succeded to create project')
//                 // document.location.replace('/');
//             } else {
//                 console.log('Failed to create project')
//                 alert('Failed to create project');
//             }
//     } else {
//         console.log('no answer found')
//     }
// };

const questionAll = async (event) => {
    event.preventDefault();

    const questionOne = async () => {
        // event.preventDefault();
    
        console.log('Submit Pressed')
        // console.log(event)
        // console.log(event.target.innerText)
        // console.log(index)
    
        const url = window.location.toString().split("/");
        const survey_id = url[url.length - 1];
        console.log(survey_id)
    
        
        const user_id = document.querySelector(`#userId`).innerHTML;
        console.log(user_id)
        
        const question = document.querySelector(`#question0`).innerHTML;
        // const question = document.querySelector(`#question`).innerHTML;
        console.log(question)
    
        const user_choice = document.querySelector(`#answer0`).innerHTML;
        // const user_choice = document.querySelector(`.buttsClass`).innerHTML;
        // const user_choice = event.target.innerText;
        console.log(user_choice)
      
    
        const response = { user_id:user_id, question:question, user_choice:user_choice };
        console.log(response)
    
          
        if (response && survey_id) {
                const responseFetch = 
                await fetch
                (`/api/responses/:survey_id`, {
                    method: 'POST',
                    body: JSON.stringify({ survey_id, response }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                if (responseFetch.ok) {
                    console.log('Succeded to create project')
                    // document.location.replace('/');
                } else {
                    console.log('Failed to create project')
                    alert('Failed to create project');
                }
        } else {
            console.log('no answer found')
        }
    
        // for (let i = 1; i < 5; i++) {
        //     console.log(i);
        //     const answer = document.querySelector(`#answer${i}`).value.trim();
          
        //     if (answer) {
        //         const response = await fetch(`/api/projects`, {
        //             method: 'POST',
        //             body: JSON.stringify({ answer }),
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //         });
    
        //         if (response.ok) {
        //             document.location.replace('/profile');
        //         } else {
        //             alert('Failed to create project');
        //         }
        //     }
        // }
    };
    
    const questionTwo = async () => {

    
        console.log('Submit Pressed')

    
        const url = window.location.toString().split("/");
        const survey_id = url[url.length - 1];
        console.log(survey_id)
    
        
        const user_id = document.querySelector(`#userId`).innerHTML;
        console.log(user_id)
        
        const question = document.querySelector(`#question1`).innerHTML;

        console.log(question)
    
        const user_choice = document.querySelector(`#answer1`).innerHTML;
        console.log(user_choice)
      
    
        const response = { user_id:user_id, question:question, user_choice:user_choice };
        console.log(response)
    
          
        if (response && survey_id) {
                const responseFetch = 
                await fetch
                (`/api/responses/:survey_id`, {
                    method: 'POST',
                    body: JSON.stringify({ survey_id, response }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                if (responseFetch.ok) {
                    console.log('Succeded to create project')
                } else {
                    console.log('Failed to create project')
                    alert('Failed to create project');
                }
        } else {
            console.log('no answer found')
        }
    };

    const questionThree = async () => {

    
        console.log('Submit Pressed')

    
        const url = window.location.toString().split("/");
        const survey_id = url[url.length - 1];
        console.log(survey_id)
    
        
        const user_id = document.querySelector(`#userId`).innerHTML;
        console.log(user_id)
        
        const question = document.querySelector(`#question2`).innerHTML;

        console.log(question)
    
        const user_choice = document.querySelector(`#answer2`).innerHTML;
        console.log(user_choice)
      
    
        const response = { user_id:user_id, question:question, user_choice:user_choice };
        console.log(response)
    
          
        if (response && survey_id) {
                const responseFetch = 
                await fetch
                (`/api/responses/:survey_id`, {
                    method: 'POST',
                    body: JSON.stringify({ survey_id, response }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                if (responseFetch.ok) {
                    console.log('Succeded to create project')
                } else {
                    console.log('Failed to create project')
                    alert('Failed to create project');
                }
        } else {
            console.log('no answer found')
        }
    };

    const questionFour = async () => {

    
        console.log('Submit Pressed')

    
        const url = window.location.toString().split("/");
        const survey_id = url[url.length - 1];
        console.log(survey_id)
    
        
        const user_id = document.querySelector(`#userId`).innerHTML;
        console.log(user_id)
        
        const question = document.querySelector(`#question3`).innerHTML;

        console.log(question)
    
        const user_choice = document.querySelector(`#answer3`).innerHTML;
        console.log(user_choice)
      
    
        const response = { user_id:user_id, question:question, user_choice:user_choice };
        console.log(response)
    
          
        if (response && survey_id) {
                const responseFetch = 
                await fetch
                (`/api/responses/:survey_id`, {
                    method: 'POST',
                    body: JSON.stringify({ survey_id, response }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                if (responseFetch.ok) {
                    console.log('Succeded to create project')
                } else {
                    console.log('Failed to create project')
                    alert('Failed to create project');
                }
        } else {
            console.log('no answer found')
        }
    };

    questionOne();
    questionTwo();
    questionThree();
    questionFour();
};

document
.querySelector('.survey-question')
.addEventListener('submit', questionAll);

// All Tab Button Related

document.getElementById("all-tab").addEventListener("click", function () {
  addClassByID("all-jobs", "hidden");
  addClassByID("interview-jobs", "hidden");
  addClassByID("rejected-jobs", "hidden");

  removeClassByID("all-jobs", "hidden");

  addClassByID("all-tab", "btn-dash");
  addClassByID("interview-tab", "btn-dash");
  addClassByID("rejected-tab", "btn-dash");


  removeClassByID("all-tab", "btn-dash");
});

// Interview Tab Button Related

document.getElementById("interview-tab").addEventListener("click", function () {
  addClassByID("all-jobs", "hidden");
  addClassByID("interview-jobs", "hidden");
  addClassByID("rejected-jobs", "hidden");

  removeClassByID("interview-jobs", "hidden");

  addClassByID("all-tab", "btn-dash");
  addClassByID("interview-tab", "btn-dash");
  addClassByID("rejected-tab", "btn-dash");

  removeClassByID("interview-tab", "btn-dash");

  
});

// Rejected Tab Button Related

document.getElementById("rejected-tab").addEventListener("click", function () {
  addClassByID("all-jobs", "hidden");
  addClassByID("interview-jobs", "hidden");
  addClassByID("rejected-jobs", "hidden");

  removeClassByID("rejected-jobs", "hidden");

  addClassByID("all-tab", "btn-dash");
  addClassByID("interview-tab", "btn-dash");
  addClassByID("rejected-tab", "btn-dash");

  removeClassByID("rejected-tab", "btn-dash");
});


// Interview Button Related Updated
const interviewButtonElements = document.querySelectorAll(".interview-button")

for(const interviewButtonElement of interviewButtonElements){
    interviewButtonElement.addEventListener("click", function(){
        const parentInterview = interviewButtonElement.parentElement.parentElement;

        const currentStatusElement = parentInterview.querySelector(".job-status");

        if(currentStatusElement.innerText === "NOT APPLIED"){
            currentStatusElement.innerText = "INTERVIEW";

            // Updating in InterView Number in Header
            const currentInterviewNumber = getTextByID("interview-number");

            const newInterviewNumber = Number(currentInterviewNumber) + 1;

            setTextByID("interview-number", newInterviewNumber);

            // Disable the interview button to handle the multiple click
            interviewButtonElement.disabled = true;
        }
        else{
            currentStatusElement.innerText = "INTERVIEW";

            // Updatting both interview number and rejected number
            const currentInterviewNumber = getTextByID("interview-number");
            const newInterviewNumber = Number(currentInterviewNumber) + 1;

            const currentRejectedNumber = getTextByID("rejected-number");
            const newRejectedNumber = Number(currentRejectedNumber) - 1;

            setTextByID("interview-number", newInterviewNumber);
            setTextByID("rejected-number", newRejectedNumber);

            // Disable the button and active another to handle multiple click problems

            interviewButtonElement.disabled = true;

            const immediateParent = interviewButtonElement.parentElement;
            const rejectedButton = immediateParent.querySelector(".rejected-button")
            rejectedButton.disabled = false;
        }
    })
}




// Rejected Button Related Updated
const rejectedButtonElements = document.querySelectorAll(".rejected-button")

for(const rejectedButtonElement of rejectedButtonElements){
    rejectedButtonElement.addEventListener("click", function(){
        const parentInterview = rejectedButtonElement.parentElement.parentElement;

        const currentStatusElement = parentInterview.querySelector(".job-status");

        if(currentStatusElement.innerText === "NOT APPLIED"){
            currentStatusElement.innerText = "REJECTED";

            // Updating in Rejected Number in Header

            const currentRejectedNumber = getTextByID("rejected-number");
            const newRejectedNumber = Number(currentRejectedNumber) + 1;

            setTextByID("rejected-number", newRejectedNumber);

            // Disable the rejected button to handle the multiple click
            rejectedButtonElement.disabled = true;
        }
        else{
            currentStatusElement.innerText = "REJECTED";

            // Updatting both interview number and rejected number
            const currentInterviewNumber = getTextByID("interview-number");
            const newInterviewNumber = Number(currentInterviewNumber) - 1;

            const currentRejectedNumber = getTextByID("rejected-number");
            const newRejectedNumber = Number(currentRejectedNumber) + 1;

            setTextByID("interview-number", newInterviewNumber);
            setTextByID("rejected-number", newRejectedNumber);

            // Disable the button and active another to handle multiple click problems

            const immediateParent = rejectedButtonElement.parentElement;
            const interviewButton = immediateParent.querySelector(".interview-button")
            interviewButton.disabled = false;
            rejectedButtonElement.disabled = true;
        }
    })
}



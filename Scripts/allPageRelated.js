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

// Interview Button Related

document
  .getElementById("interview-button")
  .addEventListener("click", function () {
    // Getting the parent of interview button
    const interviewButtonElement = document.getElementById("interview-button");

    const parentInterview = interviewButtonElement.parentElement.parentElement;

    const currentStatusElement = parentInterview.querySelector(".job-status");

    if (currentStatusElement.innerText === "NOT APPLIED") {
      currentStatusElement.innerText = "INTERVIEW";

      // Updating in InterView Number in Header

      const currentInterviewNumber = getTextByID("interview-number");
      const newInterviewNumber = Number(currentInterviewNumber) + 1;

      setTextByID("interview-number", newInterviewNumber);

      // Disable the interview button to handle the multiple click
      document.getElementById("interview-button").disabled = true;

      //   console.log("Working");
    } else {
      currentStatusElement.innerText = "INTERVIEW";

      // Updatting both interview number and rejected number

      const currentInterviewNumber = getTextByID("interview-number");
      const newInterviewNumber = Number(currentInterviewNumber) + 1;

      const currentRejectedNumber = getTextByID("rejected-number");
      const newRejectedNumber = Number(currentRejectedNumber) - 1;

      setTextByID("interview-number", newInterviewNumber);
      setTextByID("rejected-number", newRejectedNumber);

      // Disable the button and active another to handle multiple click problems
      document.getElementById("interview-button").disabled = true;
      document.getElementById("rejected-button").disabled = false;

      // console.log("Else is Working");
    }
  });

// Rejected Button Related

document
  .getElementById("rejected-button")
  .addEventListener("click", function () {
    const rejectedButtonElement = document.getElementById("rejected-button");

    const parentInterview = rejectedButtonElement.parentElement.parentElement;

    const currentStatusElement = parentInterview.querySelector(".job-status");

    if (currentStatusElement.innerText === "NOT APPLIED") {
      currentStatusElement.innerText = "REJECTED";

      // Updating in Rejected Number in Header

      const currentRejectedNumber = getTextByID("rejected-number");
      const newRejectedNumber = Number(currentRejectedNumber) + 1;

      setTextByID("rejected-number", newRejectedNumber);

      // Disable the rejected button to handle the multiple click
      document.getElementById("rejected-button").disabled = true;

      //   console.log("Working");
    } else {
      currentStatusElement.innerText = "REJECTED";

      // Updatting both interview number and rejected number

      const currentInterviewNumber = getTextByID("interview-number");
      const newInterviewNumber = Number(currentInterviewNumber) - 1;

      const currentRejectedNumber = getTextByID("rejected-number");
      const newRejectedNumber = Number(currentRejectedNumber) + 1;

      setTextByID("interview-number", newInterviewNumber);
      setTextByID("rejected-number", newRejectedNumber);

      // Disable the button and active another to handle multiple click problems

      document.getElementById("interview-button").disabled = false;
      document.getElementById("rejected-button").disabled = true;

      // console.log("Else is Working");
    }
  });

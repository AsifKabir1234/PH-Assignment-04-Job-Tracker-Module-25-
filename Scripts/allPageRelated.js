// All Tab Button Related

document.getElementById("all-tab").addEventListener("click", function () {
  // Hidding the others tabs content so that only all-jobs section show
  addClassByID("interview-jobs", "hidden");
  addClassByID("rejected-jobs", "hidden");

  removeClassByID("all-jobs", "hidden");

  // Adding btn-dash class to all and remove from the all-tab so that it looks blue(primary) - Basically it will show which tab are active - btn dash make bg white
  addClassByID("all-tab", "btn-dash");
  addClassByID("interview-tab", "btn-dash");
  addClassByID("rejected-tab", "btn-dash");

  removeClassByID("all-tab", "btn-dash");

  // Get all the job-card and removing the hidden class from all so that all card appear in all-tab
  const jobCards = document.querySelectorAll(".job-card");

  for (const jobCard of jobCards) {
    jobCard.classList.remove("hidden");
  }

  const tabwiseCount1 = document.getElementById("tabwise-count-1");
  tabwiseCount1.classList.add("hidden");

  const tabwiseCount2 = document.getElementById("tabwise-count-2");
  tabwiseCount2.classList.add("hidden");
});

// Interview Tab Button Related

document.getElementById("interview-tab").addEventListener("click", function () {
  // Hidding the interview tab and rejected tab (no available offer section) and enable again the interview tab
  addClassByID("interview-jobs", "hidden");
  addClassByID("rejected-jobs", "hidden");

  removeClassByID("interview-jobs", "hidden");

  // For looking which button is active now - Adding btn-dash to all and removing from current(interview tab) so that it gets the btn-primay class only -  looks blue/active

  addClassByID("all-tab", "btn-dash");
  addClassByID("interview-tab", "btn-dash");
  addClassByID("rejected-tab", "btn-dash");

  removeClassByID("interview-tab", "btn-dash");

  // Only show the interview button clicked card in the interview tab - idea is checking the job status of all card - only interview status will appear in the interview tab

  const jobCards = document.querySelectorAll(".job-card");

  let counter = 0;

  for (const jobCard of jobCards) {
    const currentStatusElement = jobCard.querySelector(".job-status");

    const currentStatusText = currentStatusElement.innerText;

    jobCard.classList.add("hidden");

    if (currentStatusText === "INTERVIEW") {
      jobCard.classList.remove("hidden");
      counter = counter + 1;
    }

    const tabwiseCount1 = document.getElementById("tabwise-count-1");
    tabwiseCount1.classList.remove("hidden");
    tabwiseCount1.innerText = counter;

    const tabwiseCount2 = document.getElementById("tabwise-count-2");
    tabwiseCount2.classList.remove("hidden");
  }

  // This counter will check if there is at least one card which job status is interview. If there is then it will hide the no jobs available section
  if (counter > 0) {
    addClassByID("interview-jobs", "hidden");
  }
});

// Rejected Tab Button Related

document.getElementById("rejected-tab").addEventListener("click", function () {
  addClassByID("interview-jobs", "hidden");
  addClassByID("rejected-jobs", "hidden");

  removeClassByID("rejected-jobs", "hidden");

  addClassByID("all-tab", "btn-dash");
  addClassByID("interview-tab", "btn-dash");
  addClassByID("rejected-tab", "btn-dash");

  removeClassByID("rejected-tab", "btn-dash");

  const jobCards = document.querySelectorAll(".job-card");

  let counter = 0;

  for (const jobCard of jobCards) {
    const currentStatusElement = jobCard.querySelector(".job-status");

    const currentStatusText = currentStatusElement.innerText;

    jobCard.classList.add("hidden");

    if (currentStatusText === "REJECTED") {
      jobCard.classList.remove("hidden");
      counter = counter + 1;
    }

    const tabwiseCount1 = document.getElementById("tabwise-count-1");
    tabwiseCount1.classList.remove("hidden");
    tabwiseCount1.innerText = counter;

    const tabwiseCount2 = document.getElementById("tabwise-count-2");
    tabwiseCount2.classList.remove("hidden");
  }

  if (counter > 0) {
    addClassByID("rejected-jobs", "hidden");
  }
});

// Interview Button Related Updated
const interviewButtonElements = document.querySelectorAll(".interview-button");

for (const interviewButtonElement of interviewButtonElements) {
  interviewButtonElement.addEventListener("click", function () {
    const parentInterview = interviewButtonElement.parentElement.parentElement;

    const currentStatusElement = parentInterview.querySelector(".job-status");

    if (currentStatusElement.innerText === "NOT APPLIED") {
      currentStatusElement.innerText = "INTERVIEW";

      // Updating in InterView Number in Header
      const currentInterviewNumber = getTextByID("interview-number");

      const newInterviewNumber = Number(currentInterviewNumber) + 1;

      setTextByID("interview-number", newInterviewNumber);

      // Disable the interview button to handle the multiple click
      interviewButtonElement.disabled = true;
    } else {
      currentStatusElement.innerText = "INTERVIEW";

      const rejectedTab = document.getElementById("rejected-tab");

      if (!rejectedTab.classList.contains("btn-dash")) {
        parentInterview.classList.add("hidden");
      }

      // Updatting both interview number and rejected number
      const currentInterviewNumber = getTextByID("interview-number");
      const newInterviewNumber = Number(currentInterviewNumber) + 1;

      const currentRejectedNumber = getTextByID("rejected-number");
      const newRejectedNumber = Number(currentRejectedNumber) - 1;

      setTextByID("interview-number", newInterviewNumber);
      setTextByID("rejected-number", newRejectedNumber);

      if (newRejectedNumber === 0) {
        removeClassByID("rejected-jobs", "hidden");
      }

      // Disable the button and active another to handle multiple click problems

      interviewButtonElement.disabled = true;

      const immediateParent = interviewButtonElement.parentElement;
      const rejectedButton = immediateParent.querySelector(".rejected-button");
      rejectedButton.disabled = false;

      const tabwiseCount1 = document.getElementById("tabwise-count-1");
      const currentCountElement1 = document.getElementById("rejected-number");

      const currentCount1 = currentCountElement1.innerText;
      tabwiseCount1.innerText = currentCount1;

    }
  });
}

// Rejected Button Related Updated
const rejectedButtonElements = document.querySelectorAll(".rejected-button");

for (const rejectedButtonElement of rejectedButtonElements) {
  rejectedButtonElement.addEventListener("click", function () {
    const parentInterview = rejectedButtonElement.parentElement.parentElement;

    const currentStatusElement = parentInterview.querySelector(".job-status");

    if (currentStatusElement.innerText === "NOT APPLIED") {
      currentStatusElement.innerText = "REJECTED";

      // Updating in Rejected Number in Header

      const currentRejectedNumber = getTextByID("rejected-number");
      const newRejectedNumber = Number(currentRejectedNumber) + 1;

      setTextByID("rejected-number", newRejectedNumber);

      // Disable the rejected button to handle the multiple click
      rejectedButtonElement.disabled = true;
    } else {
      currentStatusElement.innerText = "REJECTED";

      const interviewTab = document.getElementById("interview-tab");

      if (!interviewTab.classList.contains("btn-dash")) {
        parentInterview.classList.add("hidden");
      }

      // Updatting both interview number and rejected number
      const currentInterviewNumber = getTextByID("interview-number");
      const newInterviewNumber = Number(currentInterviewNumber) - 1;

      const currentRejectedNumber = getTextByID("rejected-number");
      const newRejectedNumber = Number(currentRejectedNumber) + 1;

      setTextByID("interview-number", newInterviewNumber);
      setTextByID("rejected-number", newRejectedNumber);

      if (newInterviewNumber === 0) {
        removeClassByID("interview-jobs", "hidden");
      }

      // Disable the button and active another to handle multiple click problems

      const immediateParent = rejectedButtonElement.parentElement;
      const interviewButton = immediateParent.querySelector(".interview-button");
      interviewButton.disabled = false;
      rejectedButtonElement.disabled = true;

      const tabwiseCount1 = document.getElementById("tabwise-count-1");
      const currentCountElement1 = document.getElementById("interview-number");

      const currentCount1 = currentCountElement1.innerText;
      tabwiseCount1.innerText = currentCount1;
    }
  });
}

// Delte Button Related
const deleteButtonElements = document.querySelectorAll(".delete-button");

for (const deleteButtonElement of deleteButtonElements) {
  deleteButtonElement.addEventListener("click", function () {
    const deleteParent = deleteButtonElement.parentElement.parentElement;

    const currentStatusElement = deleteParent.querySelector(".job-status");

    if(currentStatusElement.innerText === "NOT APPLIED"){
      const currentTotalNumber = getTextByID("total-number");

      const newTotalNumber = Number(currentTotalNumber) - 1;

      if(newTotalNumber === 0){
        removeClassByID("interview-jobs", "hidden");
      }

      setTextByID("total-number", newTotalNumber);
      setTextByID("tabwise-count-3", newTotalNumber);

      deleteParent.remove();
    } 
    else if(currentStatusElement.innerText === "INTERVIEW"){
      const currentTotalNumber = getTextByID("total-number");
      const newTotalNumber = Number(currentTotalNumber) - 1;
      setTextByID("total-number", newTotalNumber);

      const currentInterviewNumber = getTextByID("interview-number");
      const newInterviewNumber = Number(currentInterviewNumber) - 1;
      setTextByID("interview-number", newInterviewNumber);

      setTextByID("tabwise-count-3", newTotalNumber);
      setTextByID("tabwise-count-1", newInterviewNumber);

      deleteParent.remove();

      // If there is no jobs in Interview tab it will enable the No Jobs avaiable section

      if (newInterviewNumber === 0) {
        removeClassByID("interview-jobs", "hidden");
      }
    } 
    else{
      const currentTotalNumber = getTextByID("total-number");
      const newTotalNumber = Number(currentTotalNumber) - 1;
      setTextByID("total-number", newTotalNumber);

      const currentRejectedNumber = getTextByID("rejected-number");
      const newRejectedNumber = Number(currentRejectedNumber) - 1;
      setTextByID("rejected-number", newRejectedNumber);

      setTextByID("tabwise-count-3", newTotalNumber);
      setTextByID("tabwise-count-1", newRejectedNumber);

      deleteParent.remove();

      // If there is no jobs in Rejected tab it will enable the No Jobs avaiable section

      if (newRejectedNumber === 0) {
        removeClassByID("rejected-jobs", "hidden");
      }
    }
  });
}

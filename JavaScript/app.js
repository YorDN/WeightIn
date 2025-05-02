let weights = JSON.parse(localStorage.getItem("weights") || "[]");
let goal = localStorage.getItem("goal");
let weightChart;


function saveWeight() {
  const input = document.getElementById("newWeight");
  const value = parseFloat(input.value);
  if (!isNaN(value)) {
    const today = new Date().toISOString().split('T')[0];
    weights.push({ weight: value, date: today });
    localStorage.setItem("weights", JSON.stringify(weights));
    input.value = "";
    updateUI();
  }
}

function setGoal() {
  const goalInput = document.getElementById("goalWeight");
  const value = parseFloat(goalInput.value);
  if (!isNaN(value)) {
    goal = value;
    localStorage.setItem("goal", goal);
    updateUI();
  }
}

function updateUI() {
  const last = weights[weights.length - 1];
  document.getElementById("lastWeight").textContent = last ? last.weight : "--";
  document.getElementById("lastDate").textContent = last ? last.date : "--";

  const history = document.getElementById("history");
  history.innerHTML = weights.slice(-3).reverse().map(e => 
    `<div class="history-entry"><span>${e.weight} kg</span><span>${e.date}</span></div>`
  ).join('');

  const goalInput = document.getElementById("goalWeight");
  const goalDisplay = document.getElementById("goalDisplay");
  goalInput.value = goal || "";
  goalDisplay.textContent = goal ? `Goal: ${goal} kg 😍` : "";

}

function viewAll() {
  alert(weights.map(e => `${e.date}: ${e.weight} kg`).join("\n"));
}

updateUI();

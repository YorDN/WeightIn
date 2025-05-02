let weights = JSON.parse(localStorage.getItem("weights") || "[]").reverse();
let goal = localStorage.getItem("goal");

let currentPage = 0;
const pageSize = 15;

function loadHistory(){
    let history = document.getElementById("history");

    const start = currentPage * pageSize;
    const end = start + pageSize;
    const weightRecords = weights.slice(start, end);

   const newHtml = weightRecords.map(e => 
        `<div class="history-entry"><span>${e.weight} kg</span><span>${e.date}</span></div>`
    ).join('');

    history.insertAdjacentHTML("beforeend", newHtml);

    currentPage++;

    if(currentPage * pageSize >= weights.length){
        document.getElementById('showMore').style.display = 'none';
    }
}



loadHistory();
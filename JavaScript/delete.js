let weights = JSON.parse(localStorage.getItem("weights") || "[]").reverse();
let goal = localStorage.getItem("goal");

function deleteData(){
    if(confirm("Are you REALLY sure you want to delete ALL of your data?")){
        weights = [];
        goal = "";
        localStorage.setItem("weights", JSON.stringify(weights));
        localStorage.setItem("goal", goal);
        location.reload();
    }
}
var count = 0;
const lastCount=[];
// let countEl = ;
// console.log(countEl)

function increment() {
  count++;
  document.getElementById("current-count").innerText = count;
  lastCount[count-1] = count;
  
}

function save() {
    document.getElementById("saved-count").innerText = lastCount[lastCount.length-1];
}

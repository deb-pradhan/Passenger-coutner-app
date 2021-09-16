var count = 0;
var prevCount;

function increment() {
  count++;
  document.getElementById("current-count").innerText = count;
}

function save() {
  prevCount = " - " + count;
  document.getElementById("saved-count").innerText += prevCount;
  document.getElementById("current-count").innerText = 0;
  count = 0;
}

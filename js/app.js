require('electron').ipcRenderer.on('ping', (event, message) => {
  // console.log(message);
  displayChanged(message);
});

function displayChanged(inputDate) {
  var isDate = parseInt(inputDate);
  if (!isNaN(isDate)) {
    var toShow = new Date(isDate);
    document.getElementById("currentVal").value = inputDate;
    document.getElementById("utcDate").innerHTML = toShow.toISOString();
    document.getElementById("localDate").innerHTML = toShow.toString();
  }
}

function refresh() {
  var currentValue = document.getElementById("currentVal").value;
  // console.log("Refreshed : " + currentValue);
  displayChanged(currentValue);
}

document.getElementById('refresh').addEventListener('click', () => { refresh() });
document.getElementById('currentVal').addEventListener('change', () => { refresh() });

document.getElementById('currentVal').value = Date.now();
refresh();
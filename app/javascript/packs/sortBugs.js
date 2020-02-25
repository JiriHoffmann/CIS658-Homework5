let bugIndex = document.getElementById("bugIndex");
let userButton = document.getElementById("userButton");
let titleButton = document.getElementById("titleButton");
let descriptionButton = document.getElementById("descriptionButton");
let issueButton = document.getElementById("issueButton");
let priorityutton = document.getElementById("priorityButton");
let statusrButton = document.getElementById("statusButton");

let tbody = bugIndex.getElementsByTagName("tbody")[0];
let tr = tbody.getElementsByTagName("tr");
tr = Array.prototype.slice.call(tr);
let newTr;

userButton.addEventListener("click", event => {
  sortBy(0);
});
titleButton.addEventListener("click", event => {
  sortBy(1);
});
descriptionButton.addEventListener("click", event => {
  sortBy(2);
});
issueButton.addEventListener("click", event => {
  sortBy(3);
});
priorityButton.addEventListener("click", event => {
  sortBy(4);
});
statusButton.addEventListener("click", event => {
  sortBy(5);
});

sortBy = field => {
  newTr = tr.sort((a, b) =>
    a.cells[field].innerText.localeCompare(b.cells[field].innerText)
  );
  tbody.innerHTML = "";
  newTr.forEach(element => {
    tbody.appendChild(element);
  });
};

const table = document.getElementById("table-body");
const API_PROV = "https://indonesia-covid-19.mathdro.id/api/provinsi";
const arr = [];

const getData = () => {
  fetch(API_PROV)
    .then((response) => response.json())
    .then((result) => {
      result.data.forEach((item, index) => {
        arr.push(item);
        let row = table.insertRow(index);
        row.insertCell(0).innerHTML = index + 1;
        row.insertCell(1).innerHTML = item.provinsi;
        row.insertCell(2).innerHTML = item.kasusPosi.toLocaleString("id-ID");
        row.insertCell(3).innerHTML = item.kasusSemb.toLocaleString("id-ID");
        row.insertCell(4).innerHTML = item.kasusMeni.toLocaleString("id-ID");
      });
    })
    .catch((err) => console.log(err, "Error euy..."));
};

getData();

const button = document.querySelector(".input-search-button");
const print = document.getElementById("result-container");

button.addEventListener("click", function () {
  let keyword = document.querySelector(".input-search-text").value;
  const regex = new RegExp(`${keyword}`, "ig");
  arr.forEach((data, index) => {
    if (regex.test(`${data.provinsi}`)) {
      let row = table.insertRow(index);
      row.insertCell(0).innerHTML = index + 1;
      row.insertCell(1).innerHTML = data.provinsi;
      row.insertCell(2).innerHTML = data.kasusPosi.toLocaleString("id-ID");
      row.insertCell(3).innerHTML = data.kasusSemb.toLocaleString("id-ID");
      row.insertCell(4).innerHTML = data.kasusMeni.toLocaleString("id-ID");
    }
  });
});

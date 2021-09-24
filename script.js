const table = document.getElementById("table-body");
const API_PROV = "https://indonesia-covid-19.mathdro.id/api/provinsi";
const arr = [];

const getData = () => {
  fetch(API_PROV)
    .then((response) => response.json())
    .then((result) => {
      result.data.forEach((item, index) => {
        arr.push(item);
        table.innerHTML += `
          <tr>
            <th>${index + 1}</th>
            <td>${item.provinsi}</td>
            <td>${item.kasusPosi.toLocaleString("id-ID")}</td>
            <td>${item.kasusSemb.toLocaleString("id-ID")}</td>
            <td>${item.kasusMeni.toLocaleString("id-ID")}</td>
          </tr>
          `;
      });
    })
    .catch((err) => console.log(err, "Error euy..."));
};

getData();

const button = document.querySelector(".input-search-button");
const print = document.getElementById("result-container");

button.addEventListener("click", function () {
  let keyword = document.querySelector(".input-search-text").value;
  table.innerHTML = "";
  const regex = new RegExp(`${keyword}`, "ig");
  let counter = 1;
  arr.forEach((item) => {
    if (regex.test(`${item.provinsi}`)) {
      table.innerHTML += `
      <tr>
        <th>${counter++}</th>
        <td>${item.provinsi}</td>
        <td>${item.kasusPosi.toLocaleString("id-ID")}</td>
        <td>${item.kasusSemb.toLocaleString("id-ID")}</td>
        <td>${item.kasusMeni.toLocaleString("id-ID")}</td>
      </tr>
      `;
    }
  });
});
const cities = ["Москва", "Лондон", "Берлин", "Стамбул", "Подгорица"];
const temperature = [];
const cityTemp = document.querySelectorAll("p");
const maxMinTemp = document.querySelectorAll("strong");
// console.log(cityTemp);
// console.log(maxMinTemp);

for (let i = 0; i < cities.length; i++) {
  let temp = prompt("Введите температуру", 0);
  temperature.push(Number(temp));
  //console.log(temp);
  cityTemp[i].textContent += `${Number(temp)} \u00B0C`;
  //console.log(cityTemp[i]);
}
const min = Math.min(...temperature);
// console.log(min);
const max = Math.max(...temperature);
// console.log(max);

maxMinTemp[0].textContent += `${max} \u00B0C`;
maxMinTemp[1].textContent += `${min} \u00B0C`;

const cities = ["Москва", "Лондон", "Берлин", "Стамбул", "Подгорица"];
const temperature = [];
const cityTemp = document.querySelectorAll("p");
const maxMinTemp = document.querySelectorAll("strong");

for (let i = 0; i < cities.length; i++) {
  let temp = prompt(`Введите температуру для города ${cities[i]}`, 0);
  if (isNaN(temp)) {
    temp = 0;
  }
  temperature.push(Number(temp));
  cityTemp[i].textContent += `${Number(temp)} \u00B0C`;
  console.log(cityTemp[i]);
}
const min = Math.min(...temperature);
const max = Math.max(...temperature);

for (let i = 0; i < maxMinTemp.length; i++) {
  if (maxMinTemp[i].textContent.indexOf("Максимальная")) {
    maxMinTemp[i].textContent += `${max} \u00B0C`;
  } else maxMinTemp[i].textContent += `${min} \u00B0C`;
}

const locationInfo = document.querySelector("#location");

locationInfo.addEventListener("click", () => {
  window.open(
    "https://yandex.by/maps/29632/brest-district/house/Zk8YdAZoTkUBQFtofXx5dHlqZg==/?ll=26.237429%2C52.087679&mode=search&sctx=ZAAAAAgBEAAaKAoSCXmu78NBjjtAES%2F6CtKM80pAEhIJ%2BWcG8YEd1z8R295uSQ7YvT8iBgABAgMEBSgKOABAzZ0GSAFqAnVhnQHNzEw9oAEAqAEAvQGkchYcwgEGsMD1wrsEggIu0LDQs9GA0L7Rg9GB0LDQtNGM0LHQsCDQvtGA0LXRiNC10Log0L%2FQuNC90YHQuooCAJICBTIxNTEwmgIMZGVza3RvcC1tYXBz&sll=26.237429%2C52.087679&sspn=0.211800%2C0.071313&text=%D0%B0%D0%B3%D1%80%D0%BE%D1%83%D1%81%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0%20%D0%BE%D1%80%D0%B5%D1%88%D0%B5%D0%BA%20%D0%BF%D0%B8%D0%BD%D1%81%D0%BA&z=12.77",
    "_blank"
  );
});

const countdown = document.querySelector(".countdown");
const targetDate = new Date("2024-06-23T15:00:00");

function updateCountdown() {
  const now = new Date();
  const remainingTime = targetDate - now;

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerText = seconds
    .toString()
    .padStart(2, "0");
}

updateCountdown();

// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000);

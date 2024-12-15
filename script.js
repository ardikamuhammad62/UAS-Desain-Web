const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 80);
});

// Menu List
function buttonLeft() {
  const carousel = document.getElementById("carousel");
  carousel.scrollBy({ left: -220, behavior: "smooth" });
}

function buttonRight() {
  const carousel = document.getElementById("carousel");
  carousel.scrollBy({ left: 220, behavior: "smooth" });
}
function buttonLeft2() {
  const carousel = document.getElementById("carousel2");
  carousel.scrollBy({ left: -220, behavior: "smooth" });
}

function buttonRight2() {
  const carousel = document.getElementById("carousel2");
  carousel.scrollBy({ left: 220, behavior: "smooth" });
}

// Pop Up Order
function placeOrder() {
  const ramenQty =
    parseInt(document.getElementById("ramen-quantity").value) || 0;
  const yakitoriQty =
    parseInt(document.getElementById("yakitori-quantity").value) || 0;
  const tempuraQty =
    parseInt(document.getElementById("tempura-quantity").value) || 0;
  const takoQty =
    parseInt(document.getElementById("takoyaki-quantity").value) || 0;
  const sushiQty =
    parseInt(document.getElementById("sushi-sashimi-quantity").value) || 0;
  const onigiriQty =
    parseInt(document.getElementById("onigiri-quantity").value) || 0;
  const curryQty =
    parseInt(document.getElementById("curry-quantity").value) || 0;
  const sobaQty = parseInt(document.getElementById("soba-quantity").value) || 0;
  const udonQty = parseInt(document.getElementById("udon-quantity").value) || 0;
  const misoQty = parseInt(document.getElementById("miso-quantity").value) || 0;
  const gyozaQty =
    parseInt(document.getElementById("gyoza-quantity").value) || 0;
  const nattoQty =
    parseInt(document.getElementById("natto-quantity").value) || 0;
  const teaQty = parseInt(document.getElementById("tea-quantity").value) || 0;
  const milkQty =
    parseInt(document.getElementById("MilkShake-quantity").value) || 0;
  const FruitTeaQty =
    parseInt(document.getElementById("FruitTea-quantity").value) || 0;
  const sodaQty = parseInt(document.getElementById("soda-quantity").value) || 0;
  const smoothieQty =
    parseInt(document.getElementById("smoothie-quantity").value) || 0;
  const machiatoQty =
    parseInt(document.getElementById("machiato-quantity").value) || 0;
  const mojitoQty =
    parseInt(document.getElementById("mojito-quantity").value) || 0;
  const matchaQty =
    parseInt(document.getElementById("matcha-quantity").value) || 0;

  if (
    ramenQty === 0 &&
    yakitoriQty === 0 &&
    tempuraQty === 0 &&
    takoQty === 0 &&
    sushiQty === 0 &&
    onigiriQty === 0 &&
    curryQty === 0 &&
    sobaQty === 0 &&
    udonQty === 0 &&
    misoQty === 0 &&
    gyozaQty === 0 &&
    nattoQty === 0 &&
    teaQty === 0 &&
    milkQty === 0 &&
    FruitTeaQty === 0 &&
    sodaQty === 0 &&
    smoothieQty === 0 &&
    machiatoQty === 0 &&
    mojitoQty === 0 &&
    matchaQty === 0
  ) {
    alert("Please order at least one item!");
    return;
  }

  let orderDetails = "You have ordered:\n";
  if (ramenQty > 0) orderDetails += `Ramen: ${ramenQty}\n`;
  if (yakitoriQty > 0) orderDetails += `Yakitori: ${yakitoriQty}\n`;
  if (tempuraQty > 0) orderDetails += `Tempura: ${tempuraQty}\n`;
  if (takoQty > 0) orderDetails += `Takoyaki: ${takoQty}\n`;
  if (sushiQty > 0) orderDetails += `Sushi & Sashimi: ${sushiQty}\n`;
  if (onigiriQty > 0) orderDetails += `Onigiri: ${onigiriQty}\n`;
  if (curryQty > 0) orderDetails += `Curry Rice: ${curryQty}\n`;
  if (sobaQty > 0) orderDetails += `Soba: ${sobaQty}\n`;
  if (misoQty > 0) orderDetails += `Miso Soup: ${misoQty}\n`;
  if (udonQty > 0) orderDetails += `Udon: ${udonQty}\n`;
  if (nattoQty > 0) orderDetails += `Natto: ${nattoQty}\n`;
  if (gyozaQty > 0) orderDetails += `Gyoza: ${gyozaQty}\n`;
  if (teaQty > 0) orderDetails += `Iced Tea: ${teaQty}\n`;
  if (milkQty > 0) orderDetails += `Milk Shake: ${milkQty}\n`;
  if (FruitTeaQty > 0) orderDetails += `Fruit Tea: ${FruitTeaQty}\n`;
  if (sodaQty > 0) orderDetails += `Soda: ${sodaQty}\n`;
  if (smoothieQty > 0) orderDetails += `Smoothie: ${smoothieQty}\n`;
  if (machiatoQty > 0) orderDetails += `Macchiato: ${machiatoQty}\n`;
  if (mojitoQty > 0) orderDetails += `Mojito: ${mojitoQty}\n`;
  if (matchaQty > 0) orderDetails += `Matcha Latte: ${matchaQty}\n`;

  alert(orderDetails);

  // Reset all values to 0
  document.getElementById("ramen-quantity").value = 0;
  document.getElementById("yakitori-quantity").value = 0;
  document.getElementById("tempura-quantity").value = 0;
  document.getElementById("takoyaki-quantity").value = 0;
  document.getElementById("sushi-sashimi-quantity").value = 0;
  document.getElementById("onigiri-quantity").value = 0;
  document.getElementById("curry-quantity").value = 0;
  document.getElementById("soba-quantity").value = 0;
  document.getElementById("udon-quantity").value = 0;
  document.getElementById("miso-quantity").value = 0;
  document.getElementById("gyoza-quantity").value = 0;
  document.getElementById("natto-quantity").value = 0;
  document.getElementById("tea-quantity").value = 0;
  document.getElementById("MilkShake-quantity").value = 0;
  document.getElementById("FruitTea-quantity").value = 0;
  document.getElementById("soda-quantity").value = 0;
  document.getElementById("smoothie-quantity").value = 0;
  document.getElementById("machiato-quantity").value = 0;
  document.getElementById("mojito-quantity").value = 0;
  document.getElementById("matcha-quantity").value = 0;
}

function showPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
  navlist.classList.toggle("active");
});

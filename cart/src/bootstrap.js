import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  // assuming the container MF doesn't have an element with id `dev-cart-local
  // a.k.a running cart app in isolation
  const el = document.querySelector("#dev-cart-local");
  if (el) mount(el);
}

export { mount };

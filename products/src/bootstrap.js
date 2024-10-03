import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  // assuming the container MF doesn't have an element with id `dev-products-local
  // a.k.a running products app in isolation
  const el = document.querySelector("#dev-products-local");
  if (el) mount(el);
}

export { mount };

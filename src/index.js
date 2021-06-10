const url = "https://platzi-avo.vercel.app";
const app = document.querySelector("#app")

const formatPrice = (price) => {
   const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
  
  return newPrice
}

window
.fetch(`${url}/api/avo`)
.then((response) => response.json())
.then((jsonReponse) => {
  const allStuff = [];
  
  jsonReponse.data.forEach((item) => {
    
    const image = document.createElement("img");
    image.src = `${url}${item.image}`;
    image.style = 'margin: auto auto;'
    
    const title = document.createElement("h2");
    title.textContent = item.name;
    title.className = "text-5xl";
    
    const price = document.createElement("div");
    price.textContent = formatPrice(item.price);
    
    const container = document.createElement("div");
    container.className = "mt-10 grid grid-cols-1 gap-2 shadow";

    container.append(image, title, price);
    
    
    allStuff.push(container);
  });
  app.append(...allStuff);
});

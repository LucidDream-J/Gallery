const url = "https://randomuser.me/api/?results=50";
getData();
const result = document.getElementById("result");
const filter = document.getElementById("filter");
const Btn = document.getElementById("toggle");
const listItems = [];

getData();

filter.addEventListener("input", (e) => filterData(e.target.value));
Btn.addEventListener("click", () => {
  location.reload();
  return false;
});

async function getData() {
  const res = await fetch(url);

  const { results } = await res.json();

  // Clear result
  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);
    console.log(li);
    li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
    result.appendChild(li);
  });
}

function filterData(searchItem) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

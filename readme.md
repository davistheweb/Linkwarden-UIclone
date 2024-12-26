# Linkwarden landing page clone 

# <a href="https://www.figma.com/design/CWFE222KgPWIM171dc3iBd/Linkwarden-Twitter?node-id=1-2&node-type=frame&t=AY27ZA9VvyJ2wiu8-0">Get the figma file design on </a>

const accessKey = "2-kCLRjzU3WG4UQGSqgMyf8gctEpp0RItWprWev_qmE";

const searchForm = document.querySelector(".input-form");
const searchBox = document.querySelector("#search-box");
const searchresult = document.querySelector("#search-result");
const showMoreBtn = document.querySelector("#show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page= ${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchresult.innerHTML = "";
  }

  const results = data.results;
  results.map((results) => {
    const image = document.createElement("img");
    image.src = results.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = results.links.html;
    imageLink.target = "_blanck";

    imageLink.appendChild(image);

    searchresult.appendChild(imageLink);
  });

  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});

make me understand this code7

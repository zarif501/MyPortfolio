// 1. Data arrays for each tab (replace image paths with your real files)
const tabData = {
  projects: [
    { img: "public/assets/Certificates/0.jpg", title: "Project 1" },
    { img: "public/assets/Certificates/0.jpg", title: "Project 2" },
    { img: "public/assets/Certificates/Screenshot 3.png", title: "Project 3" },
    { img: "public/assets/Certificates/Screenshot 4.png", title: "Project 4" },
    { img: "public/assets/Certificates/Screenshot 5.png", title: "Project 5" },
    { img: "public/assets/Certificates/Screenshot 6.png", title: "Project 6" },
    { img: "public/assets/Certificates/Screenshot 7.png", title: "Project 7" },
    { img: "public/assets/Certificates/Screenshot 8.png", title: "Project 8" },
  ],
  certificates: [
    { img: "public/assets/Certificates/1.jpg", title: "Certificate 1" },
    { img: "public/assets/Certificates/2.jpg", title: "Certificate 2" },
    { img: "public/assets/Certificates/3.jpg", title: "Certificate 3" },
    { img: "public/assets/Certificates/4.jpg", title: "Certificate 4" },
    { img: "public/assets/Certificates/5.jpg", title: "Certificate 5" },
    { img: "public/assets/Certificates/6.jpg", title: "Certificate 6" },
    { img: "public/assets/Certificates/7.jpg", title: "Certificate 7" },
    { img: "public/assets/Certificates/8.jpg", title: "Certificate 8" },
    { img: "public/assets/Certificates/9.jpg", title: "Certificate 9" },
    { img: "public/assets/Certificates/10.jpg", title: "Certificate 10" },
    { img: "public/assets/Certificates/11.jpg", title: "Certificate 11" },
    { img: "public/assets/Certificates/12.jpg", title: "Certificate 12" },
  ],
  "tech-stack": [
    { img: "public/assets/tech/html.svg", title: "HTML5" },
    { img: "public/assets/tech/css.png", title: "CSS3" },
    { img: "public/assets/tech/js.svg", title: "JS" },
    { img: "public/assets/tech/react.png", title: "React" },
    { img: "public/assets/tech/vite.png", title: "Vite" },
    { img: "public/assets/tech/prettier.svg", title: "Prettier" },
    { img: "public/assets/tech/eslint.png", title: "eslint" },
    { img: "public/assets/tech/git.svg", title: "Git" },
    { img: "public/assets/tech/github.png", title: "GitHub" },
    { img: "public/assets/tech/python.svg", title: "Python" },
  ],
};

const btnsContainer = document.querySelector("#portfolio-btns");
const allStatCards = document.querySelectorAll(".stats");
const cardsContainer = document.querySelector("#cards-container");
const loadMoreBtn = document.querySelector("#load-more-btn");

const ITEMS_PER_PAGE = 4;
let currentTab = "projects";
let currentIndex = 0;

function renderBatch() {
  const currentList = tabData[currentTab] || [];
  const nextSlice = currentList.slice(
    currentIndex,
    currentIndex + ITEMS_PER_PAGE,
  );

  const isTechStack = currentTab === "tech-stack";

  const htmlChunk = nextSlice
    .map(
      (item) => `
    <div class="portfolio-showcase-img ${isTechStack ? "tech-card" : ""}">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      ${isTechStack ? `<span class="tech-title">${item.title}</span>` : ""}
    </div>
  `,
    )
    .join("");

  cardsContainer.insertAdjacentHTML("beforeend", htmlChunk);
  currentIndex += ITEMS_PER_PAGE;

  if (currentIndex >= currentList.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

function switchTab(tabKey) {
  currentTab = tabKey;
  currentIndex = 0;
  cardsContainer.innerHTML = "";

  if (currentTab === "tech-stack") {
    cardsContainer.classList.add("tech-grid");
  } else {
    cardsContainer.classList.remove("tech-grid");
  }

  renderBatch();
}

btnsContainer.addEventListener("click", (e) => {
  const clickedStat = e.target.closest(".stats");
  if (!clickedStat) return;

  const tabKey = clickedStat.dataset.tab;
  if (!tabData[tabKey]) return;

  allStatCards.forEach((card) => card.classList.remove("active"));
  clickedStat.classList.add("active");

  switchTab(tabKey);
});

loadMoreBtn.addEventListener("click", renderBatch);

switchTab("projects");

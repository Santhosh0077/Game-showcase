const gameData = {
  mobile: [
    {
      title: "Call of Duty: Mobile",
      size: "~2.3 GB",
      rating: "4.3★",
      downloads: "100M+",
      fact: "Optional downloads let users control storage.",
      image: "images/call-of-duty-mobile.jpg"
    },
    {
      title: "Genshin Impact",
      size: "~29 GB",
      rating: "3.4★",
      downloads: "100M+",
      fact: "Full cross-platform open-world RPG.",
      image: "images/Genshin Impact.jpg"
    },
    {
      title: "Clash Royale",
      size: "~1 GB",
      rating: "4.3★",
      downloads: "500M+",
      fact: "Still attracts 3M+ monthly downloads.",
      image: "images/clash-royale.jpg"
    },
    {
      title: "PUBG Mobile / BGMI",
      size: "~3–12 GB",
      rating: "4.3★",
      downloads: "500M+",
      fact: "Highly customizable asset downloads.",
      image: "images/pubg-mobile.jpg"
    }
  ],
  pc: [
    {
      title: "Elden Ring",
      size: "~90 GB",
      rating: "91% (Steam)",
      downloads: "30M+",
      fact: "DLC 'Nightreign' adds 2-player mode.",
      image: "images/elden-ring.jpg"
    },
    {
      title: "Minecraft",
      size: "~1 GB",
      rating: "4.6★",
      downloads: "300M+",
      fact: "Best-selling game of all time globally.",
      image: "images/minecraft.jpg"
    },
    {
      title: "Valorant",
      size: "~28 GB",
      rating: "22M+ Monthly",
      downloads: "Not on Steam",
      fact: "Regular esports tournaments boost popularity.",
      image: "images/valorant.jpg"
    },
    {
      title: "GTA V",
      size: "~85–100 GB",
      rating: "Very Positive",
      downloads: "190M+",
      fact: "Still trending 10+ years after release.",
      image: "images/gta-v.jpg"
    }
  ],
  playstation: [
    {
      title: "Marvel’s Spider‑Man 2",
      size: "~50–70 GB",
      rating: "4.8★",
      downloads: "11M+",
      fact: "Fastest-selling PlayStation exclusive.",
      image: "images/spiderman-2..jpg"
    },
    {
      title: "God of War: Ragnarök",
      size: "~70 GB",
      rating: "Critically acclaimed",
      downloads: "15M+",
      fact: "Ranked among top 3 best PS5 games.",
      image: "images/god-of-war.jpg"
    },
    {
      title: "Hogwarts Legacy",
      size: "~70–80 GB",
      rating: "4.5★",
      downloads: "30M+",
      fact: "Top-selling game of 2023.",
      image: "images/hogwarts-legacy.jpg"
    },
    {
      title: "The Last of Us Part II: Remastered",
      size: "~50–60 GB",
      rating: "Very Positive",
      downloads: "10M+",
      fact: "Improved visuals and accessibility options.",
      image: "images/last-of-us-2.jpg"
    }
  ]
};

const section = document.getElementById("game-cards");
const buttons = document.querySelectorAll(".tab-btn");

function renderCards(category) {
  section.innerHTML = "";
  gameData[category].forEach((game) => {
    const card = document.createElement("div");
    card.className = `card ${category}`;
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}" />
      <div class="card-content">
        <h3>${game.title}</h3>
        <p><strong>Size:</strong> ${game.size}</p>
        <p><strong>Rating:</strong> ${game.rating}</p>
        <p><strong>Downloads:</strong> ${game.downloads}</p>
        <p><em>${game.fact}</em></p>
      </div>
    `;
    section.appendChild(card);
  });
  observeCards();
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderCards(btn.dataset.category);
  });
});

function observeCards() {
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => observer.observe(card));
}

// Load default category
renderCards("mobile");

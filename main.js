// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Lucide icons
lucide.createIcons();

// Fetch GitHub projects dynamically
const projectList = document.getElementById("project-list");
const githubUser = "ricky-arianto";
fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated`)
  .then(res => res.json())
  .then(repos => {
    repos.forEach(repo => {
      if(!repo.fork){
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description"}</p>
          <a href="${repo.html_url}" target="_blank">View Repo</a>
        `;
        projectList.appendChild(card);
      }
    });
  })
  .catch(err => console.error(err));

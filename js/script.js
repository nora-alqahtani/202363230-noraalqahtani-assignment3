// Contact form validation and feedback

const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  formFeedback.className = "";

  if (!name || !email || !message) {
    formFeedback.textContent = "Please fill in all fields before submitting.";
    formFeedback.className = "feedback-error";
    return;
  }

  if (!document.getElementById("email").validity.valid) {
    formFeedback.textContent = "Please enter a valid email address.";
    formFeedback.className = "feedback-error";
    return;
  }

  formFeedback.textContent = `Thank you, ${name}! Your form was submitted successfully.`;
  formFeedback.className = "feedback-success";

  contactForm.reset();
});


// Live project search
const projectSearch = document.getElementById("project-search");
const projectCards = document.querySelectorAll(".project-card");
const noProjectsMessage = document.getElementById("no-projects-message");

projectSearch.addEventListener("input", function () {
  const searchText = projectSearch.value.toLowerCase().trim();
  let visibleProjects = 0;

  projectCards.forEach(function (card) {
    const projectName = card.querySelector("h3").textContent.toLowerCase();

    if (projectName.includes(searchText)) {
      card.style.display = "";
      visibleProjects++;
    } else {
      card.style.display = "none";
    }
  });
  noProjectsMessage.hidden = visibleProjects > 0;
});

// Dark and light mode
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark-mode", isDark);
  themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

const savedTheme = localStorage.getItem("portfolio-theme");
applyTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", function () {
  const newTheme = document.body.classList.contains("dark-mode")
    ? "light"
    : "dark";

  applyTheme(newTheme);
  localStorage.setItem("portfolio-theme", newTheme);
});


// GitHub API Integration
const githubRepos = document.getElementById("github-repos");

async function fetchGitHubRepos() {
  try {
    const response = await fetch(
      "https://api.github.com/users/nora-alqahtani/repos?sort=updated&per_page=6"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repos = await response.json();

    // Hide the old Fayidh repository
    const filteredRepos = repos.filter(
      (repo) => repo.name.toLowerCase() !== "fayidh"
    );

    // Fetch the final Fayidh team repository
    const teamResponse = await fetch(
      "https://api.github.com/repos/lluja1n/Phase4-Fayidh"
    );

    if (!teamResponse.ok) {
      throw new Error("Failed to fetch Fayidh team repository");
    }

    const fayidhRepo = await teamResponse.json();

    // Include the final Fayidh project
    const displayRepos = [fayidhRepo, ...filteredRepos];

    githubRepos.innerHTML = "";

    if (displayRepos.length === 0) {
      githubRepos.textContent = "No public repositories found.";
      return;
    }

    displayRepos.forEach(function (repo) {
      const card = document.createElement("div");
      card.className = "github-repo-card";

      const title = document.createElement("h3");
      title.textContent = repo.name;

      const description = document.createElement("p");

      const customDescriptions = {
        "Phase4-Fayidh":
          "A web-based marketplace for selling and donating surplus materials and equipment.",

        "202363230-noraalqahtani-assignment3":
          "A personal portfolio website showcasing my projects, skills, and web development experience.",

        "recipe-book":
          "A recipe book project for exploring and organizing recipes.",

        "proj":
          "A web development project created to practice programming and website design."
      };

      description.textContent =
        customDescriptions[repo.name] ||
        repo.description ||
        "No description available.";


      const link = document.createElement("a");
      link.href = repo.html_url;
      link.textContent = "View on GitHub";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      card.append(title, description, link);
      githubRepos.appendChild(card);
    });

  } catch (error) {
    githubRepos.textContent =
      "Unable to load GitHub repositories. Please try again later.";
    console.error("GitHub API error:", error);
  }
}

fetchGitHubRepos();

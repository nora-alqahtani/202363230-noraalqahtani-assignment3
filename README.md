# Personal Portfolio Website — Assignment 3

## About the Project

This project is an advanced version of my personal portfolio website developed for SWE 363. It builds on Assignments 1 and 2 by introducing more interactive features, external API integration, and improved JavaScript functionality.

The website introduces my background as a Computer Science student, showcases my academic projects, and provides a contact form. Assignment 3 focuses on improving user interaction, managing application state, and enhancing performance and usability.

## Features

- About Me section with my academic background and interests
- Projects section showcasing two academic projects with images
- Live project search, category filtering, and alphabetical sorting
- GitHub API integration to dynamically display public repositories
- Custom project descriptions and links to GitHub repositories
- Dark and light mode with preferences saved using `localStorage`
- Advanced contact form validation with confirmation and feedback messages
- Responsive design for desktop, tablet, and mobile screens
- Smooth scrolling, hover effects, and transitions
- Performance testing using Google Lighthouse

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub REST API
- Fetch API with `async/await`
- CSS Flexbox and CSS Grid
- Media Queries
- Web Storage API (`localStorage`)
- Google Lighthouse

## Projects Included

### KFUPM Parking Reservation System

Designed a KFUPM parking reservation system prototype that helps users view parking availability and reserve parking spaces efficiently.

### In-Memory File System Simulator

Developed an in-memory file system simulator using OOP, HashMaps, trees, DFS, and KMP to support efficient file operations.

## Project Structure

```text
202363230-noraalqahtani-assignment3/
├── assets/
│   └── images/
│       ├── file-system-project.png
│       └── parking-project.png
├── css/
│   └── styles.css
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── js/
│   └── script.js
├── .gitignore
├── index.html
└── README.md
```

### File Descriptions

- `index.html` — Contains the About Me, Projects, GitHub Repositories, and Contact sections.
- `css/styles.css` — Contains the website styling, responsive layout, theme colors, and GitHub repository cards.
- `js/script.js` — Handles API integration, project search, filtering, sorting, theme switching, and contact form validation.
- `assets/images/` — Stores images of my academic projects.
- `docs/ai-usage-report.md` — Documents AI tools, usage logs, modifications, and learning outcomes.
- `docs/technical-documentation.md` — Explains the technical implementation and performance testing.
- `README.md` — Provides project information and setup instructions.
- `.gitignore` — Excludes unnecessary files and AI evidence from the repository.

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/nora-alqahtani/202363230-noraalqahtani-assignment3.git
   ```

2. Open the project folder in Visual Studio Code.
3. Open `index.html` using the Live Server extension.
4. The website will open in a browser, typically at `http://127.0.0.1:5500/`.

No additional dependencies or backend server are required. An internet connection is needed to fetch GitHub repository data.

## JavaScript Features

### GitHub API Integration

The website connects to the GitHub REST API using `fetch()` and `async/await` to retrieve and display public repositories.

It displays repository names, descriptions, and links. The final Fayidh team repository is fetched separately, replacing the older Fayidh repository in the displayed list.

The API integration includes error handling to display a user-friendly message if the request fails.

### Project Search, Filtering, and Sorting

Visitors can search projects by name, filter them by category (Web or Programming), and sort them alphabetically (A–Z or Z–A).

These features work together using JavaScript array methods and conditional logic. A message appears when no projects match the selected criteria.

### Dark and Light Mode

Visitors can switch between light and dark themes. The selected preference is saved using `localStorage`, allowing the website to remember it after refreshing.

### Advanced Contact Form Validation

The contact form validates the visitor's name, email address, and message.

- All fields must be completed.
- Name must contain at least two characters.
- Email must have a valid format.
- Message must contain at least ten characters.
- A confirmation dialog appears before completing the submission.

The form displays appropriate success or error messages. It is a front-end demonstration and does not send messages to a server.

## Performance and Compatibility

The website was tested using Google Lighthouse in mobile mode.

| Category | Score |
|---|---|
| Performance | 99/100 |
| Accessibility | 100/100 |
| Best Practices | 100/100 |
| SEO | 91/100 |

The website uses responsive layouts, CSS Grid, Flexbox, and media queries to support different screen sizes. Additional cross-browser compatibility testing is recommended.

## AI Usage

I used ChatGPT (OpenAI) during Assignment 3 to assist with understanding requirements, GitHub API integration, JavaScript logic, debugging, contact form validation, UI styling, and documentation.

I reviewed and modified the AI-assisted code to fit my existing portfolio, tested the features in the browser, and verified the website's performance using Lighthouse.

Detailed AI usage information, including usage logs, benefits, challenges, learning outcomes, and the required declaration, is documented in `docs/ai-usage-report.md`.

## Author

Nora Alqahtani

SWE 363 — Web Engineering

## Repository

https://github.com/nora-alqahtani/202363230-noraalqahtani-assignment3
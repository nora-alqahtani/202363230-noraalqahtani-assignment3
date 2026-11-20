# Technical Documentation — Assignment 3

## 1. Project Overview

This project is an advanced version of my personal portfolio website developed for SWE 363. It builds on Assignments 1 and 2 using HTML, CSS, and JavaScript.

For Assignment 3, I added GitHub API integration, project filtering and sorting, advanced contact form validation, and improved UI styling. I also tested the website's performance using Google Lighthouse.

The main goal was to make the portfolio more interactive, dynamic, and user-friendly while maintaining a simple and responsive design.

## 2. HTML Structure

The website uses semantic HTML elements to organize the content.

- `header` contains the portfolio title, navigation links, and theme toggle.
- `main` contains the main website content.
- `section` separates the About Me, Projects, GitHub Repositories, and Contact sections.
- `article` is used for individual academic project cards.
- `form` contains the contact fields.
- `footer` contains the footer information.

I added category filtering and sorting dropdowns to the Projects section. I also added a GitHub Repositories section to display projects retrieved from the GitHub API.

## 3. CSS and Responsive Design

The website styling is stored in `css/styles.css`.

I used Flexbox for the header, navigation, and form layouts. CSS Grid is used to organize the academic project cards and GitHub repository cards.

A media query is used for screens that are 768px wide or smaller. On smaller screens, the project cards and GitHub repository cards appear in a single column, while the filter and sort controls stack vertically.

I also improved the button styling to maintain consistent colors, hover effects, and transitions across the website.

The website supports both light and dark mode, including the GitHub repository cards and filtering controls.

## 4. JavaScript Features

The JavaScript functionality is stored in `js/script.js`.

### GitHub API Integration

I used the GitHub REST API to retrieve public repository information dynamically.

The integration uses `fetch()` with `async/await` to request repository data from GitHub.

The website retrieves repositories from my GitHub account and separately fetches the final Fayidh team repository. It excludes my older Fayidh repository from the displayed results.

JavaScript creates repository cards containing the repository name, description, and GitHub link.

I also added custom descriptions for selected repositories to make the information clearer.

The API includes error handling using `try/catch` and `response.ok`. If a request fails, the website displays a user-friendly error message instead of leaving the section empty.

### Project Search, Filtering, and Sorting

The Projects section allows visitors to search for projects, filter by category, and sort alphabetically.

The filtering options are All Projects, Web Projects, and Programming Projects.

Sorting options include Default Order, Name A–Z, and Name Z–A.

JavaScript uses `filter()`, `sort()`, `includes()`, and `localeCompare()` to process the projects.

The features work together. For example, a visitor can select Programming Projects and search for a specific project.

I also added logic to restore the original project order when Default Order is selected.

If no projects match the selected options, the website displays a message.

### Dark and Light Mode

The theme toggle allows visitors to switch between light and dark mode.

JavaScript adds or removes the `dark-mode` class from the page. The selected theme is saved using `localStorage`, allowing the website to remember the user's preference after refreshing.

### Advanced Contact Form Validation

The contact form collects the visitor's name, email address, and message.

JavaScript validates the form using several conditions:

- All fields must be completed.
- The name must contain at least two characters.
- The email must have a valid format.
- The message must contain at least ten characters.
- The visitor must confirm the submission.

If the input is invalid, the website displays an error message.

If all checks pass and the visitor confirms, a success message appears and the form fields are cleared.

The form is a front-end demonstration and does not send messages to a backend server.

## 5. Project Images

The project screenshots are stored in `assets/images/`.

The portfolio includes images from two academic projects:

- KFUPM Parking Reservation System
- In-Memory File System Simulator

The images are displayed using responsive styling to fit different screen sizes.

## 6. Testing and Performance

I tested the website by checking:

- Navigation between the main sections.
- GitHub API integration and repository links.
- Project search with matching and nonmatching keywords.
- Category filtering and alphabetical sorting.
- Combined search, filter, and sort functionality.
- Dark and light mode, including saved preferences after refreshing.
- Contact form validation, confirmation, and feedback messages.
- Responsive layout at different browser widths.

I also used Google Lighthouse to test the website in mobile mode.

| Category | Score |
|---|---|
| Performance | 99/100 |
| Accessibility | 100/100 |
| Best Practices | 100/100 |
| SEO | 91/100 |

These results indicate that the website performs well in the tested environment.

## 7. File Organization

The project separates HTML, CSS, JavaScript, images, and documentation into different files and folders.

- `index.html` contains the website structure.
- `css/styles.css` contains the design and responsive styling.
- `js/script.js` contains the interactive features and API integration.
- `assets/images/` stores the project images.
- `docs/technical-documentation.md` explains the implementation.
- `docs/ai-usage-report.md` documents AI assistance and the learning process.
- `README.md` provides project information and setup instructions.

This organization makes the code easier to understand, update, and maintain.

## 8. Challenges and Solutions

During development, I encountered several challenges.

One challenge was integrating the GitHub API and displaying repository information dynamically. I used `async/await` and error handling to manage API requests and display appropriate messages.

Another challenge was combining project search, filtering, and sorting. I updated the JavaScript logic so that all three features work together and the original order can be restored.

I also adjusted the GitHub repository cards and buttons to maintain consistent styling in both light and dark mode.

These improvements helped me understand advanced JavaScript functionality, API integration, debugging, and responsive UI design.
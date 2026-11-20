# AI Usage Report — Assignment 3

## 1. AI Tool Used

For Assignment 3, I used ChatGPT (OpenAI, GPT-6) to help me improve my personal portfolio website from Assignment 2. I used it to understand the assignment requirements, implement advanced JavaScript features, integrate an external API, debug problems, improve the website design, and update the documentation.

All AI assistance for this assignment was provided through one ChatGPT conversation.

## 2. How I Used AI

### GitHub API Integration

I used ChatGPT to help me integrate the GitHub REST API into my portfolio using `fetch()` and `async/await`.

The feature retrieves my public GitHub repositories and displays their names, descriptions, and links dynamically.

I also modified the code to exclude my older Fayidh repository and display the final team repository instead. I added custom descriptions for selected repositories to make the information clearer.

### Project Search, Filtering, and Sorting

ChatGPT helped me extend the existing live project search by adding category filtering and alphabetical sorting.

I combined these features so visitors can search for projects, filter them by category, and sort them by name.

During testing, I noticed that the alphabetical sorting was affected by the "Project 1" and "Project 2" prefixes. I adjusted the sorting logic to use the actual project names and added a way to restore the original project order.

### Advanced Contact Form Validation

I used ChatGPT to improve the existing contact form by adding more validation conditions.

The updated form checks that all fields are completed, the name contains at least two characters, the email format is valid, and the message contains at least ten characters.

I also added a confirmation dialog before displaying the success message.

### UI Styling and Responsive Design

ChatGPT helped me style the GitHub repository cards and the filtering and sorting controls.

I adjusted the button colors and hover effects to keep the design consistent with the existing portfolio.

I also checked the appearance in light and dark mode.

### Performance Testing

I used ChatGPT for guidance on testing the website with Google Lighthouse.

I installed Live Server to run the website locally and used Lighthouse to evaluate performance, accessibility, best practices, and SEO.

The results were:

| Category | Score |
|---|---|
| Performance | 99/100 |
| Accessibility | 100/100 |
| Best Practices | 100/100 |
| SEO | 91/100 |

### Code Quality and Documentation

I used ChatGPT to help organize and review the Assignment 3 implementation and update the project documentation.

This included updating the README, technical documentation, and AI usage report to reflect the new features and testing results.

## 3. Benefits and Challenges

Using ChatGPT helped me understand advanced JavaScript concepts and implement new features without rebuilding my portfolio from the beginning.

It was especially useful for understanding API integration, asynchronous JavaScript, array methods, and combining multiple features.

One challenge was making the filtering and sorting logic work correctly together. Another was keeping the GitHub repository cards and buttons consistent with the existing website design.

I reviewed the suggested code and tested the changes in the browser to identify and correct these issues.

## 4. What I Learned

Through Assignment 3, I improved my understanding of:

- Using `fetch()` and `async/await` to retrieve external API data.
- Handling API errors with `try/catch`.
- Using JavaScript array methods such as `filter()`, `sort()`, and `forEach()`.
- Combining search, filtering, and sorting conditions.
- Validating form inputs using multiple conditions.
- Managing user preferences using `localStorage`.
- Testing website performance using Google Lighthouse.
- Debugging JavaScript and improving responsive UI styling.

I also learned how to integrate new functionality into an existing project while keeping the code organized.

## 5. Responsible Use and Modifications

I used ChatGPT as a learning and development tool rather than relying on its suggestions without reviewing them.

I reviewed the code, made adjustments based on my portfolio requirements, and tested the functionality in the browser.

For example, I corrected the alphabetical sorting to ignore the project number prefixes and added logic to restore the default order.

I also customized the GitHub API integration to display the final Fayidh team repository and added project descriptions.

For the UI, I adjusted the button colors and hover effects to maintain consistency in both light and dark mode.

I kept my original academic projects and website content while adding the new Assignment 3 functionality.

## 6. AI Usage Log

The following table documents my use of ChatGPT during Assignment 3. The conversation ID matches the complete conversation included in the AI Evidence ZIP.

| ID | Tool (model) | Date | Purpose | Files affected | What I changed and how I verified it |
|---|---|---|---|---|---|
| C01 | ChatGPT (OpenAI, GPT-6) | November 20, 2026 | Assignment setup, GitHub API integration, project filtering and sorting, advanced contact form validation, UI styling, debugging, performance testing, and documentation. | `index.html`, `css/styles.css`, `js/script.js`, `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md`, `.gitignore` | Reviewed and modified AI-assisted code, customized the GitHub repository display, corrected sorting behavior, improved button styling, tested search, filtering, sorting, form validation, and dark mode, and evaluated performance using Lighthouse. Reviewed documentation for accuracy. |

## 7. AI Declaration

I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Student Name:** Nora Alqahtani

**Student ID:** 202363230

**Date:** November 20, 2026

**Signature:** Nora Alqahtani
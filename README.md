# HNG Stage 1B Profile Card

A simple, responsive, and accessible profile card built with HTML, CSS, and JavaScript for the HNG Frontend Stage 1B task.

---

## Live Demo

[Live Demo](https://iibrahimx.github.io/hng-stage1b-profile-card/)

---

## Repository

[GitHub Repository](https://github.com/iibrahimx/hng-stage1b-profile-card)

---

## Features

- Semantic HTML structure
- Responsive layout for mobile, tablet, and desktop
- Live current time in milliseconds using `Date.now()`
- Circular avatar image with alt text
- Social links that open in a new tab
- Separate hobbies and dislikes sections
- Keyboard accessible navigation and focus states
- Required `data-testid` attributes for automated testing

---

## Technologies Used

- HTML
- CSS
- JavaScript

---

## How to Run Locally

### 1. Clone the repository:

```bash
git clone https://github.com/iibrahimx/hng-stage1b-profile-card.git
```

### 2. Open the project folder:

```bash
cd hng-stage1b-profile-card
```

### 3. Open the `index.html` file in your browser.

---

## Required Test IDs Included

The project includes all required data-testid attributes from the task instructions:

- test-profile-card
- test-user-name
- test-user-bio
- test-user-time
- test-user-avatar
- test-user-social-links
- test-user-social-github
- test-user-social-x
- test-user-social-linkedin
- test-user-hobbies
- test-user-dislikes

---

## Accessibility Notes

- Used semantic HTML elements such as `<article>`, `<header>`, `<figure>`, `<nav>`, `<section>`, and `<ul>`
- Added meaningful alt text for the profile image
- Added aria-live="polite" to the time element for screen readers
- Added visible focus styles for keyboard users
- Kept all social links keyboard accessible
- Used readable colors with good contrast

---

## Decisions Made

- Used plain HTML, CSS, and JavaScript as required by the task
- Used semantic tags instead of only div elements to improve accessibility and structure
- Used Flexbox for a responsive layout
- Stored the avatar image locally inside the project
- Used `Date.now()` with `setInterval()` to keep the time updated every second
- Kept the design simple and clean without adding unnecessary complexity

---

## Trade-offs

- Social links use simple local icon images to keep the design clean and easy to understand
- The project uses static profile information instead of fetching data from an API
- No external libraries or frameworks were used
- The project focuses only on the required task features

---

## Author

Ibrahim

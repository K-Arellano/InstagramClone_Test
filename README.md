# Instagram Homepage Clone

## Project Overview

This project replicates a responsive and somewhat functional version of the Instagram homepage using **Next.js (React TypeScript)** and **Tailwind CSS**. The goal was to closely match the design, layout, and features of the Instagram login page while ensuring responsiveness and accessibility across desktop and mobile devices.

## Folder Structure

```
.next/                 # Next.js build artifacts
components/            # Reusable UI components
  |-- AuthFooter.tsx   # Footer with links
  |-- AuthLayout.tsx   # Layout component for auth pages
  |-- LoginForm.tsx    # Login form component
  |-- MobileMockup.tsx # Mobile post mockup component
  |-- PageFooter.tsx   # Page footer with placeholder links
Data/
  |-- users.json       # Mock user data
hooks/
  |-- useLoginImageCycle.tsx # Hook for cycling login images
pages/                 # Next.js pages
  |-- api/
      |-- users.ts     # Mock API for user data
  |-- _app.tsx         # Custom App component
  |-- index.tsx        # Main page entry
  |-- Login.tsx        # Login page
  |-- SignUp.tsx       # (Planned) Sign-up page
public/                # Static assets
  |-- Various images (logos, placeholders)
styles/                # Styling files (if any custom CSS)
util/                  # Utility functions
  |-- atoms.ts         # State management (if needed)
.eslintrc.json         # Linting configuration
.prettierrc.json       # Prettier configuration
next-env.d.ts          # TypeScript environment configuration
```

## Features

### UI

- **Two-column layout on desktop:**
  - Left column: Mobile mockup with a placeholder image feed.
  - Right column: Login form with fields for username, password, and links for "Forgot Password," "Sign Up," and login buttons.
- **Footer section:** Contains placeholder links for navigation.
- **Responsive design:**
  - Desktop view shows the two-column layout.
  - Mobile view collapses into a single column layout.

### Functionality

- Form validation to ensure username and password are entered.
- Responsive and user-friendly design using Tailwind CSS.
- Reusable component architecture for scalable development.

## Planned Features

Although time constraints prevented full implementation, I planned to:

- Develop a complete **registration page** for new user sign-ups.
- Further enhance interactivity and animations.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-link>
   cd <project-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Deployment

The project is deployed via **Vercel** and can be accessed at:
[Deployed Project Link](#)

## Why TypeScript Over JavaScript

I chose **TypeScript** over **JavaScript** for several reasons:

1. **Strong Typing:** TypeScript’s static typing helps catch errors during development, reducing runtime bugs.
2. **Improved Developer Experience:** Features like IntelliSense and better autocompletion significantly boost productivity.
3. **Maintainability:** With clear type definitions, the codebase becomes easier to read and maintain as the project scales.
4. **Compatibility with Next.js:** TypeScript seamlessly integrates with Next.js, providing a strong foundation for building scalable React applications.

## Why Next.js

I chose **Next.js** for learning purposes, as it provides a powerful framework for building modern web applications with built-in server-side rendering, routing, and optimized performance features.

## Technologies Used

I chose **TypeScript** over **JavaScript** for several reasons:

1. **Strong Typing:** TypeScript’s static typing helps catch errors during development, reducing runtime bugs.
2. **Improved Developer Experience:** Features like IntelliSense and better autocompletion significantly boost productivity.
3. **Maintainability:** With clear type definitions, the codebase becomes easier to read and maintain as the project scales.
4. **Compatibility with Next.js:** TypeScript seamlessly integrates with Next.js, providing a strong foundation for building scalable React applications.

## Technologies Used

- **Next.js (React TS)** for server-side rendering and component-based architecture.
- **Tailwind CSS** for rapid UI development.
- **TypeScript** for strong typing and maintainability.
- **Vercel** for seamless deployment.

## Challenges & Learnings

- Successfully replicated key design elements and achieved responsive behavior.
- Overcame challenges in creating reusable components and handling validation.
- Limited time prevented completion of the Sign-Up page.

## Future Improvements

- Complete the Sign-Up page.
- Add animations for better user experience.
- Implement a light/dark mode toggle.



## Acknowledgments

Special thanks to the Instagram UI for design inspiration and the organizers for providing this technical challenge.


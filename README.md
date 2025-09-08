# Dan's Computer Repair Shop - Internal Dashboard

This is a web application built to serve as an internal dashboard for "Dan's Computer Repair Shop." It provides a user interface for managing key business operations, including repair tickets and customer information. The application features a clean, modern design with both light and dark modes.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Status](#project-status)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Future Development](#future-development)

## Tech Stack

This project is built with a modern, type-safe, and efficient technology stack:

-   **Framework**: [Next.js](https://nextjs.org/) 15 (with App Router)
-   **Build Tool**: Turbopack
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Button, Dropdown Menu)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode functionality.
-   **Fonts**: [Geist Sans](https://vercel.com/font) and [Geist Mono](https://vercel.com/font) for typography.

## Project Status

The project is currently in the initial development phase. The core layout, navigation, and basic UI components have been established. The main dashboard area is structured, and placeholder pages for key features have been created.

## Key Features

-   **Landing Page**: A visually appealing, public-facing landing page located at the root (`/`) of the application.
-   **Dashboard Layout**: A dedicated internal application layout under the `/(rs)` route group, featuring a persistent header and navigation.
-   **Responsive Header**: A sticky header component that includes the application title and primary navigation links.
-   **Icon-Based Navigation**: Intuitive navigation using `lucide-react` icons for links to Home, Tickets, and Customers.
-   **Dark/Light Mode**: A theme toggle in the header allows users to switch between light, dark, and system-default themes.
-   **Smooth Page Transitions**: Subtle fade-in and slide-down animations have been implemented for a better user experience as the user navigates the application.

## Project Structure

The codebase is organized following Next.js App Router conventions.

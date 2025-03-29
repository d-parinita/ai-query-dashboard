# Next.js Dashboard Website

## Live Link
https://leads-dashboard-web.vercel.app/

## Overview
This is a dashboard website built using **Next.js** that displays posts from the **JSONPlaceholder API** in a tabular format. The project demonstrates server-side rendering (SSR), filtering functionality, authentication with a dummy sign-in method, UI implementation with **ShadCN**, dark mode support, and full mobile responsiveness.

## Features
- **Server-Side Rendering (SSR)**: Posts are fetched and rendered on the server on initial load.
- **Filtering**: Users can filter posts by **User ID** and **Title**.
- **Dark Mode**: Implemented using **Context API**.
- **ShadCN UI**: Used for designing a sleek and modern UI.
- **Loader Implementation**: Managed via **Context API**.
- **Authentication**: Dummy sign-in method using **UUID** to generate a fake token.
- **Static Pages**: Includes a **Profile Page** and a **Settings Page**.
- **Fully Responsive**: Optimized for **mobile devices**.

## Tech Stack
- **Next.js** (Framework)
- **ShadCN** (UI Components)
- **Context API** (State Management for Dark Mode & Loader)
- **UUID** (Dummy Authentication)
- **Tailwind CSS** (Styling)

## Installation

### Setup Environment Variables
Create a `.env` file in the root directory and add the following:
```
NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com/
```

### Steps to Run the Project
```bash

# Install dependencies
npm install  # or yarn install

# Run the development server
npm run dev  # or yarn dev
```
The application will be available at: `http://localhost:3000`

## API Usage
The project uses the **JSONPlaceholder API** for fetching posts.
- **Endpoint:** `https://jsonplaceholder.typicode.com/posts`
- **Filters:** Users can filter posts by `userId` and `title`.

## Authentication (Dummy)
- The **Sign-In Page** accepts a username and generates a dummy token using `UUID`.
- The token is stored in **localStorage** for session management.
- No real authentication is implemented.

## Dark Mode
- Implemented using **Context API**.
- Saves user preference in **localStorage**.
- Uses **ShadCN themes** for switching between light and dark mode.


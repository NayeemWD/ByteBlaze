# ByteBlaze

ByteBlaze is a modern and visually appealing blog application built with React. It allows users to read articles, bookmark their favorites, and enjoy a dynamic user experience with theme-switching capabilities. The application fetches blog posts from the `dev.to` API and provides a seamless reading experience.

**Live Site:** [ByteBlaze](https://artical-project.netlify.app/)

## Features

- **User Authentication:** Secure user registration and login functionality powered by Firebase.
- **Browse Articles:** Users can view a list of blog posts fetched from the `dev.to` API.
- **Read Articles:** A dedicated page to read the full content of a selected article.
- **Bookmarking:** Users can save their favorite articles for later reading. Bookmarked articles are stored locally in the browser.
- **Theme Switching:** The application supports both light and dark themes, with the user's preference saved in `localStorage`.
- **Responsive Design:** The application is built with Tailwind CSS, ensuring a responsive and mobile-friendly layout.
- **Single Page Application (SPA):** Uses `react-router-dom` for client-side routing, providing a fast and smooth navigation experience.

## Project Structure

The project is structured as follows:

```
/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and other assets
│   ├── components/       # Reusable React components (e.g., Nav, Footer, BlogCard)
│   ├── Layouts/          # Main application layout (MainLayout.jsx)
│   ├── pages/            # Application pages (Home, Blogs, Bookmarks)
│   ├── routes/           # Routing configuration (Routes.jsx)
│   └── utils/            # Utility functions (e.g., bookmark management)
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web projects.
- **React Router Dom:** For declarative routing in React applications.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **daisyUI:** A plugin for Tailwind CSS that provides a set of pre-designed components.
- **Dev.to API:** Used to fetch blog articles.
- **React-Hot-Toast:** For adding notifications to the application.
- **React-Spinners:** For displaying loading indicators.
- **React-Markdown:** To render Markdown content.
- **Firebase Authentication:** For user authentication.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your-username/byteblaze.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server
    ```sh
    npm run dev
    ```

## Resources

- [React Router Dom](https://reactrouter.com/en/main)
- [Tailwindcss Buttons](https://devdojo.com/tailwindcss/buttons)
- [Mamba UI - Components](https://mambaui.com/components)
- [Animated Gradient Text](https://www.andrealves.dev/blog/how-to-make-an-animated-gradient-text-with-tailwindcss/)
- [Dev.to API Docs](https://developers.forem.com/api/v1#tag/articles/operation/getArticles)
- [React-Hot-Toast](https://react-hot-toast.com/)
- [React-Spinner](https://www.npmjs.com/package/react-spinners)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [React-Markdown](https://www.npmjs.com/package/react-markdown)
- [ReHype-Raw](https://www.npmjs.com/package/rehype-raw)
- [Prop-Types](https://www.npmjs.com/package/prop-types)
- [Daisy UI](https://daisyui.com/)
- [TailwindCSS](https://tailwindcss.com/)
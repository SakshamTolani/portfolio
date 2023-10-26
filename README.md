# Portfolio MERN Project 🚀

Welcome to the Portfolio project! This project consists of a MERN (MongoDB, Express.js, React.js, and Node.js) stack web application that allows you to manage user profiles, timelines, projects, and contact messages for your portfolio website.

## Backend API Endpoints 🛠️

The backend server provides the following API endpoints:

- `POST /api/login`: 🚪 Logs in a user by validating the email and password provided. Returns a token for authentication.

- `GET /api/logout`: 🚶 Logs out the authenticated user.

- `GET /api/user`: 👤 Retrieves user information without returning the password and email.

- `GET /api/me`: 🧍‍♀️ Retrieves the authenticated user's profile information (requires authentication).

- `POST /api/contact`: 📧 Sends a contact message by accepting the name, email, and message in the request body.

- `PUT /api/admin/update`: ✏️ Updates the profile of the authenticated user. Accepts the parameters `name`, `email`, `password`, `skills`, and `about`. The `skills` and `about` parameters can include additional fields such as `image1`, `image2`, `image3`, `image4`, `image5`, and `image6`, which can be uploaded to Cloudinary for image storage.

- `POST /api/admin/timeline/add`: ⏳ Adds a new timeline entry for the admin. Accepts the `title`, `description`, and `date` in the request body.

- `POST /api/admin/project/add`: 📁 Adds a new project for the admin. Accepts the `url`, `title`, `image`, `description`, and `techStack` in the request body. The `image` parameter can be uploaded to Cloudinary for image storage.

- `DELETE /api/admin/timeline/:id`: ❌ Deletes a timeline entry specified by the `id` parameter for the admin.

- `DELETE /api/admin/project/:id`: ❌ Deletes a project specified by the `id` parameter for the admin.

Please note that some routes require authentication. The authenticated user's ID can be accessed through the `req.user._id` property.

## Frontend Routes 🌐

The frontend React.js application provides the following routes:

- `/`: Homepage or landing page.
- `/about`: Displays the about section based on the user's profile.
- `/projects`: Displays the list of projects.
- `/contact`: Contact page with a form to submit messages.
- `/account`: Account page, accessible only if the user is authenticated.
- `/admin/timeline`: Admin timeline page, accessible only if the user is authenticated as an admin.
- `/admin/project`: Admin project page, accessible only if the user is authenticated as an admin.

## Frontend Components 🖥️

The frontend React application includes the following components:

- `Header`: Renders the navigation header.
- `Home`: Renders the homepage section with timelines and skills.
- `About`: Renders the about section based on the user's profile.
- `Projects`: Renders the projects section with project details.
- `Contact`: Renders the contact page with a form to submit messages.
- `Login`: Renders the login form.
- `AdminPanel`: Renders the admin panel for authenticated admin users.
- `Timeline`: Renders the admin timeline page for adding new timeline entries.
- `Project`: Renders the admin project page for adding new projects.

Feel free to customize and modify these components and routes to suit your project's specific requirements.

## Technologies Used 🛠️

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - JWT (JSON Web Tokens)
  - Cloudinary (for image storage)

- Frontend:
  - React.js
  - React Router (for routing)

## Getting Started 🚀

To get started with the Portfolio MERN project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/portfolio.git`
2. Navigate to the backend directory: `cd backend`
3. Install backend dependencies: `npm install`
4. Set up environment variables by creating a `.env` file and adding the necessary variables.
5. Start the backend server: `npm start`
6. The server will be running on `http://localhost:3001`.

7. Navigate to the frontend directory: `cd frontend`
8. Install frontend dependencies: `npm install`
9. Start the frontend application: `npm start`
10. The application will be running on `http://localhost:3000`.

Ensure that you have MongoDB installed and running locally or provide the appropriate MongoDB connection string in the `.env` file.

## Contribution Guidelines 🤝

Contributions are welcome! If you spot any issues or want to add new features, create a pull request with your changes. Please make sure to follow the existing code style and add appropriate tests for your changes.

## License 📝

This project is licensed under the MIT License. Feel free to modify and use it in your own projects.

## Contact Me 📧

For any inquiries or suggestions, feel free to reach out to me at [sakshamtolani@gmail.com](mailto:sakshamtolani@gmail.com).

## Credits

This project was developed by [Saksham Tolani](https://github.com/SakshamTolani). Feel free to connect with me on GitHub for any questions or collaborations.

---

🌟 Star this repository if you found it helpful! Happy coding! 🚀✨

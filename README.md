# 🎮 Chill Gamer

**Live Site URL:** [https://chill-gemer.web.app/](https://chill-gemer.web.app/)

Chill Gamer is a clean, responsive, and user-friendly single-page application (SPA) that allows gamers to explore, share, and manage reviews of their favorite games. It is designed to provide a seamless and “chill” experience for every user, from casual players to hardcore fans.

---

## 🚀 Features

- 🔐 **Secure Authentication**: Email/password login with Google support. Protected routes for personal actions.
- ✍️ **Add & Manage Reviews**: Logged-in users can add, update, and delete their own game reviews with rating, genres, year, and more.
- 🕹️ **Game Watchlist**: Add reviews to a personalized Watchlist, only accessible by the logged-in user.
- 🌟 **Highest Rated Games**: Automatically displays top 6 reviews based on rating from the database.
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop views with a modern UI.

---

## 📂 Project Structure

### 🔗 Client Repository:
- **Framework:** React.js
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Authentication:** Firebase Auth
- **Hosting:** Firebase

### 🌐 Server Repository:
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **Authentication:** Firebase
- **Hosting:** Render

---

## 🧩 Core Pages & Routes

| Route                | Description                                         |
|---------------------|-----------------------------------------------------|
| `/`                 | Home page with banner, top-rated reviews, and extras|
| `/login`            | User login page with email/password and Google auth|
| `/register`         | User registration page                              |
| `/addReview`        | Add new game review (Private Route)                 |
| `/reviews`          | View all reviews from all users                     |
| `/review/:id`       | Details of a specific review                        |
| `/myReviews`        | View, update, delete your own reviews (Private)     |
| `/updateReview/:id` | Update a submitted review                           |
| `/myWatchlist`      | Manage your Watchlist of favorite games (Private)   |

---

## ✅ Main Functionalities

- **Navbar** with dynamic login/register or user avatar + logout
- **Footer** with site and contact info
- **Toast/SweetAlert2** used for all success and error feedback
- **Form validation** for password strength & required fields
- **Watchlist feature** stores user-selected reviews
- **No Lorem Ipsum** or default JS alerts used
- **Protected Routes** with route guard (JWT-based logic)
- **Environment Variables** used for Firebase and MongoDB keys

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Firebase Auth
- **Backend:** Node.js, Express.js, MongoDB Atlas
- **Hosting:** Firebase (Client), Render (Server)
- **Tools:**  dotenv, React Router, SweetAlert2, AOS, etc.

---



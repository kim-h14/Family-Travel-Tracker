Sure, here's a comprehensive `README.md` for your project:

```markdown
# Family Travel Tracker

## Description

Family Travel Tracker is a web application that allows users to track the countries they have visited. Users can add new countries to their visited list, switch between different users, and view the total number of countries visited. The app uses Node.js, Express, and PostgreSQL for the backend, and EJS for rendering views.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/family-travel-tracker.git
   cd family-travel-tracker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up PostgreSQL database:**

   - Ensure PostgreSQL is installed and running on your machine.
   - Create a database named `world`.
   - Create the necessary tables:

     ```sql
     CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100),
       color VARCHAR(7)
     );

     CREATE TABLE countries (
       country_code VARCHAR(3) PRIMARY KEY,
       country_name VARCHAR(100)
     );

     CREATE TABLE visited_countries (
       id SERIAL PRIMARY KEY,
       country_code VARCHAR(3) REFERENCES countries(country_code),
       user_id INTEGER REFERENCES users(id)
     );
     ```

4. **Configure the database connection:**

   - Update the `db.js` file with your PostgreSQL credentials if necessary.

5. **Run the application:**

   ```bash
   npm start
   ```

6. **Visit the application:**

   Open your browser and go to `http://localhost:3000`.

## Usage

- **Home Page:** View the list of visited countries, total count, and switch between users.
- **Add Country:** Submit the name of a country to add it to the visited list.
- **Change User:** Switch between existing users or add a new user.

## Project Structure

```
project-root/
  ├── controllers/
  │   ├── homeController.js
  │   ├── userController.js
  │   └── countryController.js
  ├── public/
  │   └── [Static files like CSS, JS, images]
  ├── views/
  │   ├── index.ejs
  │   └── new.ejs
  ├── db.js
  ├── index.js
  └── README.md
```

- **controllers/**: Contains controller files for handling different routes and functionalities.
- **public/**: Static files served by the Express app.
- **views/**: EJS templates for rendering HTML.
- **db.js**: Database connection configuration.
- **index.js**: Main server file.

## API Endpoints

### `GET /`

- **Description:** Renders the home page with the list of visited countries and user details.
- **Response:** HTML page.

### `POST /add`

- **Description:** Adds a country to the visited list for the current user.
- **Request Body:**
  - `country`: Name of the country to add.
- **Response:** Redirects to the home page.

### `POST /user`

- **Description:** Changes the current user or redirects to the new user form.
- **Request Body:**
  - `add`: If set to "new", renders the new user form.
  - `user`: ID of the user to switch to.
- **Response:** Redirects to the home page or renders the new user form.

### `POST /new`

- **Description:** Creates a new user.
- **Request Body:**
  - `name`: Name of the new user.
  - `color`: Favorite color of the new user.
- **Response:** Redirects to the home page.


```

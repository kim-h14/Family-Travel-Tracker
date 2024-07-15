CREATE TABLE countries(
id SERIAL PRIMARY KEY,
country_code CHAR(2) NOT NULL UNIQUE,
country_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE users(
id SERIAL PRIMARY KEY,
name VARCHAR(15) UNIQUE NOT NULL,
color VARCHAR(15)
);

CREATE TABLE visited_countries(
id SERIAL PRIMARY KEY,
country_code CHAR(2) NOT NULL,
user_id INTEGER REFERENCES users(id)
);

INSERT INTO users (name, color)
VALUES ('Kim', 'teal'), ('Jessica', 'powderblue');

INSERT INTO visited_countries (country_code, user_id)
VALUES ('FR', 1), ('GB', 1), ('PT', 2), ('FR', 2);

SELECT *
FROM visited_countries
JOIN users
ON users.id = user_id;
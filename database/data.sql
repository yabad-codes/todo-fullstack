CREATE DATABASE todoapp; -- in our case it is already created using env var

CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

INSERT INTO todos(id, user_email, title, progress, date) VALUES ('0', 'yabad@test.42.fr', 'First to do', 10, DATE '2023-11-10');
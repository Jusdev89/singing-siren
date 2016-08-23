-- CREATE TABLES

--psql bookstore < schema.sql

DROP TABLE IF EXISTS books;
CREATE TABLE books
(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS genres;
CREATE TABLE genres
(
  id SERIAL PRIMARY KEY,
  genre VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS book_genres;
CREATE TABLE book_genres
(
  book_id INTEGER NOT NULL,
  genre_id INTEGER NOT NULL
);

DROP TABLE IF EXISTS authors;
CREATE TABLE authors
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  bio TEXT NOT NULL
);

DROP TABLE IF EXISTS book_authors;
CREATE TABLE book_authors
(
  book_id INTEGER NOT NULL,
  author_id INTEGER NOT NULL
);

DROP TABLE IF EXISTS book_favorites;
CREATE TABLE book_favorites
(
  book_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL
);

DROP TABLE IF EXISTS users;
CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL, -- is there an email option?
  password VARCHAR(255) NOT NULL,
  bio TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS user_roles;
CREATE TABLE user_roles
(
  role_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles
(
  id SERIAL PRIMARY KEY,
  admin BOOLEAN --??????????????????????
);

INSERT INTO
  books (title, description, img_url)
VALUES 
  ('White Fang', 'A SUPER GOOD BOOK', 'www.whatever.com'),
  ('Ender''s Game', 'A SUPER GOOD BOOK', 'www.whatever.com'),
  ('Kushiel''s Dart', 'A SUPER GOOD BOOK', 'www.whatever.com'),
  ('The Golden Compass', 'A SUPER GOOD BOOK', 'www.whatever.com'),
  ('The Subtle Knife', 'A SUPER GOOD BOOK', 'www.whatever.com'),
  ('Dune', 'A SUPER GOOD BOOK', 'www.whatever.com'),
  ('A Scanner Darkly', 'A SUPER GOOD BOOK', 'www.whatever.com'),
  ('Good Omens', 'A SUPER GOOD BOOK', 'www.whatever.com'),
  ('Neuromancer', 'A SUPER GOOD BOOK', 'www.whatever.com'), 
  ('1984', 'A SUPER GOOD BOOK', 'www.whatever.com'),
  ('Hyperion', 'A SUPER GOOD BOOK', 'www.whatever.com'),
  ('Fahrenheit 451', 'A SUPER GOOD BOOK', 'www.whatever.com'),
  ('The Left Hand of Darkness', 'A SUPER GOOD BOOK', 'www.whatever.com');

INSERT INTO 
  genres (genre)
VALUES 
  ('Young Adult'),
  ('Sci Fi'),
  ('Romance'),
  ('Comedy'),
  ('Fantasy'),
  ('Space'),
  ('Aliens'),
  ('Strong Female Lead'),
  ('Dystopia'),
  ('Female Author'),
  ('Classic');

INSERT INTO 
  users (name, bio, email, password, img_url)
VALUES  
  ('user1', 'So much bios!', 'email@email.com', 'password', 'www.thing.com'),
  ('user2', 'So much bios!', 'email@email.com', 'password', 'www.thing.com'),
  ('user3', 'So much bios!', 'email@email.com', 'password', 'www.thing.com'),
  ('user4', 'So much bios!', 'email@email.com', 'password', 'www.thing.com'),
  ('user5', 'So much bios!', 'email@email.com', 'password', 'www.thing.com'),
  ('user6', 'So much bios!', 'email@email.com', 'password', 'www.thing.com'),
  ('user27', 'So much bios!', 'email@email.com', 'password', 'www.thing.com'),
  ('user28', 'So much bios!', 'email@email.com', 'password', 'www.thing.com');



INSERT INTO 
  authors (name, bio, img_url)
VALUES  
  ('Jack London', 'a human who does stuff', 'www.imgurl.com/stuff'),
  ('Frank Herbert', 'a human who does stuff', 'www.imgurl.com/stuff'),
  ('Jacqueline Carey', 'a human who does stuff', 'www.imgurl.com/stuff'),
  ('Philip Pullman', 'a human who does stuff', 'www.imgurl.com/stuff'),
  ('Orson Scott Card', 'a human who does stuff', 'www.imgurl.com/stuff'),
  ('Philip K Dick', 'a human who does stuff', 'www.imgurl.com/stuff'),
  ('Terry Prachett', 'a human who does stuff', 'www.imgurl.com/stuff'),
  ('Neil Gaiman', 'a human who does stuff', 'www.imgurl.com/stuff'), 
  ('William Gibson', 'a human who does stuff', 'www.imgurl.com/stuff'),
  ('George Orwell', 'a human who does stuff', 'www.imgurl.com/stuff'),
  ('Dan Simmons', 'a human who does stuff', 'www.imgurl.com/stuff'),
  ('Ray Bradbury', 'a human who does stuff', 'www.imgurl.com/stuff'),
  ('Ursula K Le Guin', 'a human who does stuff', 'www.imgurl.com/stuff');

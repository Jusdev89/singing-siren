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
  title VARCHAR(255) NOT NULL
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
  admin BOOLEAN
);

INSERT INTO
  books (title, description, img_url)
VALUES 
  (
    'White Fang', 
    'A SUPER GOOD BOOK', 
    'www.whatever.com'
  ),

  (
    'Ender''s Game', 
    'A SUPER GOOD BOOK', 
    'www.whatever.com'
  ),

  (
    'Kushiel''s Dart', 
    'A SUPER GOOD BOOK', 
    'www.whatever.com'
  ),

  (
    'The Golden Compass', 
    'A SUPER GOOD BOOK', 
    'www.whatever.com'
  ),

  (
    'The Subtle Knife', 
    'A SUPER GOOD BOOK', 
    'www.whatever.com'
  ),

  (
    'Dune', 
    'A SUPER GOOD BOOK', 
    'www.whatever.com'
  ),

  (
    'A Scanner Darkly', 
    'A SUPER GOOD BOOK', 
    'www.whatever.com'
  ),

  (
    'Good Omens', 
    'A SUPER GOOD BOOK', 
    'www.whatever.com'
  ),

  (
    'Neuromancer', 
    'A SUPER GOOD BOOK', 
    'www.whatever.com'
  ),

  (
    '1984', 
    'A SUPER GOOD BOOK', 
    'www.whatever.com'
  ),

  (
    'Hyperion', 
    'A SUPER GOOD BOOK', 
    'www.whatever.com'
  ),

  (
    'Fahrenheit 451', 
    'A SUPER GOOD BOOK', 
    'www.whatever.com'
  ),

  (
    'The Left Hand of Darkness', 
    'A SUPER GOOD BOOK', 
    'www.whatever.com'
  );


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
  ('Some Guy', 'So much bios!', 'user1@email.com', 'password', 'www.thing.com', 'TRUE'),
  ('user2', 'So much bios!', 'email@email.com', 'password', 'www.thing.com', 'FALSE'),
  ('user3', 'So much bios!', 'email@email.com', 'password', 'www.thing.com', 'FALSE'),
  ('user4', 'So much bios!', 'email@email.com', 'password', 'www.thing.com', 'FALSE'),
  ('user5', 'So much bios!', 'email@email.com', 'password', 'www.thing.com', 'FALSE'),
  ('user6', 'So much bios!', 'email@email.com', 'password', 'www.thing.com', 'FALSE'),
  ('user27', 'So much bios!', 'email@email.com', 'password', 'www.thing.com', 'FALSE'),
  ('user28', 'So much bios!', 'email@email.com', 'password', 'www.thing.com', 'FALSE'),
  ('John Roberts', 'a corpora quaeritis. Summus brains sit​​, morbo vel maleficia?', 'john@learnersguild.org', 'password', 'http://placehold.it/150x150', 'TRUE');

INSERT INTO 
  authors (name, bio, img_url)
VALUES  
  (
    'Jack London', 
    'a human who does stuff', 
    'www.imgurl.com/stuff'
  ),

  (
    'Frank Herbert', 
    'a human who does stuff', 
    'www.imgurl.com/stuff'
  ),

  (
    'Jacqueline Carey',
   'a human who does stuff',
   'www.imgurl.com/stuff'
  ),

  (
    'Philip Pullman',
   'a human who does stuff',
   'www.imgurl.com/stuff'
  ),

  (
    'Orson Scott Card',
   'a human who does stuff',
    'www.imgurl.com/stuff'
  ),

  (
    'Philip K Dick', 
    'a human who does stuff', 
    'www.imgurl.com/stuff'
  ),

  (
    'Terry Prachett', 
    'a human who does stuff', 
    'www.imgurl.com/stuff'
  ),
  (
    'Neil Gaiman', 
    'a human who does stuff', 
    'www.imgurl.com/stuff'
  ), 
  (
    'William Gibson', 
    'a human who does stuff', 
    'www.imgurl.com/stuff'
  ),
  (
    'George Orwell', 
    'a human who does stuff', 
    'www.imgurl.com/stuff'
  ),
  (
    'Dan Simmons', 
    'a human who does stuff', 
    'www.imgurl.com/stuff'
  ),
  (
    'Ray Bradbury', 
    'a human who does stuff', 
    'www.imgurl.com/stuff'
  ),
  (
    'Ursula K Le Guin', 
    'a human who does stuff', 
    'www.imgurl.com/stuff'
  );


INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='1984'
AND genres.title='Classic';

INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='1984'
AND genres.title='Classic';

--('Hyperion'),
INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='Hyperion'
AND genres.title='Aliens';

INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='Hyperion'
AND genres.title='Sci Fi';

--('Fahrenheit 451'),
INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='Fahrenheit 451'
AND genres.title='Dystopia';

INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='Fahrenheit 451'
AND genres.title='Young Adult';

--('The Left Hand of Darkness')
INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='The Left Hand of Darkness'
AND genres.title='Female Author';

INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='The Left Hand of Darkness'
AND genres.title='Classic';

---White fang is a YA book
INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='White Fang'
AND genres.title='Young Adult';

---Good Omens is a Fantasy Book
INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='Good Omens'
AND genres.title='Fantasy';


---Good Omens is a Comedy Book
INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='Good Omens'
AND genres.title='Comedy';

---golden compass is a YA book
INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='The Golden Compass'
AND genres.title='Young Adult';

--enders game is scifi
INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='Ender''s Game'
AND genres.title='Sci Fi';

--kushie's dart is a romance novel
INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='Kushiel''s Dart'
AND genres.title='Romance';

INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='Kushiel''s Dart'
AND genres.title='Strong Female Lead';

-- dune is a scifi novel
INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='Dune'
AND genres.title='Sci Fi';

--kushie's dart is a fantasy novel
INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='Kushiel''s Dart'
AND genres.title='Fantasy';

INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='The Subtle Knife'
AND genres.title='Young Adult';

INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='A Scanner Darkly'
AND genres.title='Sci Fi';

INSERT INTO book_genres
SELECT books.id, genres.id
FROM books
CROSS JOIN genres
WHERE books.title='A Scanner Darkly'
AND genres.title='Fantasy';



--------------------join books and authors
--('Neuromancer'), William Gibson
INSERT INTO book_authors
SELECT books.id, authors.id
FROM books
CROSS JOIN authors
WHERE books.title='Neuromancer'
AND authors.author='William Gibson';

--('1984'),
INSERT INTO book_authors
SELECT books.id, authors.id
FROM books
CROSS JOIN authors
WHERE books.title='1984'
AND authors.author='George Orwell';

INSERT INTO book_authors
SELECT books.id, authors.id
FROM books
CROSS JOIN authors
WHERE books.title='Hyperion'
AND authors.author='Dan Simmons';

INSERT INTO book_authors
SELECT books.id, authors.id
FROM books
CROSS JOIN authors
WHERE books.title='Fahrenheit 451'
AND authors.author='Ray Bradbury';

INSERT INTO book_authors
SELECT books.id, authors.id
FROM books
CROSS JOIN authors
WHERE books.title='The Left Hand of Darkness'
AND authors.author='Ursula K Le Guin';

--kushie's dart written jacqueline carey
INSERT INTO book_authors
SELECT books.id, authors.id
FROM books
CROSS JOIN authors
WHERE books.title='Kushiel''s Dart'
AND authors.author='Jacqueline Carey';

--Good Omens was written by Terry Prachett
INSERT INTO book_authors
SELECT books.id, authors.id
FROM books
CROSS JOIN authors
WHERE books.title='Good Omens'
AND authors.author='Terry Prachett';

--Good Omens was written by Terry Prachett
INSERT INTO book_authors
SELECT books.id, authors.id
FROM books
CROSS JOIN authors
WHERE books.title='Good Omens'
AND authors.author='Neil Gaiman';


--white fang was written by jack london
INSERT INTO book_authors
SELECT books.id, authors.id
FROM books
CROSS JOIN authors
WHERE books.title='White Fang'
AND authors.author='Jack London';


--Ender's Game was written by orson scott card
INSERT INTO book_authors
SELECT books.id, authors.id
FROM books
CROSS JOIN authors
WHERE books.title='Ender''s Game'
AND authors.author='Orson Scott Card';

--the golden compass was written by philip pullman
INSERT INTO book_authors
SELECT books.id, authors.id
FROM books
CROSS JOIN authors
WHERE books.title='The Golden Compass'
AND authors.author='Philip Pullman';

--the golden compass was written by philip pullman
INSERT INTO book_authors
SELECT books.id, authors.id
FROM books
CROSS JOIN authors
WHERE books.title='The Subtle Knife'
AND authors.author='Philip Pullman';

--the golden compass was written by philip pullman
INSERT INTO book_authors
SELECT books.id, authors.id
FROM books
CROSS JOIN authors
WHERE books.title='Dune'
AND authors.author='Frank Herbert';

--a scanner darkley was written by philip k dick
INSERT INTO book_authors
SELECT books.id, authors.id
FROM books
CROSS JOIN authors
WHERE books.title='A Scanner Darkly'
AND authors.author='Philip K Dick';

import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';
import Card from './components/Card/Card';
import Container from './components/Container/Container';
import BooksList from './components/BooksList/BooksList';

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
];

const container = (
  <Container>
    <BooksList>
      {favouriteBooks.map((book) => (
        <Card key={book.id} name={book.name} />
      ))}
    </BooksList>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);

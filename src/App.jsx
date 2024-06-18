import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import MovieList from './components/MovieList.jsx';
import MovieForm from './components/MovieForm.jsx';
import MovieDetails from './components/MovieDetails.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<MovieList />} />
          <Route path="/add" element={<MovieForm />} />
          <Route path="/edit/:id" element={<MovieForm />} />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

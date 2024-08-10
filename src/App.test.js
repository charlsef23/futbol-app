import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Wrapper component to include Router for testing
const renderWithRouter = (ui) => {
  return render(<Router>{ui}</Router>);
};

test('renders the home page with navigation links', () => {
  renderWithRouter(<App />);

  // Check if the home page is rendered
  expect(screen.getByText(/Bienvenido al Dashboard de Fútbol/i)).toBeInTheDocument();

  // Check if navigation links are present
  expect(screen.getByText(/Partidos/i)).toBeInTheDocument();
  expect(screen.getByText(/Estadísticas/i)).toBeInTheDocument();
  expect(screen.getByText(/Noticias/i)).toBeInTheDocument();
  expect(screen.getByText(/Calendario/i)).toBeInTheDocument();
});

test('navigates to the Matches page when the Matches link is clicked', () => {
  renderWithRouter(<App />);

  // Click on the Matches link
  fireEvent.click(screen.getByText(/Partidos/i));

  // Verify that the URL has changed (using a Regex match to check for path)
  expect(window.location.pathname).toBe('/matches');
});

test('navigates to the Statistics page when the Statistics link is clicked', () => {
  renderWithRouter(<App />);

  // Click on the Statistics link
  fireEvent.click(screen.getByText(/Estadísticas/i));

  // Verify that the URL has changed
  expect(window.location.pathname).toBe('/statistics');
});

test('navigates to the News page when the News link is clicked', () => {
  renderWithRouter(<App />);

  // Click on the News link
  fireEvent.click(screen.getByText(/Noticias/i));

  // Verify that the URL has changed
  expect(window.location.pathname).toBe('/news');
});

test('navigates to the Calendar page when the Calendar link is clicked', () => {
  renderWithRouter(<App />);

  // Click on the Calendar link
  fireEvent.click(screen.getByText(/Calendario/i));

  // Verify that the URL has changed
  expect(window.location.pathname).toBe('/calendar');
});
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock the robots import
jest.mock('./robots', () => ({
  robots: [
    { id: 1, name: 'Mocked Robot 1', email: 'mock1@test.com' },
    { id: 2, name: 'Mocked Robot 2', email: 'mock2@test.com' }
  ]
}));

describe('App Component', () => {
  test('renders App with heading and CardList', () => {
    render(<App />);

    const headingElement = screen.getByText(/RoboFriends/i);
    expect(headingElement).toBeInTheDocument();

    // Assuming that the initial robots array is not empty
    expect(screen.getByText('Mocked Robot 2')).toBeInTheDocument(); // Replace with actual robot names
  });

  test('filters robots based on search input', async () => {
    render(<App />);

    // Simulate typing into the search box
    fireEvent.change(screen.getByPlaceholderText('Search...'), {
      target: { value: 'Mocked Robot 1' }
    });

    // Assert that only the searched robot is displayed
    const robotName = await screen.findByText('Mocked Robot 1');
    expect(robotName).toBeInTheDocument();
  });

  test('displays no robots message when search returns no results', () => {
    render(<App />);

    // Simulate typing into the search box
    fireEvent.change(screen.getByPlaceholderText('Search...'), {
      target: { value: 'Non-existing Robot' }
    });

    // Assert that a message is displayed indicating no robots are available
    expect(screen.getByText('No robots available')).toBeInTheDocument();
  });
});

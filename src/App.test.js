import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { robots } from "./robots";

describe('App Component', () => {
  test('renders App with heading and CardList', () => {
    render(<App />);

    // Check if the main heading is rendered
    const headingElement = screen.getByText(/RoboFriends/i);
    expect(headingElement).toBeInTheDocument();

    // Check if the CardList component is rendered with robot cards
    // Assuming that the robots array is not empty and each robot has a unique name
    robots.forEach(robot => {
      expect(screen.getByText(robot.name)).toBeInTheDocument();
    });
  });
});

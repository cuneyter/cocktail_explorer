import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from '../components/CardList';

describe('CardList Component', () => {
  const mockRobots = [
    { id: 1, name: 'Robot One', email: 'robotone@example.com' },
    { id: 2, name: 'Robot Two', email: 'robottwo@example.com' }
  ];

  test('renders CardList with robots', () => {
    render(<CardList robots={mockRobots} />);
    const cardNameElements = screen.getAllByRole('heading', { name: /Robot/i });
    expect(cardNameElements).toHaveLength(mockRobots.length);
    expect(screen.getByText('Robot One')).toBeInTheDocument();
    expect(screen.getByText('Robot Two')).toBeInTheDocument();
  });


  test('renders message when no robots are available', () => {
    render(<CardList robots={[]} />);
    expect(screen.getByText('No robots available')).toBeInTheDocument();
  });
});

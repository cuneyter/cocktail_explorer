import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  test('renders Card component', () => {
    render(<Card id={"test"} name={"name"} email={"email"} />);

    expect(screen.getByText("name")).toBeInTheDocument();
    expect(screen.getByText("email")).toBeInTheDocument();
  });

  test('renders correct image URL', () => {
    render(<Card id={"test"} name={"name"} email={"email"} />);
    const img = screen.getByRole('img');
    expect(img.src).toBe('https://robohash.org/test?set=set2&size=200x200');
  });
});

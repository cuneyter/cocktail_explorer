import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from './SearchBox';

describe('SearchBox Component', () => {
  test('calls searchChange on input change', () => {
    const mockSearchChange = jest.fn();
    render(<SearchBox searchChange={mockSearchChange} />);

    // Find the input element
    const inputElement = screen.getByPlaceholderText('Search...');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    // Assert that the mock function was called
    expect(mockSearchChange).toHaveBeenCalledTimes(1);
  });
});

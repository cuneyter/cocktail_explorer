import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../containers/App';
import { act } from 'react-dom/test-utils';

// Mock fetch API
beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, name: 'Robot One', email: 'robotone@example.com' },
        { id: 2, name: 'Robot Two', email: 'robottwo@example.com' }
      ])
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});


describe('App Component', () => {
  test('renders robots after fetch', async () => {
    await act(async () => {
      render(<App />);
    });
    const robotOne = screen.getByText('Robot One');
    expect(robotOne).toBeInTheDocument();
    expect(screen.getByText('Robot Two')).toBeInTheDocument();
  });

  test('filters robots based on search input', async () => {
    await act(async () => {
      render(<App />);
    });

    // Wait for robots to be displayed
    await screen.findByText('Robot One');

    // Simulate typing into the search box
    fireEvent.change(screen.getByPlaceholderText('Search...'), {
      target: { value: 'Robot One' }
    });

    // Assert that only the searched robot is displayed
    expect(screen.getByText('Robot One')).toBeInTheDocument();
    expect(screen.queryByText('Robot Two')).not.toBeInTheDocument();
  });

  test('displays loading message when robots array is empty', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([])
      })
    );

    await act(async () => {
      render(<App />);
    });

    const loadingElement = await screen.findByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
  });

  test('does not display loading message when robots array is not empty', async () => {
    await act(async () => {
      render(<App />);
    });

    const robotOne = await screen.findByText('Robot One');
    expect(robotOne).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).toBeNull();
  });
});

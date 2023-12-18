import { render, screen } from '@testing-library/react';
import Scroll from '../components/Scroll';

describe('Scroll Component', () => {
  test('renders children inside a scrollable div', () => {
    const testText = 'Test child component';
    render(<Scroll>{testText}</Scroll>);

    const childElement = screen.getByText(testText);
    expect(childElement).toBeInTheDocument();
    expect(childElement.closest('div')).toHaveStyle({
      overflowY: 'scroll',
      border: '1px solid black',
      height: '800px'
    });
  });
});

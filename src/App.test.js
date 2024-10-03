import { render, screen } from '@testing-library/react';
import Post from './components/Post'; // Adjust the path based on your file structure

test('renders post with user and text', () => {
  render(<Post />);
  const userElement = screen.getByText(/Massive_Mission_6386/i);
  const textElement = screen.getByText(/I love my dog/i);
  expect(userElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});

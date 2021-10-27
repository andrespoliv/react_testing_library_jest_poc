import { render, screen } from '@testing-library/react';
import StateButton from '../components/StateButton';
import userEvent from '@testing-library/user-event'

describe('App component', () => {
 test('it renders', () => {
   render(<StateButton />);
   userEvent.click(screen.getByText(/click me/i))
   expect(screen.getByText(/you have clicked: 1 time/i)).toBeInTheDocument()
 });
})
import { render, screen } from '@testing-library/react';
import SimpleButton from '../components/SimpleButton';

describe('App component', () => {
 test('it renders', () => {
   render(<SimpleButton />);
   expect(screen.getByText(/click me/i)).toBeInTheDocument();
 });
})
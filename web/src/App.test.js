import { render, screen } from '@testing-library/react';
import App from './App';


test('Check for duck button', () => {
    render(<App />);
    let button = screen.getByRole("button");
    expect(button).toHaveTextContent("Tilføj en and");
});

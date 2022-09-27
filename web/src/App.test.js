import { render, screen } from '@testing-library/react';
import App from './App';


test('Login button exists',() =>{
  render(<App/>);
  let button = screen.getByRole("button");
  expect(button).toHaveTextContent("Login");
});

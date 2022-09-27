import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";


test('Testing the navigation to Books',() =>{
  render(<BrowserRouter> <App/> </BrowserRouter>);
  userEvent.click(screen.getByText(/Books/));
  expect(screen.getByText(/Book list/)).toBeInTheDocument();
});

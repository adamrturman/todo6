// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';
//
// test('renders correct version of ToDo app', () => {
//   render(<App />);
//   const versionNumber = screen.getByText(/6/i);
//   expect(versionNumber).toBeInTheDocument();
// });


// import React, {ReactComponentElement} from 'react';
// import ReactDOM from 'react-dom';
// import { getQueriesForElement } from '@testing-library/dom'
//
// import App from "./App";
//
// const render = (component: ReactComponentElement<any>) => {
//   const root = document.createElement("div");
//   ReactDOM.render(component, root);
//   return getQueriesForElement(root);
// }
//
// test("renders correctly", () => {
//
//   const { getByText } = render(<App />);
//
//   getByText("To Do Application #6");
//   getByText("Add");
//
// });


import React from 'react';
import { render, fireEvent } from '@testing-library/react'

import App from "./App";

test("renders correctly", () => {
  const { getByText, getByLabelText } = render(<App />);

  getByText("To Do Application #6");
  getByText("Add");
  getByLabelText("What do you need to do?")
});

test("adding todos to the list", () => {
  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText("What do you need to do?");
  const button = getByText("Add");

  fireEvent.change(input, { target: { value: "get bread" } });
  fireEvent.click(button);

  getByText("get bread");
});

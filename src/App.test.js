import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('adds 1 + 2 to equal 3', () => {
  expect(2).toBe(3);
});

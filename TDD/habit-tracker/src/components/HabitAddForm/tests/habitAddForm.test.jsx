import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HabitAddForm from '../habitAddForm';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('HabitAddForm', () => {
  let onAdd;
  let input;
  let button;
  it('renders', () => {
    const component = render(<HabitAddForm onAdd={jest.fn()} />);
    expect(component.container).toMatchSnapshot();
  });

  describe('Form Submit', () => {
    beforeEach(() => {
      onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText('Habit');
      button = screen.getByText('Add');
    });

    it('calls onAdd when button is clicked and valid habit is entered', () => {
      userEvent.type(input, 'New Habit');
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith('New Habit');
    });

    it('does not call onAdd when the habit is empty', () => {
      userEvent.type(input, '');
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});

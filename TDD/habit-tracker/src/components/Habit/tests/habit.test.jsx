import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Habit from '../habit';

describe('habit', () => {
  const habit = { name: 'sleep', count: 0 };
  const onIncrement = jest.fn();
  const onDecrement = jest.fn();
  const onDelete = jest.fn();

  let decreaseButton;
  let deleteButton;

  beforeEach(() => {
    render(
      <Habit
        habit={habit}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    );

    decreaseButton = screen.getByTitle('decrease');
    deleteButton = screen.getByTitle('delete');
  });

  it('well render', () => {
    const habitName = screen.getByText('sleep');
    const habitCount = screen.getByText('0');

    expect(habitName).toBeTruthy();
    expect(habitCount).toBeTruthy();
  });

  it('calls onIncrement when button is clicked', () => {
    const increaseButton = screen.getByTitle('increase');
    fireEvent.click(increaseButton);
    expect(onIncrement).toBeCalledTimes(1);
  });

  it('calls onDecrement when button is clicked', () => {
    const decreaseButton = screen.getByTitle('decrease');
    fireEvent.click(decreaseButton);
    expect(onDecrement).toBeCalledTimes(1);
  });

  it('calls onDelete when button is clicked', () => {
    const deleteButton = screen.getByTitle('delete');
    fireEvent.click(deleteButton);
    expect(onDelete).toBeCalledTimes(1);
  });
});

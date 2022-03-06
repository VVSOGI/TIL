import HabitPresenter from '../Presenter';

const update = jest.fn((list) => list);

describe('All Test of HabitPresenter', () => {
  let Presenter;
  let habit;
  beforeEach(() => {
    habit = [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ];
    Presenter = new HabitPresenter(habit);
  });

  it('List length is 3 when Doing anything', () => {
    expect(Presenter.getHabits().length).toBe(3);
  });

  it('List length is 4 when add element', () => {
    Presenter.add('add', update);
    expect(Presenter.getHabits().length).toBe(4);
  });

  it('List length is 2 when remove element', () => {
    Presenter.delete(habit[0], update);
    expect(Presenter.getHabits().length).toBe(2);
  });

  it('Target count + 1 when doing Presenter method increment', () => {
    const target = habit[0];
    Presenter.increment(target, update);
    const count = Presenter.getHabits().find(
      (item) => item.id === target.id
    ).count;
    expect(count).toBe(1);
  });

  it('Doing decrement when count is 0 equal 0', () => {
    const target = habit[0];
    Presenter.decrement(target, update);
    const count = Presenter.getHabits().find(
      (item) => item.id === target.id
    ).count;
    expect(count).toBe(0);
  });

  it('Doing decrement when count is N equal N - 1', () => {
    const target = { id: 1, name: 'Reading', count: 3 };
    Presenter.decrement(target, update);
    const count = Presenter.getHabits().find(
      (item) => item.id === target.id
    ).count;
    expect(count).toBe(2);
  });

  it('Doing reset is all list count make 0', () => {
    const mockListData = [
      { id: 1, name: 'Reading', count: 3 },
      { id: 2, name: 'Running', count: 2 },
      { id: 3, name: 'Coding', count: 5 },
    ];
    const TestPresenter = new HabitPresenter(mockListData);
    TestPresenter.reset(update);
    TestPresenter.getHabits().forEach((item) => {
      expect(item.count).toBe(0);
    });
  });

  it('Doing reset when all list count is 0', () => {
    Presenter.reset(update);
    Presenter.getHabits().forEach((item) => {
      expect(item.count).toBe(0);
    });
  });
});

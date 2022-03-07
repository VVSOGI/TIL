import HabitPresenter from '../Presenter';

const update = jest.fn((list) => list);

describe('All Test of HabitPresenter', () => {
  const maxHabits = 5;
  let Presenter;
  let habit;
  beforeEach(() => {
    habit = [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ];
    Presenter = new HabitPresenter(habit, maxHabits);
  });

  it('List length is 3 when Doing anything', () => {
    expect(Presenter.getHabits().length).toBe(3);
  });

  it('List length is 4 when add element', () => {
    Presenter.add('add', update);
    expect(Presenter.getHabits().length).toBe(4);
  });

  it(`List can't more maxHabits`, () => {
    Presenter.add('add1', update);
    Presenter.add('add2', update);
    expect(() => {
      Presenter.add('add3', update);
    }).toThrow(`습관의 갯수는 5 이상이 될 수 없습니다.`);
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

  describe('reset', () => {
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

    it('does not create new object when count is 0', () => {
      const habits = Presenter.getHabits();
      Presenter.reset(update);
      const updatedHabits = Presenter.getHabits();
      expect(habits[1]).toBe(updatedHabits[1]);
    });
  });
});

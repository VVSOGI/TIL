import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

const User = {
  name: "hwasan",
  age: 1000,
};

test("Hello가 포함되는가?", () => {
  render(<Hello user={User} />);
  const HelloEl = screen.getByText(/Hello/i);
  expect(HelloEl).toBeInTheDocument();
});

test("snapshot 있음", () => {
  const view = render(<Hello user={User} />);
  expect(view).toMatchSnapshot();
});

test("snapshot 없음", () => {
  const view = render(<Hello />);
  expect(view).toMatchSnapshot();
});

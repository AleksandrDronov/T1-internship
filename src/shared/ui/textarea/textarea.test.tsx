import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Textarea } from ".";

describe("Textarea", () => {
  test("default", () => {
    const tree = renderer.create(<Textarea />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("placeholder", () => {
    const tree = renderer
      .create(<Textarea placeholder="Placeholder" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("onChange", () => {
    const onChange = jest.fn();
    render(<Textarea onChange={onChange} />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "input" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("change value", () => {
    render(<Textarea />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "input" } });
    expect(textarea).toHaveValue("input");
  });
});

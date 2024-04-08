/* eslint-disable no-alert */
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button renders correctly", () => {
  test("default", () => {
    const tree = renderer.create(<Button>Submit</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("disabled", () => {
    const tree = renderer
      .create(<Button disabled>Disabled Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("primary", () => {
    const tree = renderer
      .create(<Button variant="primary">Primary Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("secondary", () => {
    const tree = renderer
      .create(<Button variant="secondary">Secondary Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("tertiary", () => {
    const tree = renderer
      .create(<Button variant="tertiary">Tertiary Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("link", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Button isLink to="/test">
            Link
          </Button>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("onClick", () => {
    window.alert = jest.fn();
    const onClick = () => alert("Button clicked");
    render(<Button onClick={onClick}>Button</Button>);
    const button = screen.getByText("Button");
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith("Button clicked");
  });
});

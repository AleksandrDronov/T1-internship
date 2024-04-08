import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Accordion } from ".";

describe("Accordion", () => {
  test("Accordion renders correctly", () => {
    const tree = renderer
      .create(
        <Accordion
          items={[
            { title: "Item 1", content: "Content 1" },
            { title: "Item 2", content: "Content 2" },
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("AccordionItem opens and closes", () => {
    render(<Accordion items={[{ title: "Item 1", content: "Content 1" }]} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toHaveAccessibleName("Open accordion section");
    fireEvent.click(button);
    expect(button).toHaveAccessibleName("Close accordion section");
  });
});

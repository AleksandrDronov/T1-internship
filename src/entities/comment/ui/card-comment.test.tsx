import renderer from "react-test-renderer";
import { CardComment } from ".";

describe("CardComment", () => {
  const comment = {
    id: 1,
    user: { username: "omottley2h" },
    body: "I cannot believe how I found you, this is so pretty.",
  };
  test("renders correctly", () => {
    const tree = renderer.create(<CardComment comment={comment} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly with className", () => {
    const tree = renderer
      .create(<CardComment className="test" comment={comment} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import renderer from "react-test-renderer";
import { CardUser } from ".";

describe("CardUser", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(<CardUser firstName="John" lastName="Doe" image="avatar.jpg" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly with variant", () => {
    const tree = renderer
      .create(
        <CardUser
          variant="secondary"
          firstName="John"
          lastName="Doe"
          image="avatar.jpg"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly with isLoading", () => {
    const tree = renderer
      .create(
        <CardUser
          isLoading
          firstName="John"
          lastName="Doe"
          image="avatar.jpg"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly with isError", () => {
    const tree = renderer
      .create(
        <CardUser isError firstName="John" lastName="Doe" image="avatar.jpg" />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import { render, screen, cleanup } from "@testing-library/react";
import NewsAdd from "./components/addnews";

describe("Add news component", () => {
  it("Should check UI part", () => {
    const { getByPlaceholderText } = render(<NewsAdd />);
    const title = getByPlaceholderText("News title");
    expect(title).toBeTruthy();

    expect(getByPlaceholderText("Add abstract")).toBeTruthy();
    expect(
      getByPlaceholderText("Add the description of news (limit:450words)")
    ).toBeTruthy();
    // expect(getByPlaceholderText("Add abstract")).toBeTruthy();
  });

  it("Should check Label text", () => {
    const { getByLabelText } = render(<NewsAdd />);
    const title = getByLabelText("Title");
    expect(title).toBeTruthy();

    //expect(getByPlaceholderText("Add abstract")).toBeTruthy();
  });

  it("Should check UI part", () => {
    const { getAllByDisplayValue } = render(<NewsAdd />);
    const abcd = getAllByDisplayValue("");
    expect(abcd).toBeTruthy();

    //expect(getByPlaceholderText("Add abstract")).toBeTruthy();
  });
});

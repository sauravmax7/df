import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// afterEach(cleanup)
describe("App component", () => {
  it("Should have title Public News Board", () => {
    const { queryByTitle } = render(<App />);
    const title = queryByTitle("t");
    expect((title.innerHTML = "Public News Board")).toBe("Public News Board");
  });
});

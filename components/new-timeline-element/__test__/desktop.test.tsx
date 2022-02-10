import { render, screen, fireEvent } from "@testing-library/react";
import Element from "../NewElementDesktop";

describe("Timeline New Element", () => {
  const handleAdd = jest.fn();
  beforeEach(() => {
    render(<Element onAdd={handleAdd} />);
  });
  it("renders new timeline element", async () => {
    screen.getByText(/Title/i);
    screen.getByText(/random text/i);
    screen.getByText(/13 oct/i);

    await screen.findByRole("button", { name: /Add/i });
  });

  it("adds the new element", async () => {
    const button = screen.getByRole("button", { name: /add/i });

    fireEvent.click(button);

    expect(handleAdd.mock.calls.length).toBe(1);
  });
});

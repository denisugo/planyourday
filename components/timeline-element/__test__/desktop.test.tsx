import { render, screen, fireEvent } from "@testing-library/react";
import Element from "../ElementDesktop";

describe("Timeline Element", () => {
  const handleRemove = jest.fn();
  const handleEdit = jest.fn();

  beforeEach(() => {
    render(
      <Element
        text="My text"
        title="My title"
        date="13 may 1999"
        id={1}
        onRemove={handleRemove}
        onEdit={handleEdit}
      />
    );
  });
  it("renders timeline element", async () => {
    screen.getByText(/My text/i);
    screen.getByText(/My title/i);
    screen.getByText(/13 may 1999/i);

    fireEvent.mouseEnter(screen.getByText(/My text/i));

    await screen.findByRole("button", { name: /delete/i });
    await screen.findByRole("button", { name: /edit/i });
  });

  it("removes the element", async () => {
    fireEvent.mouseEnter(screen.getByText(/My text/i));

    const button = await screen.findByRole("button", { name: /delete/i });

    fireEvent.click(button);

    expect(handleRemove.mock.calls.length).toBe(1);
  });
  it("edits the element", async () => {
    fireEvent.mouseEnter(screen.getByText(/My text/i));

    const button = await screen.findByRole("button", { name: /edit/i });

    fireEvent.click(button);

    const confirmButton = await screen.findByRole("button", {
      name: /confirm/i,
    });

    fireEvent.click(confirmButton);

    expect(handleEdit.mock.calls.length).toBe(1);
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import Element from "../ElementDesktop";

test("renders timeline element", async () => {
  render(
    <Element
      text="My text"
      title="My title"
      date="13 may 1999"
      id={1}
      onRemove={() => ""}
      onEdit={() => ""}
    />
  );

  screen.getByText(/My text/i);
  screen.getByText(/My title/i);
  screen.getByText(/13 may 1999/i);

  fireEvent.mouseEnter(screen.getByText(/My text/i));

  await screen.findByRole("button", { name: /delete/i });
  await screen.findByRole("button", { name: /edit/i });
});

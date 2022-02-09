import { render, screen, fireEvent } from "@testing-library/react";
import Timeline from "../TimelineDesktop";

describe("Timeline", () => {
  beforeEach(() => {
    render(<Timeline />);
  });
  it("renders timeline", () => {
    const titles = screen.getAllByText(/Title/i);
    expect(titles.length).toBe(4);
  });

  it("should delete one element", async () => {
    fireEvent.mouseOver(screen.getByText(/title #3/i));

    const deleteButton = await screen.findByRole("button", { name: /delete/i });

    fireEvent.click(deleteButton);

    const titles = await screen.findAllByText(/Title/i);
    expect(titles.length).toBe(3);
  });

  it("should update title", async () => {
    fireEvent.mouseEnter(screen.getByText(/title #3/i));

    const editButton = await screen.findByRole("button", { name: /edit/i });

    fireEvent.click(editButton);

    const titleInput = await screen.findByRole("textbox", { name: /title/i });

    fireEvent.change(titleInput, {
      target: { innerHTML: "New Title" },
    });

    const confirmButton = await screen.findByRole("button", {
      name: /confirm/i,
    });

    fireEvent.click(confirmButton);

    await screen.findByText(/New Title/i);
  });
  it("should update text", async () => {
    fireEvent.mouseEnter(screen.getByText(/title #3/i));

    const editButton = await screen.findByRole("button", { name: /edit/i });

    fireEvent.click(editButton);

    const titleInput = await screen.findByRole("textbox", { name: /text/i });

    fireEvent.change(titleInput, {
      target: { innerHTML: "New Text after alll" },
    });

    const confirmButton = await screen.findByRole("button", {
      name: /confirm/i,
    });

    fireEvent.click(confirmButton);

    await screen.findByText(/New Text after alll/i);
  });
  it("should update date", async () => {
    fireEvent.mouseEnter(screen.getByText(/title #3/i));

    const editButton = await screen.findByRole("button", { name: /edit/i });

    fireEvent.click(editButton);

    const titleInput = await screen.findByRole("textbox", { name: /date/i });

    fireEvent.change(titleInput, {
      target: { innerHTML: "13 Nov 1998" },
    });

    const confirmButton = await screen.findByRole("button", {
      name: /confirm/i,
    });

    fireEvent.click(confirmButton);

    await screen.findByText(/13 Nov 1998/i);
  });
});

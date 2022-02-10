import { render, screen, fireEvent } from "@testing-library/react";
import Timeline from "../TimelineDesktop";

describe("Timeline", () => {
  beforeEach(() => {
    render(<Timeline />);
  });
  it("renders timeline", () => {
    const titles = screen.getAllByText(/Title/i);
    expect(titles.length).toBe(5);
  });

  it("should delete one element", async () => {
    fireEvent.mouseOver(screen.getByText(/title #3/i));

    const deleteButton = await screen.findByRole("button", { name: /delete/i });

    fireEvent.click(deleteButton);

    const titles = await screen.findAllByText(/Title/i);
    expect(titles.length).toBe(4);
  });

  it("should update title", async () => {
    fireEvent.mouseEnter(screen.getByText(/title #3/i));

    const editButton = await screen.findByRole("button", { name: /edit/i });

    fireEvent.click(editButton);

    // ? Should get the first element, the second element is in new element form
    const titleInput = (
      await screen.findAllByRole("textbox", { name: /title/i })
    )[0];

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

    // ? Should get the first element, the second element is in new element form
    const textInput = (
      await screen.findAllByRole("textbox", { name: /text/i })
    )[0];

    fireEvent.change(textInput, {
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

    // ? Should get the first element, the second element is in new element form
    const dateInput = (
      await screen.findAllByRole("textbox", { name: /date/i })
    )[0];

    fireEvent.change(dateInput, {
      target: { innerHTML: "13 Nov 1998" },
    });

    const confirmButton = await screen.findByRole("button", {
      name: /confirm/i,
    });

    fireEvent.click(confirmButton);

    await screen.findByText(/13 Nov 1998/i);
  });

  it("should add an element", async () => {
    const titleInput = screen.getByRole("textbox", { name: /Title/i });

    fireEvent.change(titleInput, {
      target: { innerHTML: "This is newly added title" },
    });

    const dateInput = screen.getByRole("textbox", { name: /date/i });
    fireEvent.change(dateInput, {
      target: { innerHTML: "20 Nov 2022" },
    });

    const textInput = screen.getByRole("textbox", {
      name: /text/i,
    });
    fireEvent.change(textInput, {
      target: { innerHTML: "This is newly added text" },
    });

    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.click(addButton);

    screen.getByText(/This is newly added text/i);
    screen.getByText(/This is newly added title/i);
    screen.getByText(/20 Nov 2022/i);
  });
});

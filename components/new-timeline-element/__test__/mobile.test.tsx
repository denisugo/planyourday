import { render, screen, fireEvent } from "@testing-library/react";
import Element from "../NewElementMobile";

describe("Timeline New Element", () => {
  const handleAdd = jest.fn();

  const imageFile = new File(["(⌐□_□)"], "chucknorris.png", {
    type: "image/png",
  });

  beforeEach(() => {
    global.URL.createObjectURL = jest.fn((x) => "/chucknorris.png");
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

  it("uploads the image", async () => {
    const fileInput = screen.getByLabelText(/choose image/i);

    fireEvent.change(fileInput, {
      target: { files: [imageFile] },
    });

    screen.getByRole("img");
  });
});

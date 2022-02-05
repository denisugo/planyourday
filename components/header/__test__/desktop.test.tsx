import { render, screen } from "@testing-library/react";
import AppHeader from "../AppHeaderDesktop";

test("renders desktop header", () => {
  render(<AppHeader />);

  screen.getByText(/Don't waste your/i);
  screen.getByText(/Churchill/i);
});

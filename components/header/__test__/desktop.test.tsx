import { render, screen } from "@testing-library/react";
import AppHeader from "../AppHeaderDesktop";

test("renders desktop header", () => {
  render(<AppHeader />);

  screen.getByText(/Plan your/i);
  screen.getByText(/Churchill/i);
});

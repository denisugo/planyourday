import { render, screen } from "@testing-library/react";
import AppHeader from "../AppHeaderMobile";

test("renders mobile header", () => {
  render(<AppHeader />);

  screen.getByText(/Don't waste your/i);
  screen.getByText(/Churchill/i);
});

import { render, screen } from "@testing-library/react";
import AppHeader from "../AppHeaderMobile";

test("renders mobile header", () => {
  render(<AppHeader />);

  screen.getByText(/Plan your/i);
  screen.getByText(/Churchill/i);
});

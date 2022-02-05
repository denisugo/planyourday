import { render, screen } from "@testing-library/react";
import AppFooter from "../AppFooterDesktop";

test("renders footer", () => {
  render(<AppFooter />);

  screen.getByText(/Powered by/i);
});

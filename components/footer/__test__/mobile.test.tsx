import { render, screen } from "@testing-library/react";
import AppFooter from "../AppFooterMobile";

test("renders footer", () => {
  render(<AppFooter />);

  screen.getByText(/Powered by/i);
});

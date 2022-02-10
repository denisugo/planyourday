import { render, screen } from "@testing-library/react";
import preloadAll from "jest-next-dynamic";
import Home from "../pages/index";

beforeAll(async () => {
  await preloadAll();
});

it("renders footer", () => {
  render(<Home isMobile={false} />);

  screen.getByText(/Plan your/i);
  screen.getByText(/Churchill/i);
  screen.getByText(/Powered by/i);
  // expect(3).toBe(3);
});

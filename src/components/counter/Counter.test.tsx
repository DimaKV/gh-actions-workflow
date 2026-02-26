import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("рендерит кнопку", () => {
    render(<Counter />);
    expect(screen.getByText(/count/)).toBeInTheDocument();
  });
});

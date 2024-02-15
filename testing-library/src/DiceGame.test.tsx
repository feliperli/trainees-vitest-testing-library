import React from "react";
import {
  cleanup,
  render,
  screen,
  waitFor,
  queryAllByRole,
  queryAllByPlaceholderText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test, toEqual } from "vitest";
import { DiceGame } from "./DiceGame";
import "@testing-library/jest-dom/vitest";

describe("DiceGame", () => {
  afterEach(() => {
    cleanup();
  });

  describe("When the page loads", () => {
    test("renders one dice", async () => {
      render(<DiceGame />);

      await waitFor(() => {
        expect(screen.getByText(1)).toBeInTheDocument();
      });
    });
  });

  describe("When the roll the dice button is clicked", () => {
    test("show message", async () => {
      const user = userEvent.setup();

      render(<DiceGame />);

      await user.click(
        screen.getByRole("button", { name: "Rickroll all dices!" })
      );

      await waitFor(() => {
        expect(screen.getByText("Wow, you rolled!")).toBeInTheDocument();
      });
    });
  });

  describe("When button new dice is clicked", () => {
    test("shows new dice on screen", async () => {
      const user = userEvent.setup();

      render(<DiceGame />);

      await user.click(screen.getByRole("button", { name: "New dice, baby" }));

      await waitFor(() => {
        expect(screen.queryAllByRole("listitem")).toHaveLength(2);
      });
    });
  });
});

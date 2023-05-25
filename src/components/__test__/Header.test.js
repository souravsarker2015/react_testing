import {getByTestId, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import {Header} from "../Header";


describe("Header component test", () => {

    test("render the heading text", () => {
        render(<Header heading={"Word Counter"}/>);

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const heading = screen.getByTestId("heading");
        expect(heading.innerHTML).toBe("Word Counter");
    });


});

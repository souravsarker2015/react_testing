import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Counter} from "../Counter";
import userEvent from "@testing-library/user-event";


describe("counter component test", () => {

    test("render the textarea", () => {
        // const {getByTestId} = render(<Counter/>)
        const {getByPlaceholderText} = render(<Counter/>)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        // const textArea = getByTestId("textArea");
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const placeholderText = getByPlaceholderText("Type or paste your text");
        // expect(textArea).toBeTruthy();
        expect(placeholderText).toBeTruthy();
    });

    test("render the  character result", () => {
        const {getByTestId} = render(<Counter/>)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const charLength = getByTestId("charLength");
        // expect(charLength).toBeTruthy();
        expect(charLength.innerHTML).toBe("Character: 0");
    });

    // test("render the  word result", () => {
    //     const {getByTestId} = render(<Counter/>)
    //     // eslint-disable-next-line testing-library/prefer-screen-queries
    //     const wordLength = getByTestId("wordLength");
    //     expect(wordLength).toBeTruthy();
    //     // expect(charLength.innerHTML).toBe("Character: 0");
    // });

    // it("render the  word result", () => {
    //     const {getByTestId} = render(<Counter/>)
    //     // eslint-disable-next-line testing-library/prefer-screen-queries
    //     const wordLength = getByTestId("wordLength");
    //     expect(wordLength).toBeTruthy();
    //     // expect(charLength.innerHTML).toBe("Character: 0");
    // });

    // it("render the  word result", () => {
    //     render(<Counter/>)
    //     // eslint-disable-next-line no-restricted-globals
    //
    //     expect(screen.getByTestId("wordLength")).toBeTruthy();
    // });

    it("render the  word result", () => {
        render(<Counter/>)
        // eslint-disable-next-line no-restricted-globals
        const wordLength = screen.getByText("Word: 0");
        expect(wordLength).toBeInTheDocument();
    });


    test("change testArea and update the result", () => {
        render(<Counter/>)
        const textArea = screen.getByTestId("textArea");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength");
        userEvent.type(textArea, "sourov")
        expect(charLength.innerHTML).toBe("Character: 6")
        expect(wordLength.innerHTML).toBe("Word: 1")
    });

    test("clear testArea and update the result", () => {
        render(<Counter/>)
        const textArea = screen.getByTestId("textArea");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength");
        const clearBtn = screen.getByTestId("clearBtn");
        userEvent.type(textArea, "sourov")
        expect(charLength.innerHTML).toBe("Character: 6")
        expect(wordLength.innerHTML).toBe("Word: 1")

        userEvent.click(clearBtn)
        expect(charLength.innerHTML).toBe("Character: 0")
        expect(wordLength.innerHTML).toBe("Word: 0")
    });

});
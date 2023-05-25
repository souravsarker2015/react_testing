import {render} from "@testing-library/react";
import {PageNotFound} from "../PageNotFound";
import {BrowserRouter} from "react-router-dom";

describe("page not found test", () => {
    test("render text and image", () => {
        const {getByAltText, getByTestId} = render(<PageNotFound/>, {wrapper: BrowserRouter});
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const pnfText = getByTestId("pnfText");
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const altText = getByAltText("Page Not Found");
        expect(pnfText.innerHTML).toBe("Oops - Page Not Found!")
        expect(altText).toBeTruthy()
    })
})
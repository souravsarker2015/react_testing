import {render, waitFor} from "@testing-library/react";
import {Joke} from "../Joke";

describe("joke test", () => {

    test("api test", async () => {
        const {getByTestId} = render(<Joke/>);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const jokeHeadline = getByTestId("jokeHeadline");
        await waitFor(() => (expect(jokeHeadline.innerHTML).toBeTruthy()));
    });
});
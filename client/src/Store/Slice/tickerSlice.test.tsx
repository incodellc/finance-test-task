import { screen } from "@testing-library/react";
import React from "react";
import App from "../../App";
import { 
    getQuotes,
    regEx,
    renderReduxComponent
} from "../../utils/test_utils";
import { store } from "../store";
import { setTickers } from "./actions";

describe('slice tests', () => {
    it('Does not show tickers initially', () => {
        renderReduxComponent(<App />);
        const cards = screen.queryAllByText(regEx('nasdaq'));
        expect(cards.length).toBe(0);
    });
    it('Can show tickers', () => {
        renderReduxComponent(<App />);
        store.dispatch(setTickers(getQuotes()));
        const cards = screen.getAllByText(regEx('nasdaq'));
        expect(cards.length).toBe(6);
    });
})


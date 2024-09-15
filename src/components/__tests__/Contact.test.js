import { render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Coontact us page should be load", ()=>{
    it("should load the heading", ()=>{
        render(<Contact/>);

        const heading= screen.getByRole("heading");
        console.log(heading);

        expect(heading).toBeInTheDocument();
    })
})
import * as React from "react";
import * as ReactDOM from "react-dom";
import MyButton from "./MyButton";
import MySection from "./MySection";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <MySection>
        <MyButton>My Button Text</MyButton>
    </MySection>
);
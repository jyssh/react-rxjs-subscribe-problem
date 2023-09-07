import { Subscribe } from "@react-rxjs/core";
import { Outlet } from "react-router-dom";
// import { cCropChanged } from "./state";

export function Yield() {
    return (
        <Subscribe>
            {/* NOTE: Subscribe with source$ works as intended, but Subscribe without source$ does not. */}
            {/* <Subscribe source$={cCropChanged}> */}
            <Outlet />
        </Subscribe>
    );
}
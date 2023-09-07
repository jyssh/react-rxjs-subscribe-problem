import { bind } from "@react-rxjs/core";
import { createSignal } from "@react-rxjs/utils";

export const [sCropChanged, handleCropChange] = createSignal(e => {
    return e.target.value;
});

export const [useCrop, cCropChanged] = bind(sCropChanged, "");


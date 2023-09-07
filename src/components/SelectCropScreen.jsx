import { ReviewBox } from "./ReviewBox";
import { SelectCropForm } from "./SelectCropForm";

export function SelectCropScreen() {
    return <div className="stack">
        <h1>Enter inputs</h1>
        <div className="cluster">
            <SelectCropForm />
            <ReviewBox />
        </div>
    </div>
}
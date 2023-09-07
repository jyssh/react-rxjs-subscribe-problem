import { useCrop } from "../state";

export function ReviewBox() {
    const crop = useCrop();

    return (<div className="box stack">
        <h3>Summary</h3>
        <dl>
            <dt>Crop</dt>
            <dd>{crop || <b className="error">Not selected</b>}</dd>
        </dl>
    </div>);
}
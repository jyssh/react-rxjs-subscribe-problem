import { ReviewBox } from "./ReviewBox";

export function One() {
    return <div className="stack">
        <h2>Review your inputs</h2>
        <div className="stack">
            <h3 className="error">Please read the following to understand the issue:</h3>
            <p><code>&lt;Subscribe&gt;</code> wraps this screen (<code>&lt;One&gt;</code>) and the previous screen (<code>&lt;SelectCropScreen&gt;</code>). Check <code>Yield.jsx</code> to verify it.</p>

            <p>Therefore, any subscriptions made in both these screens - <code>&lt;One&gt;</code> and <code>&lt;SelectCropScreen&gt;</code> - should have been retained.  So the crop selected in the previous screen should have shown up here. But it does not. </p>

            <p><strong><code>&lt;Subscribe source$&gt;</code> works as intended though.</strong></p>
        </div>
        <ReviewBox />
    </div>
}
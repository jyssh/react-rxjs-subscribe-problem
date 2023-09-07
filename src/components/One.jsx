import { ReviewBox } from "./ReviewBox";

export function One() {
    return <div className="stack">
        <h2>Review your inputs</h2>
        <div className="stack">
            <h3 className="error">Please read the following to understand the issue:</h3>
            <p><code>&lt;Subscribe&gt;</code> wraps both this screen and the previous screen.  So any subscriptions made in both these screens should have been retained.  So the crop selected in the previous screen should have shown up here, but it does not. </p>
            <p><strong><code>&lt;Subscribe source$&gt;</code> works as intended though.</strong></p>
        </div>
        <ReviewBox />
    </div>
}
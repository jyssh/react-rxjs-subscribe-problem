import { useNavigate } from "react-router-dom";
import { SelectCrop } from "./SelectCrop";

export function SelectCropForm() {
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        navigate("/region");
    }

    return <form className="flow" noValidate={true} onSubmit={handleSubmit}>
        <SelectCrop />
        <button
            className="cta"
            type="submit"
            value="SubmitCrop"
            name="SubmitCrop">Continue</button>
    </form>
}
import { handleCropChange, useCrop } from "../state"

export function SelectCrop() {
    const selectedCrop = useCrop();
    return <div>
        <fieldset>
            <legend>Select a crop</legend>
            {
                ["wheat", "millet", "corn", "barley"].map(crop => {
                    return <div key={crop}>
                        <input
                            type="radio"
                            id={crop}
                            name="crop-type"
                            value={crop}
                            defaultChecked={selectedCrop === crop}
                            onChange={handleCropChange} />
                        <label htmlFor={crop}> {crop}</label>
                    </div>
                })
            }
        </fieldset>
    </div>
}
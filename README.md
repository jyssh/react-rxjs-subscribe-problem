# Problem

`<Subscribe>` wraps two screens - `<SelectCropScreen>` and `<One>`. Check the `Yield.jsx` file to verify.

So any subscriptions made in both these screens - `<SelectCropScreen>` and `<One>` - should have been retained. But that does not happen.

`<Subscribe source$>` works as intended though.
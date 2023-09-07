import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Yield } from "./Yield";
import { SelectCropScreen } from "./SelectCropScreen";
import { One } from "./One";

export const makeRoutes = () => {
  return [
    {
      path: "/",
      element: <Yield />,
      children: [
        { path: "", element: <Link to={"/crop"}>Click to start</Link> },
        { path: "crop", element: <SelectCropScreen /> },
        { path: "region", element: <One /> },
      ],
    },
  ];
};

const router = createBrowserRouter(makeRoutes());

function App() {
  return <RouterProvider router={router} />;
}

export default App

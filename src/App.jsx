import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Create from "./components/Create";
import Edit from "./components/Edit";

const RootLayout = () => (
  <div className="App">
    <NavBar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> },
      { path: "create", element: <Create /> },
      { path: "edit", element: <Edit /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

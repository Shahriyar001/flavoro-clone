import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/Store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-[1440px] mx-auto">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  </StrictMode>
);

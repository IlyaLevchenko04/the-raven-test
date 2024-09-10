import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createRouter({ routeTree });

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} basepath="/the-raven-test"/>
    </Provider>
  );
}

export default App;


import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./components/DataProvider/DataProvider.jsx";
import { reducer, initialstate } from "./utility/reducer.js";
createRoot(document.getElementById("root")).render(

    <DataProvider reducer={reducer} initialstate={initialstate}>
      <App />
    </DataProvider>

);

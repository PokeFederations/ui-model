import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import QueryClientProvider from "./providers/QueryClientProvider";

const container = document.getElementById("app");

const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
    <QueryClientProvider>
        <App />
    </QueryClientProvider>
    );

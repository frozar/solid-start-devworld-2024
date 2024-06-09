import { Router } from "@solidjs/router";
import { Suspense } from "solid-js";
import "./app.css";
import { FileRoutes } from "@solidjs/start/router";

export default function App() {
  return (
    <Router
      root={(props) => (
        <main>
          <a href="/">
            <h1>Solidarity</h1>
          </a>
          <Suspense fallback="Loading...">{props.children}</Suspense>
        </main>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  redirect,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Home";
import DocsLayout from "./DocsLayout";
import ErrorBoundary from "./ErrorHandler";

import DocsIntroduction from "./docs/docs/introduction.mdx";
import DocsInstallation from "./docs/docs/installation.mdx";

import ComponentsButton from "./docs/components/Button.mdx";

const overrideComponents = {
  pre: (props: any) => <pre {...props} className={`${props.className} hljs`} />,
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="/docs" element={<DocsLayout />}>
        <Route index element={<DocsIntroduction />} />
        <Route path="installation" element={<DocsInstallation />} />
        <Route path="components">
          <Route index loader={() => redirect("/docs/components/button")} />
          <Route
            path="button"
            element={<ComponentsButton components={overrideComponents} />}
          />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

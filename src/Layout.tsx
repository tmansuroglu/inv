import { Suspense } from "react";
import { Await, Outlet, useLoaderData } from "react-router-dom";

type LayoutProps = {};

const Layout = ({ ...props }: LayoutProps) => {
  const data = useLoaderData();

  return (
    <div>
      <header>header</header>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={data}>
          <main>
            <Outlet />
          </main>
        </Await>
      </Suspense>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;

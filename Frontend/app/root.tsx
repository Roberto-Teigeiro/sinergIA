import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp, ClerkErrorBoundary } from "@clerk/remix";
import {neobrutalism } from '@clerk/themes';

export const meta: MetaFunction = () => ([{
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
}]);
 
export const loader: LoaderFunction = (args) => rootAuthLoader(args);



import "./tailwind.css"


export const ErrorBoundary = ClerkErrorBoundary();

function App() {
  return (
    <html lang="en" className="bg-[#3C486B]">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        
      </body>
    </html>
  );
}


export default ClerkApp(App, {
  appearance: {
    signIn: { baseTheme: neobrutalism },
    signUp: {baseTheme: neobrutalism}
  },
});
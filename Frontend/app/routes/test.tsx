import type { MetaFunction } from "@remix-run/node";
import { useUser } from "@clerk/remix";
import Logo from "~/components/logo";
import Grid from "~/components/grid";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function test() {
    const { isLoaded, isSignedIn, user } = useUser();
  return (
    <div>
    <Logo/>
    </div>
  );
}

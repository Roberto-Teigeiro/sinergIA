import type { MetaFunction } from "@remix-run/node";
import SignUpButton from "~/components/signupButton";
import LoginButton from "~/components/loginButton";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  return (
   <div>
    
    <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">

    <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
    <span></span> 
    <div>
    <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-pink-500 hover:to-yellow-500 lg:inline">
    Build Your Future </span> 
    <span><br/>One Project at a Time.</span>
    </div>
    </h1>
    <div>Powered by AI</div>
    <div>Start Learning by doing Projects!</div>
    <div className="flex justify-center space-x-10">
    <LoginButton/>
    <SignUpButton/>
    </div>

            
            
            
   
            
    </div>

   </div>
  );
}

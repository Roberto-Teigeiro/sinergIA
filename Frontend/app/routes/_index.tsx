import type { MetaFunction } from "@remix-run/node";
import SignUpButton from "~/components/signupButton";
import LoginButton from "~/components/loginButton";
import Logo from "~/components/logo";



export const meta: MetaFunction = () => {
  return [
    { title: "SinergIA" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



export default function Index() {
  return (
   <div>
    <Logo/>
    <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">

    <span></span> 
    <div>
    <div className="container">
    <span className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.300),theme(colors.red.100),theme(colors.red.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.red.400),theme(colors.purple.300))] bg-[length:200%_auto] animate-gradient">Build your future</span>    </div>
    <h1 className="font-extrabold text-white"><br/>One Project at a Time.</h1>
    </div>
    
    <div>Powered by AI</div>
    <div>Start Learning by doing Projects!</div>
    <div className="flex justify-center space-x-10">
    {}
    <LoginButton/>
    <SignUpButton/>
    </div>

            
            
            
   
            
    </div>

   </div>
  );
}

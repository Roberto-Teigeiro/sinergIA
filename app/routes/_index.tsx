import type { MetaFunction } from "@remix-run/node";
import SignUpButton from "~/components/signupButton";
import LoginButton from "~/components/loginButton";
import Logo from "~/components/logo";
import ProjectCard from "~/components/projectCard";


export const meta: MetaFunction = () => {
  return [
    { title: "SinergIA" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Logo />
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <span></span>
        <div>
          <span className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.fuchsia.300),theme(colors.rose.400),theme(colors.rose.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.red.400),theme(colors.purple.300))] bg-[length:200%_auto] animate-gradient">
            Build your future
          </span>{" "}
        </div>
        <h1 className="font-extrabold text-black">
          <br />
          One Project at a Time.
        </h1>

        <div>Powered by AI</div>
        <div>Start Learning by doing Projects!</div>
        <div className="flex justify-center space-x-10">
          {}
          <LoginButton />
          <SignUpButton />
        </div>
      </div>
      
      <div className="relative w-16 h-16 mx-auto mb-8">
      <div className="absolute bg-yellow-600 w-14 h-14 rotate-45"></div>
      <div className="absolute bg-gray-50 w-14 h-14 rotate-45 -translate-y-1"></div>
      </div>

      <div className="relative w-16 h-16 mx-auto mt-8" >
      <div className="absolute bg-yellow-600 w-14 h-14 rotate-45"></div>
      <div className="absolute bg-gray-50 w-14 h-14 rotate-45 -translate-y-1"></div>
      </div>

      <div className="relative w-16 h-16 mx-auto mt-8">
      <div className="absolute bg-yellow-600 w-14 h-14 rotate-45"></div>
      <div className="absolute bg-gray-50 w-14 h-14 rotate-45 -translate-y-1"></div>
      </div>
            

      <div className="text-center">
      <h1 className="font-extrabold text-3xl text-black text-center">
      <br />
      Check the projects previously created using SinergIA
    </h1>
    <br />
    <p className="text-xl inline-block font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400 text-center">
      Discover the power of collective genius
    </p>
      </div>
        <ProjectCard />
        
        
    </div>
  );
}

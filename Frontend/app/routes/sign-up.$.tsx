import { SignUp } from "@clerk/remix";
 
export default function SignUpPage() {
  return (
    <div className="flex justify-center align-middle">
      <SignUp />
    </div>
  );
}
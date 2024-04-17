import { useClerk } from "@clerk/remix";
import { useNavigate } from "@remix-run/react";

const SignOutButton = () => {
  const { signOut } = useClerk();
  const navigate = useNavigate();

  return (
    <button
      className="relative group overflow-hidden px-6 h-12 border border-purple-200 rounded-full"
      onClick={() => signOut(() => navigate("/"))}
    >
      Sign out
    </button>
  );
};

export default SignOutButton;

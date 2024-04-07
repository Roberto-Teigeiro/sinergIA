import { useNavigate } from "@remix-run/react";

export default function SignUpButton(){
  const navigate = useNavigate();
  return(
  <div >
      <button className="relative group overflow-hidden px-6 h-12 border border-purple-200 rounded-full"
      onClick={()=>
      navigate("/signup")}>
        <div aria-hidden="true" className="transition duration-300 group-hover:-translate-y-12">
            <div className="h-12 flex items-center justify-center">
              <span className="text-purple-700">Sign Up</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-purple-700">Start Learning</span>
            </div>
        </div>
      </button>

  </div>)

}
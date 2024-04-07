import { type LoaderFunction, redirect } from "@remix-run/node";
import {getAuth} from "@clerk/remix/ssr.server"
import { UserButton } from "@clerk/remix";


export const loader: LoaderFunction = async (args) => {
    const {userId} = await getAuth(args)
    if(!userId) return redirect("/sign-in")
    return {data: {userId}}
}

export default function DashBoardRoute(){
    return(
        <div>
        <div>Youre logged in!</div>
        <UserButton afterSignOutUrl="/" />
        </div>
    )
}
import { redirect } from "@remix-run/node";
import { ActionFunctionArgs } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.getAll("knowledge"));
  const password = String(formData.get("password"));
  console.log(email);

  const keys = formData.keys();

  for (const key of keys) {
    const value = formData.get(key);
    console.log({key});
    console.log(value);
    
}
return redirect("/");
}



import { redirect } from "@remix-run/node";
import { ActionFunctionArgs } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("projectname"));
  const password = String(formData.get("password"));
  console.log(email);
  return redirect("/dashboard");
}

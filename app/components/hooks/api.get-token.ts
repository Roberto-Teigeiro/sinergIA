import { createClerkClient } from "@clerk/remix/api.server";
import { getAuth } from "@clerk/remix/ssr.server";
import { ActionFunction, json } from "@remix-run/node";

export const action: ActionFunction = async (req) => {
  console.log("llamando!");
  console.log(req);
  return json({});
};

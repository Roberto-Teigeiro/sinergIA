import { createClerkClient } from "@clerk/remix/api.server"
import { getAuth } from "@clerk/remix/ssr.server"
import { ActionFunction, json } from "@remix-run/node"
 
export const action: ActionFunction = async (req) => {
  const { sessionId } = await getAuth(req)
 
  const template = 'test';
 
  const token = await createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY }).sessions.getToken(sessionId, template);
 
  return json({ token })
}
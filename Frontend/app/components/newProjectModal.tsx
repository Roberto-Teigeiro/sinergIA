import { Form} from "@remix-run/react";



export default function NewProjectModal() {
  return (
    <Form method="post" action="/api/submitNewProject">
      <p>
        <input type="email" name="email" />
      </p>

      <p>
        <input type="password" name="password" />
      </p>

      <button type="submit">Sign Up</button>
    </Form>
  );
}

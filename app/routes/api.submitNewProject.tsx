import { redirect } from "@remix-run/node";
import { ActionFunction } from "@remix-run/node";
import supabase from "utils/supabase";
import { getAuth } from "@clerk/remix/ssr.server";
import { v4 as uuidv4 } from 'uuid';

export const action: ActionFunction = async (args) => {
  const formData = await args.request.formData();
  const { userId} = await getAuth(args);
  console.log("User ID:", userId);

  const keys = formData.keys();

  for (const key of keys) {
    const value = formData.get(key);
    console.log({key});
    console.log(value);
  }

  const nombre = formData.get("projectname");
  const status = formData.get("projectstatus");
  const current_resources = formData.get("currentresources");
  const required_dept = formData.get("requireddepartments");
  const required_users = formData.get("requireduserdepartment");
  const project_requirements = formData.get("projectrequirements");
  const objectives = formData.get("objectives");

  const Proyecto_id = uuidv4();
  const Equipo_id = uuidv4();

  const {error: proyectosError} = await supabase
    .from('Proyectos')
    .insert([{ Proyecto_id, nombre, status, current_resources, required_dept,
    required_users, project_requirements, objectives }]);

  if (proyectosError) {
    console.error(proyectosError);
    return redirect("/choosePath");
  }

  const {error: equiposError} = await supabase
    .from('Equipos')
    .insert({ Equipo_id, Proyecto_id, Leader_id: userId });

  if (equiposError) {
    console.error(equiposError);
    return redirect("/choosePath");
  }

  return redirect("/dashboard");
}

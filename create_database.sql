create table
  public."Equipos" (
    "Equipo_id" character varying not null,
    "Proyecto_id" character varying not null,
    "Leader_id" character varying not null,
    constraint Equipos_pkey primary key ("Equipo_id", "Leader_id"),
    constraint Equipos_Proyecto_id_fkey foreign key ("Proyecto_id") references "Proyectos" ("Proyecto_id")
  ) tablespace pg_default;
create table
  public."Proyectos" (
    "Proyecto_id" character varying not null,
    nombre character varying not null,
    status character varying null,
    current_resources character varying null,
    required_dept character varying null,
    required_users bigint null,
    project_requirements character varying null,
    objectives character varying null,
    constraint Proyectos_pkey primary key ("Proyecto_id")
  ) tablespace pg_default;
create table
  public."Tareas" (
    "Tarea_id" character varying not null,
    due_date character varying null,
    description character varying null,
    "Proyecto_id" character varying null,
    "Usuario_id" character varying null,
    status character varying null,
    task_name character varying null,
    constraint Tareas_pkey primary key ("Tarea_id")
  ) tablespace pg_default;
create table
  public."Usuarios" (
    "Usuario_id" character varying not null,
    nombre character varying null,
    email character varying null,
    username character varying null,
    "User_decription" json null,
    "Proyecto_id" character varying null,
    constraint Usuarios_pkey primary key ("Usuario_id"),
    constraint Usuarios_Proyecto_id_fkey foreign key ("Proyecto_id") references "Proyectos" ("Proyecto_id")
  ) tablespace pg_default;
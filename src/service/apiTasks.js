import supabase from "./supabase";

export async function getTasks() {
  const { data, error } = await supabase.from("tasks").select("*");

  if (error) {
    throw new Error("Task could not be Loaded");
  }

  return data;
}

export async function createTasks(newTasks) {
  const { error } = await supabase.from("tasks").insert({ ...newTasks });

  if (error) {
    throw new Error("Task could not be Created");
  }
}

export async function updateStatus({ id, currentStatus }) {
  const newStatus = currentStatus === "completed" ? "uncompleted" : "completed";
  const { error } = await supabase
    .from("tasks")
    .update({ status: newStatus })
    .eq("id", id);

  if (error) {
    throw new Error("Task status could not be update");
  }
}
export async function updateImportant({ id, currentImportant }) {
  const { error } = await supabase
    .from("tasks")
    .update({ important: !currentImportant })
    .eq("id", id);

  if (error) {
    throw new Error("Task important could not be update");
  }
}

export async function getTaskById(id) {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(`${id} could not be found`);
  }

  return data;
}

export async function editTask({ newTask, id }) {
  const { data, error } = await supabase
    .from("tasks")
    .update(newTask)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(`Task could not be found`);
  }

  return data;
}

export async function deleteTaskAPi(id) {
  const { data, error } = await supabase.from("tasks").delete().eq("id", id);
  if (error) {
    throw new Error("Tasks could not be Deleted");
  }

  return data;
}

export async function deleteAllTask() {
  const { error } = await supabase.from("tasks").delete().neq("id", 0);

  if (error) {
    throw new Error(error.message);
  }
}

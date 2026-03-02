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

export async function deleteTaskAPi(id) {
  const { data, error } = await supabase.from("tasks").delete().eq("id", id);
  if (error) {
    throw new Error("Tasks could not be Deleted");
  }

  return data;
}

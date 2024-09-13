"use server";

import { eq } from "drizzle-orm";
import { db } from "../db";
import { project, tasks } from "../db/schema";
import { revalidatePath } from "next/cache";

export async function addTaskAction(
  name: string,
  projectId: number,
  color: number,
) {
  const params_db = {
    name: name,
    projectId: projectId,
    isDone: false,
    color: color,
  };
  await db.insert(tasks).values(params_db);
  revalidatePath(`/dashboard/${projectId}`);
  console.log(params_db);
}

export async function findTaskAction(projectId: number) {
  const vals = await db.query.tasks.findMany({
    where: eq(tasks.projectId, projectId),
  });
  return vals;
}

export async function setTaskAsDoneAction(
  taskId: number,
  checked: boolean,
  projectId: number,
) {
  await db.update(tasks).set({ isDone: checked }).where(eq(tasks.id, taskId));
  revalidatePath(`/dashboard/${projectId}`);
}

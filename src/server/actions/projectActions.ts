"use server";

import { eq } from "drizzle-orm";
import { db } from "../db";
import { project, tasks } from "../db/schema";
import { revalidatePath, revalidateTag } from "next/cache";

export async function addProjectAction({
  name,
  color,
  desc,
}: {
  name: string;
  color: number;
  desc: string;
}) {
  const params_db = {
    name: name,
    color: color,
    description: desc,
  };
  await db.insert(project).values(params_db);
  console.log(`AddProject Action: ${params_db}`);
}

export async function findAllProjectsAction() {
  const vals = await db.query.project.findMany();
  return vals;
}

export async function findCurrentProjectAction(id: number) {
  const ret = db.query.project.findFirst({ where: eq(project.id, id) });
  return ret;
}

export async function deleteProjectAndRelatedAction(id: number) {
  await db.delete(tasks).where(eq(tasks.projectId, id));
  await db.delete(project).where(eq(project.id, id));

  revalidatePath(`/dashboard`);
}

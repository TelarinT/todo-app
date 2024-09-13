import { findCurrentProjectAction } from "~/server/actions/projectActions";
import SubmitTaskForm from "./_components/submit-form";
import TasksList from "./_components/task-list";
import { notFound } from "next/navigation";
import clsx from "clsx";
import {
  getSmallerTextColorClass,
  getTextColorClass,
} from "~/app/components/primitives/color-state";

export default async function Page({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;
  if (isNaN(Number(projectId))) {
    notFound();
  }

  const projectDetails = await findCurrentProjectAction(parseInt(projectId));
  if (projectDetails == undefined) {
    notFound();
  }

  return (
    <main className="flex min-h-full min-w-max flex-grow flex-col">
      <div className="p4 flex flex-col space-y-5 bg-lime-300/5 p-4">
        <h1
          className={clsx(
            "text-4xl font-semibold",
            getTextColorClass(projectDetails.color),
          )}
        >
          {projectDetails.name}
        </h1>
        <p className={getSmallerTextColorClass(projectDetails.color)}>
          {projectDetails.description}
        </p>
      </div>
      <section className="flex flex-row p-4 pt-0">
        <TasksList projectId={parseInt(projectId)} />
      </section>
      <h1 className="text-2xl font-semibold">Create New Task</h1>
      <section>
        <SubmitTaskForm projectId={parseInt(projectId)} />
      </section>
    </main>
  );
}

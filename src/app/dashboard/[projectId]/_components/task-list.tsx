import { findTaskAction } from "~/server/actions/taskActions";
import TaskItem from "./task-item";

export default async function TasksList({ projectId }: { projectId: number }) {
  const tasksList = await findTaskAction(projectId);
  if (tasksList == undefined || tasksList.length <= 0) {
    return <section>No items found</section>;
  }
  return (
    <section>
      {tasksList.map((e) => {
        return (
          <TaskItem
            key={e.id}
            taskId={e.id}
            name={e.name}
            isDone={e.isDone}
            projectId={projectId}
            color={e.color}
          />
        );
      })}
    </section>
  );
}

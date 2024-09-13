"use client";
import clsx from "clsx";
import { useState } from "react";
import { getTextColorClass } from "~/app/components/primitives/color-state";
import { setTaskAsDoneAction } from "~/server/actions/taskActions";

export default function TaskItem({
  name,
  isDone,
  taskId,
  projectId,
  color,
}: {
  name: string;
  isDone: boolean;
  taskId: number;
  projectId: number;
  color: number;
}) {
  const [checked, setChecked] = useState(isDone);

  return (
    <div className="flex flex-row">
      <input
        type="checkbox"
        checked={checked}
        onChange={async () => {
          isDone = !checked;
          await setTaskAsDoneAction(taskId, !checked, projectId);
          setChecked(!checked);
        }}
      />
      <p className={clsx(checked && "line-through", getTextColorClass(color))}>
        {name}
      </p>
    </div>
  );
}

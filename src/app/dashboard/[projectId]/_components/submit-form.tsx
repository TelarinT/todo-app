"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PrimitiveButton from "~/app/components/primitives/button";
import { ColorState } from "~/app/components/primitives/color-state";
import PrimitiveInputField from "~/app/components/primitives/input-field";
import PrimitivePopoverField from "~/app/components/primitives/popover-field";
import { addTaskAction } from "~/server/actions/taskActions";

export default function SubmitTaskForm({ projectId }: { projectId: number }) {
  const router = useRouter();
  const [color, setColor] = useState(ColorState.White);
  return (
    <form
      className="flex flex-col gap-4"
      action={async (field) => {
        console.log(field);
        await addTaskAction(field.get("name") as string, projectId, color);
        router.refresh();
      }}
    >
      <div>
        <label htmlFor="name">Name:</label>
        <PrimitiveInputField placeholder="Enter Task Name" name="name" />
      </div>
      <PrimitivePopoverField
        color={color}
        setColor={setColor}
        name="Set Color"
      />
      <PrimitiveButton type="submit">Submit</PrimitiveButton>
    </form>
  );
}

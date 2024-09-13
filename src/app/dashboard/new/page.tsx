"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import PrimitiveButton from "~/app/components/primitives/button";
import { ColorState } from "~/app/components/primitives/color-state";
import PrimitiveInputField from "~/app/components/primitives/input-field";
import PrimitivePopoverField from "~/app/components/primitives/popover-field";
import { addProjectAction } from "~/server/actions/projectActions";

export default function Page() {
  const router = useRouter();

  const [color, setColor] = useState(ColorState.White);

  return (
    <section className="flex min-h-full min-w-max flex-grow flex-col items-center justify-center">
      <div className="flex w-[500px] flex-col rounded-md border border-white/30">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">New Project</h1>
          <p>Create your project</p>
        </div>
        <form
          className="flex flex-col gap-4 p-4 pt-0"
          action={async (formData) => {
            const data = {
              name: formData.get("name") as string,
              color: color.valueOf(),
              desc: formData.get("desc") as string,
            };
            if (!data.name || data.name === "") {
              return;
            }
            await addProjectAction(data);
            router.refresh();
          }}
        >
          <div>
            <label htmlFor="name">Name</label>
            <PrimitiveInputField placeholder="Enter Project Name" name="name" />
            <label htmlFor="desc">Description</label>
            <PrimitiveInputField
              placeholder="Enter Project Description"
              name="desc"
            />
          </div>
          <PrimitivePopoverField
            color={color}
            setColor={setColor}
            name="Add Color"
          />
          <PrimitiveButton type="submit">Submit</PrimitiveButton>
        </form>
      </div>
    </section>
  );
}

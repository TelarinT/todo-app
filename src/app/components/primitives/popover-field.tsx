import clsx from "clsx";
import { type Dispatch, type SetStateAction, useState } from "react";
import PrimitiveButton from "./button";
import { ColorState } from "./color-state";

export default function PrimitivePopoverField({
  color,
  setColor,
  name,
}: {
  color: ColorState;
  setColor: Dispatch<SetStateAction<ColorState>>;
  name: string;
}) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <PrimitiveButton
        type="button"
        addClasses={clsx(
          color == ColorState.Sky && "bg-sky-300",
          color == ColorState.Amber && "bg-amber-300",
          color == ColorState.Lime && "bg-lime-300",
          color == ColorState.Violet && "bg-violet-300",
          color == ColorState.White && "bg-white",
          visible ? "scale-105" : "scale-100",
        )}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {name}
      </PrimitiveButton>
      <div
        className={clsx(
          "absolute z-10 flex w-80 scale-105 space-x-5 rounded-md border bg-black p-4 shadow-md outline-none transition",
          !visible && "hidden",
        )}
        data-state={visible ? "open" : "closed"}
      >
        <div
          className="h-10 w-10 cursor-pointer rounded-xl bg-sky-300"
          onClick={() => setColor(ColorState.Sky)}
        ></div>
        <div
          className="h-10 w-10 cursor-pointer rounded-xl bg-amber-300"
          onClick={() => setColor(ColorState.Amber)}
        ></div>
        <div
          className="h-10 w-10 cursor-pointer rounded-xl bg-lime-300"
          onClick={() => setColor(ColorState.Lime)}
        ></div>
        <div
          className="h-10 w-10 cursor-pointer rounded-xl bg-violet-300"
          onClick={() => setColor(ColorState.Violet)}
        ></div>
        <div
          className="h-10 w-10 cursor-pointer rounded-xl bg-white"
          onClick={() => setColor(ColorState.White)}
        ></div>
      </div>
    </div>
  );
}

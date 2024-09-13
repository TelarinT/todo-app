import clsx from "clsx";

export enum ColorState {
  Sky,
  Amber,
  Lime,
  Violet,
  White,
}

export function getTextColorClass(colorState: ColorState) {
  switch (colorState) {
    case ColorState.Sky:
      return "text-sky-300";
    case ColorState.Amber:
      return "text-amber-300";
    case ColorState.Lime:
      return "text-lime-300";
    case ColorState.Violet:
      return "text-violet-300";
    case ColorState.White:
      return "text-white";
  }
}

export function getSmallerTextColorClass(colorState: ColorState) {
  switch (colorState) {
    case ColorState.Sky:
      return "text-sky-300/40";
    case ColorState.Amber:
      return "text-amber-300/40";
    case ColorState.Lime:
      return "text-lime-300/40";
    case ColorState.Violet:
      return "text-violet-300/40";
    case ColorState.White:
      return "text-white/40";
  }
}

export function getBackgroundColorClass(colorState: ColorState) {
  switch (colorState) {
    case ColorState.Sky:
      return "bg-sky-300";
    case ColorState.Amber:
      return "bg-amber-300";
    case ColorState.Lime:
      return "bg-lime-300";
    case ColorState.Violet:
      return "bg-violet-300";
    case ColorState.White:
      return "bg-white";
  }
}

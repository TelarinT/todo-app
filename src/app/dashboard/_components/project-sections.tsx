"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaWindowClose } from "react-icons/fa";
import { deleteProjectAndRelatedAction } from "~/server/actions/projectActions";

export default function ProjectList({
  projectList,
}: {
  projectList: {
    id: number;
    color: number;
    name: string | null;
    description: string | null;
    createdAt: Date;
  }[];
}) {
  const path = usePathname();
  const router = useRouter();

  return (
    <section className="flex w-64 flex-col space-y-5">
      {projectList.map((res) => {
        return (
          <div
            key={res.id}
            className={clsx(
              "group inline-flex h-10 items-center justify-between rounded-md px-4 py-2 text-sm font-medium text-black transition delay-75 duration-100 ease-in-out hover:scale-105 hover:opacity-80",
              res.color == 0 && "bg-sky-300",
              res.color == 1 && "bg-amber-300",
              res.color == 2 && "bg-lime-300",
              res.color == 3 && "bg-violet-300",
              res.color == 4 && "bg-white",
            )}
          >
            <FaWindowClose
              className="cursor-pointer opacity-0 transition delay-75 duration-100 ease-in-out group-hover:opacity-100"
              onClick={() => {
                deleteProjectAndRelatedAction(res.id).then(() => {
                  if (path == `/dashboard/${res.id}`) {
                    router.push("/dashboard");
                    router.refresh();
                  }
                });
              }}
            />
            <Link
              href={`/dashboard/${res.id.toString()}`}
              className="flex-grow px-5"
            >
              {res.name}
            </Link>
          </div>
        );
      })}
      <Link
        className="inline-flex h-10 items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black ring-offset-black transition-colors hover:bg-white/90"
        href="/dashboard/new"
      >
        + New Item
      </Link>
    </section>
  );
}

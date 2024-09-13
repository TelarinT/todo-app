import { findAllProjectsAction } from "~/server/actions/projectActions";
import ProjectList from "./_components/project-sections";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const project_list = await findAllProjectsAction();
  return (
    <div className="flex min-h-screen flex-row space-x-5 p-4">
      <ProjectList projectList={project_list} />
      {children}
    </div>
  );
}

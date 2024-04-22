export default function SelectedProject({ project, onDelete }) {
  const { title, dueDate, description } = project;
  const formattedDate = new Date(dueDate).toLocaleDateString("eu-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="w-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            DELETE
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className=" text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      Task
    </div>
  );
}

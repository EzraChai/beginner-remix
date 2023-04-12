export default function NotesList({ notes }: any) {
  console.log(notes);
  return (
    <div className="grid grid-cols-3 gap-4 mt-12 ">
      {notes.map((note: any, index: number) => {
        const date = new Date(note.id);
        return (
          <div
            key={index}
            className="p-4 transition border-2 rounded-lg shadow-lg  border-zinc-900 hover:shadow-none"
          >
            <div className="flex items-baseline justify-between">
              <div className="">#{index + 1}</div>
              <div className="text-xs text-zinc-600">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</div>
            </div>
            <div className="text-2xl font-bold underline">{note.title}</div>
            <div className="mt-2 text-normal text-zinc-600">{note.content}</div>
          </div>
        );
      })}
    </div>
  );
}

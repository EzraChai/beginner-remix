import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NewNote from "~/components/NewNote";
import NotesList from "~/components/NotesList";
import { getStoredNotes, storeNotes } from "~/data/notes";

export default function Notes() {
  const notes = useLoaderData();
  return (
    <div className="flex flex-col items-center mx-auto mt-24 max-w-7xl">
      <div className="w-full px-4 py-4 rounded-lg ">
        <div className="max-w-2xl mx-auto text-3xl font-bold underline">
          Notes
        </div>
        <div className="w-full mt-4">
          <div className="max-w-2xl mx-auto">
            <NewNote />
          </div>

          <NotesList notes={notes} />
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  // return new Response(JSON.stringify(await getStoredNotes()), {
  //   headers: { "Content-Type": "application/json" },
  // });
  // return json(await getStoredNotes());
  return await getStoredNotes();
}

export async function action({ request }: any) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect("/notes");
}

export default function NewNote() {
  return (
    <div className="">
      <form method="post" action="/notes">
        <input
          name="title"
          className="p-2 mt-4 text-5xl font-bold outline-none"
          placeholder="Title..."
          required
        />
        <textarea
          name="content"
          autoComplete={"true"}
          autoCorrect="true"
          rows={10}
          placeholder="Your daily fun things..."
          className="w-full p-2 mt-4 text-lg font-semibold"
          required
        />
        <div className="flex justify-end">
          <button
            className="px-2 py-1 mt-4 text-lg font-semibold text-white transition rounded-md bg-zinc-800 hover:bg-zinc-600"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

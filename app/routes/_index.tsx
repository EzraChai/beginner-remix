import { Link, type V2_MetaFunction } from "@remix-run/react";
import React, { useEffect, useState } from "react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  const [text, setText] = useState("");

  useEffect(() => {
    const text = localStorage.getItem("text") as string;
    setText(text);
  }, []);

  const setTextToLocalStorage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    localStorage.setItem("text", e.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl min-h-screen mx-auto">
      <img
        className="rounded-lg"
        src="https://images.unsplash.com/photo-1584802547882-3499a2bb917a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
        alt="Korea"
      />
      <textarea
        onChange={(e) => setTextToLocalStorage(e)}
        value={text}
        className="w-full p-2 mt-4 font-semibold rounded-lg placeholder:text-zinc-400 placeholder:font-normal"
        placeholder="Type anyting out..."
        rows={4}
      />
    </div>
  );
}

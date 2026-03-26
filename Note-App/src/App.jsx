import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [note, setNote] = useState([]);

  const submitHandles = (e) => {
    e.preventDefault();
    setNote([...note, { title, detail }]);
    setTitle("");
    setDetail("");
  };

  const deleteNote = (idx) => {
    setNote(note.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-black text-white">
      
      {/* LEFT - FORM */}
      <form
        onSubmit={submitHandles}
        className="lg:w-1/2 w-full p-10 flex flex-col gap-5 border-r border-gray-800"
      >
        <h2 className="text-3xl font-bold">Add Notes</h2>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-4 py-2 rounded-md bg-transparent placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
        />

        <textarea
          placeholder="Write Details"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="px-4 py-2 h-32 rounded-md bg-transparent placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white resize-none"
        />

        <button className="bg-white text-black py-2 rounded-md font-semibold hover:bg-gray-200 active:scale-95 transition">
          Add Notes
        </button>
      </form>

      {/* RIGHT - NOTES */}
      <div className="lg:w-1/2 w-full p-10">
        <h2 className="text-3xl font-bold">Recent Notes</h2>

        <div className="mt-6 flex flex-wrap gap-5 overflow-y-auto h-[70vh] no-scrollbar">
          {note.map((el, idx) => (
            <div
              key={idx}
              className="relative w-44 h-56 p-5 rounded-xl bg-white text-black shadow-lg hover:scale-105 transition"
            >
              {/* DELETE */}
              <button
                onClick={() => deleteNote(idx)}
                className="absolute top-2 right-2 bg-black text-white p-1 rounded-full hover:bg-gray-800"
              >
                <X size={14} />
              </button>

              {/* CONTENT */}
              <h3 className="text-lg font-bold text-black">
                {el.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                {el.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
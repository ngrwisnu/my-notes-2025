"use client";

import { Plus } from "lucide-react";
import { useNavigate } from "react-router";

const AddButtonFloat = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-transparent">
      <div className="container h-14">
        <button
          type="button"
          className="ml-auto flex w-fit items-center gap-1 rounded-full bg-indigo-600 px-3 py-2 text-white shadow-2xl hover:bg-indigo-700"
          onClick={() => navigate("/notes/new")}
        >
          <Plus size={20} /> Add new note
        </button>
      </div>
    </div>
  );
};

export default AddButtonFloat;

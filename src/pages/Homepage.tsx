import NoteCard from "../components/note/NoteCard";
import { setInitialNotes } from "../utils/notes";

const Homepage = () => {
  const notes = setInitialNotes();

  return (
    <div className="container">
      <div className="flex flex-wrap gap-4">
        {notes.map((note) => (
          <NoteCard key={note.id} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;

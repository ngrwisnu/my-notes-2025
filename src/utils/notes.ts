import { NoteObject } from "../types/note";

const initialNotes = [
  {
    id: "notes-1",
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: "notes-2",
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: "notes-3",
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: "notes-4",
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: "notes-5",
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: true, // default: false
  },
  {
    id: "notes-6",
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: true, // default: false
  },
];

function getNotesFromStorage(): NoteObject[] {
  const notes = sessionStorage.getItem("notes");

  return notes ? JSON.parse(notes) : [];
}

function saveNotesToStorage(key: string, notes: NoteObject[]) {
  sessionStorage.setItem(key, JSON.stringify(notes));
}

export function findByKeyword(
  notes: NoteObject[],
  keyword: string,
): NoteObject[] {
  return notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase()),
  );
}

export function setInitialNotes(): NoteObject[] {
  const notes = getNotesFromStorage();

  if (!notes.length) {
    saveNotesToStorage("notes", initialNotes);
    return initialNotes;
  }

  return notes;
}

export function getAllNotes(): NoteObject[] {
  const notes = getNotesFromStorage();

  return notes;
}

export function getNote(id: string) {
  const notes = getNotesFromStorage();

  const foundedNote = notes.find((note) => note.id === id);

  return foundedNote;
}

export function getActiveNotes() {
  const notes = getNotesFromStorage();

  const activeNotes = notes.filter((note) => !note.archived);

  return activeNotes;
}

export function getArchivedNotes() {
  const notes = getNotesFromStorage();

  const archivedNotes = notes.filter((note) => note.archived);

  return archivedNotes;
}

export function addNote({ title, body }: { title: string; body: string }) {
  let notes = getNotesFromStorage();

  notes = [
    ...notes,
    {
      id: `notes-${+new Date()}`,
      title: title || "(untitled)",
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    },
  ];

  saveNotesToStorage("notes", notes);
}

export function deleteNote(id: string) {
  let notes = getNotesFromStorage();

  notes = notes.filter((note) => note.id !== id);

  saveNotesToStorage("notes", notes);
}

export function archiveNote(id: string) {
  let notes = getNotesFromStorage();

  notes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, archived: true };
    }
    return note;
  });

  saveNotesToStorage("notes", notes);
}

export function unarchiveNote(id: string) {
  let notes = getNotesFromStorage();

  notes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, archived: false };
    }

    return note;
  });

  saveNotesToStorage("notes", notes);
}

export function editNote({
  id,
  title,
  body,
}: {
  id: string;
  title: string;
  body: string;
}) {
  let notes = getNotesFromStorage();

  const noteToEdit = notes.find((note) => note.id === id);

  if (noteToEdit) {
    noteToEdit.title = title;
    noteToEdit.body = body;
  }

  notes = notes.map((note) => {
    if (note.id === id && noteToEdit) {
      return noteToEdit;
    }
    return note;
  });

  sessionStorage.setItem("notes", JSON.stringify(notes));
}

export function formatCreatedAt(date: string): string {
  const now = new Date().getTime();
  const createdAt = new Date(date).getTime();
  const timeGap = Math.floor((now - createdAt) / 1000);

  const units = [
    { name: "year", seconds: 365 * 24 * 60 * 60 },
    { name: "month", seconds: 30 * 24 * 60 * 60 },
    { name: "day", seconds: 24 * 60 * 60 },
    { name: "hour", seconds: 60 * 60 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  for (const unit of units) {
    const count = Math.floor(timeGap / unit.seconds);

    if (count >= 1) {
      return count === 1 ? `a ${unit.name} ago` : `${count} ${unit.name}s ago`;
    }
  }

  return "just now";
}

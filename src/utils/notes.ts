import { NoteObject } from "../types/note";

export function findByKeyword(
  notes: NoteObject[],
  keyword: string,
): NoteObject[] {
  return notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase()),
  );
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

export function formatDateToID(date: string | undefined) {
  if (!date) {
    return "";
  }

  const options: Record<string, string> = {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("id-ID", options);
}

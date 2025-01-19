import { MouseEvent } from "react";

export interface NoteObject {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  archived: boolean;
  owner: string;
}

export interface NoteCardProps extends NoteObject {
  archiveHandler?: (e: MouseEvent<HTMLElement>, id: string) => void;
  deleteHandler?: (e: MouseEvent<HTMLElement>, id: string) => void;
}

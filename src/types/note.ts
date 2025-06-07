export interface Note {
  id: number;
  title: string;
  content: string;
  tag: "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";
  createdAt: string;
  updatedAt: string;
  userId: number;
}

export interface NoteFormData {
  title: string;
  content: string;
  tag: Note["tag"];
}

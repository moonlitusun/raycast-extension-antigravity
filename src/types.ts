export interface Project {
  name: string;
  path: string;
  lastModifiedTime: number;
}

export type EditorType = "cursor" | "code" | "antigravity" | "trae";

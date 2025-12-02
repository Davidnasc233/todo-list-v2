export interface TaskDto {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: number;
  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
}

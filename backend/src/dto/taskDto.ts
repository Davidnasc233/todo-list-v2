export interface TaskDto {
  id: number;
  description: string;
  completed: boolean;
  priority: number;
  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
}

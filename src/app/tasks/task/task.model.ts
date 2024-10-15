export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewTask {
  title:string; 
  dueDate:string; 
  summary:string;
}
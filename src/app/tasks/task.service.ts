import { Injectable } from "@angular/core";
import { type Task, type NewTask } from "./task/task.model"

@Injectable({ providedIn: "root" })

export class TaskService {


    private tasks: Array<Task> = [
        {
          id:'a1',
          userId:'u1',
          title:'1st task',
          summary:'heeloo world',
          dueDate:'2025-12-31'
        },
        {
          id:'a2',
          userId:'u1',
          title:'2nd task',
          summary:'heeloo world',
          dueDate:'2025-12-31'
        },
        {
          id:'a3',
          userId:'u2',
          title:'3rd task',
          summary:'heeloo world',
          dueDate:'2025-12-31'
        },
        {
          id:'a4',
          userId:'u2',
          title:'3rd task',
          summary:'heeloo world',
          dueDate:'2025-12-31'
        }
      ]

    constructor(){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
            this.tasks = JSON.parse(tasks);
        } 
    }

    private updateLocalStorage(){
        localStorage.setItem("tasks",JSON.stringify(this.tasks))
    }

    public getUserTasks(userId: string){
        return this.tasks?.filter(task => task.userId == userId)
    }

    addNewTask(newTaskData: NewTask, userId: string){
        this.tasks.push({
            id:new Date().getTime().toString(),
            userId:userId,
            ...newTaskData,
          })
          this.updateLocalStorage()
    }

    removeTask(taskId:string){
        this.tasks = this.tasks.filter(elem => elem.id != taskId);
        this.updateLocalStorage()
    }
}
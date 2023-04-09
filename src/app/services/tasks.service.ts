import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[]= []; 
  completedTasks: Task[] = [];
  filteredTasks: any[] = []; 
  selectedDate: string = ''; 
  
  constructor() { 

    let storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks)
      this.tasks.forEach(task => {
        task.complete = false;  
      });
    } else {
      this.tasks = []
    }

  }   
  
  deleteTask(i:number){
    this.tasks.splice(i, 1);
  }


  saveTask(task: Task) {
    const datetime = moment(task.date + ' ' + task.time, 'YYYY-MM-DD HH:mm');

    const newTask: Task = {
      title: task.title,
      complete: true,
      date: datetime.format('YYYY-MM-DD'),
      hours: datetime.hours(),
      minutes: datetime.minutes(),
      time: task.time,
    };

    this.tasks.push(newTask);
    this.storeTasks();
  }

  updateTask(id: any, item: any, newDate: Date, newTime: string){
    item.date = newDate;
    item.time = newTime;
    this.tasks[id] = item
    this.storeTasks()
  }

  markAsCompleted(task: any) {
    this.tasks[task.id] = task;
    this.storeTasks();
  }

  filterTasks(date: string) {
    this.selectedDate = date;
    this.filteredTasks = this.tasks.filter(task => task.date === date);
  }

  storeTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

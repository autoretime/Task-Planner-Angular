import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks: any = [];
  showCompleted: boolean = false;
  completed: Task[] = []
  showCompletedTasks: Task[] = [];
  date: string = '';
  startDate: any;
  endDate: any;

 
  constructor(public TasksService:TasksService){}

  ngOnInit(): void {}

  markAsCompleted(task: Task) {
    task.complete = !task.complete;    
    if (task.complete) {
      this.showCompletedTasks.push(task);
    } else if(!task.complete ) {
      this.showCompletedTasks = this.showCompletedTasks.filter(t => t.complete !== task.complete);
    }
    
    this.TasksService.markAsCompleted(task);
  }

  deleteTask(i:number){
    this.TasksService.deleteTask(i);
  }

  filterTasks(date: string){
    this.TasksService.filterTasks(date);
  }

}

import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  title: string = '';
  date: any;
  time: any;

  constructor(private TasksService:TasksService, private router:Router){}

  saveTask() {
    const taskData = { title: this.title , date:this.date, time: this.time };
    this.TasksService.saveTask(taskData);
    this.router.navigate(['/']);
  }

}

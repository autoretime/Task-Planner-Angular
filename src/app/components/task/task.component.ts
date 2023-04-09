import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskId: any;
  task: any;
  newDate: any;
  newTime: any;

  constructor(private route: ActivatedRoute, private TasksService:TasksService, private router:Router){}

  ngOnInit():void{
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.TasksService.tasks[this.taskId];
  }

  updateTask(){
    this.TasksService.updateTask(this.taskId, this.task, this.newDate, this.newTime);
    this.router.navigate(['/'])
  }
}

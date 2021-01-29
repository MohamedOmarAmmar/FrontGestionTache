import { Component, OnInit, ɵConsole } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from 'src/app/services/task.service'
import { Task } from '../models/Task';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskeditComponent } from '../taskedit/taskedit.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  show: boolean = false;
  tasks: any=[];
  constructor(private service: TaskService , private toastr: ToastrService, private modalService: NgbModal) { }
  ngOnInit() {
   this.getAllTasks();
  }
  getAllTasks(){
    this.service.getAllTasks().subscribe(data => {
      this.tasks = data;
      console.log(data);
      this.show = true;
    });

  }
  
  deleteTask(id: Number){
    this.service.deleteTask(id).subscribe(data => {
      this.toastr.success('Tâche supprimée avec succés ');
      this.getAllTasks();
    });
  }

  open(task: any) {
    const modalRef = this.modalService.open(TaskeditComponent);
    modalRef.componentInstance.task = task;
    console.log(task);
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
        this.getAllTasks();
      }
    });
  }

  
}

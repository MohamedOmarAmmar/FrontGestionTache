import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  URL = 'http://localhost:8080/task';
  constructor(private http: HttpClient) { }
  getAllTasks(): Observable<Task>{
    return this.http.get<Task>(this.URL);
  }
  postData(params: any): Observable<Task>{
    return this.http.post<Task>(this.URL,  params  );
  }
  updateTask(id: Number, params: any): Observable<Task>{
    let url = this.URL;
    console.log(url);
    return this.http.post<Task>(url,  params);
  }
  deleteTask(id: Number){
    let url = `${this.URL}/${id}`;
    return this.http.delete(url);
  }
}
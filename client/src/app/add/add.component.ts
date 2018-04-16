import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newTask = {
    name:"",
    detail:""
  }
  error;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }

  addSubmit(){
    this._httpService.addTask(this.newTask, (resFromService)=>{
      if(resFromService.messege == "Error"){
        this.error = resFromService.messege.error;
      }else{
        this.newTask = {
          name:"",
          detail:""
        }
        this._router.navigate(["/"]);
      }
    })
  }

}

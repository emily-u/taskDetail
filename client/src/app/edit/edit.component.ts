import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editTask = {
    name:"",
    detail:""
  };
  error;
  name: String;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      console.log("123", params);
      this.editTask.name= params.get("name");
      this.editTask.detail= params.get("detail");
    })
    console.log("33333333", this.editTask.name);
    }

  editSubmit(){
    this._route.paramMap.subscribe(params => {
      
      this._httpService.editTask(params.get("id"), this.editTask, (resFromService) => {
        if (resFromService.name == "ValidationError") {
          this.error = resFromService.message;
        }else{
          this._router.navigate(["/"]);
        }
      }); 
    })
   
  }
}

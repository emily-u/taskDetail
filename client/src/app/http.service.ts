import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {
    constructor(private _http: HttpClient){}

    getTasks(callback){
        this._http.get("/all").subscribe(
            (res) => {
                callback(res);
            }
        )
    }

    retrieveOneTask(taskid, callback){
        console.log("get one task in http.service",taskid);
        this._http.get("task/"+taskid).subscribe(
            (res) => {
                callback(res);
            }
        )
    }

    addTask(newTask, callback){
        this._http.post("/", newTask).subscribe(
            (res) => {
                callback(res);
            }
        )
    }

    deleteTask(deleteid, callback){
        console.log('deleteid: ', deleteid);
        this._http.delete('/delete/'+deleteid,{}).subscribe((res)=>{
            callback(res);
        })
    }

    editTask(editid,edit_content,callback){
        this._http.put('/edit/'+ editid, edit_content).subscribe((res)=>{
            callback(res);
        })
    }
}

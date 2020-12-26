import { Injectable, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  
  constructor(private http:HttpClient) { }
  public NODEURL = "http://localhost:4000/";
  select(routename){
    return this.http.get(this.NODEURL + routename);
  }
  selectCondition(routename, id){
    return this.http.get(this.NODEURL + routename+"/"+id);
  }
  postData(routename, rec){
    return this.http.post(this.NODEURL+routename, rec);
  }
  deleteData(routename ,rec){
    return this.http.delete(this.NODEURL+routename+"/"+rec);
  }
  
  updateData(routename,rec,id){
    // console.log(this.NODEURL + routename+"/"+id);
    // console.log(rec);
    
    return this.http.put(this.NODEURL+routename+"/"+id,rec);
  }
}

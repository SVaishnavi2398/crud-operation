import { Component, OnInit } from '@angular/core';
import {CrudService} from './crud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  values_from_node : any;
  constructor(private crud:CrudService){

  }
  ngOnInit(){
    this.crud.select("fetch_data").subscribe(
      (res)=>{
      //console.log(res);
        this.values_from_node = res;
      }
    )
  }
  add_record(txt1,txt2,txt3,txt4,txt5,txt6,txt7,txt8,txt9){
    var obj={
    firstname: txt1.value,
    lastname: txt2.value,
    mobile: txt3.value,
    email: txt4.value,
    password: txt5.value,
      dob:txt6.value,
      state:txt7.value,
      city:txt8.value,
      pincode:txt9.value
    }
    console.log(obj);
    this.crud.postData("post_data",obj).subscribe((res)=>
    {
      console.log(res);
    })
  }
  delete_data(id){
    this.crud.deleteData("delete_data", id).subscribe(
      (res)=>{
        console.log(res);
      }
    )
  }
}

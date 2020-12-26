import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ActivatedRoute} from'@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-edit-comp',
  templateUrl: './edit-comp.component.html',
  styleUrls: ['./edit-comp.component.css']
})
export class EditCompComponent implements OnInit {
  userarr:any;
  urlValues:any;
  constructor(private act:ActivatedRoute, private crud:CrudService) { }

  ngOnInit(): void {
    let urlRec = this.act.snapshot.params['urlId'];
    this.urlValues=this.act.snapshot.params['urlId'];
    // console.log(urlRec);
    this.crud.selectCondition("get_values_by_id" , urlRec).subscribe(
      (res)=>{
        console.log(res);
        this.userarr=res[0];
      }
    )
  }
  update_record(rec1,rec2,rec3,rec4,rec5,rec6,rec7,rec8,rec9){
    var obj={
      firstname:rec1.value,
      lastname:rec2.value,
      mobile:rec3.value,
      email:rec4.value,
      password:rec5.value,
      dob:rec6.value,
      state:rec7.value,
      city:rec8.value,
      pincode:rec9.value
    }
    console.log(obj)
    console.log(this.urlValues)
    this.crud.updateData("update-values", obj, this.urlValues ).subscribe((res)=>
    {
      console.log(res);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewserviceService } from 'src/app/service/newservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  datavalue:FormGroup;

  data:any;
  
  constructor(private formbuilder:FormBuilder,
    private service:NewserviceService) {

      this.datavalue = formbuilder.group({
        data:[''],
        email:[''],
        file:['']
      })

     }

  ngOnInit() {
  }

  get formcontrol()
  {
    return this.datavalue.controls;
  }

  formmodule()
  {
    console.log(this.datavalue.value);
    let request ={}
    request ={
      data:this.formcontrol.data.value,
      email:this.formcontrol.email.value
    }
    this.service.post(request).subscribe((image)=>{
      this.data=image;
      console.log(this.data);
    })
  }

}

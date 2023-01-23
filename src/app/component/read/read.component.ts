import { Component, OnInit } from '@angular/core';
import { NewserviceService } from 'src/app/service/newservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  data:any
  constructor(private service:NewserviceService) { }

  ngOnInit() {
    this.service.getdata().subscribe((response)=>{
      this.data=response.list;
      console.log(this.data)
   })
  }

  deleteData(value)
  {
   console.log(value);
   this.service.delete(value).subscribe((response:any)=>{
    console.log(response);
   })

   this.service.getdata().subscribe((response)=>{
    this.data=response.list;
    console.log(this.data)
 })
  }
editData(params,value) {
  // let event = value.value;
  // console.log(params,event);
  let postData = {
    Id: params,
    Username: value.value
  }
  this.service.updateData(postData).subscribe(res => {
    console.log(res)
  })
}

}

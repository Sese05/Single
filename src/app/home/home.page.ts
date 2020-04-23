import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, NgModel} from '@angular/forms';
import {InformationService} from './../shared/information.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

public sector : string;
public masking : string;

  InfoForm: FormGroup;
  

  constructor(private dbService: InformationService,private router:Router,public fb:FormBuilder) { }
    

  ngOnInit() {
    this.InfoForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      password: [''],
      regnumber: [''],
      ppenumber: ['']
      
      
    })
  }
formSubmit(){
 

  
  if (!this.InfoForm.valid){
    return false;
  }else{
    this.dbService.createBook(this.InfoForm.value).then(res=>{
      console.log(res)
      this.InfoForm.reset();
      this.router.navigate(['/home']);
    })
    .catch(error=>console.log(error));
  }
  const sector = this.InfoForm.get('sector').value;
  const masking = this.InfoForm.get('masking').value;
}

}





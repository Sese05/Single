import { Component, OnInit } from '@angular/core';
import { Information } from './../../../../Shared/Information';
import { InformationService } from './../shared/information.service';



@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.page.html',
  styleUrls: ['./edit-info.page.scss'],
})
export class EditInfoPage implements OnInit {



  constructor(private dbService: InformationService) { }

  ngOnInit() {
   // this.fetchBook();
   // let BookRes = this.dbService.getBookList();

  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {

  constructor(private myapi:ApiService) { 

    this.fetchData()
  }

  status:boolean=false

  fetchData =()=>{
    this.myapi.newslistData().subscribe(
      (data) =>{
        this.newsData=data
        this.status=true
      }
    )
  }

  newsData:any = {}

  ngOnInit(): void {
  }

}

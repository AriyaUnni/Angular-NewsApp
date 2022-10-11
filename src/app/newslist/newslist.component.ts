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

  fetchData =()=>{
    this.myapi.newslistData().subscribe(
      (data) =>{
        this.newsData=data
      }
    )
  }

  newsData:any = {}

  ngOnInit(): void {
  }

}

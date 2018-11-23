import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items: any;
  filterText: string;

  items_old = [
    {
      "id": 1,
      "text": 'To jest pierwszy wpis',
      "image": 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      "id": 2,
      "text": 'To jest drugi wpis',
      "image": 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      "id": 3,
      "text": 'To jest trzeci wpis',
      "image": 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      "id": 4,
      "text": 'To jest czwarty wpis',
      "image": 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      "id": 5,
      "text": 'To jest piąty wpis',
      "image": 'https://www.w3schools.com/w3css/img_lights.jpg'
    }
  ]

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getAll().subscribe(result => {
      this.items = result;
    })
  }

}

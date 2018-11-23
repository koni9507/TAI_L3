import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {BlogComponent} from '../blog.component';
import {DataServiceService} from '../../../services/data-service.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  id;
  post;

  constructor(private Activatedroute: ActivatedRoute, private dataService:DataServiceService) { }

  ngOnInit() {
    this.id = this.Activatedroute.snapshot.params['id'];
    // this.post = new BlogComponent().items.find(p => p.id == this.id);
    this.dataService.get(this.id).subscribe(result => {
      this.post = result;
    });
  }
}

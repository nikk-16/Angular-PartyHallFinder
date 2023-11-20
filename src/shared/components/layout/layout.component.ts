import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwnerServiceService } from 'src/shared/services/owner-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private ownerService: OwnerServiceService, private activeRoute: ActivatedRoute){}

  ngOnInit(){
    this.ownerService.getOwnerId(this.activeRoute.snapshot.params['id']);
  }
}

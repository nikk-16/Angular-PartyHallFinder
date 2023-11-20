import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  selectedItem = 'dashboard';
  id!: string;
  constructor(private activeRoute: ActivatedRoute){
    this.id = activeRoute.snapshot.params['id'];
  }
  selectItem(item: string) {
    this.selectedItem = item;
  }
}

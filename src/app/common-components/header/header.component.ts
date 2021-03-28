import { Component, OnInit } from '@angular/core';
import { CommonMethodsService } from 'src/app/providers/services/common-methods.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public commonMethodsService: CommonMethodsService,
    public router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.commonMethodsService.logout();
  }
}

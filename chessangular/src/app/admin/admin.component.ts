import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
imports: [    RouterModule,  ]

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

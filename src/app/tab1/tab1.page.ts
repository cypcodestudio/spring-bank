import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../business/services/dashboard.service';
import { DashboardResponse } from '../business/domain/DashboardResponse';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  payload!: DashboardResponse;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.dashboard().then((response: any)=>{
      this.payload = response; 
    });
  }

}

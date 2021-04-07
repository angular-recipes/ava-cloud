import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-alerts-page',
  templateUrl: './alerts-page.component.html',
  styleUrls: ['./alerts-page.component.css']
})
export class AlertsPageComponent implements OnInit {
  alerts = [];
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    const token = localStorage.getItem('token');
    const data: any = await this.http.get(`http://nevacore.atneva.ai/api/alerts?token=${token}&page=1`).toPromise();
    console.log(data);
    if(!data.success) {
      alert(data.message);
      return;
    }
    this.alerts = data.response;
  }

}

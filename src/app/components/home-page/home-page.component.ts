import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  async logout() {
    const token = localStorage.getItem('token');
    const data: any = await this.http.delete(`http://nevacore.atneva.ai/api/users/sign_out?authentication_token=${token}`).toPromise();
    if(data.success) {
      this.router.navigate(['/login']);
    } else {
      alert(data.message);
    }
  }

}

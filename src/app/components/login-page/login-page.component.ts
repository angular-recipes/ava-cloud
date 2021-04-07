import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
    constructor (private router: Router, private http: HttpClient) {}

    ngOnInit (): void {}

    async login (email, password) {
        const data: any = await this.http
            .post('http://nevacore.atneva.ai/api/users/sign_in', {
                user: { email, password },
            })
            .toPromise();
        if (!data.success) {
            alert(data.message);
            return;
        }

        const token = data.response.authentication_token;
        localStorage.setItem('token', token);
        localStorage.setItem('user-data', data.response);
        this.router.navigate(['/home']);
    }
}

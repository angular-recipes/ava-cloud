import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
    constructor (private http: HttpClient) {}

    ngOnInit (): void {}

    async changePassword (currentPassword, newPassword) {
        const data: any = await this.http.patch(
            'http://nevacore.atneva.ai/api/users/password',
            {
                token: localStorage.getItem('token'),
                user: {
                    password: newPassword,
                },
            }
        ).toPromise();
        console.log(data);
        if (data.success) {
            alert('Password changed successfully!');
        } else {
            alert(data.message);
        }
    }
}

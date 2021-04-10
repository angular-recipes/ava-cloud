import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-subscriptions',
    templateUrl: './my-subscriptions.component.html',
    styleUrls: ['./my-subscriptions.component.css'],
})
export class MySubscriptionsComponent implements OnInit {
    showModal = false;
    modelId;
    myModels = [];
    constructor (private http: HttpClient) {}

    ngOnInit () {
      this.loadData();
    }

    async loadData() {
        const data = await this.http
            .get(
                `http://nevacore.atneva.ai/api/marketplaces?token=${localStorage.getItem(
                    'token'
                )}&filter=yes`
            )
            .toPromise();
        this.myModels = data.response;
    }

    async unsubscribeModel () {
        const data = await this.http
            .post('http://nevacore.atneva.ai/api/marketplaces/unsubscribe', {
                token: localStorage.getItem('token'),
                id: this.modelId,
            })
            .toPromise();
        alert(data.message);
        this.loadData();
    }
}

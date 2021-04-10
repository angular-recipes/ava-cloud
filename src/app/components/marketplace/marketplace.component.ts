import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-marketplace',
    templateUrl: './marketplace.component.html',
    styleUrls: ['./marketplace.component.css'],
})
export class MarketplaceComponent implements OnInit {
    marketModels = [];
    constructor (private http: HttpClient) {}

    ngOnInit () {
      this.loadData();
    }

    async loadData() {
        const data = await this.http
            .get(
                `http://nevacore.atneva.ai/api/marketplaces?token=${localStorage.getItem(
                    'token'
                )}`
            )
            .toPromise();
        this.marketModels = data.response;
        console.log(this.marketModels);
    }

    async subscribeModel (id) {
        const data = await this.http.post(
            'http://nevacore.atneva.ai/api/marketplaces/subscribe',
            {
                token: localStorage.getItem('token'),
                id: id,
            }
        ).toPromise();
        alert(data.message);
        this.loadData();
    }
}

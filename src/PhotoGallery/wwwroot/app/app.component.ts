﻿import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import {enableProdMode} from '@angular/core';

enableProdMode();
import { MembershipService } from './core/services/membership.service';
import { User } from './core/domain/user';

@Component({
    selector: 'photogallery-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {

    constructor(public membershipService: MembershipService,
                public location: Location) { }

    ngOnInit() {   }

    isUserLoggedIn(): boolean {
        return this.membershipService.isUserAuthenticated();
    }

    getUserName(): string {
        if (this.isUserLoggedIn()) {
            var _user = this.membershipService.getLoggedInUser();
            return _user.Username;
        }
        else
            return 'Account';
    }

    logout(): void {
        this.membershipService.logout()
            .subscribe(res => {
                localStorage.removeItem('user');
            },
            error => console.error('Error: ' + error),
            () => { });
    }
}

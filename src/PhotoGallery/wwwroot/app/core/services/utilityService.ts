﻿import { Injectable } from 'angular2/core';
import {Router} from 'angular2/router'

@Injectable()
export class UtilityService {

    private _router: Router;

    constructor(router: Router) {
        this._router = router;
    }

    convertDateTime(date: Date) {
        var _formattedDate = new Date(date.toString());
        return _formattedDate.toDateString();
    }

    navigate(path: string) {
        this._router.navigate([path]);
    }

    navigateToSignIn() {
        this.navigate('/Account/Login');
    }
}
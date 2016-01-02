﻿import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Router, RouterLink} from 'angular2/router'
import { Album } from '../core/domain/album';
import { Paginated } from '../core/common/paginated';
import { DataService } from '../core/services/dataService';
import { UtilityService } from '../core/services/utilityService';
import { NotificationService } from '../core/services/notificationService';
import { Routes, APP_ROUTES } from '../routes';

@Component({
    selector: 'albums',
    providers: [NotificationService],
    templateUrl: './app/components/albums.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink]
})
export class Albums extends Paginated{
    private _albumsAPI: string = 'api/albums/';
    private _albums: Array<Album>;
    private routes = Routes;

    constructor(public albumsService: DataService,
                public utilityService: UtilityService,
                public notificationService: NotificationService,
                public router: Router) {
        super(0, 0, 0);

        this.routes = Routes;
        albumsService.set(this._albumsAPI, 3);
        this.getAlbums();
    }

    getAlbums(): void {
        this.albumsService.get(this._page)
            .subscribe(res => {               
                var data:any = res.json();
                this._albums = data.Items;
                this._page = data.Page;
                this._pagesCount = data.TotalPages;
                this._totalCount = data.TotalCount;
            },
            error => {

                if (error.status == 401) {
                    this.notificationService.printErrorMessage('Authentication required');
                    this.utilityService.navigateToSignIn();
                }
            });
    }

    search(i): void {
        super.search(i);
        this.getAlbums();
    };

    convertDateTime(date: Date) {
        return this.utilityService.convertDateTime(date);
    }
}
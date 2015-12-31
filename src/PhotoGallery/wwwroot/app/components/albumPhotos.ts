﻿import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RouterLink, RouteParams} from 'angular2/router'
import { Photo } from '../core/domain/photo';
import { Paginated } from '../core/common/paginated';
import { DataService } from '../core/services/dataService';
import { UtilityService } from '../core/services/utilityService';
import { NotificationService } from '../core/services/notificationService';
import { OperationResult } from '../core/domain/operationResult';

@Component({
    selector: 'album-photo',
    providers: [NotificationService],
    templateUrl: './app/components/albumPhotos.html',
    bindings: [NotificationService],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink]
})
export class AlbumPhotos extends Paginated {
    private _albumsAPI: string = 'api/albums/';
    private _photosAPI: string = 'api/photos/';
    private _albumId: string;
    private _photos: Array<Photo>;
    private _displayingTotal: number;
    private _routeParam: RouteParams;
    private _albumTitle: string;

    constructor(public dataService: DataService,
        public utilityService: UtilityService,
        public notificationService: NotificationService,
        routeParam: RouteParams) {
        super(0, 0, 0);

        this._routeParam = routeParam;
        this._albumId = this._routeParam.get('id');
        this._albumsAPI += this._albumId + '/photos/';
        dataService.set(this._albumsAPI, 12);
        this.getAlbumPhotos();
    }

    getAlbumPhotos(): void {
        this.dataService.get(this._page)
            .subscribe(res => {

                var data: any = res.json();

                this._photos = data.Items;
                this._displayingTotal = this._photos.length;
                this._page = data.Page;
                this._pagesCount = data.TotalPages;
                this._totalCount = data.TotalCount;
                this._albumTitle = this._photos[0].AlbumTitle;
            },
            error => {
                if (error.status == 401) {
                    this.utilityService.navigateToSignIn();
                }

                console.error('Error: ' + error)
            },
            () => console.log(this._photos));
    }

    search(i): void {
        super.search(i);
        this.getAlbumPhotos();
    };

    convertDateTime(date: Date) {
        return this.utilityService.convertDateTime(date);
    }

    delete(photo: Photo) {
        var _removeResult: OperationResult = new OperationResult(false, '');

        this.notificationService.printConfirmationDialog('Are you sure you want to delete the photo?',
            () => {
                this.dataService.deleteResource(this._photosAPI + photo.Id)
                    .subscribe(res => {
                        _removeResult.Succeeded = res.Succeeded;
                        _removeResult.Message = res.Message;
                    },
                    error => console.error('Error: ' + error),
                    () => {
                        if (_removeResult.Succeeded) {
                            this.notificationService.printSuccessMessage(photo.Title + ' removed from gallery.');
                            this.getAlbumPhotos();
                        }
                        else {
                            this.notificationService.printErrorMessage('Failed to remove photo');
                        }
                    });
            });
    }
}
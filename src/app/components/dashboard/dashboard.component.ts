import { Component } from '@angular/core';
import { BlogItemType } from '../../models/blog-item-type';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    public BlogItemType = BlogItemType;

    constructor() {
    }
}

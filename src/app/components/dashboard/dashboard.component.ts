import { Component } from '@angular/core';
import { BlogItemTopic } from '../../models/blog-item-topic';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    public BlogItemTopic = BlogItemTopic;

    constructor() {
    }
}

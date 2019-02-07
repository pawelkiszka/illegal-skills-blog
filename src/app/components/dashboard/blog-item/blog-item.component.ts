import { Component, Directive, Input, OnInit } from '@angular/core';
import { BlogItemType } from '../../../models/blog-item-type';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {

    @Input() public blogItemType: BlogItemType;

}

@Directive({selector: '[app-blog-item-date]'})
export class BlogItemDate {
}

@Directive({selector: '[app-blog-item-title]'})
export class BlogItemTitle {
}

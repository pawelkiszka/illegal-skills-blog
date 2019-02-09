import { ChangeDetectionStrategy, Component, Directive, Input } from '@angular/core';
import { BlogItemType } from '../../models/blog-item-type';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogItemComponent {

    @Input() public blogItemType: BlogItemType;

}

@Directive({selector: '[app-blog-item-date]'})
export class BlogItemDateDirective {
}

@Directive({selector: '[app-blog-item-title]'})
export class BlogItemTitleDirective {
}

@Directive({selector: '[app-blog-item-description]'})
export class BlogItemDescriptionDirective {
}
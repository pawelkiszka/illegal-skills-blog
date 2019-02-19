import { ChangeDetectionStrategy, Component, Directive, Input } from '@angular/core';
import { BlogItemTopic } from '../../models/blog-item-topic';
import { BlogItem } from '../../models/blog-item';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogItemComponent implements BlogItem {
    public isDisplayed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    @Input() public topics: BlogItemTopic[] = [];
    @Input() public title: string;
    @Input() public link: string;

    public hideComponent() {
        this.isDisplayed$.next(false);
    }

    public showComponent() {
        this.isDisplayed$.next(true);
    }
}

@Directive({selector: '[app-blog-item-date]'})
export class BlogItemDateDirective {
}

@Directive({selector: '[app-blog-item-description]'})
export class BlogItemDescriptionDirective {
}

@Directive({selector: '[app-blog-item-image]'})
export class BlogItemImageDirective {
}
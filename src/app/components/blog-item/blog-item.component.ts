import { ChangeDetectionStrategy, Component, Directive, Input, OnInit } from '@angular/core';
import { BlogItemTopic } from '../../models/blog-item-topic';
import { StoreState } from '../../store/store.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fromStoreSelectors } from '../../store/store.selectors';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogItemComponent implements OnInit {

    @Input() public topics: BlogItemTopic[] = [];
    public isSelected$: Observable<boolean>;
    public isNoneOfBlogItemTopicSelected$: Observable<boolean>;

    constructor(private readonly store$: Store<StoreState>) {
    }

    public ngOnInit(): void {
        this.isSelected$ = this.isBlogItemSelected();
        this.isNoneOfBlogItemTopicSelected$ = this.store$.pipe(
            select(fromStoreSelectors.getSelectedBlogItemTopics),
            map((selectedBlogItemTopics: BlogItemTopic[]) => selectedBlogItemTopics.length === 0)
        );
    }

    private isBlogItemSelected(): Observable<boolean> {
        return this.store$.pipe(
            select(fromStoreSelectors.getSelectedBlogItemTopics),
            map((selectedBlogItemTopics: BlogItemTopic[]) =>
                this.areAllSelectedTopicsIncludedInCurrentBlogItemTopicsList(selectedBlogItemTopics)
            )
        );
    }

    private areAllSelectedTopicsIncludedInCurrentBlogItemTopicsList(selectedBlogItemTopics: BlogItemTopic[]): boolean {
        return selectedBlogItemTopics.every((topic: BlogItemTopic) => this.topics.includes(topic))
    }
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

@Directive({selector: '[app-blog-item-image]'})
export class BlogItemImageDirective {
}
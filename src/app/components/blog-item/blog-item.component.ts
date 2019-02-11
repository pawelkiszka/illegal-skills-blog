import { ChangeDetectionStrategy, Component, Directive, Input, OnInit } from '@angular/core';
import { BlogItemType } from '../../models/blog-item-type';
import { StoreState } from '../../store/store.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectBlogItemType } from '../../store/store.actions';
import { fromStoreSelectors } from '../../store/store.selectors';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogItemComponent implements OnInit {

    @Input() public blogItemType: BlogItemType;

    public isSelected$: Observable<boolean>;

    constructor(private readonly store: Store<StoreState>) {
    }

    public ngOnInit(): void {
        if (!this.blogItemType) {
            throw new Error('BlogItemType is not defined');
        }
        this.isSelected$ = this.store.pipe(select(fromStoreSelectors.isBlogItemTypeSelected(this.blogItemType)));
    }

    public markBlogItemTypeAsSelected(): void {
        this.store.dispatch(new SelectBlogItemType(this.blogItemType));
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
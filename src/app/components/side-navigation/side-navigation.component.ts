import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StoreState } from '../../store/store.reducer';
import { ToggleBlogItemTopic } from '../../store/store.actions';
import { select, Store } from '@ngrx/store';
import { BlogItemTopic, fromBlogItemTopic } from '../../models/blog-item-topic';
import { Observable } from 'rxjs';
import { fromStoreSelectors } from '../../store/store.selectors';

@Component({
    selector: 'app-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavigationComponent {

    public readonly blogItemTopics: BlogItemTopic[] = fromBlogItemTopic.values();
    public readonly selectedBlogItemTopics$: Observable<BlogItemTopic[]>;

    constructor(private readonly store$: Store<StoreState>) {
        this.selectedBlogItemTopics$ = this.store$.pipe(
            select(fromStoreSelectors.getSelectedBlogItemTopics)
        );
    }

    public toggleBlogItemTopic(blogItemTopic: BlogItemTopic): void {
        this.store$.dispatch(new ToggleBlogItemTopic(blogItemTopic));
    }
}

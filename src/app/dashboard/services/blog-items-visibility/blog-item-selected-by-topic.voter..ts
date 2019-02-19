import { BlogItemSelectedVoter } from './blog-item-selected.voter';
import { StoreState } from '../../store/store.reducer';
import { select, Store } from '@ngrx/store';
import { BlogItem } from '../../models/blog-item';
import { Observable } from 'rxjs';
import { fromStoreSelectors } from '../../store/store.selectors';
import { BlogItemTopic } from '../../models/blog-item-topic';
import { isNullOrUndefined } from 'util';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class BlogItemSelectedByTopicVoter implements BlogItemSelectedVoter {

    constructor(private readonly store$: Store<StoreState>) {
    }

    public vote(blogItem: BlogItem): Observable<boolean> {
        this.checkParameter(blogItem);
        return this.store$.pipe(
            select(fromStoreSelectors.getSelectedBlogItemTopics),
            map((selectedTopics: BlogItemTopic[]) =>
                isNullOrUndefined(selectedTopics) || selectedTopics.length === 0
                    ? true
                    : this.areAllSelectedTopicsIncludedInBlogItem(blogItem, selectedTopics)
            ));
    }

    private checkParameter(blogItem: BlogItem) {
        if (isNullOrUndefined(blogItem) || isNullOrUndefined(blogItem.topics)) {
            throw new Error('BlogItem or BlogItem.topic was not defined. Failed to register voter');
        }
    }

    private areAllSelectedTopicsIncludedInBlogItem(blogItem: BlogItem, selectedBlogItemTopics: BlogItemTopic[]): boolean {
        return selectedBlogItemTopics.every((topic: BlogItemTopic) => blogItem.topics.includes(topic))
    }
}

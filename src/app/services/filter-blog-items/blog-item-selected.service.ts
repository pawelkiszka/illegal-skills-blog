import { Inject, Injectable } from '@angular/core';
import { BLOG_ITEM_SELECTED_VOTER, BlogItemSelectedVoter } from './blog-item-selected.voter';
import { combineLatest, iif, Observable, of } from 'rxjs';
import { BlogItem } from '../../models/blog-item';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable()
export class BlogItemSelectedService {

    constructor(@Inject(BLOG_ITEM_SELECTED_VOTER) private readonly blogItemSelectedVoters: BlogItemSelectedVoter[]) {
    }

    public isBlogItemSelected(blogItem: BlogItem): Observable<boolean> {
        return combineLatest(this.getAllVotes(blogItem)).pipe(
            switchMap((votes: boolean[]) => iif(
                () => votes.includes(false),
                of(false),
                of(true)
            )),
            distinctUntilChanged()
        );
    }

    private getAllVotes(blogItem: BlogItem): Observable<boolean>[] {
        return this.blogItemSelectedVoters.map(
            (blogItemSelectedVoter: BlogItemSelectedVoter) => blogItemSelectedVoter.vote(blogItem)
        );
    }
}

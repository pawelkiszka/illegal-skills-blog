import { BlogItem } from '../../models/blog-item';
import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';

export interface BlogItemSelectedVoter {
    vote(blogItem: BlogItem): Observable<boolean>;
}

export const BLOG_ITEM_SELECTED_VOTERS: InjectionToken<BlogItemSelectedVoter> =
    new InjectionToken<BlogItemSelectedVoter>('blogItemSelectedVoter');

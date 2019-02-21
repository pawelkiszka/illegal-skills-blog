import {
    BlogItemComponent,
    BlogItemDateDirective,
    BlogItemDescriptionDirective,
    BlogItemImageDirective
} from './blog-item/blog-item.component';
import { BlogItemsContainerComponent } from './blog-items-container/blog-items-container.component';
import { PopularTopicsComponent } from './popular-topics/popular-topics.component';
import { FollowMeComponent } from './follow-me/follow-me.component';
import { SearchByTitleComponent } from './search-by-title/search-by-title.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const dashboardComponents = [
    BlogItemComponent,
    BlogItemDateDirective,
    BlogItemDescriptionDirective,
    BlogItemImageDirective,
    BlogItemsContainerComponent,
    PopularTopicsComponent,
    FollowMeComponent,
    SearchByTitleComponent,
    DashboardComponent
];

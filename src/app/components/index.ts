import {
    BlogItemComponent,
    BlogItemDateDirective,
    BlogItemDescriptionDirective,
    BlogItemImageDirective
} from './blog-item/blog-item.component';
import { BlogItemsContainer } from './blog-items-container/blog-items-container.component';
import { PopularTopicsComponent } from './popular-topics/popular-topics.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FollowMeComponent } from './follow-me/follow-me.component';
import { FooterComponent } from './footer/footer.component';
import { SearchByTitleComponent } from './search-by-title/search-by-title.component';
import { BlogArticleComponent } from '../articles/blog-article/blog-article.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const components = [
    BlogItemComponent,
    BlogItemDateDirective,
    BlogItemDescriptionDirective,
    BlogItemImageDirective,
    BlogItemsContainer,
    PopularTopicsComponent,
    TopNavigationComponent,
    FollowMeComponent,
    FooterComponent,
    SearchByTitleComponent,
    DashboardComponent
];
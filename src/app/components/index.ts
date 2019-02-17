import {
    BlogItemComponent,
    BlogItemDateDirective,
    BlogItemDescriptionDirective, BlogItemImageDirective,
    BlogItemTitleDirective
} from './blog-item/blog-item.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopularTopicsComponent } from './popular-topics/popular-topics.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FollowMeComponent } from './follow-me/follow-me.component';
import { FooterComponent } from './footer/footer.component';

export const components = [
    BlogItemComponent,
    BlogItemDateDirective,
    BlogItemTitleDirective,
    BlogItemDescriptionDirective,
    BlogItemImageDirective,
    ContactComponent,
    DashboardComponent,
    PopularTopicsComponent,
    TopNavigationComponent,
    FollowMeComponent,
    FooterComponent
];
import {
    BlogItemComponent,
    BlogItemDateDirective,
    BlogItemDescriptionDirective, BlogItemImageDirective,
    BlogItemTitleDirective
} from './blog-item/blog-item.component';
import { ContactComponent } from './contact/contact.component';
import { BlogItemsContainer } from './dashboard/blog-items-container.component';
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
    BlogItemsContainer,
    PopularTopicsComponent,
    TopNavigationComponent,
    FollowMeComponent,
    FooterComponent
];
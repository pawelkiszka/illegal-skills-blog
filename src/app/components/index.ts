import {
    BlogItemComponent,
    BlogItemDateDirective,
    BlogItemDescriptionDirective, BlogItemImageDirective,
    BlogItemTitleDirective
} from './blog-item/blog-item.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { TopicsComponent } from './topics/topics.component';

export const components = [
    BlogItemComponent,
    BlogItemDateDirective,
    BlogItemTitleDirective,
    BlogItemDescriptionDirective,
    BlogItemImageDirective,
    ContactComponent,
    DashboardComponent,
    SideNavigationComponent,
    TopNavigationComponent,
    TopicsComponent
];
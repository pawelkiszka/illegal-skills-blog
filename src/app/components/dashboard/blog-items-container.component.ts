import { AfterViewInit, Component, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { BlogItemTopic } from '../../models/blog-item-topic';
import { BlogItemComponent } from '../blog-item/blog-item.component';
import { Subscription } from 'rxjs';
import { BlogItemVisibilityController } from '../../services/blog-items-visibility/blog-item-visibility.controller';

@Component({
    selector: 'app-blog-items-container',
    templateUrl: './blog-items-container.component.html',
    styleUrls: ['./blog-items-container.component.scss']
})
export class BlogItemsContainer implements AfterViewInit, OnDestroy {

    public BlogItemTopic = BlogItemTopic;
    private subscriptions: Subscription[] = [];

    @ViewChildren(BlogItemComponent) blogItemComponents: QueryList<BlogItemComponent>;

    constructor(private readonly blogItemVisibilityController: BlogItemVisibilityController) {
    }

    public ngAfterViewInit(): void {
        this.blogItemComponents.forEach((blogItemComponent: BlogItemComponent) => {
            const subscription: Subscription = this.blogItemVisibilityController.controlVisibilityOf(blogItemComponent);
            this.subscriptions.push(subscription);
        });
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(
            (subscription: Subscription) => subscription.unsubscribe()
        );
    }
}

import { AfterViewInit, Component, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { BlogItemTopic } from '../../models/blog-item-topic';
import { BlogItemComponent } from '../blog-item/blog-item.component';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { BlogItemVisibilityController } from '../../services/blog-items-visibility/blog-item-visibility.controller';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
    selector: 'app-blog-items-container',
    templateUrl: './blog-items-container.component.html',
    styleUrls: ['./blog-items-container.component.scss']
})
export class BlogItemsContainer implements AfterViewInit, OnDestroy {

    public BlogItemTopic = BlogItemTopic;
    private subscriptions: Subscription[] = [];
    public isNoneOfBlogItemsDisplayed$: Observable<boolean>;

    @ViewChildren(BlogItemComponent) blogItemComponents: QueryList<BlogItemComponent>;

    constructor(private readonly blogItemVisibilityController: BlogItemVisibilityController) {
    }

    public ngAfterViewInit(): void {
        this.blogItemComponents.forEach((blogItemComponent: BlogItemComponent) => {
            const subscription: Subscription = this.blogItemVisibilityController.controlVisibilityOf(blogItemComponent);
            this.subscriptions.push(subscription);
        });
        this.isNoneOfBlogItemsDisplayed$ = this.isNoneOfBlogItemsDisplayed();
    }

    private isNoneOfBlogItemsDisplayed(): Observable<boolean> {
        const areComponentsDisplayed$: Observable<boolean>[] = this.blogItemComponents.toArray()
            .map((blogItemComponent: BlogItemComponent) => blogItemComponent.isDisplayed$);
        return combineLatest(areComponentsDisplayed$).pipe(
            map((areDisplayed: boolean[]) => areDisplayed.every((isDisplayed: boolean) => isDisplayed === false)),
            distinctUntilChanged()
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(
            (subscription: Subscription) => subscription.unsubscribe()
        );
    }
}

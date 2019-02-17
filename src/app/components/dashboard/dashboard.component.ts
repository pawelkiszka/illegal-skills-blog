import { AfterViewInit, Component, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { BlogItemTopic } from '../../models/blog-item-topic';
import { BlogItemComponent } from '../blog-item/blog-item.component';
import { BlogItemSelectedService } from '../../services/filter-blog-items/blog-item-selected.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, OnDestroy {

    public BlogItemTopic = BlogItemTopic;
    private subscriptions: Subscription[] = [];

    @ViewChildren(BlogItemComponent) blogItemComponents: QueryList<BlogItemComponent>;

    constructor(private readonly blogItemSelectedService: BlogItemSelectedService) {
    }

    public ngAfterViewInit(): void {
        this.blogItemComponents.forEach(
            (blogItemComponent: BlogItemComponent) => {
                this.subscriptions.push(
                    // todo: all of it should go to display-toggle.service
                    this.blogItemSelectedService.isBlogItemSelected(blogItemComponent).subscribe(
                        (isSelected: boolean) => {
                            if (isSelected) {
                                blogItemComponent.showComponent();
                            } else {
                                blogItemComponent.hideComponent();
                            }
                        }
                    ));
            }
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(
            (subscription: Subscription) => subscription.unsubscribe()
        );
    }
}

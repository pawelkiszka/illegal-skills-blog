import { Injectable } from '@angular/core';
import { BlogItemSelectedService } from './blog-item-selected.service';
import { BlogItemComponent } from '../../components/blog-item/blog-item.component';
import { Subscription } from 'rxjs';

@Injectable()
export class BlogItemVisibilityController {

    constructor(private readonly blogItemSelectedService: BlogItemSelectedService) {
    }

    public controlVisibilityOf(blogItemComponent: BlogItemComponent): Subscription {
        return this.blogItemSelectedService.isBlogItemSelected(blogItemComponent).subscribe(
            (isSelected: boolean) => {
                if (isSelected) {
                    blogItemComponent.showComponent();
                } else {
                    blogItemComponent.hideComponent();
                }
            }
        );
    }
}
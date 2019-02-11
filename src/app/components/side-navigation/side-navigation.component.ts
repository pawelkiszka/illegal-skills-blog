import { Component } from '@angular/core';
import { StoreState } from '../../store/store.reducer';
import { ClearSelectedBlogItemType } from '../../store/store.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {

    constructor(private readonly store$: Store<StoreState>) {
    }

    public resetSelectedBlogItemTypes(): void {
        this.store$.dispatch(new ClearSelectedBlogItemType());
    }
}

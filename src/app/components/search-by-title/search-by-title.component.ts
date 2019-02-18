import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StoreState } from '../../store/store.reducer';
import { select, Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { ClearSearchedTitleValue, PersistSearchedTitleValue } from '../../store/store.actions';
import { combineLatest, iif, Observable, of } from 'rxjs';
import { fromStoreSelectors } from '../../store/store.selectors';
import { map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-search-by-title',
    templateUrl: './search-by-title.component.html',
    styleUrls: ['./search-by-title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchByTitleComponent {

    private readonly INITIAL_SEARCHED_TITLE_VALUE = '';
    public readonly titleControl: FormControl = new FormControl(this.INITIAL_SEARCHED_TITLE_VALUE, {
        validators: Validators.required
    });
    public readonly formGroup: FormGroup = new FormGroup({
        'title': this.titleControl
    });
    public readonly isInsertedSearchedTitleEqualToPersistedSearchedTitle$: Observable<boolean>;
    public readonly isPersistedSearchedTitleEmpty$: Observable<boolean>;

    constructor(private readonly store$: Store<StoreState>) {
        this.isInsertedSearchedTitleEqualToPersistedSearchedTitle$ = combineLatest<string, string>(
            this.store$.pipe(select(fromStoreSelectors.getSearchedBlogItemTitle)),
            this.titleControl.valueChanges
        ).pipe(
            switchMap(([persistedSearchedTitle, insertedSearchedTitle]) => iif(
                () => isNullOrUndefined(insertedSearchedTitle) || insertedSearchedTitle.length === 0,
                of(false),
                of(persistedSearchedTitle === insertedSearchedTitle)
            )),
        );
        this.isPersistedSearchedTitleEmpty$ = this.store$.pipe(
            select(fromStoreSelectors.getSearchedBlogItemTitle),
            map((persistedTitle: string) => isNullOrUndefined(persistedTitle) || persistedTitle.length === 0)
        );
    }

    public persistInsertedTitle() {
        const insertedTitle: string = this.titleControl.value;
        if (!isNullOrUndefined(insertedTitle) && insertedTitle.length > 0) {
            this.store$.dispatch(new PersistSearchedTitleValue(insertedTitle));
        }
    }

    public clearPersistedTitle() {
        this.store$.dispatch(new ClearSearchedTitleValue());
    }
}

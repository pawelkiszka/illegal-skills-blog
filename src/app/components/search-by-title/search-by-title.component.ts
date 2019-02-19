import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { StoreState } from '../../store/store.reducer';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { PersistSearchedTitleValue } from '../../store/store.actions';
import { distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
    selector: 'app-search-by-title',
    templateUrl: './search-by-title.component.html',
    styleUrls: ['./search-by-title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchByTitleComponent implements AfterViewInit {

    private readonly INITIAL_SEARCHED_TITLE_VALUE = '';
    public readonly titleControl: FormControl = new FormControl(this.INITIAL_SEARCHED_TITLE_VALUE, {
        validators: Validators.required
    });
    public readonly formGroup: FormGroup = new FormGroup({
        'title': this.titleControl
    });

    constructor(private readonly store$: Store<StoreState>) {
    }

    public ngAfterViewInit(): void {
        this.titleControl.valueChanges.pipe(
            filter((searchedTitle: string) => !isNullOrUndefined(searchedTitle)),
            distinctUntilChanged()
        ).subscribe(
            (searchedTitle: string) => this.persistInsertedTitle(searchedTitle)
        );
    }

    public persistInsertedTitle(title: string): void {
        this.store$.dispatch(new PersistSearchedTitleValue(title));
    }
}

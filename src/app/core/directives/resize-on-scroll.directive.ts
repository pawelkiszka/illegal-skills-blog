import { AfterViewInit, Directive, HostListener, OnDestroy } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Directive({
    selector: '[appResizeOnScroll]',
})
export class ResizeOnScrollDirective implements AfterViewInit, OnDestroy {

    private static readonly SWITCH_VIEW_SCROLL_BREAKPOINT_IN_PX: number = 50;
    private scroll$: Subject<void> = new Subject<void>();
    private subscription: Subscription;

    @HostListener('window:scroll', ['$event'])
    public onWindowScroll() {
        this.scroll$.next();
    }

    public ngAfterViewInit(): void {
        this.subscription = this.scroll$.pipe(
            map(() => this.isOnTopOfPage()),
            distinctUntilChanged(),
        ).subscribe((isOnTopOfPage: boolean) => {
            if (isOnTopOfPage) {
                this.setDefaultStyling();
            } else {
                this.setSizedReducedStyling();
            }
        });
    }

    private isOnTopOfPage() {
        const scrollTop: number = document.documentElement.scrollTop;
        return scrollTop <= ResizeOnScrollDirective.SWITCH_VIEW_SCROLL_BREAKPOINT_IN_PX;
    }

    private setDefaultStyling() {
        document.getElementById('navbar-title').style.fontSize = '2rem';
        document.getElementById('navbar-title').style.margin = '1rem 0';
        document.getElementById('navbar-title-suffix').style.fontSize = '1.4rem';
        document.getElementById('side-navigation').style.top = '70px';
    }

    private setSizedReducedStyling() {
        document.getElementById('navbar-title').style.fontSize = '1.4rem';
        document.getElementById('navbar-title').style.margin = '0.3rem 0';
        document.getElementById('navbar-title-suffix').style.fontSize = '1rem';
        document.getElementById('side-navigation').style.top = '40px';
    }

    public ngOnDestroy(): void {
        if (!!this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}

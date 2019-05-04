import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    constructor(private readonly router: Router){
    }

    public ngOnInit(): void {
        this.router.events.subscribe(
            event => console.log(event)
        );
    }
}

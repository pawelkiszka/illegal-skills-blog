import { Component } from '@angular/core';

@Component({
    selector: 'app-shareable-library-with-polymorphism',
    templateUrl: './shareable-library-with-polymorphism.component.html',
    styleUrls: ['./shareable-library-with-polymorphism.component.scss']
})
export class ShareableLibraryWithPolymorphismComponent {

    public howItWorks = {
        interface: `
        export interface Animal {
            makeSound(): void;
        }
        `,
        token: `
        export const ANIMAL_TOKEN = new InjectionToken<Animal>('animal');
        `,
        implementation: `
        export class Dog implements Animal {
            makeSound(): {
                console.log('Bark Bark');
            }
        }
        `,
        provideAndUseClass: `
        providers: [
            {provide: ANIMAL_TOKEN, useClass: Dog}
        ]
        `
    };
    public shareableLibrary = {
        authenticationService: `
        // authentication.service.ts
        export interface AuthenticationService {
            isAuthenticated(): Observable<string>;
        }
        `,
        defaultAuthenticationService: `
        // default-authentication.service.ts
        @Injectable()
        export class DefaultAuthenticationService implements AuthenticationService {

            public isAuthenticated(): Observable<string> {
                return of('Called isAuthenticated() method from DefaultAuthenticationService');
            }
        }
        `,
        userContextService: `
        // user-context.service.ts
        export interface UserContextService {
            getUserContext(): Observable<UserContext>;
        }

        export interface UserContext {
            name: string,
            isAuthenticated: string
        }
        `,
        defaultUserContextService: `
        // default-user-context.service.ts
        @Injectable()
        export class DefaultUserContextService implements UserContextService {

            constructor(@Inject(AUTHENTICATION_SERVICE_TOKEN) private readonly authenticationService: AuthenticationService) {
            }
        
            public getUserContext(): Observable<UserContext> {
                return this.authenticationService.isAuthenticated().pipe(
                    map((isAuthenticated: string) => <UserContext> {
                        name: 'John  => from DefaultUserContextService',
                        isAuthenticated: isAuthenticated
                    })
                );
            }
        }
        `,
        tokens: `
        // shareable-library.tokens.ts
        export const AUTHENTICATION_SERVICE_TOKEN = new InjectionToken<AuthenticationService>('authentication-service');
        export const USER_CONTEXT_SERVICE_TOKEN = new InjectionToken<UserContextService>('user-context-service');
        `,
        module: `
        @NgModule({})
        export class ShareableLibraryModule {
            public static forRoot(): ModuleWithProviders {
                return {
                    ngModule: ShareableLibraryModule,
                    providers: [
                        {provide: USER_CONTEXT_SERVICE_TOKEN, useClass: DefaultUserContextService},
                        {provide: AUTHENTICATION_SERVICE_TOKEN, useClass: DefaultAuthenticationService},
                    ]
                };
            }
        }

        `
    }
}

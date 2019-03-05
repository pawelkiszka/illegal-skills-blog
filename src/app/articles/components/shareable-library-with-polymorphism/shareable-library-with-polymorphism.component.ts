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

            constructor(@Inject(AUTHENTICATION_SERVICE_TOKEN) 
                                    private readonly authenticationService: AuthenticationService) {
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
        export const AUTHENTICATION_SERVICE_TOKEN = 
                                new InjectionToken<AuthenticationService>('authentication-service');
        export const USER_CONTEXT_SERVICE_TOKEN = 
                                new InjectionToken<UserContextService>('user-context-service');
        `,
        module: `
        // app.module.ts
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
    };

    public webApp1 = {
        appModule: `
        // app.module.ts
        imports: [
            ShareableLibraryModule.forRoot(),
        ]
        `
    };

    public webApp2 = {
        customUserContextService: `
        // custom-user-context.service.ts
        @Injectable()
        export class CustomUserContextService implements UserContextService {
        
            constructor(@Inject(AUTHENTICATION_SERVICE_TOKEN) 
                        private readonly authenticationService: AuthenticationService) {
            }
        
            public getUserContext(): Observable<UserContext> {
                return this.authenticationService.isAuthenticated().pipe(
                    map((isAuthenticated: string) => <UserContext> {
                        name: 'Bill => from CustomUserContextService',
                        isAuthenticated: isAuthenticated
                    })
                );
            }
        }
        `,
        appModule: `
        // app.module.ts
        imports: [
            ShareableLibraryModule.forRoot()
        ],
        providers: [
            {provide: USER_CONTEXT_SERVICE_TOKEN, useClass: CustomUserContextService},
        ]
        `
    };

    public webApp3 = {
        customAuthenticationService: `
        @Injectable()
        export class CustomAuthenticationService implements AuthenticationService {
        
            public isAuthenticated(): Observable<string> {
                return of('Called isAuthenticated() method from CustomAuthenticationService');
            }       
        }`,
        appModule: `
        imports: [
            ShareableLibraryModule.forRoot()
        ],
        providers: [
            {provide: AUTHENTICATION_SERVICE_TOKEN, useClass: CustomAuthenticationService}
        ]
        `
    };

    public webApp4 = {
        authenticationWithCompositionService: `
        // authentication-with-composition.service.ts
        @Injectable()
        export class AuthenticationWithCompositionService implements AuthenticationService {
            constructor(private readonly defaultAuthenticationService: DefaultAuthenticationService) {
            }
        
            public isAuthenticated(): Observable<string> {
                return this.defaultAuthenticationService.isAuthenticated().pipe(
                    map((isAuthenticatedFromDefault: string) =>
                        \`\${isAuthenticatedFromDefault} but enriched with AuthenticationWithCompositionService\`
                    )
                );
            }
        }
        `,
        userContextWithCompositionService: `
        // user-context-with-composition.service.ts
        @Injectable()
        export class UserContextWithCompositionService implements UserContextService {
            constructor(private readonly defaultUserContextService: DefaultUserContextService) {
            }
        
            public getUserContext(): Observable<UserContext> {
                return this.defaultUserContextService.getUserContext().pipe(
                    map((userContextFromDefault: UserContext) => <UserContext>({
                        name: \`\${userContextFromDefault.name}  
                            but enriched with UserContextWithCompositionService\`,
                        isAuthenticated: userContextFromDefault.isAuthenticated
                    }))
                );
            }
        }
        `,
        appModule: `
        // app.module.ts
        imports: [
            BrowserModule,
            ShareableLibraryModule.forRoot()
        ],
        providers: [
            {provide: USER_CONTEXT_SERVICE_TOKEN, useClass: UserContextWithCompositionService},
            {provide: AUTHENTICATION_SERVICE_TOKEN, useClass: AuthenticationWithCompositionService},
            DefaultAuthenticationService,
            DefaultUserContextService
        ]
        `
    };
}

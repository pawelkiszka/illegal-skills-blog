import { Component, Directive, Input } from '@angular/core';

@Component({
    selector: 'app-blog-article',
    templateUrl: './blog-article.component.html',
    styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent {
    @Input() public articleTitle: string;
    @Input() public creationDate: string;
}

@Directive({selector: '[appBlogArticleImage]'})
export class BlogArticleImageDirective {
}

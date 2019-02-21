import { Component } from '@angular/core';

@Component({
    selector: 'app-blog-article',
    templateUrl: './blog-article.component.html',
    styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent {

    public codeString = `public ngAfterViewInit(): void {
        this.codeBlocks.forEach(
            (codeBlock: ElementRef) => hljs.highlightBlock(codeBlock.nativeElement)
        );
    }
    `;
}

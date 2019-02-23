import { Component } from '@angular/core';

@Component({
    selector: 'app-demo-article',
    templateUrl: './demo-article.component.html',
    styleUrls: ['./demo-article.component.scss']
})
export class DemoArticleComponent {

    public demoCode = `public ngAfterViewInit(): void {
        this.codeBlocks.forEach(
            (codeBlock: ElementRef) => hljs.highlightBlock(codeBlock.nativeElement)
        );
    }`
}

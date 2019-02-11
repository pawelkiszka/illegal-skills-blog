export enum BlogItemTypeIdentifier {
    BASIC = 'Basic',
    RX_JS = 'RxJs',
    NG_RX = 'NgRx'
}

export class BlogItemType {
    public static readonly BASIC = new BlogItemType(BlogItemTypeIdentifier.BASIC, '#75CA00');
    public static readonly RX_JS = new BlogItemType(BlogItemTypeIdentifier.RX_JS, '#0455CA');
    public static readonly NG_RX = new BlogItemType(BlogItemTypeIdentifier.NG_RX, '#AB0BCA');

    private readonly identifier: BlogItemTypeIdentifier;
    private readonly colorCode: string;

    private constructor(identifier: BlogItemTypeIdentifier, colorCode: string) {
        this.identifier = identifier;
        this.colorCode = colorCode;
    }

    public getName(): string {
        return this.identifier.toString();
    }

    public getIdentifier(): BlogItemTypeIdentifier {
        return this.identifier;
    }

    public getColorCode(): string {
        return this.colorCode;
    }
}

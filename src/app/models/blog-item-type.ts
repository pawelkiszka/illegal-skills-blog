export class BlogItemType {
    public static readonly BASIC = new BlogItemType('Basic', '#75CA00');
    public static readonly RX_JS = new BlogItemType('RxJs', '#0455CA');
    public static readonly NG_RX = new BlogItemType('NgRx', '#AB0BCA');

    private readonly name: string;
    private readonly colorCode: string;

    private constructor(name: string, colorCode: string) {
        this.name = name;
        this.colorCode = colorCode;
    }

    public getName(): string {
        return this.name;
    }

    public getColorCode(): string {
        return this.colorCode;
    }
}

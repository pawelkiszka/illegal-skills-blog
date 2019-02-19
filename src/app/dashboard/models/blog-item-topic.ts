export enum BlogItemTopic {
    ANGULAR = 'Angular',
    RX_JS = 'RxJs',
    NG_RX = 'NgRx',
    JAVA = 'Java',
    TESTING = 'Testing'
}

function values(): BlogItemTopic[] {
    return Object.keys(BlogItemTopic)
        .map((key: string) => BlogItemTopic[key]);
}

export const fromBlogItemTopic = {
    values
};

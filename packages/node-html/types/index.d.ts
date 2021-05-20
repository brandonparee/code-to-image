declare type HTMLToImageOptions = {
    outputPath?: string;
    omitBackground?: boolean;
};
declare function htmlToImage(html: string, { outputPath, omitBackground }?: HTMLToImageOptions): Promise<any>;
export default htmlToImage;

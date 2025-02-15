export interface JsonLdProps {
    type?: string;
    scriptId?: string;
    dataArray?: any[];
    useAppDir?: boolean;
    [key: string]: any;
}
declare function JsonLd({ type, keyOverride, scriptKey, scriptId, dataArray, useAppDir, ...rest }: JsonLdProps & {
    scriptKey: string;
}): import("react/jsx-runtime").JSX.Element;
export { JsonLd };

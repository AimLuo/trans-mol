export function initKeydownListener(element: any): (dispatch: any, getState: any) => void;
export function initClipboard(dispatch: any, getState: any): {
    formats: any[];
    focused(): boolean;
    onCut(): {
        'text/plain': string;
    } | null;
    onCopy(): {
        'text/plain': string;
    } | null;
    onPaste(data: any): void;
};

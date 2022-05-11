export function onAction(action: any): any;
export function loadStruct(struct: any): (dispatch: any, getState: any) => void;
export function load(struct: any, options: any): (dispatch: any, getState: any) => Promise<void>;

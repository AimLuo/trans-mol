export function sdataReducer(state: any, action: any): {
    result: any;
    valid: any;
    errors: any;
};
export function initSdata(): {
    errors: {};
    valid: boolean;
    result: {
        context: string;
        fieldName: string;
        fieldValue: string;
        radiobuttons: string;
        type: string;
    };
};

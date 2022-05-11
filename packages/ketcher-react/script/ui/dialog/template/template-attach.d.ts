declare var _default: import("react-redux").ConnectedComponent<typeof Attach, import("react-redux").Omit<{
    [x: string]: any;
    onInit: any;
}, string | number>>;
export default _default;
declare class Attach extends Component<any, any, any> {
    constructor({ onInit, ...props }: {
        [x: string]: any;
        onInit: any;
    });
    tmpl: {
        struct: any;
        props: {
            atomid: number;
            bondid: number;
        };
    };
    onResult(): {
        name: any;
        attach: {
            atomid: any;
            bondid: any;
        };
    } | null;
    checkUniqueName(name: any): boolean;
    render(): JSX.Element;
}
import { Component } from "react";

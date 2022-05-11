export function GenericInput({ schema, value, onChange, type, ...props }: {
    [x: string]: any;
    schema: any;
    value?: string | undefined;
    onChange: any;
    type?: string | undefined;
}): JSX.Element;
export namespace GenericInput {
    function val(ev: any, schema: any): any;
}
export default class Input extends Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    shouldComponentUpdate({ children, onChange, style, ...nextProps }: {
        [x: string]: any;
        children: any;
        onChange: any;
        style: any;
    }): boolean;
    render(): JSX.Element;
    component: any;
    ctrl: {
        onChange: (ev: any) => void;
    } | {
        selected: (testVal: any, value: any) => boolean;
        onSelect: (ev: any) => void;
    } | {
        multiple: boolean;
        selected: (testVal: any, values: any) => any;
        onSelect: (ev: any, values: any) => void;
    } | undefined;
}
import { Component } from "react";

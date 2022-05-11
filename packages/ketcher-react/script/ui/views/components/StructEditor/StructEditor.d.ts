export default StructEditor;
declare class StructEditor extends Component<any, any, any> {
    constructor(props: any);
    editorRef: import("react").RefObject<any>;
    logRef: import("react").RefObject<any>;
    shouldComponentUpdate(nextProps: any): boolean;
    UNSAFE_componentWillReceiveProps(props: any): void;
    componentDidMount(): void;
    editor: Editor | undefined;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
import { Component } from "react";
import Editor from "../../../../editor";

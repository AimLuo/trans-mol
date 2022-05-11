/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import { Editor } from '../Editor';
declare class SelectTool {
    #private;
    editor: Editor;
    dragCtx: any;
    constructor(editor: any, mode: any);
    mousedown(event: any): boolean;
    mousemove(event: any): boolean;
    mouseup(event: any): boolean;
    dblclick(event: any): true | undefined;
    mouseleave(_: any): void;
}
export declare function selMerge(selection: any, add: any, reversible: boolean): any;
export default SelectTool;
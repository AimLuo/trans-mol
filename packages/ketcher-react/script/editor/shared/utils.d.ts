declare namespace _default {
    export { calcAngle };
    export { fracAngle };
    export { calcNewAtomPos };
    export { degrees };
    export { mergeBondsParams };
}
export default _default;
declare function calcAngle(pos0: any, pos1: any): number;
import { fracAngle } from "ketcher-core/dist/application/editor";
declare function calcNewAtomPos(pos0: any, pos1: any, ctrlKey: any): Vec2;
declare function degrees(angle: any): number;
declare function mergeBondsParams(struct1: any, bond1: any, struct2: any, bond2: any): {
    merged: boolean;
    angle: number;
    scale: number;
    cross: boolean;
};
import { Vec2 } from "ketcher-core/dist/domain/entities/vec2";

/**
 * Copyright (c) 2019 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Alexander Rose <alexander.rose@weirdbyte.de>
 */

import { Interval } from 'molstar/lib/mol-data/int'
import { isEveryLoci, Loci } from 'molstar/lib/mol-model/loci'
import {
  Structure,
  StructureElement,
  Unit,
} from 'molstar/lib/mol-model/structure'
import { Color } from 'molstar/lib/mol-util/color'
import {
  applyMarkerAction,
  MarkerAction,
} from 'molstar/lib/mol-util/marker-action'

export type StructureUnit = { structure: Structure; units: Unit[] }

export { SequenceWrapper }

abstract class SequenceWrapper<D> {
  abstract residueLabel(seqIdx: number): string
  abstract residueColor(seqIdx: number): Color
  abstract residueClass(seqIdx: number): string

  abstract getLoci(seqIdx: number): StructureElement.Loci

  abstract mark(loci: Loci, action: MarkerAction): boolean

  markResidue(loci: Loci, action: MarkerAction) {
    if (isEveryLoci(loci)) {
      return applyMarkerAction(
        this.markerArray,
        Interval.ofLength(this.length),
        action
      )
    } else {
      return this.mark(loci, action)
    }
  }

  constructor(
    readonly data: D,
    readonly markerArray: Uint8Array,
    readonly length: number
  ) {}
}

namespace SequenceWrapper {
  export type Any = SequenceWrapper<any>
}

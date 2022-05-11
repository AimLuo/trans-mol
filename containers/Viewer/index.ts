import { setDebugMode, Viewer } from './core'
import { getMolstarUserInitStatus } from './helper'

export function createViewer(elementOrId: string) {
  const {
    debugMode,
    hideControls,
    collapseLeftPanel,
    pdbProvider,
    emdbProvider,
    mapProvider,
    pixelScale,
    pickScale,
    pickPadding,
    disableWboit,
    preferWebgl1,
    snapshotId,
    snapshotUrl,
    snapshotUrlType,
    structureUrl,
    structureUrlFormat,
    structureUrlIsBinary,
    pdb,
    pdbDev,
    emdb,
    afdb,
    modelArchive,
  } = getMolstarUserInitStatus()

  if (debugMode) setDebugMode(debugMode)

  Viewer.create(elementOrId, {
    layoutShowControls: !hideControls,
    viewportShowExpand: false,
    collapseLeftPanel: collapseLeftPanel,
    pdbProvider: pdbProvider || 'pdbe',
    emdbProvider: emdbProvider || 'pdbe',
    volumeStreamingServer:
      (mapProvider || 'pdbe') === 'rcsb'
        ? 'https://maps.rcsb.org'
        : 'https://www.ebi.ac.uk/pdbe/densities',
    pixelScale: parseFloat(pixelScale) || 1,
    pickScale: parseFloat(pickScale) || 0.25,
    pickPadding: isNaN(parseFloat(pickPadding)) ? 1 : parseFloat(pickPadding),
    enableWboit: disableWboit ? false : void 0, // use default value if disable-wboit is not set
    preferWebgl1: preferWebgl1 || void 0,
  }).then((viewer) => {
    if (snapshotId) viewer.setRemoteSnapshot(snapshotId)

    if (snapshotUrl && snapshotUrlType)
      viewer.loadSnapshotFromUrl(snapshotUrl, snapshotUrlType || 'molj')

    if (structureUrl)
      viewer.loadStructureFromUrl(
        structureUrl,
        structureUrlFormat,
        structureUrlIsBinary
      )
    if (pdb) viewer.loadPdb(pdb)
    if (pdbDev) viewer.loadPdbDev(pdbDev)
    if (emdb) viewer.loadEmdb(emdb)
    if (afdb) viewer.loadAlphaFoldDb(afdb)
    if (modelArchive) viewer.loadModelArchive(modelArchive)
  })
}

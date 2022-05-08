import { PluginState } from "molstar/lib/mol-plugin/state";
import { EmdbDownloadProvider } from "molstar/lib/mol-plugin-state/actions/volume";
import qs from "qs";

type StructureType =
  | "pdb"
  | "mmcif"
  | "cifCore"
  | "pdbqt"
  | "gro"
  | "xyz"
  | "mol"
  | "sdf"
  | "mol2";

// FIXME: 改回 molstar viewer原始的 getParam
function getUrlParams() {
  const searchQuery = qs.parse(window.location.search.slice(1));
  for (const key in searchQuery) {
    if (Object.prototype.hasOwnProperty.call(searchQuery, key)) {
      const value = searchQuery[key];
      if (typeof value === "string") {
        searchQuery[key] = value.trim().toLowerCase();
      }
    }
  }
  return searchQuery;
}

export function getMolstarUserInitStatus() {
  const searchQuery = getUrlParams();

  const debugMode = searchQuery["debug-mode"] === "1";
  const hideControls = searchQuery["hide-controls"] === "1";
  const collapseLeftPanel = searchQuery["collapse-left-panel"] === "1";
  const pdbProvider = searchQuery["pdb-provider"] as "pdbe" | "rcsb" | "pdbj";
  const emdbProvider = searchQuery["emdb-provider"] as EmdbDownloadProvider;
  const mapProvider = searchQuery["map-provider"];
  const pixelScale = searchQuery["pixel-scale"] as string;
  const pickScale = searchQuery["pick-scale"] as string;
  const pickPadding = searchQuery["pick-padding"] as string;
  const disableWboit = searchQuery["disable-wboit"] === "1";
  const preferWebgl1 = searchQuery["prefer-webgl1"] === "1";
  const snapshotId = searchQuery["snapshot-id"] as string;
  const snapshotUrl = searchQuery["snapshot-url"] as string;
  const snapshotUrlType = searchQuery[
    "snapshot-url-type"
  ] as PluginState.SnapshotType;

  const structureUrl = searchQuery["structure-url"] as string;

  const structureUrlFormat = searchQuery[
    "structure-url-format"
  ] as StructureType;
  //  getParam("structure-url-format", "[a-z]+")
  //   .toLowerCase()
  //   .trim();
  const structureUrlIsBinary = searchQuery["structure-url-is-binary"] === "1";

  const pdb = searchQuery["pdb"] as string;
  const pdbDev = searchQuery["pdb-dev"] as string;
  const emdb = searchQuery["emdb"] as string;
  const afdb = searchQuery["afdb"] as string;
  const modelArchive = searchQuery["model-archive"] as string;

  return {
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
  };
}

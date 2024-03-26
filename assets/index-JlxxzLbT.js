import{_ as o}from"./index-CrCW9aPl.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-DonmRm0U.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-DonmRm0U.js","assets/index-CrCW9aPl.js","assets/index-D-vTpvP5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

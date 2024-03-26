import{_ as o}from"./index-CrCW9aPl.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-DBA_ezQA.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-DBA_ezQA.js","assets/index-CrCW9aPl.js","assets/index-D-vTpvP5.css","assets/ValueWithRandom-3w7hSTsC.js","assets/AnimationOptions-9lnstYeY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

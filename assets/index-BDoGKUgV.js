import{_ as i}from"./index-CrCW9aPl.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-Bxnh08q6.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-Bxnh08q6.js","assets/index-CrCW9aPl.js","assets/index-D-vTpvP5.css","assets/ValueWithRandom-3w7hSTsC.js","assets/AnimationOptions-9lnstYeY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

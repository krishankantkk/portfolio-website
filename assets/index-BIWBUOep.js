import{_ as e}from"./index-CrCW9aPl.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-dRsvgt1K.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-dRsvgt1K.js","assets/index-CrCW9aPl.js","assets/index-D-vTpvP5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
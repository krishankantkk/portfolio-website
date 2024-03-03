import{_ as o}from"./index-CU8UI9iC.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-C7XBu0ja.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-C7XBu0ja.js","assets/index-CU8UI9iC.js","assets/index-D-vTpvP5.css","assets/OptionsColor-Bsg6kUxu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

import{_ as i}from"./index-CU8UI9iC.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-ByLhQNeR.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-ByLhQNeR.js","assets/index-CU8UI9iC.js","assets/index-D-vTpvP5.css","assets/ValueWithRandom-Bu5nv5K9.js","assets/AnimationOptions-aS3xr8kw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

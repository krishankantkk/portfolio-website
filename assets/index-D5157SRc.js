import{_ as e}from"./index-CrCW9aPl.js";class a{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function s(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await e(()=>import("./Slower-CkDS5HoJ.js"),__vite__mapDeps([0,1,2,3]));return new i(o)},r)}export{a as Slow,s as loadExternalSlowInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Slower-CkDS5HoJ.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/index-CrCW9aPl.js","assets/index-D-vTpvP5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

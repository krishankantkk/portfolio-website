import{_ as c}from"./index-CrCW9aPl.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-DtydjTld.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-DtydjTld.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-CrCW9aPl.js","assets/index-D-vTpvP5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

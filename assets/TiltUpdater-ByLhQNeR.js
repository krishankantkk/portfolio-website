import{s as d,E as f,F as l,H as o,W as r,X as h}from"./index-CU8UI9iC.js";import{V as m}from"./ValueWithRandom-Bu5nv5K9.js";import"./AnimationOptions-aS3xr8kw.js";class b{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=d(e.speed)),e.decay!==void 0&&(this.decay=d(e.decay)),e.sync!==void 0&&(this.sync=e.sync))}}class y extends m{constructor(){super(),this.animation=new b,this.direction="clockwise",this.enable=!1,this.value=0}load(e){super.load(e),e&&(this.animation.load(e.animation),e.direction!==void 0&&(this.direction=e.direction),e.enable!==void 0&&(this.enable=e.enable))}}const s=1,u=2,w=Math.PI*u,g=360;class D{constructor(e){this.container=e}getTransformValues(e){var n;const i=((n=e.tilt)==null?void 0:n.enable)&&e.tilt;return{b:i?Math.cos(i.value)*i.cosDirection:void 0,c:i?Math.sin(i.value)*i.sinDirection:void 0}}init(e){var c;const i=e.options.tilt;if(!i)return;e.tilt={enable:i.enable,value:f(l(i.value)),sinDirection:o()>=r?s:-s,cosDirection:o()>=r?s:-s,min:0,max:w};let n=i.direction;switch(n==="random"&&(n=Math.floor(o()*u)>0?"counter-clockwise":"clockwise"),n){case"counter-clockwise":case"counterClockwise":e.tilt.status="decreasing";break;case"clockwise":e.tilt.status="increasing";break}const t=(c=e.options.tilt)==null?void 0:c.animation;t!=null&&t.enable&&(e.tilt.decay=s-l(t.decay),e.tilt.velocity=l(t.speed)/g*this.container.retina.reduceFactor,t.sync||(e.tilt.velocity*=o()))}isEnabled(e){var n;const i=(n=e.options.tilt)==null?void 0:n.animation;return!e.destroyed&&!e.spawning&&!!(i!=null&&i.enable)}loadOptions(e,...i){e.tilt||(e.tilt=new y);for(const n of i)e.tilt.load(n==null?void 0:n.tilt)}async update(e,i){!this.isEnabled(e)||!e.tilt||(h(e,e.tilt,!1,"none",i),await Promise.resolve())}}export{D as TiltUpdater};

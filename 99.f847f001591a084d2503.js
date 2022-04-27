"use strict";(self.webpackChunkelectro_tools=self.webpackChunkelectro_tools||[]).push([[99],{1099:(A,u,m)=>{m.r(u),m.d(u,{OhmCalcModule:()=>C});var h=m(8583),f=m(2305),l=m(3679);class s{static getV(i){const{v:o,a:e,w:n,o:a}=i;return e&&n?n/e:a&&e?a*e:n&&a?Math.sqrt(n*a):o||0}static getA(i){const{v:o,a:e,w:n,o:a}=i;return o&&n?n/o:o&&a?o/a:n&&a?Math.sqrt(n/a):e||0}static getW(i){const{v:o,a:e,w:n,o:a}=i;return o&&e?o*e:o&&a?o*o/a:a&&e?a*(e*e):n||0}static getO(i){const{v:o,a:e,w:n,o:a}=i;return o&&e?o/e:o&&n?o*o/n:n&&e?n/(e*e):a||0}}var t=m(7716),c=m(8295),d=m(9983),g=m(1095);const p=[{path:"",component:(()=>{class r{constructor(){this.form=new l.cw({v:new l.NI("",[l.kI.required]),a:new l.NI("",[l.kI.required]),w:new l.NI("",[l.kI.required]),o:new l.NI("",[l.kI.required])})}ngOnInit(){}clearForm(){this.form.reset()}onClear(){this.clearForm()}onCalculate(){return this.form.controls.v.valid&&this.form.controls.a.valid?(this.form.controls.w.setValue(s.getW(this.form.value)),void this.form.controls.o.setValue(s.getO(this.form.value))):this.form.controls.v.valid&&this.form.controls.w.valid?(this.form.controls.a.setValue(s.getA(this.form.value)),void this.form.controls.o.setValue(s.getO(this.form.value))):this.form.controls.v.valid&&this.form.controls.o.valid?(this.form.controls.a.setValue(s.getA(this.form.value)),void this.form.controls.w.setValue(s.getW(this.form.value))):this.form.controls.a.valid&&this.form.controls.w.valid?(this.form.controls.v.setValue(s.getV(this.form.value)),void this.form.controls.o.setValue(s.getO(this.form.value))):this.form.controls.a.valid&&this.form.controls.o.valid?(this.form.controls.v.setValue(s.getV(this.form.value)),void this.form.controls.w.setValue(s.getW(this.form.value))):this.form.controls.w.valid&&this.form.controls.o.valid?(this.form.controls.v.setValue(s.getV(this.form.value)),void this.form.controls.a.setValue(s.getA(this.form.value))):void 0}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["awad-ohm-calc"]],decls:38,vars:1,consts:[[1,"split-screen"],[1,"awad-card"],[1,"form-container"],[3,"formGroup"],["color","accent"],["formControlName","v","matInput","","type","number","placeholder","Volts"],["matSuffix",""],["formControlName","a","matInput","","type","number","placeholder","Ampers"],["formControlName","w","matInput","","type","number","placeholder","Watts"],["formControlName","o","matInput","","type","number","placeholder","Ohms"],[1,"form-actions"],["mat-raised-button","","color","accent",1,"awad-button",3,"click"],["mat-button","",3,"click"],[1,"img-container"],["src","/assets/svg/ohm_formula.svg","alt","formulas ley de ohm",1,"awad-shadow"]],template:function(o,e){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Calculadora Ley de Ohms"),t.qZA(),t.TgZ(2,"div",0),t.TgZ(3,"div"),t.TgZ(4,"div",1),t.TgZ(5,"div",2),t.TgZ(6,"form",3),t.TgZ(7,"mat-form-field",4),t.TgZ(8,"mat-label"),t._uU(9,"Tensi\xf3n (Volts)"),t.qZA(),t._UZ(10,"input",5),t.TgZ(11,"span",6),t._uU(12,"V"),t.qZA(),t.qZA(),t.TgZ(13,"mat-form-field",4),t.TgZ(14,"mat-label"),t._uU(15,"Corriente (Ampers)"),t.qZA(),t._UZ(16,"input",7),t.TgZ(17,"span",6),t._uU(18,"A"),t.qZA(),t.qZA(),t.TgZ(19,"mat-form-field",4),t.TgZ(20,"mat-label"),t._uU(21,"Potencia (Watts)"),t.qZA(),t._UZ(22,"input",8),t.TgZ(23,"span",6),t._uU(24,"W"),t.qZA(),t.qZA(),t.TgZ(25,"mat-form-field",4),t.TgZ(26,"mat-label"),t._uU(27,"Resistencia (Ohms)"),t.qZA(),t._UZ(28,"input",9),t.TgZ(29,"span",6),t._uU(30,"\u03a9"),t.qZA(),t.qZA(),t.TgZ(31,"div",10),t.TgZ(32,"button",11),t.NdJ("click",function(){return e.onCalculate()}),t._uU(33,"CALCULAR"),t.qZA(),t.TgZ(34,"button",12),t.NdJ("click",function(){return e.onClear()}),t._uU(35,"LIMPIAR"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"div",13),t._UZ(37,"img",14),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.Q6J("formGroup",e.form))},directives:[l._Y,l.JL,l.sg,c.KE,c.hX,l.Fj,d.Nt,l.wV,l.JJ,l.u,c.R9,g.lW],styles:["h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.split-screen[_ngcontent-%COMP%]{max-height:1024px;display:flex;flex-direction:column;grid-gap:4rem;gap:4rem;padding-bottom:2rem}@media (min-width: 768px){.split-screen[_ngcontent-%COMP%]{justify-content:space-around}}@media (min-width: 1024px){h1[_ngcontent-%COMP%]{text-align:left}.split-screen[_ngcontent-%COMP%]{flex-direction:row;align-items:center}}.form-container[_ngcontent-%COMP%]{min-width:15rem}@media (min-width: 852px){.form-container[_ngcontent-%COMP%]{min-width:28rem}}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.awad-shadow[_ngcontent-%COMP%]{border-radius:100%}.img-container[_ngcontent-%COMP%]{display:flex;justify-content:center}@media (max-width: 768px){img[_ngcontent-%COMP%]{margin-bottom:2rem}}"]}),r})()}];let v=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[f.Bz.forChild(p)],f.Bz]}),r})();var Z=m(9017);let C=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[h.ez,v,Z.m]]}),r})()}}]);
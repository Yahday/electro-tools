"use strict";(self.webpackChunkelectro_tools=self.webpackChunkelectro_tools||[]).push([[767],{767:(Q,p,l)=>{l.r(p),l.d(p,{ConsumptionCalcModule:()=>k});var m=l(8583),g=l(2305),i=l(3679);const v=[{label:"Horas",value:"h"},{label:"Minutos",value:"m"},{label:"Segundos",value:"s"}],_=[{label:"Al d\xeda",value:"d"},{label:"A la semana",value:"w"},{label:"Al mes",value:"m"}];var e=l(7716),Z=l(2238),u=l(7832),d=l(8295),T=l(9983),f=l(1095),C=l(1552),b=l(7441),q=l(2458);function w(o,r){if(1&o&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&o){const t=r.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.label," ")}}function M(o,r){if(1&o&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&o){const t=r.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.label," ")}}const h=function(){return{standalone:!0}};let x=(()=>{class o{constructor(t){this.dialogRef=t,this.form=new i.cw({name:new i.NI("",[i.kI.required]),time_value:new i.NI("",[i.kI.required]),time_unit:new i.NI("h",[i.kI.required]),cycle_value:new i.NI("",[i.kI.required]),cycle_unit:new i.NI("d",[i.kI.required]),power:new i.NI("",[i.kI.required])}),this.timeOptions=v,this.cycleOptions=_}get name(){return this.form.get("name")}get time(){return this.form.get("time_value")}get cycle(){return this.form.get("cycle_value")}get power(){return this.form.get("power")}ngOnInit(){}onSend(){this.dialogRef.close(this.generateConsumer())}getTime(){var t,n;const a=null===(t=this.form.get("time_value"))||void 0===t?void 0:t.value;switch(null===(n=this.form.get("time_unit"))||void 0===n?void 0:n.value){case"h":return this.useFrecuency(a);case"m":return this.useFrecuency(a/60);case"s":return this.useFrecuency(a/60/60);default:return 0}}useFrecuency(t){var n,a;const s=null===(n=this.form.get("cycle_value"))||void 0===n?void 0:n.value;switch(null===(a=this.form.get("cycle_unit"))||void 0===a?void 0:a.value){case"d":return s*t*31;case"w":return s*t*4;case"m":return s*t;default:return 0}}calculatePower(){var t;!this.v||!this.a||null===(t=this.form.get("power"))||void 0===t||t.setValue(this.v*this.a)}getConsumption(t,n){return t*n/1e3}generateConsumer(){var t,n;const a=null===(t=this.form.get("name"))||void 0===t?void 0:t.value,s=this.getTime(),c=null===(n=this.form.get("power"))||void 0===n?void 0:n.value;return{name:a,time:s,power:c,consumption:this.getConsumption(s,c)}}powerChange(){this.a=0,this.v=0}onClear(){this.form.reset(),this.a=0,this.v=0}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(Z.so))},o.\u0275cmp=e.Xpm({type:o,selectors:[["awad-add-consumer"]],decls:92,vars:17,consts:[[1,"form-container"],["linear","","labelPosition","bottom","color","accent"],["stepper",""],[3,"stepControl"],[1,"step-hint"],[3,"formGroup"],["color","accent"],["formControlName","name","matInput","","placeholder","Nombre"],[1,"form-actions"],["mat-button","","matStepperNext","","type","button"],["mat-button","","type","button",3,"click"],[1,"two-fields"],["formControlName","time_value","matInput","","type","number","placeholder","Tiempo"],["formControlName","time_unit","panelClass","awad-select-panel"],[3,"value",4,"ngFor","ngForOf"],["mat-button","","matStepperPrevious","","type","button"],["formControlName","cycle_value","matInput","","type","number","placeholder","Ciclo"],["formControlName","cycle_unit","panelClass","awad-select-panel"],["formControlName","power","matInput","","type","number","placeholder","Watts",3,"change"],["matSuffix",""],["matInput","","type","number","placeholder","Voltaje",3,"ngModel","ngModelOptions","ngModelChange","change"],["matInput","","type","number","placeholder","Amperaje",3,"ngModel","ngModelOptions","ngModelChange","change"],["mat-raised-button","","color","accent",1,"awad-button",3,"disabled","click"],[3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"div"),e.TgZ(1,"div",0),e.TgZ(2,"mat-stepper",1,2),e.TgZ(4,"mat-step",3),e.TgZ(5,"p",4),e._uU(6,'Agrega un nombre para identificar este elemento (Ej. "Refrigerador 1")'),e.qZA(),e.TgZ(7,"form",5),e.TgZ(8,"mat-form-field",6),e.TgZ(9,"mat-label"),e._uU(10,"Nombre del concepto"),e.qZA(),e._UZ(11,"input",7),e.qZA(),e.TgZ(12,"div",8),e.TgZ(13,"button",9),e.TgZ(14,"mat-icon"),e._uU(15,"arrow_forward"),e.qZA(),e.qZA(),e.TgZ(16,"button",10),e.NdJ("click",function(){return n.dialogRef.close()}),e._uU(17,"Cerrar"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"mat-step",3),e.TgZ(19,"p",4),e._uU(20,"Escribe cuanto tiempo est\xe1 funcionando este elmento, en el siguiente paso pondr\xe1s la frecuencia con la que funciona. (Ej. 4 horas)"),e.qZA(),e.TgZ(21,"form",5),e.TgZ(22,"div",11),e.TgZ(23,"mat-form-field",6),e.TgZ(24,"mat-label"),e._uU(25,"Tiempo"),e.qZA(),e._UZ(26,"input",12),e.qZA(),e.TgZ(27,"mat-form-field",6),e.TgZ(28,"mat-label"),e._uU(29,"Unidad"),e.qZA(),e.TgZ(30,"mat-select",13),e.YNc(31,w,2,2,"mat-option",14),e.qZA(),e.qZA(),e.qZA(),e.TgZ(32,"div",8),e.TgZ(33,"button",9),e.TgZ(34,"mat-icon"),e._uU(35,"arrow_forward"),e.qZA(),e.qZA(),e.TgZ(36,"button",15),e.TgZ(37,"mat-icon"),e._uU(38,"arrow_back"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(39,"mat-step",3),e.TgZ(40,"p",4),e._uU(41,"Escribe que tan seguido funciona este aparato; puede ser al d\xeda, a la semana o al mes."),e.qZA(),e.TgZ(42,"form",5),e.TgZ(43,"div",11),e.TgZ(44,"mat-form-field",6),e.TgZ(45,"mat-label"),e._uU(46,"\xbfCu\xe1ntas veces?"),e.qZA(),e._UZ(47,"input",16),e.qZA(),e.TgZ(48,"mat-form-field",6),e.TgZ(49,"mat-label"),e._uU(50,"Frecuencia"),e.qZA(),e.TgZ(51,"mat-select",17),e.YNc(52,M,2,2,"mat-option",14),e.qZA(),e.qZA(),e.qZA(),e.TgZ(53,"div",8),e.TgZ(54,"button",9),e.TgZ(55,"mat-icon"),e._uU(56,"arrow_forward"),e.qZA(),e.qZA(),e.TgZ(57,"button",15),e.TgZ(58,"mat-icon"),e._uU(59,"arrow_back"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(60,"mat-step",3),e.TgZ(61,"p",4),e._uU(62,"Aqu\xed agrega los Watts (potencia) que consume el elemento. Si desconoces este dato puedes calcularlo usando el voltaje y los ampers."),e.qZA(),e.TgZ(63,"form",5),e.TgZ(64,"mat-form-field",6),e.TgZ(65,"mat-label"),e._uU(66,"Potencia (Watts)"),e.qZA(),e.TgZ(67,"input",18),e.NdJ("change",function(){return n.powerChange()}),e.qZA(),e.TgZ(68,"span",19),e._uU(69,"W"),e.qZA(),e.qZA(),e.TgZ(70,"fieldset"),e.TgZ(71,"legend"),e._uU(72,"\xbfNo conozco la potencia? Calcular"),e.qZA(),e.TgZ(73,"div",11),e.TgZ(74,"mat-form-field",6),e.TgZ(75,"mat-label"),e._uU(76,"Voltaje"),e.qZA(),e.TgZ(77,"input",20),e.NdJ("ngModelChange",function(s){return n.v=s})("change",function(){return n.calculatePower()}),e.qZA(),e.TgZ(78,"span",19),e._uU(79,"V"),e.qZA(),e.qZA(),e.TgZ(80,"mat-form-field",6),e.TgZ(81,"mat-label"),e._uU(82,"Amperaje"),e.qZA(),e.TgZ(83,"input",21),e.NdJ("ngModelChange",function(s){return n.a=s})("change",function(){return n.calculatePower()}),e.qZA(),e.TgZ(84,"span",19),e._uU(85,"A"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(86,"div",8),e.TgZ(87,"button",22),e.NdJ("click",function(){return n.onSend()}),e._uU(88," CALCULAR "),e.qZA(),e.TgZ(89,"button",15),e.TgZ(90,"mat-icon"),e._uU(91,"arrow_back"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("stepControl",n.name),e.xp6(3),e.Q6J("formGroup",n.form),e.xp6(11),e.Q6J("stepControl",n.time),e.xp6(3),e.Q6J("formGroup",n.form),e.xp6(10),e.Q6J("ngForOf",n.timeOptions),e.xp6(8),e.Q6J("stepControl",n.cycle),e.xp6(3),e.Q6J("formGroup",n.form),e.xp6(10),e.Q6J("ngForOf",n.cycleOptions),e.xp6(8),e.Q6J("stepControl",n.power),e.xp6(3),e.Q6J("formGroup",n.form),e.xp6(14),e.Q6J("ngModel",n.v)("ngModelOptions",e.DdM(15,h)),e.xp6(6),e.Q6J("ngModel",n.a)("ngModelOptions",e.DdM(16,h)),e.xp6(4),e.Q6J("disabled",n.form.invalid))},directives:[u.Vq,u.C0,i._Y,i.JL,i.sg,d.KE,d.hX,i.Fj,T.Nt,i.JJ,i.u,f.lW,u.Ic,C.Hw,i.wV,b.gD,m.sg,u.fd,d.R9,i.On,q.ey],styles:[".mat-dialog-container{background:#393C4C!important;border-top:1rem solid #F9A750;padding:2rem;box-shadow:7px 7px 10px #00000080,-4px -4px 10px #ffffff26}@media (min-width: 1024px){  .mat-dialog-container{border-radius:.5rem}}  .mat-stepper-horizontal{background:#393C4C!important;padding:0}  .mat-horizontal-content-container,   .mat-horizontal-stepper-header{padding:0!important}.step-hint[_ngcontent-%COMP%]{margin-top:.5rem;max-width:40ch}form[_ngcontent-%COMP%] > .two-fields[_ngcontent-%COMP%], form[_ngcontent-%COMP%] > mat-form-field[_ngcontent-%COMP%]{width:100%;max-width:100%;margin:.5rem 0}.two-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;grid-gap:2em;gap:2em}.two-fields[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex-basis:50%}fieldset[_ngcontent-%COMP%]{border-radius:.75rem;padding:.75rem 1rem .25rem;margin-bottom:2rem;max-width:100%}fieldset[_ngcontent-%COMP%] > legend[_ngcontent-%COMP%]{padding:0 .5rem}"]}),o})();var O=l(6215);let y=(()=>{class o{constructor(){this.consumption=new O.X(0),this.consumption$=this.consumption.asObservable(),this.consumers=[]}calculateConsumption(t){const n=this.consumption.getValue()+t;this.consumption.next(n)}addConsumer(t){this.consumers.push(t),this.calculateConsumption(t.consumption)}delete(t,n){this.consumers.splice(t,1),this.calculateConsumption(-n)}clear(){this.consumers.length=0,this.consumption.next(0)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function U(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().clear()}),e._uU(1,"REINICIAR"),e.qZA()}}function P(o,r){1&o&&(e.TgZ(0,"p"),e._uU(1,"Agregue un elemento para poder saber su consumo electrico"),e.qZA())}function J(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",11),e.TgZ(1,"div"),e.TgZ(2,"span",12),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA(),e.TgZ(7,"span"),e._uU(8),e.ALo(9,"number"),e.qZA(),e.TgZ(10,"span"),e._uU(11),e.ALo(12,"number"),e.qZA(),e.qZA(),e.TgZ(13,"div",13),e.TgZ(14,"button",14),e.NdJ("click",function(){const a=e.CHM(t),s=a.index,c=a.$implicit;return e.oxw().delete(s,c.consumption)}),e.TgZ(15,"mat-icon"),e._uU(16,"delete"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=r.$implicit;e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij("Potencia: ",e.xi3(6,4,t.power,"1.0-3")," w"),e.xp6(3),e.hij("Tiempo mensual: ",e.xi3(9,7,t.time,"1.0-2")," h"),e.xp6(3),e.hij("Consumo: ",e.xi3(12,10,t.consumption,"1.0-3")," KWh")}}const N=[{path:"",component:(()=>{class o{constructor(t,n){this.service=t,this.dialog=n,this.consumers=[],this.consumption$=this.service.consumption$,this.consumers=this.service.consumers}ngOnInit(){}dialogOptions(){let t={data:"",maxWidth:"100vw",maxHeight:"100vh",height:"",width:""};return window.innerWidth<768&&(t.height="100%",t.width="100%"),t}add(){this.dialog.open(x,this.dialogOptions()).afterClosed().subscribe(n=>{n&&this.service.addConsumer(n)})}delete(t,n){this.service.delete(t,n)}clear(){this.service.clear()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(y),e.Y36(Z.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["awad-consumption-calc"]],decls:22,vars:11,consts:[[1,"consum-container"],[1,"split-screen"],[1,"final-consum-container"],[1,"final-consum"],["mat-button","",3,"click",4,"ngIf"],[1,"elements-list"],[4,"ngIf"],["class","awad-card awad-card-b",4,"ngFor","ngForOf"],[1,"fav-container"],["mat-fab","","color","accent","aria-label","Agregue un elemento",1,"awad-button",3,"click"],["mat-button","",3,"click"],[1,"awad-card","awad-card-b"],[1,"item-title"],[1,"fav-container-delete"],["mat-icon-button","","aria-label","Borrar elemento",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"Calculadora de consumo el\xe9ctrico"),e.qZA(),e.TgZ(3,"div",1),e.TgZ(4,"div",2),e.TgZ(5,"p"),e._uU(6,"Tu consumo el\xe9ctrico mensual es de:"),e.qZA(),e.TgZ(7,"div"),e.TgZ(8,"span",3),e._uU(9),e.ALo(10,"number"),e.ALo(11,"async"),e.qZA(),e.qZA(),e.YNc(12,U,2,0,"button",4),e.ALo(13,"async"),e.qZA(),e.TgZ(14,"div"),e.TgZ(15,"div",5),e.YNc(16,P,2,0,"p",6),e.YNc(17,J,17,13,"div",7),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"div",8),e.TgZ(19,"button",9),e.NdJ("click",function(){return n.add()}),e.TgZ(20,"mat-icon"),e._uU(21,"add"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(9),e.hij("",e.xi3(10,4,e.lcZ(11,7,n.consumption$),"1.0-3")," KWh"),e.xp6(3),e.Q6J("ngIf",0!==e.lcZ(13,9,n.consumption$)),e.xp6(4),e.Q6J("ngIf",0===n.consumers.length),e.xp6(1),e.Q6J("ngForOf",n.consumers))},directives:[m.O5,m.sg,f.lW,C.Hw],pipes:[m.JJ,m.Ov],styles:["h1[_ngcontent-%COMP%]{text-align:center}.consum-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative;height:100%;width:100%}.split-screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;grid-gap:2rem;gap:2rem;max-height:calc(100% - 3rem);overflow:auto}@media (min-width: 1024px){.split-screen[_ngcontent-%COMP%]{flex-direction:row}}.final-consum-container[_ngcontent-%COMP%]{padding:1rem;text-align:center;border-bottom:1px solid #F9A750}@media (min-width: 1024px){.final-consum-container[_ngcontent-%COMP%]{border-bottom:0}}.final-consum[_ngcontent-%COMP%]{display:block;width:100%;margin:1rem 0;color:#f9a750;font-weight:600;font-size:1.5rem}.elements-list[_ngcontent-%COMP%]{max-height:100%;display:flex;flex-direction:column;overflow:scroll;padding-bottom:2rem}@media (min-width: 768px){.elements-list[_ngcontent-%COMP%]{padding:1rem 2rem 2rem}}.elements-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:25ch;text-align:center;color:gray;margin:0 auto}.awad-card-b[_ngcontent-%COMP%]{min-width:240px;margin:1rem 0;position:relative;border-left:.5rem solid #F9A750;border-right:.5rem solid #F9A750}.awad-card-b[_ngcontent-%COMP%]:before{display:none}.awad-card-b[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin-bottom:.25em}.awad-card-b[_ngcontent-%COMP%]   span.item-title[_ngcontent-%COMP%]{font-weight:600;font-size:1.2em;margin-bottom:.75em}.fav-container[_ngcontent-%COMP%], .fav-container-delete[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:-20px}@media (min-width: 768px){.fav-container[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:0px}}.fav-container-delete[_ngcontent-%COMP%]{bottom:-6px;right:-20px}"]}),o})()}];let I=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.Bz.forChild(N)],g.Bz]}),o})();var F=l(9017);let k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,I,F.m]]}),o})()}}]);
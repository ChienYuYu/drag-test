"use strict";(self["webpackChunkdrag_test"]=self["webpackChunkdrag_test"]||[]).push([[193],{9967:function(t,e,r){r.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("Doughnut",{attrs:{options:t.chartOptions,data:t.chartData,id:t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height}})},s=[],n=r(5866),d=r(9646);d.kL.register(d.Dx,d.u,d.De,d.qi,d.uw);var l={name:"DoughnutChart",components:{Doughnut:n.$I},props:{chartId:{type:String,default:"doughnut-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},data(){return{chartData:{labels:["VueJs","EmberJs","ReactJs","AngularJs"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]},chartOptions:{responsive:!0,maintainAspectRatio:!1}}}},i=l,u=r(3736),o=(0,u.Z)(i,a,s,!1,null,null,null),c=o.exports},3984:function(t,e,r){r.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("LineChartGenerator",{attrs:{options:t.chartOptions,data:t.chartData,id:t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height}})},s=[],n=r(5866),d=r(9646);d.kL.register(d.Dx,d.u,d.De,d.jn,d.f$,d.uw,d.od);var l={name:"LineChart",components:{LineChartGenerator:n.x1},props:{chartId:{type:String,default:"line-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},data(){return{chartData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Data One",backgroundColor:"#f87979",borderColor:"#eee",data:[40,39,10,40,39,80,40]}]},chartOptions:{responsive:!0,maintainAspectRatio:!1}}}},i=l,u=r(3736),o=(0,u.Z)(i,a,s,!1,null,null,null),c=o.exports},7193:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"box box1",style:{order:t.divOrder[0]}},[e("div",{staticClass:"click-mask",attrs:{draggable:"true"},on:{dragstart:function(e){return t.dragStartHandler(e)},dragover:function(t){t.preventDefault()},drop:function(e){return t.dropHandler(e)}}}),e("LineChart")],1),e("div",{staticClass:"box box2",style:{order:t.divOrder[1]}},[e("div",{staticClass:"click-mask",attrs:{draggable:"true"},on:{dragstart:function(e){return t.dragStartHandler(e)},dragover:function(t){t.preventDefault()},drop:function(e){return t.dropHandler(e)}}}),e("BarChart")],1),e("div",{staticClass:"box box3",style:{order:t.divOrder[2]}},[e("div",{staticClass:"click-mask",attrs:{draggable:"true"},on:{dragstart:function(e){return t.dragStartHandler(e)},dragover:function(t){t.preventDefault()},drop:function(e){return t.dropHandler(e)}}}),e("DougHnut")],1)])])},s=[],n=r(3984),d=r(4810),l=r(9967),i={components:{LineChart:n.Z,BarChart:d.Z,DougHnut:l.Z},data(){return{Order:["0","1","2","3","4","5"],dragIndex:null,dropIndex:null}},computed:{divOrder(){return this.Order}},methods:{dragStartHandler(t){console.log(t.target.parentElement.style.order),this.dragIndex=t.target.parentElement.style.order},dropHandler(t){this.dropIndex=t.target.parentElement.style.order;const e=[...this.Order];let r=e.indexOf(this.dragIndex),a=e.indexOf(this.dropIndex);-1!=r&&-1!=a&&(e[a]=this.dragIndex,e[r]=this.dropIndex,this.Order=e,console.log("srcccccc",r),console.log("dstttttt",a))}}},u=i,o=r(3736),c=(0,o.Z)(u,a,s,!1,null,"cbc7cd58",null),p=c.exports}}]);
//# sourceMappingURL=193.75faf830.js.map
webpackJsonp([0],{W4hJ:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=l("3j3K"),i=l("Qbdm"),a=function(){function n(n){this.sanitizer=n}return n.prototype.ngOnInit=function(){localStorage.setItem("degree",JSON.stringify(90))},n.prototype.fileChange=function(n,t){var l=this;void 0===t&&(t=this.imgSrc),console.log(n);var e=n.item(0);if(console.log(e),e.type.startsWith("image/")){var i=new FileReader;i.onload=function(n){var e=new Image;e.onload=function(n){var i=t.nativeElement.getContext("2d");i.clearRect(0,0,l.imgSrc.nativeElement.width,l.imgSrc.nativeElement.height),i.save();var a=t.nativeElement.width>e.width?e.width:t.nativeElement.width,u=t.nativeElement.height>e.height?e.height:t.nativeElement.height;i.drawImage(e,10,10,a,u)},e.src=n.target.result,l.img=e,localStorage.setItem("degree",JSON.stringify(90))},i.readAsDataURL(e)}},n.prototype.drawRotated=function(n){void 0===n&&(n=JSON.parse(localStorage.getItem("degree")));var t=Math.PI/180,l=this.imgSrc.nativeElement.getContext("2d"),e=this.imgSrc.nativeElement.width>this.img.width?this.img.width:this.imgSrc.nativeElement.width,i=this.imgSrc.nativeElement.height>this.img.height?this.img.height:this.imgSrc.nativeElement.height;l.setTransform(1,0,0,1,0,0),l.clearRect(0,0,this.imgSrc.nativeElement.width,this.imgSrc.nativeElement.height),l.save(),l.translate(this.imgSrc.nativeElement.width/2,this.imgSrc.nativeElement.height/2),l.rotate(n*t),l.drawImage(this.img,-e/2,-i/2,e,i),l.rotate(-n*t),l.translate(-this.imgSrc.nativeElement.width/2,-this.imgSrc.nativeElement.height/2),l.restore(),localStorage.setItem("degree",JSON.stringify((n+90)%360))},n.prototype.download=function(){var n=this.imgSrc.nativeElement.toDataURL();this.url=this.sanitizer.bypassSecurityTrustUrl(n)},n.ctorParameters=function(){return[{type:i.b}]},n}(),u=function(){return function(){}}(),r=[[""]],o=e._12({encapsulation:0,styles:r,data:{}});function c(n){return e._31(0,[e._28(402653184,1,{imgSrc:0}),(n()(),e._15(1,0,null,null,17,"div",[],null,null,null,null,null)),(n()(),e._30(-1,null,["\n\n  "])),(n()(),e._15(3,0,null,null,3,"button",[["class","btn btn-default"]],null,[[null,"click"],[null,"change"]],function(n,t,l){var i=!0,a=n.component;"click"===t&&(i=!1!==e._26(n,5).click()&&i);"change"===t&&(i=!1!==a.fileChange(l.target.files)&&i);return i},null,null)),(n()(),e._30(-1,null,["\n    Load Image\n    "])),(n()(),e._15(5,0,[["fileUploader",1]],null,0,"input",[["accept","image/*"],["style","display:none"],["type","file"]],null,null,null,null,null)),(n()(),e._30(-1,null,["\n  "])),(n()(),e._30(-1,null,["\n  "])),(n()(),e._15(8,0,null,null,1,"button",[["class","btn btn-default"]],[[8,"disabled",0]],[[null,"click"]],function(n,t,l){var e=!0,i=n.component;"click"===t&&(e=!1!==i.drawRotated()&&e);return e},null,null)),(n()(),e._30(-1,null,["\n    Rotate Image\n  "])),(n()(),e._30(-1,null,["\n  "])),(n()(),e._15(11,0,null,null,1,"a",[["class","btn btn-default"],["download",""]],[[8,"href",4]],[[null,"click"]],function(n,t,l){var e=!0,i=n.component;"click"===t&&(e=!1!==i.download()&&e);return e},null,null)),(n()(),e._30(-1,null,["\n    Save Image\n  "])),(n()(),e._30(-1,null,["\n  "])),(n()(),e._15(14,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),e._30(-1,null,["\n    "])),(n()(),e._15(16,0,[[1,0],["imgSrc",1]],null,0,"canvas",[["height","600"],["width","600"]],null,null,null,null,null)),(n()(),e._30(-1,null,["\n\n  "])),(n()(),e._30(-1,null,["\n"])),(n()(),e._30(-1,null,["\n"]))],null,function(n,t){var l=t.component;n(t,8,0,!l.img),n(t,11,0,l.url)})}var h=e._10("app-task3",a,function(n){return e._31(0,[(n()(),e._15(0,0,null,null,1,"app-task3",[],null,null,null,c,o)),e._13(1,114688,null,0,a,[i.b],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),s=l("2Je8"),g=l("5oXY");l.d(t,"Task3ModuleNgFactory",function(){return m});var m=e._11(u,[],function(n){return e._24([e._25(512,e.k,e._7,[[8,[h]],[3,e.k],e.E]),e._25(4608,s.j,s.i,[e.A]),e._25(512,s.b,s.b,[]),e._25(512,g.m,g.m,[[2,g.r],[2,g.k]]),e._25(512,u,u,[]),e._25(1024,g.i,function(){return[[{path:"",component:a}]]},[])])})}});
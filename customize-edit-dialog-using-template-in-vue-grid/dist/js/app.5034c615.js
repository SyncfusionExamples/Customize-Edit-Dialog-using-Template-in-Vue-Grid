(function(e){function r(r){for(var t,p,h=r[0],n=r[1],o=r[2],S=0,D=[];S<h.length;S++)p=h[S],Object.prototype.hasOwnProperty.call(a,p)&&a[p]&&D.push(a[p][0]),a[p]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);s&&s(r);while(D.length)D.shift()();return d.push.apply(d,o||[]),i()}function i(){for(var e,r=0;r<d.length;r++){for(var i=d[r],t=!0,h=1;h<i.length;h++){var n=i[h];0!==a[n]&&(t=!1)}t&&(d.splice(r--,1),e=p(p.s=i[0]))}return e}var t={},a={app:0},d=[];function p(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,p),i.l=!0,i.exports}p.m=e,p.c=t,p.d=function(e,r,i){p.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:i})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,r){if(1&r&&(e=p(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(p.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)p.d(i,t,function(r){return e[r]}.bind(null,t));return i},p.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(r,"a",r),r},p.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},p.p="/";var h=window["webpackJsonp"]=window["webpackJsonp"]||[],n=h.push.bind(h);h.push=r,h=h.slice();for(var o=0;o<h.length;o++)r(h[o]);var s=n;d.push([0,"chunk-vendors"]),i()})({0:function(e,r,i){e.exports=i("56d7")},"034f":function(e,r,i){"use strict";var t=i("85ec"),a=i.n(t);a.a},"56d7":function(e,r,i){"use strict";i.r(r);i("e260"),i("e6cf"),i("cca6"),i("a79d");var t=i("a026"),a=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",{attrs:{id:"app"}},[i("ejs-grid",{attrs:{dataSource:e.data,editSettings:e.editOptions,toolbar:e.toolbarOptions}},[i("e-columns",[i("e-column",{attrs:{field:"OrderID",headerText:"Order ID",isPrimaryKey:!0}}),i("e-column",{attrs:{field:"CustomerID",headerText:"Customer ID"}}),i("e-column",{attrs:{field:"ShipCountry",headerText:"Ship Country"}}),i("e-column",{attrs:{field:"ShipPostalCode",headerText:"Ship PostalCode"}})],1)],1)],1)},d=[],p=i("6d3b"),h=i.n(p),n=i("c041"),o=i("aa15"),s=i("e09d");t["a"].use(n["a"]);var S={name:"app",data:function(){return{data:h.a,editOptions:{allowAdding:!0,allowEditing:!0,allowDeleting:!0,mode:"Dialog"},toolbarOptions:["Add","Edit","Delete"]}},provide:{grid:[o["a"],s["a"]]}},D=S,l=(i("034f"),i("2877")),u=Object(l["a"])(D,a,d,!1,null,null,null),m=u.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(m)}}).$mount("#app")},"6d3b":function(e,r){r.data=[{OrderID:10001,CustomerID:"ALFKI",EmployeeID:1,Freight:2.3,ShipCity:"Berlin",Verified:!1,OrderDate:"1991-05-15T00:00:00",ShipName:"Simons bistro",ShipCountry:"Denmark",ShippedDate:"1996-07-16T00:00:00",ShipAddress:"Kirchgasse 6"},{OrderID:10002,CustomerID:"ANATR",EmployeeID:3,Freight:3.3,ShipCity:"Madrid",Verified:!0,OrderDate:"1990-04-04T00:00:00",ShipName:"Queen Cozinha",ShipCountry:"Brazil",ShippedDate:"1996-09-11T00:00:00",ShipAddress:"Avda. Azteca 123"},{OrderID:10003,CustomerID:"ANTON",EmployeeID:2,Freight:4.3,ShipCity:"Cholchester",Verified:!0,OrderDate:"1957-11-30T00:00:00",ShipName:"Frankenversand",ShipCountry:"Germany",ShippedDate:"1996-10-07T00:00:00",ShipAddress:"Carrera 52 con Ave. Bolívar #65-98 Llano Largo"},{OrderID:10004,CustomerID:"BLONP",EmployeeID:4,Freight:5.3,ShipCity:"Marseille",Verified:!1,OrderDate:"1930-10-22T00:00:00",ShipName:"Ernst Handel",ShipCountry:"Austria",ShippedDate:"1996-12-30T00:00:00",ShipAddress:"Magazinweg 7"},{OrderID:10005,CustomerID:"BOLID",EmployeeID:5,Freight:6.3,ShipCity:"Tsawassen",Verified:!0,OrderDate:"1953-02-18T00:00:00",ShipName:"Hanari Carnes",ShipCountry:"Switzerland",ShippedDate:"1997-12-03T00:00:00",ShipAddress:"1029 - 12th Ave. S."},{OrderID:10006,CustomerID:"ALFKI",EmployeeID:2,Freight:4.6,ShipCity:"Berlin",Verified:!1,OrderDate:"1991-05-15T00:00:00",ShipName:"Simons bistro",ShipCountry:"Denmark",ShippedDate:"1996-07-16T00:00:00",ShipAddress:"Kirchgasse 6"},{OrderID:10007,CustomerID:"ANATR",EmployeeID:4,Freight:6.6,ShipCity:"Madrid",Verified:!0,OrderDate:"1990-04-04T00:00:00",ShipName:"Queen Cozinha",ShipCountry:"Brazil",ShippedDate:"1996-09-11T00:00:00",ShipAddress:"Avda. Azteca 123"},{OrderID:10008,CustomerID:"ANTON",EmployeeID:3,Freight:8.6,ShipCity:"Cholchester",Verified:!0,OrderDate:"1957-11-30T00:00:00",ShipName:"Frankenversand",ShipCountry:"Germany",ShippedDate:"1996-10-07T00:00:00",ShipAddress:"Carrera 52 con Ave. Bolívar #65-98 Llano Largo"},{OrderID:10009,CustomerID:"BLONP",EmployeeID:5,Freight:10.6,ShipCity:"Marseille",Verified:!1,OrderDate:"1930-10-22T00:00:00",ShipName:"Ernst Handel",ShipCountry:"Austria",ShippedDate:"1996-12-30T00:00:00",ShipAddress:"Magazinweg 7"},{OrderID:10010,CustomerID:"BOLID",EmployeeID:6,Freight:12.6,ShipCity:"Tsawassen",Verified:!0,OrderDate:"1953-02-18T00:00:00",ShipName:"Hanari Carnes",ShipCountry:"Switzerland",ShippedDate:"1997-12-03T00:00:00",ShipAddress:"1029 - 12th Ave. S."},{OrderID:10011,CustomerID:"ALFKI",EmployeeID:3,Freight:6.8999999999999995,ShipCity:"Berlin",Verified:!1,OrderDate:"1991-05-15T00:00:00",ShipName:"Simons bistro",ShipCountry:"Denmark",ShippedDate:"1996-07-16T00:00:00",ShipAddress:"Kirchgasse 6"},{OrderID:10012,CustomerID:"ANATR",EmployeeID:5,Freight:9.899999999999999,ShipCity:"Madrid",Verified:!0,OrderDate:"1990-04-04T00:00:00",ShipName:"Queen Cozinha",ShipCountry:"Brazil",ShippedDate:"1996-09-11T00:00:00",ShipAddress:"Avda. Azteca 123"},{OrderID:10013,CustomerID:"ANTON",EmployeeID:4,Freight:12.899999999999999,ShipCity:"Cholchester",Verified:!0,OrderDate:"1957-11-30T00:00:00",ShipName:"Frankenversand",ShipCountry:"Germany",ShippedDate:"1996-10-07T00:00:00",ShipAddress:"Carrera 52 con Ave. Bolívar #65-98 Llano Largo"},{OrderID:10014,CustomerID:"BLONP",EmployeeID:6,Freight:15.899999999999999,ShipCity:"Marseille",Verified:!1,OrderDate:"1930-10-22T00:00:00",ShipName:"Ernst Handel",ShipCountry:"Austria",ShippedDate:"1996-12-30T00:00:00",ShipAddress:"Magazinweg 7"},{OrderID:10015,CustomerID:"BOLID",EmployeeID:7,Freight:18.9,ShipCity:"Tsawassen",Verified:!0,OrderDate:"1953-02-18T00:00:00",ShipName:"Hanari Carnes",ShipCountry:"Switzerland",ShippedDate:"1997-12-03T00:00:00",ShipAddress:"1029 - 12th Ave. S."},{OrderID:10016,CustomerID:"ALFKI",EmployeeID:4,Freight:9.2,ShipCity:"Berlin",Verified:!1,OrderDate:"1991-05-15T00:00:00",ShipName:"Simons bistro",ShipCountry:"Denmark",ShippedDate:"1996-07-16T00:00:00",ShipAddress:"Kirchgasse 6"},{OrderID:10017,CustomerID:"ANATR",EmployeeID:6,Freight:13.2,ShipCity:"Madrid",Verified:!0,OrderDate:"1990-04-04T00:00:00",ShipName:"Queen Cozinha",ShipCountry:"Brazil",ShippedDate:"1996-09-11T00:00:00",ShipAddress:"Avda. Azteca 123"},{OrderID:10018,CustomerID:"ANTON",EmployeeID:5,Freight:17.2,ShipCity:"Cholchester",Verified:!0,OrderDate:"1957-11-30T00:00:00",ShipName:"Frankenversand",ShipCountry:"Germany",ShippedDate:"1996-10-07T00:00:00",ShipAddress:"Carrera 52 con Ave. Bolívar #65-98 Llano Largo"},{OrderID:10019,CustomerID:"BLONP",EmployeeID:7,Freight:21.2,ShipCity:"Marseille",Verified:!1,OrderDate:"1930-10-22T00:00:00",ShipName:"Ernst Handel",ShipCountry:"Austria",ShippedDate:"1996-12-30T00:00:00",ShipAddress:"Magazinweg 7"},{OrderID:10020,CustomerID:"BOLID",EmployeeID:8,Freight:25.2,ShipCity:"Tsawassen",Verified:!0,OrderDate:"1953-02-18T00:00:00",ShipName:"Hanari Carnes",ShipCountry:"Switzerland",ShippedDate:"1997-12-03T00:00:00",ShipAddress:"1029 - 12th Ave. S."},{OrderID:10021,CustomerID:"ALFKI",EmployeeID:5,Freight:11.5,ShipCity:"Berlin",Verified:!1,OrderDate:"1991-05-15T00:00:00",ShipName:"Simons bistro",ShipCountry:"Denmark",ShippedDate:"1996-07-16T00:00:00",ShipAddress:"Kirchgasse 6"},{OrderID:10022,CustomerID:"ANATR",EmployeeID:7,Freight:16.5,ShipCity:"Madrid",Verified:!0,OrderDate:"1990-04-04T00:00:00",ShipName:"Queen Cozinha",ShipCountry:"Brazil",ShippedDate:"1996-09-11T00:00:00",ShipAddress:"Avda. Azteca 123"},{OrderID:10023,CustomerID:"ANTON",EmployeeID:6,Freight:21.5,ShipCity:"Cholchester",Verified:!0,OrderDate:"1957-11-30T00:00:00",ShipName:"Frankenversand",ShipCountry:"Germany",ShippedDate:"1996-10-07T00:00:00",ShipAddress:"Carrera 52 con Ave. Bolívar #65-98 Llano Largo"},{OrderID:10024,CustomerID:"BLONP",EmployeeID:8,Freight:26.5,ShipCity:"Marseille",Verified:!1,OrderDate:"1930-10-22T00:00:00",ShipName:"Ernst Handel",ShipCountry:"Austria",ShippedDate:"1996-12-30T00:00:00",ShipAddress:"Magazinweg 7"},{OrderID:10025,CustomerID:"BOLID",EmployeeID:9,Freight:31.5,ShipCity:"Tsawassen",Verified:!0,OrderDate:"1953-02-18T00:00:00",ShipName:"Hanari Carnes",ShipCountry:"Switzerland",ShippedDate:"1997-12-03T00:00:00",ShipAddress:"1029 - 12th Ave. S."},{OrderID:10026,CustomerID:"ALFKI",EmployeeID:6,Freight:13.799999999999999,ShipCity:"Berlin",Verified:!1,OrderDate:"1991-05-15T00:00:00",ShipName:"Simons bistro",ShipCountry:"Denmark",ShippedDate:"1996-07-16T00:00:00",ShipAddress:"Kirchgasse 6"},{OrderID:10027,CustomerID:"ANATR",EmployeeID:8,Freight:19.799999999999997,ShipCity:"Madrid",Verified:!0,OrderDate:"1990-04-04T00:00:00",ShipName:"Queen Cozinha",ShipCountry:"Brazil",ShippedDate:"1996-09-11T00:00:00",ShipAddress:"Avda. Azteca 123"},{OrderID:10028,CustomerID:"ANTON",EmployeeID:7,Freight:25.799999999999997,ShipCity:"Cholchester",Verified:!0,OrderDate:"1957-11-30T00:00:00",ShipName:"Frankenversand",ShipCountry:"Germany",ShippedDate:"1996-10-07T00:00:00",ShipAddress:"Carrera 52 con Ave. Bolívar #65-98 Llano Largo"},{OrderID:10029,CustomerID:"BLONP",EmployeeID:9,Freight:31.799999999999997,ShipCity:"Marseille",Verified:!1,OrderDate:"1930-10-22T00:00:00",ShipName:"Ernst Handel",ShipCountry:"Austria",ShippedDate:"1996-12-30T00:00:00",ShipAddress:"Magazinweg 7"},{OrderID:10030,CustomerID:"BOLID",EmployeeID:10,Freight:37.8,ShipCity:"Tsawassen",Verified:!0,OrderDate:"1953-02-18T00:00:00",ShipName:"Hanari Carnes",ShipCountry:"Switzerland",ShippedDate:"1997-12-03T00:00:00",ShipAddress:"1029 - 12th Ave. S."},{OrderID:10031,CustomerID:"ALFKI",EmployeeID:7,Freight:16.099999999999998,ShipCity:"Berlin",Verified:!1,OrderDate:"1991-05-15T00:00:00",ShipName:"Simons bistro",ShipCountry:"Denmark",ShippedDate:"1996-07-16T00:00:00",ShipAddress:"Kirchgasse 6"},{OrderID:10032,CustomerID:"ANATR",EmployeeID:9,Freight:23.099999999999998,ShipCity:"Madrid",Verified:!0,OrderDate:"1990-04-04T00:00:00",ShipName:"Queen Cozinha",ShipCountry:"Brazil",ShippedDate:"1996-09-11T00:00:00",ShipAddress:"Avda. Azteca 123"},{OrderID:10033,CustomerID:"ANTON",EmployeeID:8,Freight:30.099999999999998,ShipCity:"Cholchester",Verified:!0,OrderDate:"1957-11-30T00:00:00",ShipName:"Frankenversand",ShipCountry:"Germany",ShippedDate:"1996-10-07T00:00:00",ShipAddress:"Carrera 52 con Ave. Bolívar #65-98 Llano Largo"},{OrderID:10034,CustomerID:"BLONP",EmployeeID:10,Freight:37.1,ShipCity:"Marseille",Verified:!1,OrderDate:"1930-10-22T00:00:00",ShipName:"Ernst Handel",ShipCountry:"Austria",ShippedDate:"1996-12-30T00:00:00",ShipAddress:"Magazinweg 7"},{OrderID:10035,CustomerID:"BOLID",EmployeeID:11,Freight:44.1,ShipCity:"Tsawassen",Verified:!0,OrderDate:"1953-02-18T00:00:00",ShipName:"Hanari Carnes",ShipCountry:"Switzerland",ShippedDate:"1997-12-03T00:00:00",ShipAddress:"1029 - 12th Ave. S."},{OrderID:10036,CustomerID:"ALFKI",EmployeeID:8,Freight:18.4,ShipCity:"Berlin",Verified:!1,OrderDate:"1991-05-15T00:00:00",ShipName:"Simons bistro",ShipCountry:"Denmark",ShippedDate:"1996-07-16T00:00:00",ShipAddress:"Kirchgasse 6"},{OrderID:10037,CustomerID:"ANATR",EmployeeID:10,Freight:26.4,ShipCity:"Madrid",Verified:!0,OrderDate:"1990-04-04T00:00:00",ShipName:"Queen Cozinha",ShipCountry:"Brazil",ShippedDate:"1996-09-11T00:00:00",ShipAddress:"Avda. Azteca 123"},{OrderID:10038,CustomerID:"ANTON",EmployeeID:9,Freight:34.4,ShipCity:"Cholchester",Verified:!0,OrderDate:"1957-11-30T00:00:00",ShipName:"Frankenversand",ShipCountry:"Germany",ShippedDate:"1996-10-07T00:00:00",ShipAddress:"Carrera 52 con Ave. Bolívar #65-98 Llano Largo"},{OrderID:10039,CustomerID:"BLONP",EmployeeID:11,Freight:42.4,ShipCity:"Marseille",Verified:!1,OrderDate:"1930-10-22T00:00:00",ShipName:"Ernst Handel",ShipCountry:"Austria",ShippedDate:"1996-12-30T00:00:00",ShipAddress:"Magazinweg 7"},{OrderID:10040,CustomerID:"BOLID",EmployeeID:12,Freight:50.4,ShipCity:"Tsawassen",Verified:!0,OrderDate:"1953-02-18T00:00:00",ShipName:"Hanari Carnes",ShipCountry:"Switzerland",ShippedDate:"1997-12-03T00:00:00",ShipAddress:"1029 - 12th Ave. S."},{OrderID:10041,CustomerID:"ALFKI",EmployeeID:9,Freight:20.7,ShipCity:"Berlin",Verified:!1,OrderDate:"1991-05-15T00:00:00",ShipName:"Simons bistro",ShipCountry:"Denmark",ShippedDate:"1996-07-16T00:00:00",ShipAddress:"Kirchgasse 6"},{OrderID:10042,CustomerID:"ANATR",EmployeeID:11,Freight:29.7,ShipCity:"Madrid",Verified:!0,OrderDate:"1990-04-04T00:00:00",ShipName:"Queen Cozinha",ShipCountry:"Brazil",ShippedDate:"1996-09-11T00:00:00",ShipAddress:"Avda. Azteca 123"},{OrderID:10043,CustomerID:"ANTON",EmployeeID:10,Freight:38.699999999999996,ShipCity:"Cholchester",Verified:!0,OrderDate:"1957-11-30T00:00:00",ShipName:"Frankenversand",ShipCountry:"Germany",ShippedDate:"1996-10-07T00:00:00",ShipAddress:"Carrera 52 con Ave. Bolívar #65-98 Llano Largo"},{OrderID:10044,CustomerID:"BLONP",EmployeeID:12,Freight:47.699999999999996,ShipCity:"Marseille",Verified:!1,OrderDate:"1930-10-22T00:00:00",ShipName:"Ernst Handel",ShipCountry:"Austria",ShippedDate:"1996-12-30T00:00:00",ShipAddress:"Magazinweg 7"},{OrderID:10045,CustomerID:"BOLID",EmployeeID:13,Freight:56.699999999999996,ShipCity:"Tsawassen",Verified:!0,OrderDate:"1953-02-18T00:00:00",ShipName:"Hanari Carnes",ShipCountry:"Switzerland",ShippedDate:"1997-12-03T00:00:00",ShipAddress:"1029 - 12th Ave. S."}]},"85ec":function(e,r,i){}});
//# sourceMappingURL=app.5034c615.js.map
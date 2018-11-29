(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Added
var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'my-app';
        this._router.navigate(['/home']);
    }
    AppComponent.prototype.test = function () {
        // alert('test');
        // window.location.href = '../pages/test.html';
        this._router.navigate(['/test']);
        // console.log('test');
        // this._router.navigateByUrl('src/app/teste/test.html');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/server */ "./src/providers/server.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home */ "./src/app/home/home.ts");
/* harmony import */ var _madeByme_madeByme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./madeByme/madeByme */ "./src/app/madeByme/madeByme.ts");
/* harmony import */ var _solved_solved__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./solved/solved */ "./src/app/solved/solved.ts");
/* harmony import */ var _liked_liked__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./liked/liked */ "./src/app/liked/liked.ts");
/* harmony import */ var _ranking_ranking__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ranking/ranking */ "./src/app/ranking/ranking.ts");
/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/post */ "./src/app/post/post.ts");
/* harmony import */ var _feed_feed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./feed/feed */ "./src/app/feed/feed.ts");
/* harmony import */ var _shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/confirm-equal-validator.directive */ "./src/shared/confirm-equal-validator.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { Router } from '@angular/router'; // Added
// import { RouterModule } from '@angular/router';






// Pages









var appRoutes = [
    // { path: 'home', component: AppComponent },
    { path: 'home', component: _home_home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'madeByme', component: _madeByme_madeByme__WEBPACK_IMPORTED_MODULE_10__["MadeByMeComponent"] },
    { path: 'solved', component: _solved_solved__WEBPACK_IMPORTED_MODULE_11__["SolvedComponent"] },
    { path: 'liked', component: _liked_liked__WEBPACK_IMPORTED_MODULE_12__["LikedComponent"] },
    { path: 'ranking', component: _ranking_ranking__WEBPACK_IMPORTED_MODULE_13__["RankingComponent"] },
    { path: 'post', component: _post_post__WEBPACK_IMPORTED_MODULE_14__["PostComponent"] },
    { path: 'feed', component: _feed_feed__WEBPACK_IMPORTED_MODULE_15__["FeedComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _madeByme_madeByme__WEBPACK_IMPORTED_MODULE_10__["MadeByMeComponent"],
                _solved_solved__WEBPACK_IMPORTED_MODULE_11__["SolvedComponent"],
                _ranking_ranking__WEBPACK_IMPORTED_MODULE_13__["RankingComponent"],
                _liked_liked__WEBPACK_IMPORTED_MODULE_12__["LikedComponent"],
                _post_post__WEBPACK_IMPORTED_MODULE_14__["PostComponent"],
                _feed_feed__WEBPACK_IMPORTED_MODULE_15__["FeedComponent"],
                _shared_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_16__["ConfirmEqualValidatorDirective"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forRoot(),
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"],
            ],
            providers: [_providers_server__WEBPACK_IMPORTED_MODULE_3__["ServerProvider"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/feed/feed.css":
/*!*******************************!*\
  !*** ./src/app/feed/feed.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {cursor: pointer;}\r\n/*CSS PERFIL*/\r\n.principal {background-color:  rgb(242, 244, 247);}\r\n.search-results{\r\n  height: 100%;\r\n  overflow: scroll;\r\n}\r\n.dropdown:hover .dropdown-toggle {\r\n    background-color: #0066cc;\r\n}\r\n.dropdown .dropdown-toggle {\r\n    background-color: #0066cc  !important;\r\n}\r\n.dropdown-menu > li > a:hover {background-color: #0066cc;color: rgb(101, 191, 91);}\r\n.dropdown-menu > li > a {color:#fff;}\r\n.liked{\r\n  color: #0066cc;\r\n}\r\n.notLiked{\r\n  color:gray;\r\n}\r\n.icon{\r\n  color: gray;\r\n}\r\n.icon a:hover,\r\n.notLiked a:hover{color: #0066cc;}\r\n/* Create two equal columns that floats next to each other */\r\n.firstcol{\r\n    text-align: right;\r\n    width: 20%;\r\n\r\n}\r\n.secndcol{\r\n    text-align: left;\r\n    width: 70%;\r\n\r\n}\r\n.thirdcol{\r\n  text-align: left;\r\n  width: 10%;\r\n}\r\ndiv.center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 65%;\r\n  }\r\n.btncolumn {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n.btncolumn1 {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n.btncolumn2 {\r\n  float: left;\r\n  width: 80%;\r\n  padding: 10px;\r\n  text-align: left;\r\n  }\r\n@media screen and (max-width: 991px) {\r\n\r\n    .column {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 10px;\r\n\r\n    }\r\n\r\n\r\n\r\n    .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .firstcol{\r\n      text-align: center;\r\n\r\n  }\r\n  .secndcol{\r\n    text-align: center;\r\n  }\r\n  .thirdcol{\r\n    text-align: center;\r\n  }\r\n\r\n\r\n  }\r\n@media screen and (max-width: 1024px) {\r\n    div.center {\r\n      margin-left: -13px;\r\n      margin-top: -60px;\r\n      width: 30%;\r\n\r\n    }\r\n  }\r\nbody {\r\n\t\tfont-size: 14px;\r\n    line-height: 1.52;\r\n    color: #717f86;\r\n    font-size: 14px;\r\n\t  font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n\t\tbackground-color: pink;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    padding: 0px;\r\n  \tmargin: 10px 5px;\r\n  \tpadding: 10px 15px;\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.text-dec{\r\n\tfont-size: 26px;\r\n\tpadding: 10px 20px;\r\n  margin: 2px 0;\r\n\ttext-transform: uppercase;\r\n  color: #fff;\r\n\r\n}\r\n.text-border{\r\n\tborder: 5px solid #0066cc;\r\n\tdisplay: inline-block;\r\n\tmargin-top: 90px;\r\n}\r\n.intro-para{\r\n\tfont-family: 'Alegreya Sans', sans-serif;\r\n\tfont-size: 45px;\r\n\tcolor: #fff;\r\n\tmargin-top: 10px;\r\n}\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n@media (max-width: 568px) {\r\n.modal-sm{\r\n        width: 330px;\r\n        transition: all 0.3s;\r\n        padding-left: 0px;\r\n    }\r\n\r\n  }\r\n.btn-green, .btn-green:hover{\r\n    background-color:rgb(101, 191, 91);\r\n    color: #fff;\r\n}\r\n/******************\r\nSidebar\r\n******************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n   box-sizing: border-box;\r\n}\r\nem {\r\n   font-style: normal;\r\n}\r\n/* Layout */\r\n.s-layout {\r\n   display: flex;\r\n   width: 100%;\r\n   min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   flex: 1;\r\n}\r\n/* Sidebar */\r\n.s-sidebar__nav {\r\n  position: fixed;\r\n  top: 0;\r\n  overflow: hidden;\r\n  transition: all .3s ease-in;\r\n  height: 100%;\r\n  z-index: 1;\r\n  background:linear-gradient(#0066cc 30%, rgb(101,191,91));;\r\n\r\n}\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__nav:focus,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav {\r\nleft: 0;\r\n}\r\n.s-sidebar__nav ul {\r\n  position: absolute;\r\n  left: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 15em;\r\n  top: 4em;\r\n  }\r\n.s-sidebar__nav ul li {\r\n  width: 100%;\r\n  margin: 10px;\r\n\r\n  }\r\n.s-sidebar__nav-link {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  color:white;\r\n  margin: 0;\r\n  }\r\n.s-sidebar__nav-link em\r\n  {\r\n    position: absolute;\r\n    left: 3.5em;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    }\r\n.s-sidebar__nav-link > i , .s-sidebar__nav-link a{\r\n    position: absolute;\r\n    top: 0;\r\n    width: 4em;\r\n    }\r\n.s-sidebar__nav-link > i::before {\r\n    position: absolute;\r\n    top: 90%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    }\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n   .s-layout__content {\r\n      margin-left: 4em;\r\n   }\r\n   /* Sidebar */\r\n\r\n   .s-sidebar__nav {\r\n      width: 4em;\r\n      left: 0;\r\n   }\r\n\r\n   .col-sm-12 > .list-inline > .textleft > p{\r\n    font-size:2vw;\r\n   }\r\n\r\n   .s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover ,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n   width: 11em;\r\n   color: white;\r\n   z-index: 1;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\n top: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a\r\n{\r\n color: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover{\r\n color: rgb(101, 191, 91);\r\n}\r\n\r\n}\r\n@media (min-width: 68em) {\r\n   .s-layout__content {\r\n      margin-left: 15em;\r\n   }\r\n\r\n   .s-sidebar__nav {\r\n      width: 11em;\r\n      z-index: 1;\r\n\r\n   }\r\n\r\n   .s-sidebar__nav ul {\r\n      top: 1.3em;\r\n   }\r\n   .s-sidebar__nav em,\r\n   .s-sidebar__nav .collapse.in a\r\n   {\r\n    color: white;\r\n    }\r\n    .s-sidebar__nav-link em:hover,\r\n    .s-sidebar__nav-link li:hover{\r\n        color: rgb(101, 191, 91);\r\n    }\r\n}\r\n/**********************\r\nFeed\r\n***********************/\r\n@media screen and (max-width: 1024px) {\r\n  div.center {\r\n    margin-left: -13px;\r\n    margin-top: -60px;\r\n    width: 30%;\r\n\r\n  }\r\n}\r\n.rounded{\r\n\r\n    border-radius: 50%;\r\n   width:70px;\r\n  height:70px;\r\n\r\n  }\r\n.rounded2{\r\n\r\n    border-radius: 50%;\r\n   width:30px;\r\n  height:30px;\r\n\r\n  }\r\n.card{\r\n    background-color:#fff;\r\n    margin-top:20px;\r\n    margin-bottom:-15px;\r\n    border-radius: 10px;\r\n     }\r\n.card .card-header{\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  }\r\n.card .card-header img{\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n  }\r\n.card .card-body img{\r\n    width:100%;\r\n  }\r\n.card .card-footer{\r\n    padding-top: 10px;\r\n    padding-bottom: 20px;\r\n    }\r\n.card-info{\r\n    margin-top:30px;\r\n    border-radius: 10%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n  }\r\n.linha {\r\n  margin-top: 2px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n.linha2 {\r\n  margin-bottom: 12px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\ntextarea[type=\"text\"]:focus {\r\n  border-color: dodgerBlue;\r\n  box-shadow: 0 0 8px 0 dodgerBlue;\r\n}\r\n.inputWithIcon textarea[type=\"text\"] {\r\n  padding-left: 40px;\r\n}\r\n.inputWithIcon {\r\n  position: relative;\r\n}\r\n.inputWithIcon i {\r\n  text-align: right;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0px;\r\n  padding: 9px 8px;\r\n  transition: 0.3s;\r\n  border-radius: 50px;\r\n}\r\n.inputWithIcon textarea[type=\"text\"]:focus + i {\r\n  color: dodgerBlue;\r\n}\r\n.borda{\r\n  border-width: 1px 1px 1px 1px; /* aqui, cada lado possui uma borda de largura diferente */\r\n   /* estilos de borda diferentes para cima-baixo e esquerda-direita */\r\n    border-color: #000 #090 #900 #009; /* uma cor de borda para cada lado */\r\n    padding: 5px;\r\n    background-color:rgb(242,244,247);\r\n    border-radius: 18px;\r\n}\r\n.borda2{\r\n  border-width: 1px 1px 1px 1px; /* aqui, cada lado possui uma borda de largura diferente */\r\n   /* estilos de borda diferentes para cima-baixo e esquerda-direita */\r\n    border-color: #000 #090 #900 #009; /* uma cor de borda para cada lado */\r\n    padding: 0px;\r\n    background-color:#fff;\r\n    border-radius: 18px;\r\n}\r\n.btn-search{\r\ncolor:#28a745;\r\nfloat:right;\r\nborder-radius:50%;\r\njustify-content: center;\r\nmargin-left: 5px;\r\nalign-items: center;\r\ndisplay: flex;\r\nwidth:35px;\r\nheight: 35px;\r\n    background-color:#fff;\r\n  }\r\n.search-txt{\r\n  border-radius:5px;\r\n\r\npadding-left:5px;\r\ncolor:green;\r\nfont-size: 16px;\r\ntransition:0.4s;\r\nwidth:300px;\r\nline-height: 26px;\r\n\r\n}\r\n.comentarios{\r\n\r\nborder:solid 0px ;\r\nbackground-color: #fff;\r\npadding-bottom: 10px;\r\n  }\r\n.textinfo{\r\n\r\n    color:  #868e96;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textlike{\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft{\r\n  text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textl{\r\n\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  font-family: arial;\r\n  font-size: 15px;\r\n  }\r\n.textleft2{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft3{\r\n    text-align: left;\r\n\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.rolavel {\r\n  height: 1000px;\r\n\r\n  overflow-y: scroll;\r\n  background-color: rgb(242,244,247);\r\n  overflow-x: hidden;\r\n\r\n\r\n\r\n}\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n    width: 100%;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    margin: 10px 5px;\r\n      padding: 10px 15px;\r\n\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n    position: relative;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n/***********************************\r\n Sidebar\r\n************************************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\nem {\r\n  font-style: normal;\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n.s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\nem:hover,\r\n.s-sidebar__nav .collapse.in a:hover {\r\n color: rgb(101, 191, 91);\r\n}\r\n/* Layout */\r\n.s-layout {\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n.card-footer{\r\n  padding: 2px;\r\n}\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n  .s-layout__content {\r\n     margin-left: 6em;\r\n     align-content: center;\r\n     margin-right: 3em;\r\n    }\r\n    .mar{\r\n      margin-top:60px;\r\n      align-items: center;\r\n      text-align: center;\r\n      min-width: 260px;\r\n      max-width: 500px;\r\n\r\n      margin-right: -50px;\r\n\r\n}\r\n.card .card-header img{\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n}\r\n.card-footer > .card-header p {\r\n  font-size: 2vw;\r\n}\r\n.list-inline{\r\n\r\n  font-size: 12px;\r\n}\r\n  /* Sidebar */\r\n\r\n  ul > img{\r\nwidth: 3em;\r\nheight:3em;\r\nborder-radius: 50%;\r\nmargin-left: 8px;\r\n}\r\n.card-info{\r\n  display: none;\r\n}\r\n.card{\r\n  max-width: 550px;\r\n  height: auto;\r\n  min-width: 260px;\r\n}\r\n.card-header, .card-body{\r\n  font-size: 10px;\r\n}\r\n.s-sidebar__nav {\r\n  width: 4em;\r\n  left: 0;\r\n}\r\n\r\n.s-sidebar__nav ul{\r\ntop: 1.3em;\r\n}\r\n.s-sidebar__nav-link{\r\ntop: 2.3em;\r\n}\r\n\r\n.s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n  width: 11em;\r\n  color: white;\r\n  z-index: 1;\r\n\r\n\r\n}\r\n.s-sidebar__nav:hover .collapse.in a,\r\n.s-sidebar__nav:focus .collapse.in a{\r\n  color: white;\r\n}\r\n.s-sidebar__nav:hover img,\r\n.s-sidebar__nav:focus img {\r\nwidth: 9em;\r\nheight: 9em;\r\nmargin-left: 15px;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\ntop: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a\r\n{\r\ncolor: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover,\r\n.s-sidebar__nav .collapse.in a:hover\r\n{\r\ncolor: rgb(101, 191, 91);\r\n}\r\n.col-sm-12 > .list-inline > .textleft > p{\r\n  font-size:2vw;\r\n }\r\n}\r\n@media (min-width: 48em) {\r\n  .s-layout__content {\r\n     margin-left: 15em;\r\n     margin-right: 15em;\r\n\r\n  }\r\n  .mar{\r\n    min-width: 500px;\r\n\r\n}\r\n.col-sm-12 > .list-inline > .textleft > p{\r\n  font-size:1vw;\r\n }\r\n.card .card-header img{\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n}\r\n.card .card-header2 img{\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n}\r\n.card-footer > .card-header img {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n.card-footer > .card-header p {\r\n  font-size: 1vw;\r\n}\r\n  .card{\r\n    width: 550px;\r\n    height: auto;\r\n  }\r\n  .card-header, .card-body{\r\n    font-size: 16px;\r\n  }\r\n  .s-sidebar__nav {\r\n    width: 11em;\r\n      z-index: 1;\r\n\r\n }\r\n .list-inline{\r\n\r\n   font-size: 14px;\r\n }\r\n .s-sidebar__nav ul {\r\n    top: 1.3em;\r\n }\r\n .s-sidebar__nav em,\r\n .s-sidebar__nav .collapse.in a {\r\n  color: white;\r\n  }\r\n  .s-sidebar__nav-link em:hover,\r\n  .s-sidebar__nav-link li:hover,\r\n  .s-sidebar__nav .collapse.in a:hover\r\n{\r\n      color: rgb(101, 191, 91);\r\n  }\r\n    ul > img{\r\n       width: 9em;\r\n       height:9em;\r\n       border-radius: 50%;\r\n       margin-left: 15px;\r\n       }\r\n}\r\n"

/***/ }),

/***/ "./src/app/feed/feed.html":
/*!********************************!*\
  !*** ./src/app/feed/feed.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\"  style=\"overflow-x: hidden;\">\r\n  <!--Navigation bar-->\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a routerLink=\"/feed\" style=\"margin-left: 10px\"><img src=\"./assets/img/logo.png\" width=\"60\" height=\"60\" alt=\"\" ></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 10px;\">\r\n        <li >\r\n              <a style=\"margin-bottom:0px;\"><input  type=\"text\" class= \"search-txt \" placeholder=\"Pesquisar no Feed\"[(ngModel)]=\"search\" style=\"border:none; font-weight: 400; margin:0px;\" (keyup)=\"setSearch(search)\"></a>\r\n        </li>\r\n        <li><a class=\"pointer\">Feed</a></li>\r\n        <li class=\"dropdown\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Status\r\n            <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu\" style=\"background-color: #0066cc;\">\r\n              <li><a (click)=\"setStatus(10)\" class=\"pointer\">Todas</a>\r\n                <a *ngFor=\"let status of statusOptions\" value=\"status\" (click)=\"setStatus(status)\" class=\"pointer\">{{status?.status}}</a></li>\r\n            </ul>\r\n          </li>\r\n\r\n        <li><a routerLink=\"/ranking\">Ranking</a></li>\r\n        <li><a data-target=\"#Sair\" data-toggle=\"modal\"  class=\"pointer\">Logout</a></li>\r\n\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--/Navigation bar-->\r\n  <!--modal editar perfil-->\r\n  <div class=\"modal fade\" id=\"changeInfo\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button #closeModalChangeButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Editar Perfil</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"login-box-body\">\r\n            <div>\r\n              <img [src]=\"server.user.image_profile\" class=\"rounded\" style=\"width: 80px; height:80px; margin-left: 38%;\">\r\n            </div>\r\n            <p class=\"login-box-msg\" style=\"color: grey;\">Insira uma foto</p>\r\n            <form action=\"#\" method=\"post\" name=\"changeInfo\" style=\"width: 350px; margin-left:-20px;\" >\r\n            <input class=\"form-control\" type=\"file\" name=\"image\" accept=\"image/*\" (change)=\"changeListener($event)\" [(ngModel)]=\"user.image\"/>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n             <!----- username -------------->\r\n             <label for=\"nome\" style=\"font-size: 1.3rem\">Nome completo:</label><br>\r\n             <p style=\"font-size: 1.3rem\">{{server.user.name}}</p>\r\n           </div>\r\n           <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- matricula -------------->\r\n             <label for=\"matricula\" style=\"font-size: 1.3rem\">Matrícula:</label>\r\n             <p style=\"font-size: 1.3rem\">{{server.user.registry}}</p>\r\n           </div>\r\n           <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n            <label for=\"rg\" style=\"font-size: 1.3rem;\">Número RG:</label><br>\r\n            <p style=\"font-size: 1.3rem\">{{server.user.identity}}</p>\r\n           </div>\r\n\r\n\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n           <label for=\"campoData\" style=\"font-size: 1.3rem\">Data de nascimento:</label>\r\n           <p style=\"font-size: 1.3rem\">{{server.user.date_birth}}</p>\r\n         </div>\r\n\r\n           <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n             <label for=\"email\" style=\"font-size: 1.3rem\">E-mail</label>\r\n             <input class=\"form-control\" placeholder=\"Novo email\" id=\"email\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"user.email\" value=\"server.user.email\" />\r\n             <span style=\"display:none; font-weight:bold; position:absolute;color: red;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginid\"></span>\r\n\r\n           </div>\r\n           <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- password -------------->\r\n            <label style=\"font-size: 1.3rem\">Senha</label>\r\n                <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required=\"\" [(ngModel)]=\"user.password\" #password1=\"ngModel\">\r\n               </div>\r\n              <div class=\"form-group\">                    <!----- password -------------->\r\n                <label style=\"font-size: 1.3rem\">Confirme a senha</label>\r\n                <input class=\"form-control\" placeholder=\"Repita senha\" type=\"password\" name=\"passwordconfirm\" required=\"\" [(ngModel)]=\"user.passwordconfirm\" #password2=\"ngModel\" (keyup)=\"verifyPsw(user)\">\r\n                <span style=\"color: red; font-size: 11px;\" *ngIf=\"!isEqual\">\r\n                As senhas devem ser iguais\r\n                </span>\r\n                <br>\r\n            <a  (click)=\"updatePsw(user)\">\r\n              <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Alterar Senha</label></a>\r\n              <br>\r\n\r\n            <a  href=\"#excluir\" data-toggle=\"collapse\">\r\n            <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Excluir conta</label></a>\r\n\r\n            <div id=\"excluir\" class=\"collapse\">\r\n\r\n              <label style=\"font-size: 1.3rem;\">Tem certeza que deseja excluir sua conta?</label><br>\r\n\r\n              <div class=\"row\">\r\n\r\n              <div class=\"btncolumn1\" style=\"color:white;\">\r\n              <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\" (click)=\"delete()\">\r\n              </div>\r\n\r\n              <div class=\"btncolumn2\" style=\"color:white;\">\r\n              <input style=\"margin-top: 0px; background-color: #cccccc\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" href=\"#excluir\" data-toggle=\"collapse\">\r\n\r\n              </div>\r\n              </div>\r\n\r\n            </div>\r\n             <input style=\"margin-top: 20px;\"type=\"submit\" class=\"btn btn-green btn-block btn-flat\" value=\"Alterar\" (click)=\"updateInfo(user)\">\r\n\r\n           </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/modal editar perfil-->\r\n   <div class=\"modal fade\" id=\"modalLabel\" role=\"dialog\" aria-hidden=\"true\">\r\n     <div class=\"modal-dialog modal-sm\">\r\n\r\n     <!-- Modal content no 1-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n           <button #closeModalDangerButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\r\n         <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Denunciar Publicação</h4>\r\n        </div>\r\n       <div class=\"modal-body\">\r\n         <div class=\"login-box-body\">\r\n           <p class=\"login-box-msg\" style=\"color: grey;\">Esta publicação será denunciada.<br>\r\n           Deseja continuar?</p>\r\n\r\n\r\n           <div class=\"row\" style=\"padding-left: 30%;\" >\r\n\r\n           <div class=\"btncolumn\" style=\"color:white;\">\r\n           <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\" (click)=\"report()\">\r\n           </div>\r\n\r\n           <div class=\"btncolumn\" style=\"color:white;\">\r\n           <input style=\"margin-top: 0px; background-color: #cccccc; margin-left:20px;\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" data-dismiss=\"modal\">\r\n\r\n           </div>\r\n           </div>\r\n\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n\r\n   </div>\r\n  <!--/ Modal box-->\r\n  <div class=\"modal fade\" id=\"Sair\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n\r\n    <!-- Modal content no 1-->\r\n     <div class=\"modal-content\">\r\n       <div class=\"modal-header\">\r\n          <button #closeModalLogoutButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\r\n        <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Sair</h4>\r\n       </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"login-box-body\">\r\n          <p class=\"login-box-msg\" style=\"color: grey;;margin-bottom:20px\">Você realmente deseja sair?</p>\r\n\r\n\r\n          <div class=\"row\" style=\"padding-left: 30%;\" >\r\n\r\n          <div class=\"btncolumn\" style=\"color:white;\">\r\n          <input style=\"margin-top: 0px;background-color:#cccccc\" type=\"submit\" class=\"btn   btn-flat\"  (click)=\"logout()\" value=\"Sim\" >\r\n          </div>\r\n\r\n          <div class=\"btncolumn\" style=\"color:white;\">\r\n          <input style=\"margin-top: 0px; background-color: #cccccc; margin-left:20px;\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" data-dismiss=\"modal\">\r\n\r\n          </div>\r\n          </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- Sidebar-->\r\n  <div class=\"s-layout__sidebar\">\r\n    <nav class=\"s-sidebar__nav\" style=\"margin-top: 60px;\">\r\n      <ul style=\"width: 144px;height: auto;\">\r\n        <img [src]=\"server.user.image_profile\">\r\n        <br>\r\n        <div class=\"row\" style=\"margin-left: 20px; text-align: center;\">\r\n        <em class=\"text-center\">{{server.user.name}}</em>\r\n      </div>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#\" data-target=\"#changeInfo\" data-toggle=\"modal\" (click)=\"clearInputs()\" >\r\n          <i class=\"fa fa-user\"></i><em>Editar Perfil</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" routerLink=\"/post\">\r\n          <i class=\"fa fa-newspaper-o\"></i><em>Publicar</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#demo\" data-toggle=\"collapse\" (click)=\"getProfileDemands()\">\r\n          <i class=\"fa fa-pencil-square-o\"></i><em>Demandas</em>\r\n          </a>\r\n        </li>\r\n        <div id=\"demo\" class=\"collapse\">\r\n          <div style=\"margin-left: 60px; margin-top: 8px; padding-top: 40px;\"><a  style=\"text-decoration: none;\" routerLink=\"/madeByme\" >Criadas</a></div>\r\n            <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\"routerLink=\"/liked\" >Curtidas/<br>Comentadas</a></div>\r\n             </div>\r\n\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <!--/ Sidebar-->\r\n  <!--Card-->\r\n <div class=\"s-layout__content\">\r\n  <div class=\"mar\">\r\n    <div class=\"card\" style=\"padding-bottom:15px;\" *ngFor=\"let post of posts \">\r\n      <div class=\"pull-right icon\">\r\n        <a data-toggle=\"modal\" data-target=\"#modalLabel\" (click)=\"reportId(post)\" class=\"icon\">\r\n          <i class=\"fa fa-ellipsis-v pointer\" style=\"font-size:20px; padding: 15px;padding-top: 10px;\"></i>\r\n        </a>\r\n      </div>\r\n      <div class=\"card-header textleft\">\r\n        <div class=\"col-xs-2 card-header2\" style=\"width:auto; padding:1; height: 100%;\">\r\n          <img [src]=\"post?.image_profile\" style=\"object-fit:cover; border-radius: 50%; margin-top:8px;\">\r\n        </div>\r\n        <div class=\"container\" style=\"width:237.33;\">\r\n\r\n          <a class=\"pointer\"  style=\"text-decoration:none;textleft\">{{post?.name}}</a>\r\n          publicou\r\n          <b>{{post?.title}}</b>\r\n          <br>\r\n          <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"post.hasLocal\">\r\n            {{post?.local}}</i>\r\n            <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"!post.hasLocal\">\r\n            {{post?.environment}} no Campus {{post?.campus}}</i>\r\n\r\n        </div>\r\n\r\n          <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Aberta'\">\r\n            <a class=\"icon pointer\" title=\"Demanda Aberta\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\" style=\"font-size:15px; margin-left:0px;\">&nbsp; Aberta</i></a>\r\n          </div>\r\n\r\n          <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Reclassificada'\">\r\n            <a class=\"icon pointer\" title=\"Demanda Reclassificada\"><i class=\"fa fa-refresh\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Reclassificada</i></a>\r\n          </div>\r\n\r\n          <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Resolvida'\">\r\n            <a class=\"icon pointer\" title=\"Demanda Resolvida\"><i class=\"fa fa-check-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Resolvida</i></a>\r\n          </div>\r\n\r\n          <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Solução Inviável'\">\r\n            <a class=\"icon pointer\" title=\"Não foi possível resolver\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Solução Inviável</i></a>\r\n          </div>\r\n\r\n          <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Em Análise'\">\r\n            <a class=\"icon pointer\" title=\"A demanda está sendo analisada\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Em Análise</i></a>\r\n          </div>\r\n\r\n\r\n\r\n          </div>\r\n      <div class=\"card-body\" style=\"background-color:#fff;\">\r\n        <img [src]=\"post?.image_demand\" style=\"width:90%\">\r\n        <div style=\"background:none;\" >\r\n        <p  style=\"text-align:left; margin-left: 50px; margin-top: 5px; overflow-wrap: break-word; width:460px; \">\r\n        {{post?.description}}<br>\r\n        </p>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n        <div class=\"linha\"></div>\r\n            <ul class=\"list-inline\">\r\n              <div class=\"pull-left notLiked\">\r\n                  <a (click)=\"like(post)\" class=\"pointer\" style=\"text-decoration: none;\" [ngClass]=\"{'liked': post.gave_like == 'true', 'notLiked': post.gave_like == 'false'}\"><i class=\"fa fa-thumbs-up\" style=\"  margin-left: 20px;\r\n                  font-size: 15px;\"></i>\r\n                  {{post?.total_likes}}</a>\r\n                </div>\r\n                <div class=\"textl pull-right icon\">\r\n                  <a class=\"pointer icon \" style=\"text-decoration: none;\" (click)=\"post.showcomments=!post.showcomments;\"><i class=\"fa fa-comments\"></i>\r\n                  {{post?.comments?.length}} comentários\r\n                  </a>\r\n                </div>\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n            <div class=\"linha2\"></div>\r\n    </div>\r\n    <div class=\"card-footer rolavel\" style=\"height:auto;max-height:300px; background:none;\" *ngIf=\"post.showcomments\">\r\n    <div class=\"card-header textleft\" *ngFor=\"let comment of post.answers;\">\r\n      <div class=\"col-xs-2\">\r\n        <img [src]=\"comment?.image_profile\" style=\"object-fit:cover;border-radius: 50%; margin-top: 10px;\">\r\n      </div>\r\n      <p class=\"borda\"  style=\"word-break: break-all;width:500px; background: #0066cc; color:white;\">\r\n        <a class=\"pointer\" style=\"text-decoration: none;\"></a>{{comment?.name}}\r\n\r\n        <br>\r\n        {{comment?.comment}}\r\n      </p>\r\n  </div>\r\n        <div class=\"card-header textleft\" *ngFor=\"let comment of post.comments\" style=\"padding: 0px;\">\r\n          <div class=\"col-xs-2\" style=\"width:auto;\">\r\n            <img [src]=\"comment.image_profile\" style=\"object-fit:cover;border-radius: 50%; margin-top: 10px;\">\r\n          </div>\r\n          <p class=\"borda\" style=\"word-break: break-all;width:500px;\">\r\n            <a class=\"pointer\" style=\"text-decoration: none;\">{{comment.name}}</a>\r\n\r\n            <a class=\"pointer fa fa-trash pull-right\" style=\"padding:0; text-decoration: none;\" (click)=\"delComment(comment,post)\" *ngIf=\"comment.owner_comment == 'true'\"></a>\r\n            <br>\r\n            {{comment.comment}}\r\n          </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"textleft inputWithIcon icon\" style=\"overflow-wrap: break-word; resize: both\">\r\n      <textarea rows=\"1\" type=\"text\" class=\"form-control\" placeholder=\"Escreva seu comentário...\" style=\"border-radius: 10px;  resize: none;\" [(ngModel)]=\"comment\">  </textarea>\r\n      <a (click)=\"newComment(post, comment)\" class=\"pointer icon\" style=\"text-decoration: none;\"><i class=\"fa fa-mail-forward\"></i></a>\r\n    </div>\r\n </div>\r\n </div>\r\n </div>\r\n\r\n  <!--/Card-->\r\n  <script src=\"feed.ts\"></script>\r\n  <div class=\"search-results\"\r\n          infinite-scroll\r\n          [infiniteScrollDistance]=\"2\"\r\n          [infiniteScrollThrottle]=\"300\"\r\n          (scrolled)=\"onScroll()\">\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/feed/feed.ts":
/*!******************************!*\
  !*** ./src/app/feed/feed.ts ***!
  \******************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/server */ "./src/providers/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Added

var FeedComponent = /** @class */ (function () {
    function FeedComponent(_router, server) {
        this._router = _router;
        this.server = server;
        this.posts = [];
        this.user = [];
        this.cont = 0;
        this.isEqual = true;
        this.statusOptions = [];
        this.status = '';
        this.search = '';
    }
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.getStatus().then(function (response) {
            response = response.json();
            for (var i = 0; i < response['dados'].length; i++) {
                _this.statusOptions.push(response['dados'][i]);
            }
        }).catch(function (error) {
            try {
                var body = JSON.parse(error['_body']);
                switch (body.erro.home) {
                }
            }
            catch (e) {
            }
        });
        this.getPosts();
    };
    FeedComponent.prototype.onScroll = function () {
        this.getPosts();
    };
    FeedComponent.prototype.getPosts = function () {
        var _this = this;
        this.server.getFeedDemands(this.search, this.status, this.cont).then(function (response) {
            response = response.json();
            console.log(response);
            for (var i = 0; i < response['dados'].length; i++) {
                if (response['dados'][i].local == null)
                    response['dados'][i].hasLocal = false;
                else
                    response['dados'][i].hasLocal = true;
                _this.posts.push(response['dados'][i]);
            }
            _this.cont += 5;
        }).catch(function (error) {
            try {
                var body = JSON.parse(error['_body']);
                switch (body.erro.feed) {
                }
            }
            catch (e) {
            }
        });
    };
    FeedComponent.prototype.setStatus = function (e) {
        if (e == 10) {
            this.status = '';
        }
        else {
            this.status = e.id;
        }
        this.posts = [];
        this.cont = 0;
        this.getPosts();
        e = [];
    };
    FeedComponent.prototype.setSearch = function (e) {
        this.search = e;
        this.posts = [];
        this.cont = 0;
        this.getPosts();
    };
    FeedComponent.prototype.getProfileDemands = function () {
        var _this = this;
        this.server.getSelectedDemands().then(function (response) {
            var body = JSON.parse(response['_body']);
            _this.server.problems = body.dados.reclamacao;
            _this.server.suggestions = body.dados.sugestao;
            _this.server.liked = body.dados.likes;
            _this.server.commented = body.dados.comentarios;
        }).catch(function (error) {
            try {
                var body = JSON.parse(error['_body']);
                switch (body.erro.profile) {
                }
            }
            catch (e) {
            }
        });
    };
    FeedComponent.prototype.like = function (post) {
        //Remove like
        post.total_likes = Number(post.total_likes);
        if (post.gave_like == "true") {
            this.server.unlikeDemand(post.demand_id).then(function (response) {
                post.total_likes -= 1;
                post.gave_like = "false";
            });
        }
        //Add like
        else {
            this.server.likeDemand(post.demand_id).then(function (response) {
                post.total_likes += 1;
                post.gave_like = "true";
            });
        }
    };
    FeedComponent.prototype.newComment = function (post, comment) {
        var _this = this;
        //Add comment
        this.server.commentDemand(post.demand_id, comment).then(function (response) {
            response = response.json();
            post.comments.push({ comment_id: response['dados'].comment_id, name: _this.server.user.name, image_profile: _this.server.user.image_profile, comment: comment, owner_comment: "true" });
        }).catch(function (error) {
        });
        this.comment = "";
    };
    FeedComponent.prototype.delComment = function (post, demand) {
        //Delete comment
        this.server.deleteComment(post.comment_id).then(function (response) {
            response = response.json();
            for (var i = demand.comments.length - 1; i >= 0; --i) {
                if (demand.comments[i].comment_id == post.comment_id) {
                    demand.comments.splice(i, 1);
                }
            }
        }).catch(function (error) {
        });
    };
    FeedComponent.prototype.report = function () {
        var _this = this;
        this.server.reportDemand(this.id).then(function (response) {
            _this.closeModalDangerButton.nativeElement.click();
            bootbox.alert({
                size: "small",
                title: "Atenção!",
                message: "A demanda foi denunciada. Você não conseguirá mais visualizá-la.",
                backdrop: true,
            });
            for (var i = _this.posts.length - 1; i >= 0; --i) {
                if (_this.posts[i].demand_id == _this.id) {
                    _this.posts.splice(i, 1);
                }
            }
        });
    };
    FeedComponent.prototype.reportId = function (post) {
        this.id = post.demand_id;
    };
    FeedComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    FeedComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.user.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    FeedComponent.prototype.updateInfo = function (user) {
        var _this = this;
        if (typeof user.email == 'undefined' || user.email == '') {
            this.user.email = this.server.user.email;
        }
        else {
            this.user.email = user.email;
        }
        this.server.updateInfo(this.user).then(function (response) {
            _this.closeModalChangeButton.nativeElement.click();
        }).catch(function (error) {
            var body = JSON.parse(error['_body']);
            if (body.hasOwnProperty('erro')) {
                switch (body.erro.update) {
                    case 6: {
                        bootbox.alert({
                            size: "small",
                            title: "Ops, algo aconteceu..",
                            message: "Email inválido.",
                            backdrop: true,
                        });
                        break;
                    }
                    default: {
                        bootbox.alert({
                            size: "small",
                            title: "Ops, algo aconteceu..",
                            message: "Erro.",
                            backdrop: true,
                        });
                    }
                }
            }
        });
        if (typeof this.user.image == 'undefined' || this.user.image == '') {
            this.server.user.image_profile = this.server.user.image_profile;
        }
        else {
            this.server.user.image_profile = this.user.image;
        }
    };
    FeedComponent.prototype.verifyPsw = function (user) {
        if (user.password != user.passwordconfirm || typeof user.password == 'undefined') {
            this.isEqual = false;
        }
        else {
            this.isEqual = true;
        }
    };
    FeedComponent.prototype.updatePsw = function (user) {
        var _this = this;
        if (typeof user.password == 'undefined' || typeof user.passwordconfirm == 'undefined') {
            bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "As senhas devem ser iguais e conter no mínimo 6 digitos.",
            });
        }
        else {
            this.server.updatePsw(user.password).then(function (response) {
                bootbox.alert({
                    size: "small",
                    title: "Atenção!",
                    message: "Senha alterada com sucesso.",
                });
                _this.closeModalChangeButton.nativeElement.click();
            }).catch(function (error) {
                var body = JSON.parse(error['_body']);
                if (body.hasOwnProperty('erro')) {
                    switch (body.erro.password) {
                        case 3: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Senha deve conter no mínimo 6 dígitos.",
                                backdrop: true,
                            });
                            break;
                        }
                        default: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Senha deve conter no mínimo 6 dígitos.",
                                backdrop: true,
                            });
                            break;
                        }
                    }
                }
            });
        }
    };
    FeedComponent.prototype.delete = function () {
        var _this = this;
        this.server.deleteAccount().then(function (response) {
            _this.closeModalChangeButton.nativeElement.click();
            bootbox.alert({
                size: "small",
                title: "Atenção",
                message: "Conta deletada com sucesso.",
                backdrop: true,
            });
            _this.logout();
        });
    };
    FeedComponent.prototype.clearInputs = function () {
        this.user = {};
        this.isEqual = true;
    };
    FeedComponent.prototype.logout = function () {
        this.server.token = null;
        this._router.navigate(['/home']);
        this.closeModalLogoutButton.nativeElement.click();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalDangerButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FeedComponent.prototype, "closeModalDangerButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalChangeButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FeedComponent.prototype, "closeModalChangeButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalLogoutButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FeedComponent.prototype, "closeModalLogoutButton", void 0);
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.html */ "./src/app/feed/feed.html"),
            styles: [__webpack_require__(/*! ./feed.css */ "./src/app/feed/feed.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers_server__WEBPACK_IMPORTED_MODULE_2__["ServerProvider"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/home/home.css":
/*!*******************************!*\
  !*** ./src/app/home/home.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*CSS PAGINA INICIAL*/\r\n\r\n\r\n.linha {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n\r\n\r\n.btncolumn {\r\nfloat: left;\r\nwidth: 20%;\r\npadding: 10px;\r\ntext-align: right;\r\n}\r\n\r\n\r\n.pointer {cursor: pointer;}\r\n\r\n\r\n.rolavel {\r\n  height: 1000px;\r\n\r\n  overflow-y: scroll;\r\n  background-color: rgb(242,244,247);\r\n  overflow-x: hidden;\r\n\r\n}\r\n\r\n\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n  }\r\n\r\n\r\nbody {\r\n\tfont-size: 15px;\r\n    line-height: 1.52;\r\n    color: #717f86;\r\n    font-size: 16px;\r\n\t  font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n}\r\n\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\n\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\n\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n\r\n\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n\r\n\r\n/*cor da barra de navegação*/\r\n\r\n\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n}\r\n\r\n\r\n/*caracteristicas do conteudo da barra*/\r\n\r\n\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    padding: 0px;\r\n\tmargin: 10px 5px;\r\n\tpadding: 10px 15px;\r\n}\r\n\r\n\r\n/*Quando passa o mouse*/\r\n\r\n\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n\r\n\r\n/*Quando clica*/\r\n\r\n\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n\r\n\r\n/***********************************\r\nBanner\r\n************************************/\r\n\r\n\r\n.banner{\r\n\tbackground: url('bg-banner.jpg') no-repeat center top;\r\n  background-size: cover;\r\n\tmin-height: 100%;\r\n  position: relative;\r\n}\r\n\r\n\r\n.bg-color{\r\n\tbackground-color: RGBA(12, 11, 11, 0.60);\r\n\tmin-height: 100%;\r\n}\r\n\r\n\r\n.text-dec{\r\n\tfont-size: 26px;\r\n\tpadding: 10px 20px;\r\n    margin: 2px 0;\r\n\ttext-transform: uppercase;\r\n    color: #fff;\r\n\r\n}\r\n\r\n\r\n.text-border{\r\n\tborder: 5px solid #0066cc;\r\n\tdisplay: inline-block;\r\n\tmargin-top: 90px;\r\n}\r\n\r\n\r\n.intro-para{\r\n\tfont-family: 'Alegreya Sans', sans-serif;\r\n\tfont-size: 45px;\r\n\tcolor: #fff;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n}\r\n\r\n\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n\r\n}\r\n\r\n\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n\r\n\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n\r\n\r\n.login-box-msg2, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: justify;\r\n    padding: 0px 20px 10px;\r\n}\r\n\r\n\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n\r\n\r\n.padleft-right{\r\n    padding-left: 5px;\r\n    padding-right: 0px;\r\n}\r\n\r\n\r\n.big-text{\r\n    font-size: 35px;\r\n}\r\n\r\n\r\n.small-text{\r\n    font-size: 16px;\r\n}\r\n\r\n\r\n@media (max-width: 568px) {\r\n.modal-sm{\r\n        width: 320px;\r\n        transition: all 0.3s;\r\n        padding: 20px\r\n    }\r\n  }\r\n\r\n\r\n/***********************************\r\nFeatures\r\n************************************/\r\n\r\n\r\nh2{\r\n\tfont-size: 28px;\r\n\tpadding-bottom: 15px;\r\n}\r\n\r\n\r\n.bottom-line{\r\n\twidth: 25px;\r\n\theight: 3px;\r\n\tbackground-color: rgb(99, 122, 145);\r\n}\r\n\r\n\r\n.fea{\r\n\tmargin-top: 25px;\r\n}\r\n\r\n\r\n.fea-img {\r\n  width: 20%;\r\n}\r\n\r\n\r\n.heading {\r\n    width: 80%;\r\n}\r\n\r\n\r\n.fea i {\r\n    font-size: 39px;\r\n    color: #5FCF80;\r\n    margin-top: 7px;\r\n}\r\n\r\n\r\n.heading h4 {\r\n    font-size: 17px;\r\n    line-height: 1.25;\r\n    font-weight: 700;\r\n    color: #000;\r\n    margin: 10px 0px;\r\n    text-align: left;\r\n}\r\n\r\n\r\n.heading p {\r\n  text-align: left;\r\n}\r\n\r\n\r\n/***********************************\r\n Organisations\r\n************************************/\r\n\r\n\r\n#organisations{\r\n    background-color: rgb(247, 247, 247);\r\n}\r\n\r\n\r\n/***********************************\r\nCourse\r\n************************************/\r\n\r\n\r\n[class*=\" imghvr-\"] figcaption, [class^=\"imghvr-\"] figcaption {\r\n    background-color: rgb(101, 191, 91);\r\n}\r\n\r\n\r\n[class*=\" imghvr-\"], [class^=\"imghvr-\"] {\r\n    background-color: rgb(101, 191, 91);\r\n    color: #fff;\r\n}\r\n\r\n\r\n/***********************************\r\nFooter\r\n************************************/\r\n\r\n\r\n.footer {\r\n    padding: 10px 0 20px;\r\n    background: #0066cc;\r\n    color: #ccc;\r\n}\r\n\r\n\r\n.footer a {\r\n    color: #fff;\r\n}\r\n\r\n\r\n.btn-green, .btn-green:hover{\r\n    background-color:rgb(101, 191, 91);\r\n    color: #fff;\r\n}\r\n\r\n\r\n@media screen and (max-width: 991px){\r\n  .row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.html":
/*!********************************!*\
  !*** ./src/app/home/home.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navigation bar-->\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"navbar-header\">\r\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n    </button>\r\n    <a style=\"margin-left: 10px\"><img src=\"./assets/img/logo.png\" width=\"60\" height=\"60\" alt=\"\" ></a>\r\n  </div>\r\n  <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n    <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 10px\">\r\n      <li><a href=\"home#feature\" target=\"_self\">Quem Somos</a></li>\r\n      <li><a href=\"home#organisations\" target=\"_self\">Como funciona</a></li>\r\n      <li><a href=\"home#courses\">Solucionados</a></li>\r\n      <li><a href=\"#\" data-target=\"#cadastro\" data-toggle=\"modal\" (click)=\"clearInputs()\" >Cadastro</a></li>\r\n      <li><a href=\"#\" data-target=\"#login\" data-toggle=\"modal\" (click)=\"clearInputs()\">Login</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<!--/ Navigation bar-->\r\n<!--Modal box-->\r\n<div class=\"modal fade\" id=\"login\" role=\"dialog\" aria-hidden=\"true\">\r\n<div class=\"modal-dialog modal-sm\" style=\"margin-top: 10px;\">\r\n\r\n  <!-- Modal content no 1-->\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n        <button #closeModalLoginButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Login</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"login-box-body\">\r\n        <p class=\"login-box-msg\" style=\"color: grey;\">Entre na sua conta.</p>\r\n          <form #loginForm=\"ngForm\" >\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n              <label style=\"font-size: 1.3rem\">E-mail</label>\r\n              <input class=\"form-control\" placeholder=\"E-mail\" type=\"email\" name=\"email\" required [(ngModel)]=\"email\"/>\r\n              <span style=\"display:none; font-weight:bold; position:absolute;color: red;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginid\"></span>\r\n\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- password -------------->\r\n              <label style=\"font-size: 1.3rem\">Senha</label>\r\n              <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\"/>\r\n              <span style=\"display:none;font-weight:bold; position:absolute;color: grey;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginpsw1\"></span>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12\">\r\n                <div>\r\n                  <p style=\"text-align: center;\"><a class=\"pointer\"style=\"color: grey;\"data-target=\"#senha\" data-toggle=\"modal\" data-dismiss=\"modal\">Esqueci minha senha.</a></p>\r\n\r\n                </div>\r\n\r\n\r\n              </div>\r\n              <div class=\"col-xs-12\">\r\n                  <button style=\"margin-top: 20px;\" type=\"button\" [disabled]=\"loginForm.invalid || loginForm.pending\" class=\"btn btn-green btn-block btn-flat\" (click)=\"signin(email,password);\">Entrar</button>\r\n                </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<!--/ Modal box-->\r\n<!--Modal box cadastro-->\r\n<div class=\"modal fade\" id=\"cadastro\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\" style=\"margin-top: 10px;\">\r\n\r\n    <!-- Modal content no 1-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n          <button #closeModalCadastroButton type=\"button\" class=\"close\" data-dismiss=\"modal\" >&times;</button>\r\n        <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Cadastro</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"login-box-body\">\r\n          <form #cadastroForm=\"ngForm\" >\r\n              <p class=\"login-box-msg\" style=\"color: grey;\">Preencha os campos</p>\r\n               <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n                <!----- username -------------->\r\n                <label style=\"font-size: 1.3rem\">Nome completo</label>\r\n                <input class=\"form-control\" placeholder=\"Nome completo\" type=\"text\" name=\"name\" required=\"\" [(ngModel)]=\"user.name\" />\r\n\r\n              </div>\r\n              <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- matricula -------------->\r\n                <label style=\"font-size: 1.3rem\">Matricula</label>\r\n                <input class=\"form-control\" placeholder=\"Ex:12010000\" type=\"text\" name=\"registry\" required=\"\" [(ngModel)]=\"user.registry\"/>\r\n\r\n              </div>\r\n\r\n              <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n                <label style=\"font-size: 1.3rem\">Número RG</label>\r\n                <input class=\"form-control\" placeholder=\"RG\" type=\"text\" name=\"identity\" required=\"\" [(ngModel)]=\"user.identity\"/>\r\n\r\n              </div>\r\n\r\n\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n              <label style=\"font-size: 1.3rem\">Data de nascimento</label>\r\n              <input class=\"form-control\" placeholder=\"Data de nascimento\" type=\"text\" name=\"date_birth\" required=\"\" [(ngModel)]=\"user.date_birth\"/>\r\n            </div>\r\n\r\n\r\n              <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n                <label style=\"font-size: 1.3rem\">E-mail</label>\r\n                <input class=\"form-control\" placeholder=\"E-mail\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"user.email\"/>\r\n\r\n              </div>\r\n              <div class=\"form-group\" style=\"margin-bottom:0rem\" >                    <!----- password -------------->\r\n                <label style=\"font-size: 1.3rem\">Senha</label>\r\n                <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required=\"\" [(ngModel)]=\"user.password\" #password1=\"ngModel\">\r\n               </div>\r\n              <div class=\"form-group\">                    <!----- password -------------->\r\n                <label style=\"font-size: 1.3rem\">Confirme a senha</label>\r\n                <input class=\"form-control\" placeholder=\"Repita senha\" type=\"password\" name=\"passwordconfirm\" required=\"\" [(ngModel)]=\"user.passwordconfirm\" #password2=\"ngModel\" (keyup)=\"verifyPsw(user)\">\r\n                <span style=\"color: red; font-size: 11px;\" *ngIf=\"!isEqual\">\r\n                As senhas devem ser iguais\r\n                </span>\r\n                <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n                  <label style=\"font-size: 1.2rem\"><input type=\"checkbox\" style=\"margin:10px;\" name=\"term\" (click)=\"setTermo();\" [checked]=\"aceitoTermo\">\r\n                Concordo com os <a href=\"#\" data-target=\"#termos\" data-toggle=\"modal\">\r\n                  Termos de Uso\r\n                </a>\r\n                do SOSUNB.\r\n              </label>\r\n                </div>\r\n               <button style=\"margin-top: 20px;\" type=\"submit\" class=\"btn btn-green btn-block btn-flat\" name=\"send\" [disabled]=\"!cadastroForm.form.valid || !aceitoTermo\" (click)=\"confirm(user)\">Cadastrar</button>\r\n              </div>\r\n\r\n            </form>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n</div>\r\n<!--/ Modal box cadastro-->\r\n<!--Modal esqueci senha-->\r\n<div class=\"modal fade\" id=\"senha\" role=\"dialog\" aria-hidden=\"true\">\r\n<div class=\"modal-dialog modal-sm\" style=\"margin-top: 10px;\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n        <button #closeModalPswButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Esqueci minha senha</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"login-box-body\">\r\n        <p class=\"login-box-msg\" style=\"color: grey;\">Digite seu email de cadastro.</p>\r\n          <form method=\"post\" action=\"#\" id=\"formsenha\">\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n              <label for=\"email\" style=\"font-size: 1.3rem\">E-mail</label>\r\n              <input class=\"form-control\" placeholder=\"E-mail\" id=\"email\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"email\"/>\r\n            </div>\r\n                <button style=\"margin-top: 20px;\"type=\"button\" class=\"btn btn-green btn-block btn-flat\" (click)=\"newPass(email)\">Enviar</button>\r\n              </form>\r\n          </div>\r\n                  </div>\r\n                  </div>\r\n                  </div>\r\n</div>\r\n<!--/Modal esqueci senha-->\r\n<!--Modal termos-->\r\n<div class=\"modal fade\" id=\"termos\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\" style=\"margin-top: 10px;\">\r\n\r\n    <!-- Modal content no 1-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n          <button #closeModalTermsButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\r\n        <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Termos de uso</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"login-box-body rolavel\" style=\"height:auto;max-height:500px; background:none; padding:0px;\">\r\n\r\n            <div style=\"text-align:center;\">\r\n            <b>Termos de uso do SOS UnB</b></div><p class=\"login-box-msg2\" style=\"color: grey;\">&nbsp;&nbsp;\r\n            SOS UnB é fruto de um projeto acadêmico coordenado pelo Professor Doutor Flávio\r\n            Elias Gomes de Deus, do Departamento de Engenharia da Faculdade de Tecnologia da\r\n            Universidade de Brasília. Resultado do trabalho final da disciplina Projeto Transversal em\r\n            Redes de Comunicação II, do Curso de Bacharelado em Engenharia de Redes, produzido pela\r\n            turma do segundo semestre de 2018. O projeto teve por gestor o aluno Lucas Garcia e a\r\n            participação dos seguintes alunos: Fillipe Barros, Heitor de Melo, Karen Clemente, Lucas Amaro\r\n            Mariana Grijó, Mariana Varanda, Pedro Henrique, Phelipe Resende, Trajano Melo e Victor Albedio.<br>&nbsp;&nbsp;\r\n\r\n            Os presentes termos de uso regem as relações dos usuários com o SOS UnB e quando\r\n            você formaliza o cadastro estará concordando com eles.<br><br></p>\r\n            <div style=\"text-align:center;\">\r\n            <b>O Serviço do SOS UnB</b></div><p class=\"login-box-msg2\" style=\"color: grey;\"><p class=\"login-box-msg2\" style=\"color: grey;\">&nbsp;&nbsp;\r\n            O SOS UnB é um serviço destinado à comunidade acadêmica da Universidade de\r\n            Brasília e objetiva dar visibilidade aos problemas de infraestrutura e facilitar a comunicação de\r\n            demandas à administração da UnB.<br>&nbsp;&nbsp;\r\n            Para se cadastrar você precisa ser aluno, servidor ou professor da Universidade de\r\n            Brasília. Após cadastrado você poderá reportar demandas (problemas ou sugestões), visualizar\r\n            todas as apontadas pelos usuários além de ajudar a ranquear as que lhe interesse ou lhe\r\n            pareça mais importante.<br>&nbsp;&nbsp;\r\n            Sua colaboração tornará mais dinâmica a apresentação de demandas (problemas e\r\n            sugestões) para os gestores da Universidade de Brasília e lançará luz sobre aspectos\r\n            importantes que influenciam no nosso dia-a-dia como membros desta comunidade acadêmica.<br>&nbsp;&nbsp;\r\n            O serviço oferecido apresentará toda e qualquer demanda (problema ou sugestão)\r\n            apontada pelos usuários, indicando eventuais ações adotadas pela administração da\r\n            Universidade. Você terá acesso ao ranking das demandas, classificadas por Campi,\r\n            considerando o número de usuários que se solidarizam com a demanda conforme a\r\n            quantidade de ‘likes’ dados pelos membros de nossa rede.<br>&nbsp;&nbsp;\r\n            As informações passadas pelos usuários sobre as ‘demandas criadas’ são visualizadas\r\n            por todos os demais usuários, catalogadas, ranqueadas e, dependendo de sua repercussão,\r\n            serão disponibilizadas para acesso facilitado à administração da UnB.<br>&nbsp;&nbsp;\r\n            As informações sobre ‘demandas solucionadas’ estarão disponíveis a toda população\r\n            por meio do endereço eletrônico na rede mundial de computadores.<br>&nbsp;&nbsp;\r\n            Você pode excluir sua conta a qualquer tempo caso não concorde com nossos termos\r\n            de uso.<br><br></p>\r\n            <div style=\"text-align:center;\">\r\n            <b>Política de Dados</b></div><p class=\"login-box-msg2\" style=\"color: grey;\"><p class=\"login-box-msg2\" style=\"color: grey;\">&nbsp;&nbsp;\r\n\r\n            Para realizar nossos serviços é necessário confirmar o seu vínculo com a Universidade\r\n            de Brasília, por este motivo, você concorda em fornecer o seu nome completo, número de\r\n            matrícula e data de nascimento. Concorda, também, que possamos armazenar tais dados em\r\n            nosso banco de dados. Essas informações serão confrontadas com a base de dados da\r\n            Universidade de Brasília e, se você for aluno, servidor ou professor, poderá ter acesso aos\r\n            nossos serviços.<br>&nbsp;&nbsp;\r\n            Não compartilhamos seus dados com nenhum outro aplicativo ou sistema.\r\n            Adotaremos as medidas tecnológicas disponíveis em nossos servidores para garantir a\r\n            segurança de seus dados.<br><br></p>\r\n            <div style=\"text-align:center;\">\r\n            <b>Compromissos do Usuário</b></div><p class=\"login-box-msg2\" style=\"color: grey;\"><p class=\"login-box-msg2\" style=\"color: grey;\">&nbsp;&nbsp;\r\n\r\n\r\n            Para utilizar os serviços do SOS UnB você deve agir segundo as regras abaixo:<br></p>\r\n            <div style=\"text-align:left; color:gray; margin-left:40px;\">\r\n              - Você deve ter vínculo com a Universidade de Brasília como aluno, servidor ou professor;<br><br>\r\n              - Você não pode estar respondendo a procedimento administrativo disciplinar na Universidade de Brasília;<br><br>\r\n              - Você não pode ter tido condenação criminal;<br><br>\r\n              - Você não pode fornecer informações imprecisas e não pode se cadastrar por outra pessoa sem o conhecimento prévio e concordância dela;<br><br>\r\n              - Você não pode usar nossa plataforma para algo ilícito, enganoso, fraudulento ou com\r\n              finalidade ilegal ou não autorizada;<br><br>\r\n              - Você não pode agir para tentar interferir ou afetar nosso serviço;<br><br>\r\n              - Você não pode tentar acessar ou coletar informações de formas não autorizadas, incluindo os casos de coleta de informações sem nossa permissão expressa;<br><br>\r\n              - Você não pode utilizar a plataforma para publicar informações particulares ou confidenciais e nem mesmo fazer algo que prejudique direito de terceiros, inclusive direitos de propriedade\r\n              intelectual;<br><br>\r\n              - O conteúdo que você publica é seu, mas você nos concede o direito de sua utilização de forma gratuita, podendo revogar tal concessão solicitando a exclusão de sua conta. Os conteúdos publicados até o processamento do pedido de exclusão, que não excederá a 5 dias úteis, permanecerão aparecendo com as informações então prestadas;<br><br>\r\n              - Você nos concede o direito de usar o seu nome e a foto que inclua em seu perfil. Em toda publicação que você fizer nós colocaremos o seu nome e sua foto de perfil caso tenha cadastrado alguma;<br><br>\r\n              - Você concorda com a possibilidade de baixarmos e instalarmos atualizações do nosso serviço em seus dispositivos.</div><br><br>\r\n            <div style=\"text-align:center;\">\r\n            <b>Remoção de Conteúdo</b></div><p class=\"login-box-msg2\" style=\"color: grey;\"><p class=\"login-box-msg2\" style=\"color: grey;\">&nbsp;&nbsp;\r\n\r\n\r\n            Qualquer usuário pode denunciar qualquer publicação realizada em nossa plataforma.\r\n            Sempre que uma ‘postagem‘ tiver sido denunciada ela poderá ser, preventivamente, retirada\r\n            de nosso serviço. Você será notificado e poderá contestar as denúncias.<br>&nbsp;&nbsp;\r\n\r\n            Para que nosso serviço seja realizado de forma satisfatória, você concorda que\r\n            possamos retirar suas postagens, independentemente de notificação, sempre que julgarmos\r\n            que sua publicação seja ofensiva ou fira nossos termos de uso.<br>&nbsp;&nbsp;\r\n\r\n            Alertamos que publicações ofensivas poderão ser levadas à administração da\r\n            Universidade de Brasília para providências disciplinares eventualmente cabíveis.<br>&nbsp;&nbsp;\r\n            Alertamos, igualmente, que publicações ofensivas podem constituir infrações\r\n            criminais, sendo o autor responsável por seus atos.<br><br></p>\r\n            <div style=\"text-align:center;\">\r\n            <b>Disposições finais</b></div><p class=\"login-box-msg2\" style=\"color: grey;\"><p class=\"login-box-msg2\" style=\"color: grey;\">&nbsp;&nbsp;\r\n\r\n\r\n            Não podemos garantir que os nossos serviços funcionarão perfeitamente a todo\r\n            tempo.<br>&nbsp;&nbsp;\r\n            Não nos responsabilizamos pelo conteúdo publicado por terceiros e não somos\r\n            responsáveis por suas condutas.<br>&nbsp;&nbsp;\r\n            Nossos serviços podem passar por processos de atualização e nossos termos de uso\r\n            também. Enquanto você estiver utilizando nossos serviços significa que concorda com os\r\n            termos de utilização.<br><br></p>\r\n            <div style=\"text-align:center;color: grey;\">\r\n            Este termo foi atualizado em 11 de novembro de 2018.</div>\r\n\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</div>\r\n<!--/Modal termos-->\r\n<!--Banner-->\r\n<div class=\"banner\">\r\n<div class=\"bg-color\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"banner-text text-center\">\r\n        <div class=\"text-border\">\r\n          <h2 class=\"text-dec\">Baixe nosso App</h2>\r\n        </div>\r\n        <div class=\"intro-para text-center quote\">\r\n          <p class=\"big-text\" style=\"font-size:3vw\">E ajude a melhorar nossa universidade!</p>\r\n\r\n          <div>\r\n            <img src=\"./assets/img/celular.png\" style=\"width:25.5%;height:25.5%;position:relative;margin-top:-3%;\" alt=\"\">\r\n            <img src=\"./assets/img/celular2.png\" style=\"width:27%;height:27%;position:relative;margin-top:-3%;\" alt=\"\">\r\n          </div>\r\n          <div>\r\n            <a href=\"https://itunes.apple.com/br/app/apple-store/id375380948?mt=8\" target=\"_blank\"><img src=\"./assets/img/app-store.png\" style=\"width:13%;height:13%;position:relative;margin-top:-3%;\" alt=\"\"></a>\r\n            <a href=\"https://play.google.com/store/apps/details?id=com.unb.sosunb\" target=\"_blank\"><img src=\"./assets/img/google.png\" style=\"width:15%;height:15%;position:relative;margin-top:-3%;margin-left: 11%;\" alt=\"\"></a>\r\n          </div>\r\n        </div>\r\n        <a href=\"#feature\" class=\"mouse-hover\">\r\n          <div class=\"mouse\"></div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<!--/ Banner-->\r\n<!--Feature-->\r\n<section id=\"feature\" class=\"section-padding\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"header-section text-center\">\r\n      <h2 style=\"color: #0066cc;\">Quem Somos</h2>\r\n      <p>O SOSUnB é um sistema colaborativo utilizado para reportar e ranquear\r\n\r\n    <br>demandas de infraestrutura na Universidade de Brasília – UnB. Seu principal objetivo é<br> dar visibilidade\r\n   aos problemas estruturais da UnB para a comunidade acadêmica,<br>\r\n      facilitando a formalização de reclamações e sugestões <br>\r\n      referentes à infraestrutura da universidade.\r\n    </p>\r\n      <hr class=\"bottom-line\">\r\n    </div>\r\n  </div>\r\n</div>\r\n</section>\r\n<!--/ feature-->\r\n<!--Organisations-->\r\n<section id=\"organisations\" class=\"section-padding\">\r\n<div class=\"container text-center\">\r\n  <h2 style=\"color: #0066cc;\">Como Funciona</h2>\r\n  <p>A plataforma WEB permite que qualquer cidadão possa visualizar as principais demandas já solucionadas.<br>\r\n      Você que é aluno, professor ou servidor da UnB, após cadastramento, poderá interagir com o SOSUnB,<br> seja pela plataforma WEB ou pelo aplicativo.\r\n      Após login no sistema<br> será possível apresentar sugestões ou reclamações e visualizar<br> todas as demandas e sugestões formuladas.\r\n  </p>\r\n  <hr class=\"bottom-line\">\r\n  <div class=\"row\">\r\n    <div class=\"feature-info\">\r\n      <div class=\"fea\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"heading pull-right\">\r\n            <h4>Baixe o App</h4>\r\n            <p>Para sua maior comodidade, baixe o aplicativo SOSUnB no seu celular ou tablet. </p>\r\n          </div>\r\n          <div class=\"fea-img pull-left\">\r\n            <i style=\"color: #a8a8a8;\" class=\"fa fa-download\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"fea\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"heading pull-right\">\r\n            <h4>Crie sua demanda</h4>\r\n            <p>Tire uma foto do problema identificado, faça sua descrição e publique sua demanda.</p>\r\n          </div>\r\n          <div class=\"fea-img pull-left\">\r\n            <i style=\"color: #a8a8a8;\"class=\"fa fa-edit\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"fea\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"heading pull-right\">\r\n            <h4>Acompanhe</h4>\r\n            <p>Acompanhe sua publicação e de outros usuários. Curta quantas publicações quiser.</p>\r\n          </div>\r\n          <div class=\"fea-img pull-left\">\r\n            <i style=\"color: #a8a8a8;\"class=\"fa fa-search\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</section>\r\n<!--/Organisations-->\r\n<!--Courses-->\r\n<section id=\"courses\" class=\"section-padding\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"header-section text-center\">\r\n      <h2 style=\"color: #0066cc;\">SOSUnB em Ação!</h2>\r\n      <p>Veja os problemas de infraestrutura que a SOSUnB já ajudou a resolver!</p>\r\n      <hr class=\"bottom-line\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"!showImg\">\r\n  <div class=\"row\" >\r\n    <div class=\"col-md-4 col-sm-6 padleft-right\" *ngFor=\"let post of posts\" style=\"width:375px; height:252.67px;object-fit: cover;margin-bottom:4px;\">\r\n      <figure class=\"imghvr-fold-up\" >\r\n        <img [src]=\"post?.image_demand\" class=\"img-responsive\" style=\"object-fit: cover;width:370px; height:252.67px;\">\r\n        <figcaption>\r\n          <h3 style=\"width:360px;\">{{post?.title}}</h3>\r\n          <p>{{post?.description}}</p>\r\n        </figcaption>\r\n      </figure>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"showImg\" >\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-6 padleft-right\" style=\"padding:0px;\">\r\n      <figure class=\"imghvr-fold-up\">\r\n        <img src=\"../assets/img/01.jpg\" class=\"img-responsive\">\r\n        <figcaption>\r\n          <h3 style=\"text-align:left;margin-top:20px;\"> Estamos trabalhando<br> para solucionar novos<br> problemas.</h3><h3><i class=\"fa fa-cogs\" aria-hidden=\"true\" style=\"font-size:50px;\">&nbsp;</i></h3>\r\n        </figcaption>\r\n      </figure>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-6 padleft-right\" style=\"padding:0px;\">\r\n      <figure class=\"imghvr-fold-up\">\r\n        <img src=\"./assets/img/02.jpg\" class=\"img-responsive\">\r\n        <figcaption>\r\n          <h3>Em breve suas demandas resolvidas aparecerão aqui!</h3>\r\n          <h2 style=\"font-size:40px;\">:)</h2>\r\n        </figcaption>\r\n      </figure>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-6 padleft-right\" style=\"padding:0px;\">\r\n      <figure class=\"imghvr-fold-up\">\r\n        <img src=\"./assets/img/03.jpg\" class=\"img-responsive\">\r\n        <figcaption>\r\n            <h3 style=\"text-align:left;margin-top:5px;\">   Encontrou algum<br> problema?<br> O SoSUnB ajuda<br> a resolver!</h3><h3 style=\"text-align:right;font-size:40px; margin-top:-110px;\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></h3>\r\n        </figcaption>\r\n      </figure>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-4 col-sm-6 padleft-right\" style=\"margin-top:-6px; padding:0px;\">\r\n      <figure class=\"imghvr-fold-up\">\r\n        <img src=\"./assets/img/04.jpg\" class=\"img-responsive\">\r\n        <figcaption>\r\n          <h3 style=\"text-align:center;font-size:40px;\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></h3><h3 style=\"text-align:center;\">Crie, curta e acompanhe novas demandas!</h3>\r\n        </figcaption>\r\n      </figure>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-6 padleft-right\" style=\"margin-top:-6px;padding:0px;\">\r\n      <figure class=\"imghvr-fold-up\">\r\n        <img src=\"./assets/img/05.jpg\" class=\"img-responsive\">\r\n        <figcaption>\r\n            <h3 style=\"text-align:center\">Cuide da nossa univerisade!</h3>\r\n            <h3 style=\"text-align:center; font-size:40px;\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></h3>\r\n        </figcaption>\r\n      </figure>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-6 padleft-right\" style=\"margin-top:-6px;padding:0px;\">\r\n      <figure class=\"imghvr-fold-up\">\r\n        <img src=\"./assets/img/06.jpg\" class=\"img-responsive\">\r\n        <figcaption>\r\n          <h3>O SoSUnB funciona com o auxílio de vocês!</h3><h3 style=\"text-align: right; font-size:50px;margin-top:20px;margin-right:50px;\"><i class=\"fa fa-rocket\" aria-hidden=\"true\"></i></h3>\r\n        </figcaption>\r\n      </figure>\r\n    </div>\r\n  </div>\r\n</div>\r\n</section>\r\n<!--Footer-->\r\n<footer style=\"margin-bottom: 0px;\" id=\"footer\" class=\"footer\">\r\n  <div class=\"container text-center\">\r\n    <div class=\"row\">\r\n      <div class=\"fea\">\r\n          <div class=\"col-md-4\">\r\n              <h5 style=\"color: #fff;\">Termos de uso</h5>\r\n              <a href=\"#\" data-target=\"#termos\" data-toggle=\"modal\"><i style=\"color: #fff; font-size: 25px;\"  class=\"fa fa-file\"></i></a>\r\n          </div>\r\n      </div>\r\n       <div class=\"fea\">\r\n          <div class=\"col-md-4\">\r\n              <h5 style=\"color: #fff;\">Baixe o Aplicativo</h5>\r\n              <a href=\"https://itunes.apple.com/br/app/apple-store/id375380948?mt=8\" target=\"_blank\"><i style=\"color: #fff; font-size: 30px;\"  class=\"fa fa-apple\"></i></a>&nbsp;\r\n              <a href=\"https://play.google.com/store/apps/details?id=com.unb.sosunb\" target=\"_blank\"><i style=\"color: #fff; font-size: 30px;\"  class=\"fa fa-android\"></i></a>\r\n          </div>\r\n      </div>\r\n           <div class=\"col-md-4\">\r\n              <h5 style=\"color: #fff;\">Universidade de Brasília</h5>\r\n              <a href=\"http://unb.br/\" target=\"_blank\"><img src=\"./assets/img/UnB.png\" width=\"40\" height=\"40\" alt=\"\"></a>&nbsp;\r\n              <a href=\"http://www.ene.unb.br/\" target=\"_blank\"><img src=\"./assets/img/ft.png\" width=\"110\" height=\"40\" alt=\"\"></a>\r\n          </div>\r\n   </div>\r\n</div>\r\n</footer>\r\n<!--/ Footer-->\r\n"

/***/ }),

/***/ "./src/app/home/home.ts":
/*!******************************!*\
  !*** ./src/app/home/home.ts ***!
  \******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/server */ "./src/providers/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Added

var HomeComponent = /** @class */ (function () {
    function HomeComponent(_router, server) {
        this._router = _router;
        this.server = server;
        this.user = {};
        this.posts = [];
        this.showImg = true;
        this.aceitoTermo = true;
        this.isEqual = true;
    }
    HomeComponent.prototype.clearCheckbox = function () {
        this.aceitoTermo == true;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.getSolvedDemands().then(function (response) {
            response = response.json();
            if (response['dados'].length > 5) {
                _this.showImg = false;
                for (var i = 0; i < response['dados'].length; i++) {
                    _this.posts.push(response['dados'][i]);
                }
            }
        }).catch(function (error) {
            try {
                var body = JSON.parse(error['_body']);
                switch (body.erro.home) {
                }
            }
            catch (e) {
            }
        });
    };
    HomeComponent.prototype.setTermo = function () {
        if (this.aceitoTermo == false) {
            this.aceitoTermo = true;
            console.log(this.aceitoTermo);
        }
        else {
            this.aceitoTermo = false;
            console.log(this.aceitoTermo);
        }
    };
    HomeComponent.prototype.confirm = function (user) {
        var _this = this;
        this.server.createUser(user).then(function (response) {
            _this.signin(user.email, user.password);
        }).catch(function (error) {
            try {
                var body = JSON.parse(error['_body']);
                if (body.hasOwnProperty('erro')) {
                    switch (body.erro.cadastro) {
                        case 1: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Todos os campos são requeridos para cadastro.",
                                backdrop: true,
                            });
                            break;
                        }
                        case 3: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Senha deve conter no mínimo 6 digitos.",
                                backdrop: true,
                            });
                            break;
                        }
                        case 5: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Cadastro já existe.",
                                backdrop: true,
                            });
                            break;
                        }
                        case 6: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Email inválido.",
                                backdrop: true,
                            });
                            break;
                        }
                        case 8: {
                            bootbox.alert({
                                title: "Ops, algo aconteceu..",
                                message: "Dados não correspondem com registros da UNB. Verifique se os dados estão corretos. (Dica): Retire os acentos do seu nome.",
                                backdrop: true,
                            });
                            break;
                        }
                        default: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Erro. Por favor, tente novamente.",
                                backdrop: true,
                            });
                            break;
                        }
                    }
                }
            }
            catch (e) {
                bootbox.alert({
                    size: "small",
                    title: "Ops, algo aconteceu..",
                    message: "Servidor indisponível. Por favor tente novamente."
                });
            }
        });
        this.closeModalTermsButton.nativeElement.click();
        this.closeModalCadastroButton.nativeElement.click();
    };
    HomeComponent.prototype.signin = function (email, password) {
        var _this = this;
        this.server.loginUser(email, password).then(function (response) {
            var body = JSON.parse(response['_body']);
            _this.server.token = body.token;
            _this.server.user.name = body.dados.name;
            _this.server.user.registry = body.dados.registry;
            _this.server.user.identity = body.dados.identity;
            _this.server.user.date_birth = body.dados.date_birth;
            _this.server.user.email = body.dados.email;
            _this.server.user.image_profile = body.dados.image_profile;
            _this.closeModalLoginButton.nativeElement.click();
            _this._router.navigate(['/feed']);
        }).catch(function (error) {
            try {
                var body = JSON.parse(error['_body']);
                if (body.hasOwnProperty('erro')) {
                    switch (body.erro.login) {
                        case 1: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Todos os campos são requeridos para login.",
                                backdrop: true,
                            });
                            break;
                        }
                        case 10: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Verifique se seu dados estão corretos.",
                                backdrop: true,
                            });
                            break;
                        }
                        default: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Verifique se seu dados estão corretos.",
                                backdrop: true,
                            });
                            break;
                        }
                    }
                }
            }
            catch (e) {
                bootbox.alert({
                    size: "small",
                    title: "Ops, algo aconteceu..",
                    message: "Servidor indisponível. Por favor tente novamente.",
                    backdrop: true,
                });
            }
        });
    };
    HomeComponent.prototype.verifyPsw = function (user) {
        if (user.password != user.passwordconfirm || typeof user.password == 'undefined') {
            this.isEqual = false;
        }
        else {
            this.isEqual = true;
        }
    };
    HomeComponent.prototype.newPass = function (email) {
        var _this = this;
        this.server.newPsw(email).then(function (response) {
            _this.closeModalPswButton.nativeElement.click();
        }).catch(function (error) {
            try {
                var body = JSON.parse(error['_body']);
                if (body.hasOwnProperty('erro')) {
                    switch (body.erro.recover) {
                        case 6: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Verifique se seu email está correto.",
                                backdrop: true,
                            });
                            break;
                        }
                        default: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Erro. Por favor, tente novamente.",
                                backdrop: true,
                            });
                            break;
                        }
                    }
                }
            }
            catch (e) {
                bootbox.alert({
                    size: "small",
                    title: "Ops, algo aconteceu..",
                    message: "Servidor indisponível. Por favor tente novamente.",
                    backdrop: true,
                });
            }
        });
    };
    HomeComponent.prototype.clearInputs = function () {
        this.user = {};
        this.email = "";
        this.password = "";
        this.setTermo();
        this.isEqual = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalLoginButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "closeModalLoginButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalCadastroButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "closeModalCadastroButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalPswButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "closeModalPswButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalTermsButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "closeModalTermsButton", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.html */ "./src/app/home/home.html"),
            styles: [__webpack_require__(/*! ./home.css */ "./src/app/home/home.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers_server__WEBPACK_IMPORTED_MODULE_2__["ServerProvider"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/liked/liked.css":
/*!*********************************!*\
  !*** ./src/app/liked/liked.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {cursor: pointer;}\r\n/*CSS PERFIL*/\r\n.principal {background-color:  rgb(242, 244, 247);}\r\n.responsivo{\r\n   margin-left: 5px;\r\n}\r\n.responsivo2{\r\n   margin-left: 20px;\r\n}\r\n.liked{\r\n  color: #0066cc;\r\n}\r\n.notLiked{\r\n  color:gray;\r\n}\r\n.icon{\r\n  color: gray;\r\n}\r\n.icon a:hover,\r\n.notLiked a:hover{color: #0066cc;}\r\n/* Create two equal columns that floats next to each other */\r\n.firstcol{\r\n    text-align: right;\r\n    width: 20%;\r\n\r\n}\r\n.secndcol{\r\n    text-align: left;\r\n    width: 70%;\r\n\r\n}\r\n.thirdcol{\r\n  text-align: left;\r\n  width: 10%;\r\n}\r\n.inputWithIcon textarea[type=\"text\"] {\r\n  padding-left: 40px;\r\n}\r\n.inputWithIcon {\r\n  position: relative;\r\n}\r\n.inputWithIcon i {\r\n  text-align: right;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0px;\r\n  padding: 9px 8px;\r\n  transition: 0.3s;\r\n  border-radius: 50px;\r\n}\r\n.inputWithIcon textarea[type=\"text\"]:focus + i {\r\n  color: dodgerBlue;\r\n}\r\ndiv.center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 65%;\r\n  }\r\n.btncolumn {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n.btncolumn1 {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n.btncolumn2 {\r\n  float: left;\r\n  width: 80%;\r\n  padding: 10px;\r\n  text-align: left;\r\n  }\r\n@media screen and (max-width: 991px) {\r\n\r\n    .column {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 10px;\r\n\r\n    }\r\n    .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .firstcol{\r\n      text-align: center;\r\n\r\n  }\r\n  .secndcol{\r\n    text-align: center;\r\n  }\r\n  .thirdcol{\r\n    text-align: center;\r\n  }\r\n  .responsivo{\r\n     margin-left: 101px;\r\n  }\r\n\r\n  .responsivo2{\r\n     margin-left: 30px;\r\n  }\r\n\r\n  }\r\n@media screen and (max-width: 1024px) {\r\n    div.center {\r\n      margin-left: -13px;\r\n      margin-top: -60px;\r\n      width: 30%;\r\n\r\n    }\r\n  }\r\nbody {\r\n\t\tfont-size: 15px;\r\n    line-height: 1.52;\r\n    color: #717f86;\r\n    font-size: 16px;\r\n\t  font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n\t\tbackground-color: pink;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    padding: 0px;\r\n  \tmargin: 10px 5px;\r\n  \tpadding: 10px 15px;\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.text-dec{\r\n\tfont-size: 26px;\r\n\tpadding: 10px 20px;\r\n  margin: 2px 0;\r\n\ttext-transform: uppercase;\r\n  color: #fff;\r\n\r\n}\r\n.text-border{\r\n\tborder: 5px solid #0066cc;\r\n\tdisplay: inline-block;\r\n\tmargin-top: 90px;\r\n}\r\n.intro-para{\r\n\tfont-family: 'Alegreya Sans', sans-serif;\r\n\tfont-size: 45px;\r\n\tcolor: #fff;\r\n\tmargin-top: 10px;\r\n}\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n@media (max-width: 568px) {\r\n.modal-sm{\r\n        width: 320px;\r\n        transition: all 0.3s;\r\n        padding-left: 0px;\r\n    }\r\n  }\r\n.btn-green, .btn-green:hover{\r\n    background-color:rgb(101, 191, 91);\r\n    color: #fff;\r\n}\r\n/******************\r\nSidebar\r\n******************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n   box-sizing: border-box;\r\n}\r\nem {\r\n   font-style: normal;\r\n\r\n}\r\n/* Layout */\r\n.s-layout {\r\n   display: flex;\r\n   width: 100%;\r\n   min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   flex: 1;\r\n}\r\n/* Sidebar */\r\n.s-sidebar__nav {\r\n  position: fixed;\r\n  top: 0;\r\n  overflow: hidden;\r\n  transition: all .3s ease-in;\r\n  height: 100%;\r\n  z-index: 1;\r\n  background:linear-gradient(#0066cc 30%, rgb(101,191,91));;\r\n\r\n}\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__nav:focus,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav {\r\nleft: 0;\r\n}\r\n.s-sidebar__nav ul {\r\n  position: absolute;\r\n  left: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 15em;\r\n  top: 4em;\r\n  }\r\n.s-sidebar__nav ul li {\r\n  width: 100%;\r\n  margin: 10px;\r\n\r\n  }\r\n.s-sidebar__nav-link {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  color:white;\r\n  margin: 0;\r\n  }\r\n.s-sidebar__nav-link em {\r\n    position: absolute;\r\n    left: 3.5em;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    }\r\n.s-sidebar__nav-link > i , .s-sidebar__nav-link a{\r\n    position: absolute;\r\n    top: 0;\r\n    width: 4em;\r\n    }\r\n.s-sidebar__nav-link > i::before {\r\n    position: absolute;\r\n    top: 90%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    }\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n   .s-layout__content {\r\n      margin-left: 4em;\r\n   }\r\n\r\n\r\n   /* Sidebar */\r\n\r\n   .s-sidebar__nav {\r\n      width: 4em;\r\n      left: 0;\r\n   }\r\n\r\n   .s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover ,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n   width: 11em;\r\n   color: white;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\n top: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a {\r\n color: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover{\r\n color: rgb(101, 191, 91);\r\n}\r\n\r\n}\r\n@media (min-width: 68em) {\r\n   .s-layout__content {\r\n      margin-left: 15em;\r\n   }\r\n\r\n   .s-sidebar__nav {\r\n      width: 11em;\r\n   }\r\n\r\n   .s-sidebar__nav ul {\r\n      top: 1.3em;\r\n   }\r\n   .s-sidebar__nav em,\r\n   .s-sidebar__nav .collapse.in a{\r\n    color: white;\r\n    }\r\n    .s-sidebar__nav-link em:hover,\r\n    .s-sidebar__nav-link li:hover{\r\n        color: rgb(101, 191, 91);\r\n    }\r\n}\r\n/**********************\r\nFeed\r\n***********************/\r\n@media screen and (max-width: 1024px) {\r\n  div.center {\r\n    margin-left: -13px;\r\n    margin-top: -60px;\r\n    width: 30%;\r\n\r\n  }\r\n}\r\n.rounded{\r\n\r\n    border-radius: 50%;\r\n   width:70px;\r\n  height:70px;\r\n\r\n  }\r\n.rounded2{\r\n\r\n    border-radius: 50%;\r\n   width:30px;\r\n  height:30px;\r\n\r\n  }\r\n.card{\r\n    background-color:#fff;\r\n    margin-top:20px;\r\n    margin-bottom:-15px;\r\n    border-radius: 10px;\r\n     }\r\n.card .card-header{\r\n     padding-top: 0px;\r\n     padding-bottom: 0px;\r\n     }\r\n.card .card-header img{\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n.card .card-header2 img{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n.card .card-footer{\r\n    padding-top: 10px;\r\n    padding-bottom: 20px;\r\n    }\r\n.card-info{\r\n    margin-top:30px;\r\n    border-radius: 10%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n  }\r\n.linha {\r\n  margin-top: 18px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n.linha2 {\r\n  margin-bottom: 12px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n.borda{\r\n  border-width: 1px 1px 1px 1px; /* aqui, cada lado possui uma borda de largura diferente */\r\n   /* estilos de borda diferentes para cima-baixo e esquerda-direita */\r\n    border-color: #000 #090 #900 #009; /* uma cor de borda para cada lado */\r\n    padding: 5px;\r\n    background-color:rgb(242,244,247);\r\n    border-radius: 18px;\r\n}\r\n.btn-search{\r\ncolor:#28a745;\r\nfloat:right;\r\nborder-radius:50%;\r\njustify-content: center;\r\nmargin-left: 5px;\r\nalign-items: center;\r\ndisplay: flex;\r\nwidth:35px;\r\nheight: 35px;\r\n    background-color:#fff;\r\n  }\r\n.search-txt{\r\nborder-radius:10px;\r\npadding: 0;\r\ncolor:green;\r\nfont-size: 16px;\r\ntransition:0.4s;\r\nwidth:300px;\r\nline-height: 30px;\r\n}\r\n.comentarios{\r\n\r\nborder:solid 0px ;\r\nbackground-color: #fff;\r\npadding-bottom: 10px;\r\n  }\r\n.textinfo{\r\n\r\n    color:  #868e96;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textlike{\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 20px;\r\n  }\r\n.textleft2{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft3{\r\n    text-align: left;\r\n\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.rolavel {\r\n  height: 1000px;\r\n\r\n  overflow-y: scroll;\r\n    background-color: rgb(242,244,247);\r\n      overflow-x: hidden;\r\n\r\n\r\n\r\n}\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n    width: 100%;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    margin: 10px 5px;\r\n      padding: 10px 15px;\r\n\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n    position: relative;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n/***********************************\r\n Sidebar\r\n************************************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\nem {\r\n  font-style: normal;\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n.s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\nem:hover,\r\n.s-sidebar__nav .collapse.in a:hover {\r\n color: rgb(101, 191, 91);\r\n}\r\n/* Layout */\r\n.s-layout {\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n  .s-layout__content {\r\n     margin-left: 6em;\r\n     align-content: center;\r\n     margin-right: 3em;\r\n    }\r\n    .mar{\r\n      margin-top:60px;\r\n      align-items: center;\r\n      text-align: center;\r\n      min-width: 260px;\r\n      max-width: 500px;\r\n\r\n      margin-right: -50px;\r\n\r\n}\r\n.list-inline{\r\n\r\n  font-size: 12px;\r\n}\r\n  /* Sidebar */\r\n\r\n  ul > img{\r\nwidth: 3em;\r\nheight:3em;\r\nborder-radius: 50%;\r\nmargin-left: 8px;\r\n}\r\n.card-info{\r\n  display: none;\r\n}\r\n.card{\r\n  max-width: 550px;\r\n  height: auto;\r\n  min-width: 260px;\r\n}\r\n.card-header, .card-body{\r\n  font-size: 10px;\r\n}\r\n.s-sidebar__nav {\r\n  width: 4em;\r\n  left: 0;\r\n}\r\n\r\n.s-sidebar__nav ul{\r\ntop: 1.3em;\r\n}\r\n.s-sidebar__nav-link{\r\n  top: 2.3em;\r\n  }\r\n.s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n  width: 11em;\r\n  color: white;\r\n\r\n}\r\n.s-sidebar__nav:hover .collapse.in a,\r\n.s-sidebar__nav:focus .collapse.in a{\r\n  color: white;\r\n}\r\n.s-sidebar__nav:hover img,\r\n.s-sidebar__nav:focus img {\r\nwidth: 9em;\r\nheight: 9em;\r\nmargin-left: 15px;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\ntop: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a{\r\ncolor: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover,\r\n.s-sidebar__nav .collapse.in a:hover{\r\ncolor: rgb(101, 191, 91);\r\n}\r\n}\r\n@media (min-width: 58em) {\r\n  .s-layout__content {\r\n     margin-left: 15em;\r\n     margin-right: 15em;\r\n\r\n  }\r\n  .mar{\r\n    min-width: 500px;\r\n\r\n}\r\n  .card{\r\n    width: 550px;\r\n    height: auto;\r\n  }\r\n  .card-header, .card-body{\r\n    font-size: 16px;\r\n  }\r\n  .s-sidebar__nav {\r\n    width: 11em;\r\n }\r\n .list-inline{\r\n\r\n   font-size: 14px;\r\n }\r\n .s-sidebar__nav ul {\r\n    top: 1.3em;\r\n }\r\n .s-sidebar__nav em,\r\n .s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  }\r\n  .s-sidebar__nav-link em:hover,\r\n  .s-sidebar__nav-link li:hover,\r\n  .s-sidebar__nav .collapse.in a:hover\r\n  {\r\n      color: rgb(101, 191, 91);\r\n  }\r\n    ul > img{\r\n       width: 9em;\r\n       height:9em;\r\n       border-radius: 50%;\r\n       margin-left: 15px;\r\n       }\r\n}\r\n"

/***/ }),

/***/ "./src/app/liked/liked.html":
/*!**********************************!*\
  !*** ./src/app/liked/liked.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\r\n  <!--Navigation bar-->\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a routerLink=\"/feed\" style=\"margin-left: 10px\"><img src=\"./assets/img/logo.png\" width=\"60\" height=\"60\" alt=\"\" ></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 10px\">\r\n        <li><a routerLink=\"/feed\">Feed</a></li>\r\n        <li><a routerLink=\"/ranking\">Ranking</a></li>\r\n          <li><a data-target=\"#Sair\" data-toggle=\"modal\"  class=\"pointer\">Logout</a></li>\r\n\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--/Navigation bar-->\r\n <!--modal editar perfil-->\r\n <div class=\"modal fade\" id=\"changeInfo\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button #closeModalChangeButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Editar Perfil</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"login-box-body\">\r\n          <div>\r\n            <img [src]=\"server.user.image_profile\" class=\"rounded\" style=\"width: 80px; height:80px; margin-left: 38%;\">\r\n          </div>\r\n          <p class=\"login-box-msg\" style=\"color: grey;\">Insira uma foto</p>\r\n          <form action=\"#\" method=\"post\" name=\"changeInfo\" style=\"width: 350px; margin-left:-20px;\" >\r\n          <input class=\"form-control\" type=\"file\" name=\"image\" accept=\"image/*\" (change)=\"changeListener($event)\" [(ngModel)]=\"user.image\"/>\r\n          <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n           <!----- username -------------->\r\n           <label for=\"nome\" style=\"font-size: 1.3rem\">Nome completo:</label><br>\r\n           <p style=\"font-size: 1.3rem\">{{server.user.name}}</p>\r\n         </div>\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- matricula -------------->\r\n           <label for=\"matricula\" style=\"font-size: 1.3rem\">Matrícula:</label>\r\n           <p style=\"font-size: 1.3rem\">{{server.user.registry}}</p>\r\n         </div>\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n          <label for=\"rg\" style=\"font-size: 1.3rem;\">Número RG:</label><br>\r\n          <p style=\"font-size: 1.3rem\">{{server.user.identity}}</p>\r\n         </div>\r\n\r\n\r\n       <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n         <label for=\"campoData\" style=\"font-size: 1.3rem\">Data de nascimento:</label>\r\n         <p style=\"font-size: 1.3rem\">{{server.user.date_birth}}</p>\r\n       </div>\r\n\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n           <label for=\"email\" style=\"font-size: 1.3rem\">E-mail</label>\r\n           <input class=\"form-control\" placeholder=\"Novo email\" id=\"email\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"user.email\" value=\"server.user.email\" />\r\n           <span style=\"display:none; font-weight:bold; position:absolute;color: red;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginid\"></span>\r\n\r\n         </div>\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- password -------------->\r\n          <label style=\"font-size: 1.3rem\">Senha</label>\r\n              <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required=\"\" [(ngModel)]=\"user.password\" #password1=\"ngModel\">\r\n             </div>\r\n            <div class=\"form-group\">                    <!----- password -------------->\r\n              <label style=\"font-size: 1.3rem\">Confirme a senha</label>\r\n              <input class=\"form-control\" placeholder=\"Repita senha\" type=\"password\" name=\"passwordconfirm\" required=\"\" [(ngModel)]=\"user.passwordconfirm\" #password2=\"ngModel\" (keyup)=\"verifyPsw(user)\">\r\n              <span style=\"color: red; font-size: 11px;\" *ngIf=\"!isEqual\">\r\n              As senhas devem ser iguais\r\n              </span>\r\n              <br>\r\n          <a  (click)=\"updatePsw(user)\">\r\n            <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Alterar Senha</label></a>\r\n            <br>\r\n\r\n          <a  href=\"#excluir\" data-toggle=\"collapse\">\r\n          <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Excluir conta</label></a>\r\n\r\n          <div id=\"excluir\" class=\"collapse\">\r\n\r\n            <label style=\"font-size: 1.3rem;\">Tem certeza que deseja excluir sua conta?</label><br>\r\n\r\n            <div class=\"row\">\r\n\r\n            <div class=\"btncolumn1\" style=\"color:white;\">\r\n            <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\" (click)=\"delete()\">\r\n            </div>\r\n\r\n            <div class=\"btncolumn2\" style=\"color:white;\">\r\n            <input style=\"margin-top: 0px; background-color: #cccccc\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" href=\"#excluir\" data-toggle=\"collapse\">\r\n\r\n            </div>\r\n            </div>\r\n\r\n          </div>\r\n           <input style=\"margin-top: 20px;\"type=\"submit\" class=\"btn btn-green btn-block btn-flat\" value=\"Alterar\" (click)=\"updateInfo(user)\">\r\n\r\n         </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--/modal editar perfil-->\r\n    <div class=\"modal fade\" id=\"modalLabel\" role=\"dialog\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-sm\">\r\n\r\n      <!-- Modal content no 1-->\r\n       <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n            <button #closeModalDangerButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\r\n          <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Denunciar Publicação</h4>\r\n         </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"login-box-body\">\r\n            <p class=\"login-box-msg\" style=\"color: grey;\">Esta publicação será denunciada.<br>\r\n            Deseja continuar?</p>\r\n\r\n\r\n            <div class=\"row\" style=\"padding-left: 30%;\" >\r\n\r\n              <div class=\"btncolumn\" style=\"color:white;\">\r\n                <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\" (click)=\"report()\">\r\n                </div>\r\n\r\n                <div class=\"btncolumn\" style=\"color:white;\">\r\n                <input style=\"margin-top: 0px; background-color: #cccccc; margin-left:20px;\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" data-dismiss=\"modal\">\r\n\r\n            </div>\r\n            </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  <!--/ Modal box-->\r\n  <div class=\"modal fade\" id=\"Sair\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n\r\n    <!-- Modal content no 1-->\r\n     <div class=\"modal-content\">\r\n       <div class=\"modal-header\">\r\n          <button #closeModalLogoutButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\r\n        <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Sair</h4>\r\n       </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"login-box-body\">\r\n          <p class=\"login-box-msg\" style=\"color: grey;margin-bottom:20px\">Você realmente deseja sair?</p>\r\n\r\n\r\n          <div class=\"row\" style=\"padding-left: 30%;\" >\r\n\r\n          <div class=\"btncolumn\" style=\"color:white;\">\r\n          <input style=\"margin-top: 0px;background-color:#cccccc\" type=\"submit\" class=\"btn   btn-flat\"  (click)=\"logout()\" value=\"Sim\" >\r\n          </div>\r\n\r\n          <div class=\"btncolumn\" style=\"color:white;\">\r\n          <input style=\"margin-top: 0px; background-color: #cccccc; margin-left:20px;\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" data-dismiss=\"modal\">\r\n\r\n          </div>\r\n          </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- Sidebar-->\r\n  <div class=\"s-layout__sidebar\">\r\n    <nav class=\"s-sidebar__nav\" style=\"margin-top: 60px;\">\r\n      <ul style=\"width: 144px;height: auto;\">\r\n        <img [src]=\"server.user.image_profile\">\r\n        <br>\r\n        <div class=\"row\" style=\"margin-left: 20px; text-align: center;\">\r\n        <em class=\"text-center\">{{server.user.name}}</em>\r\n      </div>\r\n       <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#\" data-target=\"#changeInfo\" data-toggle=\"modal\" (click)=\"clearInputs()\" >\r\n          <i class=\"fa fa-user\"></i><em>Editar Perfil</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" routerLink=\"/post\">\r\n          <i class=\"fa fa-newspaper-o\"></i><em>Publicar</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#demo\" data-toggle=\"collapse\">\r\n          <i class=\"fa fa-pencil-square-o\"></i><em>Demandas</em>\r\n          </a>\r\n        </li>\r\n        <div id=\"demo\" class=\"collapse\">\r\n          <div style=\"margin-left: 60px; margin-top: 8px; padding-top: 40px;\"><a  style=\"text-decoration: none;\" routerLink=\"/madeByme\" >Criadas</a></div>\r\n            <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\"routerLink=\"/liked\" >Curtidas/<br>Comentadas</a></div>\r\n             </div>\r\n\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <!--/ Sidebar-->\r\n   <!--Cabeçalho-->\r\n   <div class=\"s-layout__content\">\r\n      <div class=\"mar\">\r\n        <div class=\"card\" >\r\n          <div class=\"card-header textcenter\">\r\n            <h2 style=\"color:#0066cc; padding-top: 5px;\">Demandas Curtidas/Comentadas</h2>\r\n          </div>\r\n        </div>\r\n    <!--/Cabeçalho-->\r\n      <!--Card-->\r\n  <div class=\"card pointer\"  *ngFor=\"let post of posts;\">\r\n      <div class=\"row\" >\r\n        <div class=\"col-md-4 firstcol column\"(click)=\"post.collapsed=!post.collapsed\">\r\n          <img [src]=\"post?.image_demand\" class=\"rounded\" style=\"width: 70px; height:70px;\"  vspace=\"5\">\r\n        </div>\r\n        <div class=\"col-md-4 secndcol column\">\r\n          <div class=\"row\" (click)=\"post.collapsed=!post.collapsed\" >\r\n           <a style=\"font-size:16px; text-decoration: none; color:#0066cc;\">{{post?.title}}</a>\r\n          </div>\r\n          <div class=\"row\"(click)=\"post.collapsed=!post.collapsed\">\r\n            <a class=\"text-muted\" style=\"font-size:13px; text-decoration: none;\"> {{post?.created_date}}</a>&nbsp;\r\n            <br>\r\n            <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"!post.local==''\">\r\n            {{post?.local}}</i>\r\n            <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"post.local==''\">\r\n            {{post?.environment}} no {{post?.campus}}</i>\r\n          </div>\r\n\r\n\r\n          <div class=\"row\">\r\n            <ul class=\"list-inline\">\r\n\r\n              <div class=\"pull-left notLiked\">\r\n                  <a (click)=\"like(post)\" class=\"pointer responsivo\" style=\"text-decoration: none;\" [ngClass]=\"{'liked': post.gave_like == 'true', 'notLiked': post.gave_like == 'false'}\"><i class=\"fa fa-thumbs-up\" style=\"font-size: 15px;\"></i>\r\n                  {{post?.total_likes}}</a>\r\n                </div>\r\n\r\n                  <div class=\"textl icon\" (click)=\"post.collapsed=!post.collapsed\">\r\n                    <a class=\"pointer icon responsivo2\" style=\"text-decoration: none;\" (click)=\"post.showcomments=!post.showcomments;\"><i class=\"fa fa-comments\" ></i>\r\n                    {{post?.comments?.length}} comentários\r\n                    </a>\r\n                  </div>\r\n\r\n                  <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Aberta'\" (click)=\"post.collapsed=!post.collapsed\">\r\n                    <a class=\"icon pointer\" title=\"Demanda Aberta\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\" style=\"font-size:15px; margin-left:0px;\" >&nbsp; Aberta</i></a>\r\n                  </div>\r\n\r\n                  <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Reclassificada'\"(click)=\"post.collapsed=!post.collapsed\">\r\n                    <a class=\"icon pointer\" title=\"Demanda Reclassificada\"><i class=\"fa fa-refresh\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Reclassificada</i></a>\r\n                  </div>\r\n\r\n                  <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Resolvida'\" (click)=\"post.collapsed=!post.collapsed\">\r\n                    <a class=\"icon pointer\" title=\"Demanda Resolvida\"><i class=\"fa fa-check-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Resolvida</i></a>\r\n                  </div>\r\n\r\n                  <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Solução Inviável'\" (click)=\"post.collapsed=!post.collapsed\">\r\n                    <a class=\"icon pointer\" title=\"Não foi possível resolver\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Solução Inviável</i></a>\r\n                  </div>\r\n\r\n                  <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Em Análise'\" (click)=\"post.collapsed=!post.collapsed\">\r\n                    <a class=\"icon pointer\" title=\"A demanda está sendo analisada\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Em Análise</i></a>\r\n                  </div>\r\n\r\n\r\n\r\n            </ul>\r\n          </div>\r\n          </div>\r\n      </div>\r\n    <!--Expanded card1-->\r\n    <div class=\"card\" style=\"padding-bottom:15px;\" *ngIf=\"post.collapsed\">\r\n      <div class=\"linha\"></div>\r\n      <div class=\"pull-right icon\">\r\n        <a data-toggle=\"modal\" data-target=\"#modalLabel\" (click)=\"reportId(post)\" class=\"icon\" >\r\n          <i class=\"fa fa-ellipsis-v pointer\" style=\"font-size:20px; padding: 15px;padding-top: 5px;\"></i>\r\n        </a>\r\n      </div>\r\n      <div class=\"card-header textleft\">\r\n        <div class=\"col-xs-2 card-header2\" style=\"width:auto; padding:1; height: 100%;\">\r\n          <img [src]=\"post?.image_profile\" style=\"object-fit:cover; border-radius: 50%; margin-top: 10px;\">\r\n        </div>\r\n        <div class=\"container\" style=\"width:237.33;\">\r\n\r\n          <a style=\"text-decoration:none;textleft\">  {{post?.name}}</a>\r\n          publicou\r\n          <b>{{post?.title}}</b><br>\r\n          <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"!post.local==''\">\r\n            {{post?.local}}</i>\r\n            <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"post.local==''\">\r\n            {{post?.environment}} no {{post?.campus}}</i>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Aberta'\">\r\n          <a class=\"icon pointer\" title=\"Demanda Aberta\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\" style=\"font-size:15px; margin-left:0px;\">&nbsp; Aberta</i></a>\r\n        </div>\r\n\r\n        <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Reclassificada'\">\r\n          <a class=\"icon pointer\" title=\"Demanda Reclassificada\"><i class=\"fa fa-refresh\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Reclassificada</i></a>\r\n        </div>\r\n\r\n        <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Resolvida'\">\r\n          <a class=\"icon pointer\" title=\"Demanda Resolvida\"><i class=\"fa fa-check-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Resolvida</i></a>\r\n        </div>\r\n\r\n        <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Solução Inviável'\">\r\n          <a class=\"icon pointer\" title=\"Não foi possível resolver\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Solução Inviável</i></a>\r\n        </div>\r\n\r\n        <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Em Análise'\">\r\n          <a class=\"icon pointer\" title=\"A demanda está sendo analisada\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Em Análise</i></a>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n      <div class=\"card-body\" style=\"background-color:#fff; text-align: justify;\">\r\n        <img [src]=\"post?.image_demand\" style=\"width:90%; margin-left: 25px;\">\r\n        <div style=\"background:none;\" >\r\n        <p  style=\"text-align:left; margin-left: 50px; margin-top: 5px; overflow-wrap: break-word;width:460px; \">\r\n        {{post?.description}}<br>\r\n        </p>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n        <div class=\"linha\"></div>\r\n        <ul class=\"list-inline\">\r\n          <div class=\"pull-left notLiked\">\r\n              <a (click)=\"like(post)\" class=\"pointer\" style=\"text-decoration: none;\" [ngClass]=\"{'liked': post.gave_like == 'true', 'notLiked': post.gave_like == 'false'}\"><i class=\"fa fa-thumbs-up\" style=\"  margin-left: 20px;\r\n              font-size: 15px;\"></i>\r\n              {{post?.total_likes}}</a>\r\n            </div>\r\n            <div class=\"textl pull-right icon\">\r\n              <a class=\"pointer icon \" style=\"text-decoration: none; margin-right: 20px;\" (click)=\"post.showcomments=!post.showcomments;\"><i class=\"fa fa-comments\" ></i>\r\n              {{post?.comments?.length}} comentários\r\n              </a>\r\n            </div>\r\n\r\n        </ul>\r\n          </div>\r\n        </div>\r\n            <div class=\"linha2\"></div>\r\n      </div>\r\n      <div class=\"card-footer rolavel\" style=\"height:auto;max-height:300px; background:none;\" *ngIf=\"post.showcomments\">\r\n        <div class=\"card-header textleft\" *ngFor=\"let comment of post.answers;\">\r\n          <div class=\"col-xs-2\">\r\n            <img [src]=\"comment?.image_profile\" style=\"object-fit:cover;border-radius: 50%; margin-top: 10px;\">\r\n          </div>\r\n          <p class=\"borda\"  style=\" background: #0066cc; color:white;\">\r\n            <a class=\"pointer\" style=\"text-decoration: none;\"></a>{{comment?.name}}\r\n    \r\n            <br>\r\n            {{comment?.comment}}\r\n          </p>\r\n      </div>\r\n            <div class=\"card-header textleft\" *ngFor=\"let comment of post.comments\" style=\"padding: 0px;\">\r\n              <div class=\"col-xs-2\" style=\"width:auto;\">\r\n                <img [src]=\"comment.image_profile\" style=\"object-fit:cover;border-radius: 50%; margin-top: 10px;\">\r\n              </div>\r\n              <p class=\"borda\" style=\"word-break: break-all;width:500px;\">\r\n                <a class=\"pointer\" style=\"text-decoration: none;\">{{comment.name}}</a>\r\n    \r\n                <a class=\"pointer fa fa-trash pull-right\" style=\"padding:0; text-decoration: none;\" (click)=\"delComment(comment,post)\" *ngIf=\"comment.owner_comment == 'true'\"></a>\r\n                <br>\r\n                {{comment.comment}}\r\n              </p>\r\n          </div>\r\n          </div>\r\n    <div class=\"textleft inputWithIcon icon\" >\r\n        <textarea rows=\"1\" type=\"text\" class=\"form-control\" placeholder=\"Escreva seu comentário...\" style=\"border-radius: 10px;  resize: none;\" [(ngModel)]=\"comment\">  </textarea>\r\n      <a (click)=\"newComment(post, comment)\" class=\"pointer icon\" style=\"text-decoration: none;\"><i class=\"fa fa-mail-forward\"></i></a>\r\n    </div>\r\n  </div>\r\n  <!--/Card-->\r\n\r\n\r\n      <!--Card-->\r\n      <div class=\"card pointer\"  *ngFor=\"let sugestions of demands;\">\r\n          <div class=\"row\" *ngIf=\"!sugestions.gave_like\">\r\n            <div class=\"col-md-4 firstcol column\" (click)=\"sugestions.collapsed=!sugestions.collapsed\">\r\n              <img [src]=\"sugestions?.image_demand\" class=\"rounded\" style=\"width: 70px; height:70px;\"  vspace=\"5\">\r\n            </div>\r\n            <div class=\"col-md-4 secndcol column\">\r\n              <div class=\"row \" (click)=\"sugestions.collapsed=!sugestions.collapsed\">\r\n               <a style=\"font-size:16px; text-decoration: none; color:#0066cc;\"  >{{sugestions?.title}}</a>\r\n              </div>\r\n              <div class=\"row\" (click)=\"sugestions.collapsed=!sugestions.collapsed\">\r\n                <a class=\"text-muted\" style=\"font-size:13px; text-decoration:none;\"> {{sugestions?.created_date}}</a>&nbsp;\r\n                <br>\r\n                <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"!post.local==''\">\r\n                  {{post?.local}}</i>\r\n                  <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"post.local==''\">\r\n                  {{post?.environment}} no {{post?.campus}}</i>\r\n\r\n              </div>\r\n              <div class=\"row\">\r\n                <ul class=\"list-inline\">\r\n\r\n                  <div class=\"pull-left notLiked\">\r\n                      <a (click)=\"like(sugestions)\" class=\"pointer responsivo\" style=\"text-decoration: none;\" [ngClass]=\"{'liked': sugestions.gave_like == 'true', 'notLiked': sugestions.gave_like == 'false'}\"><i class=\"fa fa-thumbs-up\" style=\"font-size: 15px;\"></i>\r\n                      {{sugestions?.total_likes}}</a>\r\n                    </div>\r\n\r\n                      <div class=\"textl icon\" (click)=\"sugestions.collapsed=!sugestions.collapsed\">\r\n                        <a class=\"pointer icon responsivo2\" style=\"text-decoration: none;\"><i class=\"fa fa-comments\"></i>\r\n                        {{sugestions?.comments?.length}} comentários\r\n                        </a>\r\n                      </div>\r\n\r\n                      <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"sugestions.status=='Aberta'\" (click)=\"sugestions.collapsed=!sugestions.collapsed\">\r\n                        <a class=\"icon pointer\" title=\"Demanda Aberta\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\" style=\"font-size:15px; margin-left:0px;\">&nbsp; Aberta</i></a>\r\n                      </div>\r\n\r\n                      <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"sugestions.status=='Reclassificada'\" (click)=\"sugestions.collapsed=!sugestions.collapsed\">\r\n                        <a class=\"icon pointer\" title=\"Demanda Reclassificada\"><i class=\"fa fa-refresh\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Reclassificada</i></a>\r\n                      </div>\r\n\r\n                      <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"sugestions.status=='Resolvida'\" (click)=\"sugestions.collapsed=!sugestions.collapsed\">\r\n                        <a class=\"icon pointer\" title=\"Demanda Resolvida\"><i class=\"fa fa-check-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Resolvida</i></a>\r\n                      </div>\r\n\r\n                      <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"sugestions.status=='Solução Inviável'\" (click)=\"sugestions.collapsed=!sugestions.collapsed\">\r\n                        <a class=\"icon pointer\" title=\"Não foi possível resolver\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Solução Inviável</i></a>\r\n                      </div>\r\n\r\n                      <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"sugestions.status=='Em Análise'\" (click)=\"sugestions.collapsed=!sugestions.collapsed\">\r\n                        <a class=\"icon pointer\" title=\"A demanda está sendo analisada\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Em Análise</i></a>\r\n                      </div>\r\n\r\n\r\n\r\n\r\n                </ul>\r\n              </div>\r\n              </div>\r\n          </div>\r\n        <!--Expanded card1-->\r\n        <div class=\"card\" style=\"padding-bottom:15px;\" *ngIf=\"sugestions.collapsed\">\r\n          <div class=\"linha\"></div>\r\n          <div class=\"pull-right icon\">\r\n            <a data-toggle=\"modal\" data-target=\"#modalLabel\" (click)=\"reportId(post)\" class=\"icon\" >\r\n              <i class=\"fa fa-ellipsis-v pointer\" style=\"font-size:20px; padding: 15px;padding-top: 5px;\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"card-header textleft\">\r\n            <div class=\"col-xs-2 card-header2\" style=\"width:auto; padding:1; height: 100%;\">\r\n              <img [src]=\"sugestions?.image_profile\" style=\"object-fit:cover; border-radius: 50%; margin-top: 10px;\">\r\n            </div>\r\n            <div class=\"container\" style=\"width:237.33;\">\r\n\r\n              <a style=\"text-decoration:none;textleft\">  {{post?.name}}</a>\r\n              publicou\r\n              <b>{{post?.title}}</b><br>\r\n              <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"!post.local==''\">\r\n                {{post?.local}}</i>\r\n                <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"post.local==''\">\r\n                {{post?.environment}} no {{post?.campus}}</i>\r\n\r\n            </div>\r\n\r\n            <div class=\"icon\" style=\"text-align:center\" *ngIf=\"sugestions.status=='Aberta'\">\r\n              <a class=\"icon pointer\" title=\"Demanda Aberta\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\" style=\"font-size:15px; margin-left:0px;\">&nbsp; Aberta</i></a>\r\n            </div>\r\n\r\n            <div class=\"icon\" style=\"text-align:center\" *ngIf=\"sugestions.status=='Reclassificada'\">\r\n              <a class=\"icon pointer\" title=\"Demanda Reclassificada\"><i class=\"fa fa-refresh\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Reclassificada</i></a>\r\n            </div>\r\n\r\n            <div class=\"icon\" style=\"text-align:center\" *ngIf=\"sugestions.status=='Resolvida'\">\r\n              <a class=\"icon pointer\" title=\"Demanda Resolvida\"><i class=\"fa fa-check-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Resolvida</i></a>\r\n            </div>\r\n\r\n            <div class=\"icon\" style=\"text-align:center\" *ngIf=\"sugestions.status=='Solução Inviável'\">\r\n              <a class=\"icon pointer\" title=\"Não foi possível resolver\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Solução Inviável</i></a>\r\n            </div>\r\n\r\n            <div class=\"icon\" style=\"text-align:center\" *ngIf=\"sugestions.status=='Em Análise'\">\r\n              <a class=\"icon pointer\" title=\"A demanda está sendo analisada\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Em Análise</i></a>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n          </div>\r\n          <div class=\"card-body\" style=\"background-color:#fff; text-align: justify;\">\r\n            <img [src]=\"sugestions?.image_demand\" style=\"width:90%; margin-left: 25px;\">\r\n            <div style=\"background:none;\" >\r\n            <p  style=\"text-align:left; margin-left: 50px; margin-top: 5px; overflow-wrap: break-word;width:460px; \">\r\n            {{sugestions?.description}}<br>\r\n            </p>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n            <div class=\"linha\"></div>\r\n            <ul class=\"list-inline\">\r\n              <div class=\"pull-left notLiked\">\r\n                  <a (click)=\"like(sugestions)\" class=\"pointer\" style=\"text-decoration: none;\" [ngClass]=\"{'liked': sugestions.gave_like == 'true', 'notLiked': sugestions.gave_like == 'false'}\"><i class=\"fa fa-thumbs-up\" style=\"  margin-left: 20px;\r\n                  font-size: 15px;\"></i>\r\n                  {{sugestions?.total_likes}}</a>\r\n                </div>\r\n                <div class=\"textl pull-right icon\">\r\n                  <a class=\"pointer icon \" style=\"text-decoration: none; margin-right: 20px;\" (click)=\"sugestions.showcomments=!sugestions.showcomments;\"><i class=\"fa fa-comments\" ></i>\r\n                  {{sugestions?.comments?.length}} comentários\r\n                  </a>\r\n                </div>\r\n\r\n            </ul>\r\n\r\n              </div>\r\n            </div>\r\n                <div class=\"linha2\"></div>\r\n          </div>\r\n          <div class=\"card-footer rolavel\" style=\"height:auto;max-height:300px; background:none;\" *ngIf=\"sugestions.showcomments\">\r\n            <div class=\"card-header textleft\" *ngFor=\"let comment of post.answers;\">\r\n              <div class=\"col-xs-2\">\r\n                <img [src]=\"comment?.image_profile\" style=\"object-fit:cover;border-radius: 50%; margin-top: 10px;\">\r\n              </div>\r\n              <p class=\"borda\"  style=\" background: #0066cc; color:white;\">\r\n                <a class=\"pointer\" style=\"text-decoration: none;\"></a>{{comment?.name}}\r\n        \r\n                <br>\r\n                {{comment?.comment}}\r\n              </p>\r\n          </div>\r\n                <div class=\"card-header textleft\" *ngFor=\"let comment of post.comments\" style=\"padding: 0px;\">\r\n                  <div class=\"col-xs-2\" style=\"width:auto;\">\r\n                    <img [src]=\"comment.image_profile\" style=\"object-fit:cover;border-radius: 50%; margin-top: 10px;\">\r\n                  </div>\r\n                  <p class=\"borda\" style=\"word-break: break-all;width:500px;\">\r\n                    <a class=\"pointer\" style=\"text-decoration: none;\">{{comment.name}}</a>\r\n        \r\n                    <a class=\"pointer fa fa-trash pull-right\" style=\"padding:0; text-decoration: none;\" (click)=\"delComment(comment,post)\" *ngIf=\"comment.owner_comment == 'true'\"></a>\r\n                    <br>\r\n                    {{comment.comment}}\r\n                  </p>\r\n              </div>\r\n              </div>\r\n        <div class=\"textleft inputWithIcon icon\" >\r\n              <textarea rows=\"1\" type=\"text\" class=\"form-control\" placeholder=\"Escreva seu comentário...\" style=\"border-radius: 10px;  resize: none;\" [(ngModel)]=\"comment\">  </textarea>\r\n          <a (click)=\"newComment(sugestions, comment)\" class=\"pointer icon\" style=\"text-decoration: none;\"><i class=\"fa fa-mail-forward\"></i></a>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      <!--/Card-->\r\n<script src=\"liked.ts\"></script>\r\n"

/***/ }),

/***/ "./src/app/liked/liked.ts":
/*!********************************!*\
  !*** ./src/app/liked/liked.ts ***!
  \********************************/
/*! exports provided: LikedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikedComponent", function() { return LikedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/server */ "./src/providers/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Added

var LikedComponent = /** @class */ (function () {
    function LikedComponent(_router, server) {
        this._router = _router;
        this.server = server;
        this.posts = [];
        this.demands = [];
        this.user = [];
        this.isEqual = true;
    }
    LikedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.getSelectedDemands().then(function (response) {
            response = response.json();
            for (var i = 0; i < response['dados'].likes.length; i++) {
                response['dados'].likes[i].collapsed = false;
                _this.posts.push(response['dados'].likes[i]);
            }
            for (var i = 0; i < response['dados'].comentarios.length; i++) {
                response['dados'].comentarios[i].collapsed = false;
                _this.demands.push(response['dados'].comentarios[i]);
            }
        });
    };
    LikedComponent.prototype.like = function (post) {
        //Remove like
        post.total_likes = Number(post.total_likes);
        if (post.gave_like == "true") {
            this.server.unlikeDemand(post.demand_id).then(function (response) {
                post.total_likes -= 1;
                post.gave_like = "false";
            });
        }
        //Add like
        else {
            this.server.likeDemand(post.demand_id).then(function (response) {
                post.total_likes += 1;
                post.gave_like = "true";
            });
        }
    };
    LikedComponent.prototype.newComment = function (post, comment) {
        var _this = this;
        //Add comment
        this.server.commentDemand(post.demand_id, comment).then(function (response) {
            response = response.json();
            post.comments.push({ comment_id: response['dados'].comment_id, name: _this.server.user.name, image_profile: _this.server.user.image_profile, comment: comment, owner_comment: "true" });
        }).catch(function (error) {
        });
        this.comment = "";
    };
    LikedComponent.prototype.delComment = function (post, demand) {
        //Delete comment
        this.server.deleteComment(post.comment_id).then(function (response) {
            response = response.json();
            for (var i = demand.comments.length - 1; i >= 0; --i) {
                if (demand.comments[i].comment_id == post.comment_id) {
                    demand.comments.splice(i, 1);
                }
            }
        }).catch(function (error) {
        });
    };
    LikedComponent.prototype.report = function () {
        var _this = this;
        this.server.reportDemand(this.id).then(function (response) {
            _this.closeModalDangerButton.nativeElement.click();
            bootbox.alert({
                size: "small",
                title: "Atenção!",
                message: "A demanda foi denunciada. Você não conseguirá mais visualizá-la.",
                backdrop: true,
            });
            for (var i = _this.posts.length - 1; i >= 0; --i) {
                if (_this.posts[i].demand_id == _this.id) {
                    _this.posts.splice(i, 1);
                }
                else if (_this.demands[i].demand_id == _this.id) {
                    _this.demands.splice(i, 1);
                }
            }
        });
    };
    LikedComponent.prototype.reportId = function (post) {
        this.id = post.demand_id;
    };
    LikedComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    LikedComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.user.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    LikedComponent.prototype.updateInfo = function (user) {
        var _this = this;
        if (typeof user.email == 'undefined' || user.email == '') {
            this.user.email = this.server.user.email;
        }
        else {
            this.user.email = user.email;
        }
        this.server.updateInfo(this.user).then(function (response) {
            _this.closeModalChangeButton.nativeElement.click();
        }).catch(function (error) {
            var body = JSON.parse(error['_body']);
            if (body.hasOwnProperty('erro')) {
                switch (body.erro.update) {
                    case 6: {
                        bootbox.alert({
                            size: "small",
                            title: "Ops, algo aconteceu..",
                            message: "Email inválido.",
                            backdrop: true,
                        });
                        break;
                    }
                    default: {
                        bootbox.alert({
                            size: "small",
                            title: "Ops, algo aconteceu..",
                            message: "Erro.",
                            backdrop: true,
                        });
                    }
                }
            }
        });
        if (typeof this.user.image == 'undefined' || this.user.image == '') {
            this.server.user.image_profile = this.server.user.image_profile;
        }
        else {
            this.server.user.image_profile = this.user.image;
        }
    };
    LikedComponent.prototype.verifyPsw = function (user) {
        if (user.password != user.passwordconfirm || typeof user.password == 'undefined') {
            this.isEqual = false;
        }
        else {
            this.isEqual = true;
        }
    };
    LikedComponent.prototype.updatePsw = function (user) {
        var _this = this;
        if (typeof user.password == 'undefined' || typeof user.passwordconfirm == 'undefined') {
            bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "As senhas devem ser iguais e conter no mínimo 6 digitos.",
            });
        }
        else {
            this.server.updatePsw(user.password).then(function (response) {
                bootbox.alert({
                    size: "small",
                    title: "Atenção!",
                    message: "Senha alterada com sucesso.",
                });
                _this.closeModalChangeButton.nativeElement.click();
            }).catch(function (error) {
                var body = JSON.parse(error['_body']);
                if (body.hasOwnProperty('erro')) {
                    switch (body.erro.password) {
                        case 3: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Senha deve conter no mínimo 6 dígitos.",
                                backdrop: true,
                            });
                            break;
                        }
                        default: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Senha deve conter no mínimo 6 dígitos.",
                                backdrop: true,
                            });
                            break;
                        }
                    }
                }
            });
        }
    };
    LikedComponent.prototype.delete = function () {
        var _this = this;
        this.server.deleteAccount().then(function (response) {
            _this.closeModalChangeButton.nativeElement.click();
            bootbox.alert({
                size: "small",
                title: "Atenção",
                message: "Conta deletada com sucesso.",
                backdrop: true,
            });
            _this.logout();
        });
    };
    LikedComponent.prototype.clearInputs = function () {
        this.user = {};
        this.isEqual = true;
    };
    LikedComponent.prototype.logout = function () {
        this.server.token = null;
        this._router.navigate(['/home']);
        this.closeModalLogoutButton.nativeElement.click();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalDangerButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LikedComponent.prototype, "closeModalDangerButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalChangeButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LikedComponent.prototype, "closeModalChangeButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalLogoutButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LikedComponent.prototype, "closeModalLogoutButton", void 0);
    LikedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-liked',
            template: __webpack_require__(/*! ./liked.html */ "./src/app/liked/liked.html"),
            styles: [__webpack_require__(/*! ./liked.css */ "./src/app/liked/liked.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers_server__WEBPACK_IMPORTED_MODULE_2__["ServerProvider"]])
    ], LikedComponent);
    return LikedComponent;
}());



/***/ }),

/***/ "./src/app/madeByme/madeByme.css":
/*!***************************************!*\
  !*** ./src/app/madeByme/madeByme.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {text-decoration: none;}\r\n\r\n.pointer {cursor: pointer;}\r\n\r\n/*CSS PERFIL*/\r\n\r\n.principal {background-color:  rgb(242, 244, 247);}\r\n\r\n.liked{\r\n  color: #0066cc;\r\n}\r\n\r\n.responsivo{\r\n   margin-left: 5px;\r\n}\r\n\r\n.responsivo2{\r\n   margin-left: 20px;\r\n}\r\n\r\n.notLiked{\r\n  color:gray;\r\n}\r\n\r\n.icon{\r\n  color: gray;\r\n}\r\n\r\n.icon a:hover,\r\n.notLiked a:hover{color: #0066cc;}\r\n\r\n/* Create two equal columns that floats next to each other */\r\n\r\n.firstcol{\r\n    text-align: right;\r\n    width: 20%;\r\n\r\n}\r\n\r\n.secndcol{\r\n    text-align: left;\r\n    width: 70%;\r\n\r\n}\r\n\r\n.thirdcol{\r\n  text-align: left;\r\n  width: 10%;\r\n}\r\n\r\n.inputWithIcon textarea[type=\"text\"] {\r\n  padding-left: 40px;\r\n}\r\n\r\n.inputWithIcon {\r\n  position: relative;\r\n}\r\n\r\n.inputWithIcon i {\r\n  text-align: right;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0px;\r\n  padding: 9px 8px;\r\n  transition: 0.3s;\r\n  border-radius: 50px;\r\n}\r\n\r\n.inputWithIcon textarea[type=\"text\"]:focus + i {\r\n  color: dodgerBlue;\r\n}\r\n\r\ndiv.center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 65%;\r\n  }\r\n\r\n.btncolumn {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n\r\n.btncolumn1 {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n\r\n.btncolumn2 {\r\n  float: left;\r\n  width: 80%;\r\n  padding: 10px;\r\n  text-align: left;\r\n  }\r\n\r\n@media screen and (max-width: 991px) {\r\n\r\n    .column {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 10px;\r\n\r\n    }\r\n    .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .firstcol{\r\n      text-align: center;\r\n\r\n  }\r\n  .secndcol{\r\n    text-align: center;\r\n  }\r\n  .thirdcol{\r\n    text-align: center;\r\n  }\r\n\r\n  .responsivo{\r\n     margin-left: 101px;\r\n  }\r\n\r\n  .responsivo2{\r\n     margin-left: 30px;\r\n  }\r\n\r\n\r\n  }\r\n\r\n@media screen and (max-width: 1024px) {\r\n    div.center {\r\n      margin-left: -13px;\r\n      margin-top: -60px;\r\n      width: 30%;\r\n\r\n    }\r\n  }\r\n\r\nbody {\r\n\t\tfont-size: 15px;\r\n    line-height: 1.52;\r\n    color: #717f86;\r\n    font-size: 16px;\r\n\t  font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n\t\tbackground-color: pink;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n\r\n/*cor da barra de navegação*/\r\n\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n}\r\n\r\n/*caracteristicas do conteudo da barra*/\r\n\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    padding: 0px;\r\n  \tmargin: 10px 5px;\r\n  \tpadding: 10px 15px;\r\n}\r\n\r\n/*Quando passa o mouse*/\r\n\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n\r\n/*Quando clica*/\r\n\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n\r\n/***********************************\r\nBanner\r\n************************************/\r\n\r\n.text-dec{\r\n\tfont-size: 26px;\r\n\tpadding: 10px 20px;\r\n  margin: 2px 0;\r\n\ttext-transform: uppercase;\r\n  color: #fff;\r\n\r\n}\r\n\r\n.text-border{\r\n\tborder: 5px solid #0066cc;\r\n\tdisplay: inline-block;\r\n\tmargin-top: 90px;\r\n}\r\n\r\n.intro-para{\r\n\tfont-family: 'Alegreya Sans', sans-serif;\r\n\tfont-size: 45px;\r\n\tcolor: #fff;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n}\r\n\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n\r\n@media (max-width: 568px) {\r\n.modal-sm{\r\n        width: 320px;\r\n        transition: all 0.3s;\r\n        padding-left: 0px;\r\n    }\r\n  }\r\n\r\n.btn-green, .btn-green:hover{\r\n    background-color:rgb(101, 191, 91);\r\n    color: #fff;\r\n}\r\n\r\n/******************\r\nSidebar\r\n******************/\r\n\r\n/* Primary Styles */\r\n\r\n*, *::before, *::after {\r\n   box-sizing: border-box;\r\n}\r\n\r\nem {\r\n   font-style: normal;\r\n\r\n}\r\n\r\n/* Layout */\r\n\r\n.s-layout {\r\n   display: flex;\r\n   width: 100%;\r\n   min-height: 100vh;\r\n}\r\n\r\n.s-layout__content {\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   flex: 1;\r\n}\r\n\r\n/* Sidebar */\r\n\r\n.s-sidebar__nav {\r\n  position: fixed;\r\n  top: 0;\r\n  overflow: hidden;\r\n  transition: all .3s ease-in;\r\n  height: 100%;\r\n  z-index: 1;\r\n  background:linear-gradient(#0066cc 30%, rgb(101,191,91));;\r\n\r\n}\r\n\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__nav:focus,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav {\r\nleft: 0;\r\n}\r\n\r\n.s-sidebar__nav ul {\r\n  position: absolute;\r\n  left: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 15em;\r\n  top: 4em;\r\n  }\r\n\r\n.s-sidebar__nav ul li {\r\n  width: 100%;\r\n  margin: 10px;\r\n\r\n  }\r\n\r\n.s-sidebar__nav-link {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  color:white;\r\n  margin: 0;\r\n  }\r\n\r\n.s-sidebar__nav-link em {\r\n    position: absolute;\r\n    left: 3.5em;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    }\r\n\r\n.s-sidebar__nav-link > i , .s-sidebar__nav-link a{\r\n    position: absolute;\r\n    top: 0;\r\n    width: 4em;\r\n    }\r\n\r\n.s-sidebar__nav-link > i::before {\r\n    position: absolute;\r\n    top: 90%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    }\r\n\r\n/* Mobile First */\r\n\r\n@media (min-width: 10em) {\r\n   .s-layout__content {\r\n      margin-left: 4em;\r\n   }\r\n\r\n\r\n   /* Sidebar */\r\n\r\n   .s-sidebar__nav {\r\n      width: 4em;\r\n      left: 0;\r\n   }\r\n\r\n   .s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover ,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n   width: 11em;\r\n   color: white;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\n top: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a {\r\n color: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover{\r\n color: rgb(101, 191, 91);\r\n}\r\n\r\n}\r\n\r\n@media (min-width: 68em) {\r\n   .s-layout__content {\r\n      margin-left: 15em;\r\n   }\r\n\r\n   .s-sidebar__nav {\r\n      width: 11em;\r\n   }\r\n\r\n   .s-sidebar__nav ul {\r\n      top: 1.3em;\r\n   }\r\n   .s-sidebar__nav em,\r\n   .s-sidebar__nav .collapse.in a{\r\n    color: white;\r\n    }\r\n    .s-sidebar__nav-link em:hover,\r\n    .s-sidebar__nav-link li:hover{\r\n        color: rgb(101, 191, 91);\r\n    }\r\n}\r\n\r\n/**********************\r\nFeed\r\n***********************/\r\n\r\n@media screen and (max-width: 1024px) {\r\n  div.center {\r\n    margin-left: -13px;\r\n    margin-top: -60px;\r\n    width: 30%;\r\n\r\n  }\r\n}\r\n\r\n.rounded{\r\n\r\n    border-radius: 50%;\r\n   width:70px;\r\n  height:70px;\r\n\r\n  }\r\n\r\n.rounded2{\r\n\r\n    border-radius: 50%;\r\n   width:30px;\r\n  height:30px;\r\n\r\n  }\r\n\r\n.card{\r\n    background-color:#fff;\r\n    margin-top:20px;\r\n    margin-bottom:-15px;\r\n    border-radius: 10px;\r\n     }\r\n\r\n.card .card-header{\r\n     padding-top: 0px;\r\n     padding-bottom: 0px;\r\n     }\r\n\r\n.card .card-header img{\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n.card .card-header2 img{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n\r\n.card .card-footer{\r\n    padding-top: 10px;\r\n    padding-bottom: 20px;\r\n    }\r\n\r\n.card-info{\r\n    margin-top:30px;\r\n    border-radius: 10%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n  }\r\n\r\n.linha {\r\n  margin-top: 18px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n\r\n.linha2 {\r\n  margin-bottom: 12px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n\r\n.borda{\r\n  border-width: 1px 1px 1px 1px; /* aqui, cada lado possui uma borda de largura diferente */\r\n   /* estilos de borda diferentes para cima-baixo e esquerda-direita */\r\n    border-color: #000 #090 #900 #009; /* uma cor de borda para cada lado */\r\n    padding: 5px;\r\n    background-color:rgb(242,244,247);\r\n    border-radius: 18px;\r\n}\r\n\r\n.btn-search{\r\ncolor:#28a745;\r\nfloat:right;\r\nborder-radius:50%;\r\njustify-content: center;\r\nmargin-left: 5px;\r\nalign-items: center;\r\ndisplay: flex;\r\nwidth:35px;\r\nheight: 35px;\r\n    background-color:#fff;\r\n  }\r\n\r\n.search-txt{\r\nborder-radius:10px;\r\npadding: 0;\r\ncolor:green;\r\nfont-size: 16px;\r\ntransition:0.4s;\r\nwidth:300px;\r\nline-height: 30px;\r\n}\r\n\r\n.comentarios{\r\n\r\nborder:solid 0px ;\r\nbackground-color: #fff;\r\npadding-bottom: 10px;\r\n  }\r\n\r\n.textinfo{\r\n\r\n    color:  #868e96;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n\r\n.textlike{\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n\r\n.textleft{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 20px;\r\n  }\r\n\r\n.textleft2{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n\r\n.textleft3{\r\n    text-align: left;\r\n\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n\r\n.rolavel {\r\n  height: 1000px;\r\n\r\n  overflow-y: scroll;\r\n    background-color: rgb(242,244,247);\r\n      overflow-x: hidden;\r\n\r\n\r\n\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n\r\n/*cor da barra de navegação*/\r\n\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n    width: 100%;\r\n}\r\n\r\n/*caracteristicas do conteudo da barra*/\r\n\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    margin: 10px 5px;\r\n      padding: 10px 15px;\r\n\r\n}\r\n\r\n/*Quando passa o mouse*/\r\n\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n\r\n/*Quando clica*/\r\n\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n\r\n/***********************************\r\nBanner\r\n************************************/\r\n\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n    position: relative;\r\n}\r\n\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n\r\n/***********************************\r\n Sidebar\r\n************************************/\r\n\r\n/* Primary Styles */\r\n\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nem {\r\n  font-style: normal;\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n\r\n.s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\n\r\nem:hover,\r\n.s-sidebar__nav .collapse.in a:hover {\r\n color: rgb(101, 191, 91);\r\n}\r\n\r\n/* Layout */\r\n\r\n.s-layout {\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n\r\n.s-layout__content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n\r\n/* Mobile First */\r\n\r\n@media (min-width: 10em) {\r\n  .s-layout__content {\r\n     margin-left: 6em;\r\n     align-content: center;\r\n     margin-right: 3em;\r\n    }\r\n    .mar{\r\n      margin-top:60px;\r\n      align-items: center;\r\n      text-align: center;\r\n      min-width: 260px;\r\n      max-width: 500px;\r\n\r\n      margin-right: -50px;\r\n\r\n}\r\n.list-inline{\r\n\r\n  font-size: 12px;\r\n}\r\n  /* Sidebar */\r\n\r\n  ul > img{\r\nwidth: 3em;\r\nheight:3em;\r\nborder-radius: 50%;\r\nmargin-left: 8px;\r\n}\r\n.card-info{\r\n  display: none;\r\n}\r\n.card{\r\n  max-width: 550px;\r\n  height: auto;\r\n  min-width: 260px;\r\n}\r\n.card-header, .card-body{\r\n  font-size: 10px;\r\n}\r\n.s-sidebar__nav {\r\n  width: 4em;\r\n  left: 0;\r\n}\r\n\r\n.s-sidebar__nav ul{\r\ntop: 1.3em;\r\n}\r\n.s-sidebar__nav-link{\r\n  top: 2.3em;\r\n  }\r\n.s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n  width: 11em;\r\n  color: white;\r\n\r\n}\r\n.s-sidebar__nav:hover .collapse.in a,\r\n.s-sidebar__nav:focus .collapse.in a{\r\n  color: white;\r\n}\r\n.s-sidebar__nav:hover img,\r\n.s-sidebar__nav:focus img {\r\nwidth: 9em;\r\nheight: 9em;\r\nmargin-left: 15px;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\ntop: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a{\r\ncolor: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover,\r\n.s-sidebar__nav .collapse.in a:hover{\r\ncolor: rgb(101, 191, 91);\r\n}\r\n}\r\n\r\n@media (min-width: 58em) {\r\n  .s-layout__content {\r\n     margin-left: 15em;\r\n     margin-right: 15em;\r\n\r\n  }\r\n  .mar{\r\n    min-width: 500px;\r\n\r\n}\r\n  .card{\r\n    width: 550px;\r\n    height: auto;\r\n  }\r\n  .card-header, .card-body{\r\n    font-size: 16px;\r\n  }\r\n  .s-sidebar__nav {\r\n    width: 11em;\r\n }\r\n .list-inline{\r\n\r\n   font-size: 14px;\r\n }\r\n .s-sidebar__nav ul {\r\n    top: 1.3em;\r\n }\r\n .s-sidebar__nav em,\r\n .s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  }\r\n  .s-sidebar__nav-link em:hover,\r\n  .s-sidebar__nav-link li:hover,\r\n  .s-sidebar__nav .collapse.in a:hover\r\n  {\r\n      color: rgb(101, 191, 91);\r\n  }\r\n    ul > img{\r\n       width: 9em;\r\n       height:9em;\r\n       border-radius: 50%;\r\n       margin-left: 15px;\r\n       }\r\n}\r\n"

/***/ }),

/***/ "./src/app/madeByme/madeByme.html":
/*!****************************************!*\
  !*** ./src/app/madeByme/madeByme.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\r\n  <!--Navigation bar-->\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a routerLink=\"/feed\" style=\"margin-left: 10px\"><img src=\"./assets/img/logo.png\" width=\"60\" height=\"60\" alt=\"\" ></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 10px\">\r\n        <li><a routerLink=\"/feed\">Feed</a></li>\r\n        <li><a routerLink=\"/ranking\">Ranking</a></li>\r\n      <li><a data-target=\"#Sair\" data-toggle=\"modal\"  class=\"pointer\">Logout</a></li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--/Navigation bar-->\r\n  <!--modal editar perfil-->\r\n  <div class=\"modal fade\" id=\"changeInfo\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button #closeModalChangeButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Editar Perfil</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"login-box-body\">\r\n            <div>\r\n              <img [src]=\"server.user.image_profile\" class=\"rounded\" style=\"width: 80px; height:80px; margin-left: 38%;\">\r\n            </div>\r\n            <p class=\"login-box-msg\" style=\"color: grey;\">Insira uma foto</p>\r\n            <form action=\"#\" method=\"post\" name=\"changeInfo\" style=\"width: 350px; margin-left:-20px;\" >\r\n            <input class=\"form-control\" type=\"file\" name=\"image\" accept=\"image/*\" (change)=\"changeListener($event)\" [(ngModel)]=\"user.image\"/>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n             <!----- username -------------->\r\n             <label for=\"nome\" style=\"font-size: 1.3rem\">Nome completo:</label><br>\r\n             <p style=\"font-size: 1.3rem\">{{server.user.name}}</p>\r\n           </div>\r\n           <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- matricula -------------->\r\n             <label for=\"matricula\" style=\"font-size: 1.3rem\">Matrícula:</label>\r\n             <p style=\"font-size: 1.3rem\">{{server.user.registry}}</p>\r\n           </div>\r\n           <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n            <label for=\"rg\" style=\"font-size: 1.3rem;\">Número RG:</label><br>\r\n            <p style=\"font-size: 1.3rem\">{{server.user.identity}}</p>\r\n           </div>\r\n\r\n\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n           <label for=\"campoData\" style=\"font-size: 1.3rem\">Data de nascimento:</label>\r\n           <p style=\"font-size: 1.3rem\">{{server.user.date_birth}}</p>\r\n         </div>\r\n\r\n           <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n             <label for=\"email\" style=\"font-size: 1.3rem\">E-mail</label>\r\n             <input class=\"form-control\" placeholder=\"Novo email\" id=\"email\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"user.email\" value=\"server.user.email\" />\r\n             <span style=\"display:none; font-weight:bold; position:absolute;color: red;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginid\"></span>\r\n\r\n           </div>\r\n           <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- password -------------->\r\n            <label style=\"font-size: 1.3rem\">Senha</label>\r\n                <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required=\"\" [(ngModel)]=\"user.password\" #password1=\"ngModel\">\r\n               </div>\r\n              <div class=\"form-group\">                    <!----- password -------------->\r\n                <label style=\"font-size: 1.3rem\">Confirme a senha</label>\r\n                <input class=\"form-control\" placeholder=\"Repita senha\" type=\"password\" name=\"passwordconfirm\" required=\"\" [(ngModel)]=\"user.passwordconfirm\" #password2=\"ngModel\" (keyup)=\"verifyPsw(user)\">\r\n                <span style=\"color: red; font-size: 11px;\" *ngIf=\"!isEqual\">\r\n                As senhas devem ser iguais\r\n                </span>\r\n                <br>\r\n            <a  (click)=\"updatePsw(user)\">\r\n              <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Alterar Senha</label></a>\r\n              <br>\r\n\r\n            <a  href=\"#excluir\" data-toggle=\"collapse\">\r\n            <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Excluir conta</label></a>\r\n\r\n            <div id=\"excluir\" class=\"collapse\">\r\n\r\n              <label style=\"font-size: 1.3rem;\">Tem certeza que deseja excluir sua conta?</label><br>\r\n\r\n              <div class=\"row\">\r\n\r\n              <div class=\"btncolumn1\" style=\"color:white;\">\r\n              <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\" (click)=\"delete()\">\r\n              </div>\r\n\r\n              <div class=\"btncolumn2\" style=\"color:white;\">\r\n              <input style=\"margin-top: 0px; background-color: #cccccc\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" href=\"#excluir\" data-toggle=\"collapse\">\r\n\r\n              </div>\r\n              </div>\r\n\r\n            </div>\r\n             <input style=\"margin-top: 20px;\"type=\"submit\" class=\"btn btn-green btn-block btn-flat\" value=\"Alterar\" (click)=\"updateInfo(user)\">\r\n\r\n           </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/modal editar perfil-->\r\n  <!--modal deletar demanda-->\r\n  <div class=\"modal fade\" id=\"modalLabel\" role=\"dialog\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-sm\">\r\n       <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n            <button #closeModalDeleteButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\r\n          <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Excluir Demanda</h4>\r\n         </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"login-box-body\">\r\n            <p class=\"login-box-msg\" style=\"color: grey;\">Esta publicação será excluída.<br>\r\n            Deseja continuar?</p>\r\n\r\n\r\n            <div class=\"row\" style=\"padding-left: 30%;\" >\r\n\r\n            <div class=\"btncolumn\" style=\"color:white;\">\r\n            <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\" (click)=\"deleteDemand()\">\r\n            </div>\r\n\r\n            <div class=\"btncolumn\" style=\"color:white;\">\r\n            <input style=\"margin-top: 0px; background-color: #cccccc; margin-left:20px;\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" data-dismiss=\"modal\">\r\n\r\n            </div>\r\n            </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n <!--/modal excluir demanda-->\r\n <div class=\"modal fade\" id=\"Sair\" role=\"dialog\" aria-hidden=\"true\">\r\n   <div class=\"modal-dialog modal-sm\">\r\n\r\n   <!-- Modal content no 1-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n         <button #closeModalLogoutButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\r\n       <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Sair</h4>\r\n      </div>\r\n     <div class=\"modal-body\">\r\n       <div class=\"login-box-body\">\r\n         <p class=\"login-box-msg\" style=\"color: grey;margin-bottom:20px\">Você realmente deseja sair?</p>\r\n\r\n\r\n         <div class=\"row\" style=\"padding-left: 30%;\" >\r\n\r\n         <div class=\"btncolumn\" style=\"color:white;\">\r\n         <input style=\"margin-top: 0px;background-color:#cccccc\" type=\"submit\" class=\"btn   btn-flat\"  (click)=\"logout()\" value=\"Sim\" >\r\n         </div>\r\n\r\n         <div class=\"btncolumn\" style=\"color:white;\">\r\n         <input style=\"margin-top: 0px; background-color: #cccccc; margin-left:20px;\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" data-dismiss=\"modal\">\r\n\r\n         </div>\r\n         </div>\r\n\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n\r\n </div>\r\n  <!-- Sidebar-->\r\n  <div class=\"s-layout__sidebar\">\r\n    <nav class=\"s-sidebar__nav\" style=\"margin-top: 60px;\">\r\n      <ul style=\"width: 144px;height: auto;\">\r\n        <img [src]=\"server.user.image_profile\">\r\n        <br>\r\n        <div class=\"row\" style=\"margin-left: 20px; text-align: center;\">\r\n        <em class=\"text-center\">{{server.user.name}}</em>\r\n      </div>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#\" data-target=\"#changeInfo\" data-toggle=\"modal\" (click)=\"clearInputs()\" >\r\n          <i class=\"fa fa-user\"></i><em>Editar Perfil</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" routerLink=\"/post\">\r\n          <i class=\"fa fa-newspaper-o\"></i><em>Publicar</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#demo\" data-toggle=\"collapse\">\r\n          <i class=\"fa fa-pencil-square-o\"></i><em>Demandas</em>\r\n          </a>\r\n        </li>\r\n        <div id=\"demo\" class=\"collapse\">\r\n          <div style=\"margin-left: 60px; margin-top: 8px; padding-top: 40px;\"><a  style=\"text-decoration: none;\" routerLink=\"/madeByme\" >Criadas</a></div>\r\n            <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\"routerLink=\"/liked\" >Curtidas/<br>Comentadas</a></div>\r\n             </div>\r\n\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <!--/ Sidebar-->\r\n  <!--Cabeçalho-->\r\n  <div class=\"s-layout__content\">\r\n    <div class=\"mar\">\r\n      <div class=\"card\" >\r\n        <div class=\"card-header textcenter\">\r\n          <h2 style=\"color:#0066cc; padding-top: 5px;\">Demandas Criadas</h2>\r\n        </div>\r\n      </div>\r\n  <!--/Cabeçalho-->\r\n  <!--Card-->\r\n  <div class=\"card pointer\"  *ngFor=\"let post of posts;\">\r\n      <div class=\"row\" >\r\n        <div class=\"col-md-4 firstcol column\" (click)=\"post.collapsed=!post.collapsed\">\r\n          <img [src]=\"post?.image_demand\" class=\"rounded\" style=\"width: 70px; height:70px;\"  vspace=\"5\">\r\n        </div>\r\n        <div class=\"col-md-4 secndcol column\">\r\n          <div class=\"row\" (click)=\"post.collapsed=!post.collapsed\" >\r\n           <a style=\"font-size:16px; text-decoration: none; color:#0066cc;\">{{post?.title}}</a>\r\n          </div>\r\n          <div class=\"row\"(click)=\"post.collapsed=!post.collapsed\">\r\n            <a class=\"text-muted\" style=\"font-size:13px; text-decoration: none;\"> {{post?.created_date}}</a>&nbsp;\r\n            <br>\r\n            <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"!post.local==''\">\r\n              {{post?.local}}</i>\r\n              <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"post.local==''\">\r\n              {{post?.environment}} no {{post?.campus}}</i>\r\n          </div>\r\n          <div class=\"row\">\r\n            <ul class=\"list-inline\">\r\n\r\n              <div class=\"pull-left notLiked\">\r\n                  <a (click)=\"like(post)\" class=\"pointer responsivo\" style=\"text-decoration: none;\" [ngClass]=\"{'liked': post.gave_like == 'true', 'notLiked': post.gave_like == 'false'}\"><i class=\"fa fa-thumbs-up\" style=\"font-size: 15px;\"></i>\r\n                  {{post?.total_likes}}</a>\r\n                </div>\r\n\r\n\r\n                <div class=\"textl icon\" (click)=\"post.collapsed=!post.collapsed\">\r\n                  <a class=\"pointer icon responsivo2 \" style=\"text-decoration: none;\" (click)=\"post.showcomments=!post.showcomments;\"><i class=\"fa fa-comments\"></i>\r\n                  {{post?.comments?.length}} comentários\r\n                  </a>\r\n                </div>\r\n\r\n                <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Aberta'\" (click)=\"post.collapsed=!post.collapsed\">\r\n                  <a class=\"icon pointer\" title=\"Demanda Aberta\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\" style=\"font-size:15px; margin-left:0px;\" >&nbsp; Aberta</i></a>\r\n                </div>\r\n\r\n                <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Reclassificada'\"(click)=\"post.collapsed=!post.collapsed\">\r\n                  <a class=\"icon pointer\" title=\"Demanda Reclassificada\"><i class=\"fa fa-refresh\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Reclassificada</i></a>\r\n                </div>\r\n\r\n                <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Resolvida'\" (click)=\"post.collapsed=!post.collapsed\">\r\n                  <a class=\"icon pointer\" title=\"Demanda Resolvida\"><i class=\"fa fa-check-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Resolvida</i></a>\r\n                </div>\r\n\r\n                <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Solução Inviável'\" (click)=\"post.collapsed=!post.collapsed\">\r\n                  <a class=\"icon pointer\" title=\"Não foi possível resolver\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Solução Inviável</i></a>\r\n                </div>\r\n\r\n                <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Em Análise'\" (click)=\"post.collapsed=!post.collapsed\">\r\n                  <a class=\"icon pointer\" title=\"A demanda está sendo analisada\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Em Análise</i></a>\r\n                </div>\r\n\r\n\r\n\r\n            </ul>\r\n          </div>\r\n          </div>\r\n      </div>\r\n      <!--Expanded card1-->\r\n      <div class=\"card\" style=\"padding-bottom:15px;\" *ngIf=\"post.collapsed\">\r\n        <div class=\"linha\"></div>\r\n        <div class=\"pull-right icon\">\r\n          <a data-toggle=\"modal\" data-target=\"#modalLabel\" (click)=\"reportId(post)\" class=\"icon\" >\r\n            <i class=\"fa fa-ellipsis-v pointer\" style=\"font-size:20px; padding: 15px;padding-top: 5px;\"></i>\r\n          </a>\r\n        </div>\r\n        <div class=\"card-header textleft\">\r\n          <div class=\"col-xs-2  card-header2\" style=\"width:auto; padding:1; height: 100%;\">\r\n            <img [src]=\"post?.image_profile\" style=\"object-fit:cover; border-radius: 50%; margin-top: 10px;\">\r\n          </div>\r\n          <p style=\"padding-top:5px;\">\r\n            <a>  {{post?.name}}</a>\r\n            publicou\r\n            <b>{{post?.title}}</b>\r\n            em<br>\r\n            <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"!post.local==''\">\r\n              {{post?.local}}</i>\r\n              <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"post.local==''\">\r\n              {{post?.environment}} no {{post?.campus}}</i>\r\n          </p>\r\n\r\n          <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Aberta'\">\r\n            <a class=\"icon pointer\" title=\"Demanda Aberta\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\" style=\"font-size:15px; margin-left:0px;\">&nbsp; Aberta</i></a>\r\n          </div>\r\n\r\n          <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Reclassificada'\">\r\n            <a class=\"icon pointer\" title=\"Demanda Reclassificada\"><i class=\"fa fa-refresh\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Reclassificada</i></a>\r\n          </div>\r\n\r\n          <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Resolvida'\">\r\n            <a class=\"icon pointer\" title=\"Demanda Resolvida\"><i class=\"fa fa-check-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Resolvida</i></a>\r\n          </div>\r\n\r\n          <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Solução Inviável'\">\r\n            <a class=\"icon pointer\" title=\"Não foi possível resolver\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Solução Inviável</i></a>\r\n          </div>\r\n\r\n          <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Em Análise'\">\r\n            <a class=\"icon pointer\" title=\"A demanda está sendo analisada\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Em Análise</i></a>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n        <div class=\"card-body\" style=\"background-color:#fff; text-align: justify;\">\r\n          <img [src]=\"post?.image_demand\" style=\"width:90%; margin-left: 25px;\">\r\n          <div style=\"background:none;\" >\r\n          <p  style=\"text-align:left; margin-left: 50px; margin-top: 5px; overflow-wrap: break-word;width:460px; \">\r\n          {{post?.description}}<br>\r\n          </p>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n          <div class=\"linha\"></div>\r\n          <ul class=\"list-inline\">\r\n            <div class=\"pull-left notLiked\">\r\n                <a (click)=\"like(post)\" class=\"pointer\" style=\"text-decoration: none;\" [ngClass]=\"{'liked': post.gave_like == 'true', 'notLiked': post.gave_like == 'false'}\"><i class=\"fa fa-thumbs-up\" style=\"  margin-left: 20px;\r\n                font-size: 15px;\"></i>\r\n                {{post?.total_likes}}</a>\r\n              </div>\r\n              <div class=\"textl pull-right icon\">\r\n                <a class=\"pointer icon \" style=\"text-decoration: none; margin-right: 20px;\" (click)=\"post.showcomments=!post.showcomments;\"><i class=\"fa fa-comments\" ></i>\r\n                {{post?.comments?.length}} comentários\r\n                </a>\r\n              </div>\r\n\r\n          </ul>\r\n            </div>\r\n          </div>\r\n              <div class=\"linha2\"></div>\r\n        </div>\r\n        <div class=\"card-footer rolavel\" style=\"height:auto;max-height:300px; background:none;\" *ngIf=\"post.showcomments\">\r\n          <div class=\"card-header textleft\" *ngFor=\"let comment of post.answers;\">\r\n            <div class=\"col-xs-2\">\r\n              <img [src]=\"comment?.image_profile\" style=\"object-fit:cover;border-radius: 50%; margin-top: 10px;\">\r\n            </div>\r\n            <p class=\"borda\"  style=\" background: #0066cc; color:white;\">\r\n              <a class=\"pointer\" style=\"text-decoration: none;\"></a>{{comment?.name}}\r\n      \r\n              <br>\r\n              {{comment?.comment}}\r\n            </p>\r\n        </div>\r\n              <div class=\"card-header textleft\" *ngFor=\"let comment of post.comments\" style=\"padding: 0px;\">\r\n                <div class=\"col-xs-2\" style=\"width:auto;\">\r\n                  <img [src]=\"comment.image_profile\" style=\"object-fit:cover;border-radius: 50%; margin-top: 10px;\">\r\n                </div>\r\n                <p class=\"borda\" style=\"word-break: break-all;width:500px;\">\r\n                  <a class=\"pointer\" style=\"text-decoration: none;\">{{comment.name}}</a>\r\n      \r\n                  <a class=\"pointer fa fa-trash pull-right\" style=\"padding:0; text-decoration: none;\" (click)=\"delComment(comment,post)\" *ngIf=\"comment.owner_comment == 'true'\"></a>\r\n                  <br>\r\n                  {{comment.comment}}\r\n                </p>\r\n            </div>\r\n            </div>\r\n      <div class=\"textleft inputWithIcon icon\" >\r\n          <textarea rows=\"1\" type=\"text\" class=\"form-control\" placeholder=\"Escreva seu comentário...\" style=\"border-radius: 10px;  resize: none;\" [(ngModel)]=\"comment\">  </textarea>\r\n        <a (click)=\"newComment(post, comment)\" class=\"pointer icon\" style=\"text-decoration: none;\"><i class=\"fa fa-mail-forward\"></i></a>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    <!--/Card-->\r\n\r\n<script src=\"madeByme.ts\"></script>\r\n"

/***/ }),

/***/ "./src/app/madeByme/madeByme.ts":
/*!**************************************!*\
  !*** ./src/app/madeByme/madeByme.ts ***!
  \**************************************/
/*! exports provided: MadeByMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MadeByMeComponent", function() { return MadeByMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/server */ "./src/providers/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Added

var MadeByMeComponent = /** @class */ (function () {
    function MadeByMeComponent(_router, server) {
        this._router = _router;
        this.server = server;
        this.posts = [];
        this.demands = [];
        this.user = [];
        this.mine = [];
        this.isEqual = true;
    }
    MadeByMeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.getSelectedDemands().then(function (response) {
            response = response.json();
            for (var i = 0; i < response['dados'].reclamacao.length; i++) {
                response['dados'].reclamacao[i].collapsed = false;
                _this.mine.push(response['dados'].reclamacao[i]);
            }
            for (var i = 0; i < response['dados'].sugestao.length; i++) {
                response['dados'].sugestao[i].collapsed = false;
                _this.demands.push(response['dados'].sugestao[i]);
            }
            _this.posts = _this.unique(_this.mine.concat(_this.demands));
        });
    };
    MadeByMeComponent.prototype.unique = function (a) {
        return a.reduce(function (p, c) {
            if (p.indexOf(c) < 0)
                p.push(c);
            return p;
        }, []);
    };
    MadeByMeComponent.prototype.like = function (post) {
        //Remove like
        post.total_likes = Number(post.total_likes);
        if (post.gave_like == "true") {
            this.server.unlikeDemand(post.demand_id).then(function (response) {
                post.total_likes -= 1;
                post.gave_like = "false";
            });
        }
        //Add like
        else {
            this.server.likeDemand(post.demand_id).then(function (response) {
                post.total_likes += 1;
                post.gave_like = "true";
            });
        }
    };
    MadeByMeComponent.prototype.newComment = function (post, comment) {
        var _this = this;
        //Add comment
        this.server.commentDemand(post.demand_id, comment).then(function (response) {
            response = response.json();
            post.comments.push({ comment_id: response['dados'].comment_id, name: _this.server.user.name, image_profile: _this.server.user.image_profile, comment: comment, owner_comment: "true" });
        }).catch(function (error) {
        });
        this.comment = "";
    };
    MadeByMeComponent.prototype.delComment = function (post, demand) {
        //Delete comment
        this.server.deleteComment(post.comment_id).then(function (response) {
            response = response.json();
            for (var i = demand.comments.length - 1; i >= 0; --i) {
                if (demand.comments[i].comment_id == post.comment_id) {
                    demand.comments.splice(i, 1);
                }
            }
        }).catch(function (error) {
        });
    };
    MadeByMeComponent.prototype.deleteDemand = function () {
        var _this = this;
        this.server.deleteDemand(this.id).then(function (response) {
            _this.closeModalDeleteButton.nativeElement.click();
            bootbox.alert({
                size: "small",
                title: "Atenção!",
                message: "A demanda foi excluída. Você não conseguirá mais visualizá-la.",
                backdrop: true,
            });
            for (var i = _this.posts.length - 1; i >= 0; --i) {
                if (_this.posts[i].demand_id == _this.id) {
                    _this.posts.splice(i, 1);
                }
            }
        }).catch(function (error) {
        });
    };
    MadeByMeComponent.prototype.reportId = function (post) {
        this.id = post.demand_id;
    };
    MadeByMeComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    MadeByMeComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.user.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    MadeByMeComponent.prototype.updateInfo = function (user) {
        var _this = this;
        if (typeof user.email == 'undefined' || user.email == '') {
            this.user.email = this.server.user.email;
        }
        else {
            this.user.email = user.email;
        }
        this.server.updateInfo(this.user).then(function (response) {
            _this.closeModalChangeButton.nativeElement.click();
        }).catch(function (error) {
            var body = JSON.parse(error['_body']);
            if (body.hasOwnProperty('erro')) {
                switch (body.erro.update) {
                    case 6: {
                        bootbox.alert({
                            size: "small",
                            title: "Ops, algo aconteceu..",
                            message: "Email inválido.",
                            backdrop: true,
                        });
                        break;
                    }
                    default: {
                        bootbox.alert({
                            size: "small",
                            title: "Ops, algo aconteceu..",
                            message: "Erro.",
                            backdrop: true,
                        });
                    }
                }
            }
        });
        if (typeof this.user.image == 'undefined' || this.user.image == '') {
            this.server.user.image_profile = this.server.user.image_profile;
        }
        else {
            this.server.user.image_profile = this.user.image;
        }
    };
    MadeByMeComponent.prototype.verifyPsw = function (user) {
        if (user.password != user.passwordconfirm || typeof user.password == 'undefined') {
            this.isEqual = false;
        }
        else {
            this.isEqual = true;
        }
    };
    MadeByMeComponent.prototype.updatePsw = function (user) {
        var _this = this;
        if (typeof user.password == 'undefined' || typeof user.passwordconfirm == 'undefined') {
            bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "As senhas devem ser iguais e conter no mínimo 6 digitos.",
            });
        }
        else {
            this.server.updatePsw(user.password).then(function (response) {
                bootbox.alert({
                    size: "small",
                    title: "Atenção!",
                    message: "Senha alterada com sucesso.",
                });
                _this.closeModalChangeButton.nativeElement.click();
            }).catch(function (error) {
                var body = JSON.parse(error['_body']);
                if (body.hasOwnProperty('erro')) {
                    switch (body.erro.password) {
                        case 3: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Senha deve conter no mínimo 6 dígitos.",
                                backdrop: true,
                            });
                            break;
                        }
                        default: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Senha deve conter no mínimo 6 dígitos.",
                                backdrop: true,
                            });
                            break;
                        }
                    }
                }
            });
        }
    };
    MadeByMeComponent.prototype.delete = function () {
        var _this = this;
        this.server.deleteAccount().then(function (response) {
            _this.closeModalChangeButton.nativeElement.click();
            bootbox.alert({
                size: "small",
                title: "Atenção",
                message: "Conta deletada com sucesso.",
                backdrop: true,
            });
            _this.logout();
        });
    };
    MadeByMeComponent.prototype.clearInputs = function () {
        this.user = {};
        this.isEqual = true;
    };
    MadeByMeComponent.prototype.logout = function () {
        this.server.token = null;
        this._router.navigate(['/home']);
        this.closeModalLogoutButton.nativeElement.click();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalDeleteButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MadeByMeComponent.prototype, "closeModalDeleteButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalChangeButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MadeByMeComponent.prototype, "closeModalChangeButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalLogoutButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MadeByMeComponent.prototype, "closeModalLogoutButton", void 0);
    MadeByMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-madeByme',
            template: __webpack_require__(/*! ./madeByme.html */ "./src/app/madeByme/madeByme.html"),
            styles: [__webpack_require__(/*! ./madeByme.css */ "./src/app/madeByme/madeByme.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers_server__WEBPACK_IMPORTED_MODULE_2__["ServerProvider"]])
    ], MadeByMeComponent);
    return MadeByMeComponent;
}());



/***/ }),

/***/ "./src/app/post/post.css":
/*!*******************************!*\
  !*** ./src/app/post/post.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {cursor: pointer;}\r\n\r\n/*CSS PERFIL*/\r\n\r\n.principal {background-color:  rgb(242, 244, 247);}\r\n\r\n.liked{\r\n  color: #0066cc;\r\n}\r\n\r\n.notLiked{\r\n  color:gray;\r\n}\r\n\r\n.icon{\r\n  color: gray;\r\n}\r\n\r\n.icon a:hover,\r\n.notLiked a:hover{color: #0066cc;}\r\n\r\n.rounded{\r\n\r\n  border-radius: 50%;\r\n width:70px;\r\nheight:70px;\r\n}\r\n\r\ndiv.center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 65%;\r\n  }\r\n\r\ninput[type=\"text\"]:focus {\r\n    border-color: dodgerBlue;\r\n    box-shadow: 0 0 8px 0 dodgerBlue;\r\n  }\r\n\r\n.inputWithIcon input[type=\"text\"] {\r\n    padding-left: 40px;\r\n  }\r\n\r\n.inputWithIcon {\r\n    position: relative;\r\n  }\r\n\r\n.inputWithIcon i {\r\n    text-align: right;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0px;\r\n    padding: 9px 8px;\r\n    color: #3366BB;\r\n    transition: 0.3s;\r\n    border-radius: 50px;\r\n  }\r\n\r\n.btncolumn {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n\r\n.btncolumn1 {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n\r\n.btncolumn2 {\r\n  float: left;\r\n  width: 80%;\r\n  padding: 10px;\r\n  text-align: left;\r\n  }\r\n\r\n.inputWithIcon input[type=\"text\"]:focus + i {\r\n    color: dodgerBlue;\r\n  }\r\n\r\n@media screen and (max-width: 1024px) {\r\n    div.center {\r\n      margin-left: -13px;\r\n      margin-top: -60px;\r\n      width: 30%;\r\n\r\n    }\r\n  }\r\n\r\n@media (max-width: 568px) {\r\n  .modal-sm{\r\n          width: 355px;\r\n          transition: all 0.3s;\r\n          padding-left: 0px;\r\n      }\r\n    }\r\n\r\n.seta-esquerda:before {\r\n    content: \"\";\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    width: 0;\r\n    height: 0;\r\n\r\n    border-top: 5px solid transparent;\r\n    border-bottom: 5px solid transparent;\r\n    border-right: 5px solid blue;\r\n  }\r\n\r\n.btn-search{\r\n    color:#28a745;\r\n    float:right;\r\n    border-radius:50%;\r\n    justify-content: center;\r\n    margin-left: 5px;\r\n    align-items: center;\r\n    display: flex;\r\n    width:35px;\r\n    height: 35px;\r\n        background-color:#fff;\r\n      }\r\n\r\n.search-txt{\r\n        border-radius:10px;\r\n        padding: 0;\r\n        color:green;\r\n        font-size: 16px;\r\n        transition:0.4s;\r\n        width:300px;\r\n        line-height: 30px;\r\n        }\r\n\r\n.modal-content {\r\n    display: block;\r\n  }\r\n\r\n.modal-body{\r\n    display: block;\r\n    overflow-y: hidden;\r\n  }\r\n\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n\r\n/*cor da barra de navegação*/\r\n\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n}\r\n\r\n/*caracteristicas do conteudo da barra*/\r\n\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    padding: 0px;\r\n\tmargin: 10px 5px;\r\n\tpadding: 10px 15px;\r\n}\r\n\r\n/*Quando passa o mouse*/\r\n\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n\r\n/*Quando clica*/\r\n\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n\r\n/******************\r\nSidebar\r\n******************/\r\n\r\n/* Primary Styles */\r\n\r\n*, *::before, *::after {\r\n    box-sizing: border-box;\r\n    }\r\n\r\nem {\r\n    font-style: normal;\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    }\r\n\r\n.s-sidebar__nav .collapse.in a{\r\n      color: white;\r\n      font-size: 14px;\r\n    }\r\n\r\nem:hover,\r\n    a:hover {\r\n     color: rgb(101, 191, 91);\r\n    }\r\n\r\n/* Layout */\r\n\r\n.s-layout {\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n\r\n.s-layout__content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n\r\n.mar{\r\n      margin-top:80px;\r\n    }\r\n\r\n.linha {\r\n      margin-top: 2px;\r\n      width: 100%;\r\n      border-bottom: 1.3px solid #ced4da;\r\n    }\r\n\r\n.linha2 {\r\n      margin-bottom: 12px;\r\n      width: 100%;\r\n      border-bottom: 1.3px solid #ced4da;\r\n    }\r\n\r\n.borda{\r\n      border-width: 1px 1px 1px 1px; /* aqui, cada lado possui uma borda de largura diferente */\r\n       /* estilos de borda diferentes para cima-baixo e esquerda-direita */\r\n        border-color: #000 #090 #900 #009; /* uma cor de borda para cada lado */\r\n        padding: 5px;\r\n        background-color:rgb(242,244,247);\r\n        border-radius: 18px;\r\n    }\r\n\r\n/* Sidebar */\r\n\r\n.s-sidebar__nav {\r\n   position: fixed;\r\n   top: 0;\r\n   overflow: hidden;\r\n   transition: all .3s ease-in;\r\n   height: 100%;\r\n   z-index: 1;\r\n   background:linear-gradient(#0066cc 30%, rgb(101,191,91));;\r\n\r\n}\r\n\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__nav:focus,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav {\r\nleft: 0;\r\n}\r\n\r\n.s-sidebar__nav ul {\r\nposition: absolute;\r\nleft: 0;\r\nmargin: 0;\r\npadding: 0;\r\nwidth: 15em;\r\ntop: 4em;\r\n}\r\n\r\n.s-sidebar__nav ul li {\r\nwidth: 100%;\r\nmargin: 10px;\r\n\r\n}\r\n\r\n.s-sidebar__nav-link {\r\nposition: relative;\r\ndisplay: inline-block;\r\nwidth: 100%;\r\ncolor:white;\r\nmargin: 0;\r\n}\r\n\r\n.s-sidebar__nav-link em {\r\nposition: absolute;\r\nleft: 3.5em;\r\n-webkit-transform: translateY(-50%);\r\n        transform: translateY(-50%);\r\n}\r\n\r\n.s-sidebar__nav-link > i , .s-sidebar__nav-link a{\r\nposition: absolute;\r\ntop: 0;\r\nwidth: 4em;\r\n}\r\n\r\n.s-sidebar__nav-link > i::before {\r\nposition: absolute;\r\ntop: 90%;\r\nleft: 50%;\r\n-webkit-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\n}\r\n\r\n.s-layout__content > .mar > .group >.card{\r\n  background-color:#fff;\r\n  margin-top:20px;\r\n  margin-bottom:15px;\r\n  border-radius: 10px;\r\n    padding-left: 5em ;\r\n    padding-right: 5em;\r\n    padding-bottom: 0.5em;\r\n    box-shadow: 10px 3px 81px 2px rgba(101,191,91,1);\r\n   }\r\n\r\n.modal-body > .mar >.card{\r\n    background-color:#fff;\r\n    margin-top:10px;\r\n    margin-bottom:15px;\r\n    border-radius: 10px;\r\n    }\r\n\r\n.card .card-header{\r\n      padding-top: 10px;\r\n      padding-bottom: 10px;\r\n      }\r\n\r\n.card .card-header img{\r\n        width: 40px;\r\n        height: 40px;\r\n      }\r\n\r\n.card .card-header2 img{\r\n        width: 50px;\r\n        height: 50px;\r\n        border-radius: 50%;\r\n      }\r\n\r\n.card .card-footer{\r\n        padding-top: 10px;\r\n        padding-bottom: 20px;\r\n          border-radius: 10px;\r\n        }\r\n\r\n.card-info{\r\n        margin-top:30px;\r\n        border-radius: 10%;\r\n        padding-top: 10px;\r\n        padding-bottom: 10px;\r\n\r\n      }\r\n\r\nselect {\r\n      width: 17em;\r\n      text-align: center;\r\n    }\r\n\r\n.modal h3{\r\n    color: #0066cc;\r\n    }\r\n\r\n/* Mobile First */\r\n\r\n@media (min-width: 10em) {\r\n  .s-layout__content {\r\n    margin-left: 4em;\r\n }\r\n\r\n.list-inline{\r\n\r\nfont-size: 12px;\r\n}\r\n/* Sidebar */\r\n\r\n.s-sidebar__nav {\r\n  width: 4em;\r\n  left: 0;\r\n}\r\n\r\n.s-sidebar__nav ul{\r\ntop: 1.3em;\r\n}\r\n.s-sidebar__nav-link{\r\n  top: 2.3em;\r\n  }\r\n.s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n  width: 11em;\r\n  color: white;\r\n\r\n}\r\n.s-sidebar__nav:hover .collapse.in a,\r\n.s-sidebar__nav:focus .collapse.in a{\r\n  color: white;\r\n}\r\n.s-sidebar__nav:hover img,\r\n.s-sidebar__nav:focus img {\r\nwidth: 9em;\r\nheight: 9em;\r\nmargin-left: 15px;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\ntop: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a{\r\ncolor: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover,\r\n.s-sidebar__nav .collapse.in a:hover{\r\ncolor: rgb(101, 191, 91);\r\n}\r\n\r\nul > img{\r\nwidth: 3em;\r\nheight:3em;\r\nborder-radius: 50%;\r\nmargin-left: 8px;\r\n}\r\n\r\n.card-info{\r\n  display: none;\r\n}\r\n.card{\r\n  max-width: 550px;\r\n  height: auto;\r\n  min-width: 260px;\r\n}\r\n.modal-dialog{\r\n  max-width: 100%;\r\n  height: auto;\r\n  min-width: 260px;\r\n  margin-top: 15px;\r\n}\r\n.card-header, .card-body{\r\n  font-size: 10px;\r\n}\r\np.borda{\r\n  font-size: 2vw;\r\n}\r\n    /*select {\r\n      width: 7em;\r\n    }*/\r\n}\r\n\r\n@media (min-width: 48em) {\r\n.s-layout__content {\r\n   padding-left: 15em;\r\n   padding-right: 15em;\r\n   margin-left: 15em;\r\n\r\n\r\n}\r\n.mar{\r\n  min-width: 400px;\r\n  height: 100%;\r\n\r\n\r\n}\r\n.card{\r\n  width: 550px;\r\n  height: auto;\r\n}\r\n.card-header, .card-body{\r\n  font-size: 16px;\r\n}\r\n.card-header h4{\r\n  font-size: 33px;\r\n  font-weight: 700;\r\n  color:#0066cc;\r\n}\r\n.s-sidebar__nav {\r\n   width: 11em;\r\n}\r\n.list-inline{\r\n\r\n  font-size: 16px;\r\n}\r\n.s-sidebar__nav ul {\r\n   top: 1.3em;\r\n}\r\n.s-sidebar__nav-link em{\r\n color: white;\r\n }\r\n .s-sidebar__nav em,\r\n .s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  }\r\n\r\n .s-sidebar__nav-link em:hover,\r\n .s-sidebar__nav-link li:hover{\r\n     color: rgb(101, 191, 91);\r\n }\r\n ul > img{\r\n     width: 9em;\r\n     height:9em;\r\n     border-radius: 50%;\r\n     margin-left: 15px;\r\n     }\r\n     p.borda{\r\n      font-size: 1vw;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/post/post.html":
/*!********************************!*\
  !*** ./src/app/post/post.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\r\n  <!--Navigation bar-->\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a routerLink=\"/feed\" style=\"margin-left: 10px\"><img src=\"./assets/img/logo.png\" width=\"60\" height=\"60\" alt=\"\" ></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 10px\">\r\n        <li><a routerLink=\"/feed\">Feed</a></li>\r\n        <li><a routerLink=\"/ranking\">Ranking</a></li>\r\n        <li><a data-target=\"#Sair\" data-toggle=\"modal\"  class=\"pointer\">Logout</a></li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--/Navigation bar-->\r\n  <!--modal editar perfil-->\r\n  <div class=\"modal fade\" id=\"changeInfo\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button #closeModalChangeButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Editar Perfil</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"login-box-body\">\r\n            <div>\r\n              <img [src]=\"server.user.image_profile\" class=\"rounded\" style=\"width: 80px; height:80px; margin-left: 38%;\">\r\n            </div>\r\n            <p class=\"login-box-msg\" style=\"color: grey;\">Insira uma foto</p>\r\n            <form action=\"#\" method=\"post\" name=\"changeInfo\" style=\"width: 350px; margin-left:-20px;\" >\r\n            <input class=\"form-control\" type=\"file\" name=\"image\" accept=\"image/*\" (change)=\"changeListener($event)\" [(ngModel)]=\"user.image\"/>\r\n            <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n             <!----- username -------------->\r\n             <label for=\"nome\" style=\"font-size: 1.3rem\">Nome completo:</label><br>\r\n             <p style=\"font-size: 1.3rem\">{{server.user.name}}</p>\r\n           </div>\r\n           <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- matricula -------------->\r\n             <label for=\"matricula\" style=\"font-size: 1.3rem\">Matrícula:</label>\r\n             <p style=\"font-size: 1.3rem\">{{server.user.registry}}</p>\r\n           </div>\r\n           <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n            <label for=\"rg\" style=\"font-size: 1.3rem;\">Número RG:</label><br>\r\n            <p style=\"font-size: 1.3rem\">{{server.user.identity}}</p>\r\n           </div>\r\n\r\n\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n           <label for=\"campoData\" style=\"font-size: 1.3rem\">Data de nascimento:</label>\r\n           <p style=\"font-size: 1.3rem\">{{server.user.date_birth}}</p>\r\n         </div>\r\n\r\n           <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n             <label for=\"email\" style=\"font-size: 1.3rem\">E-mail</label>\r\n             <input class=\"form-control\" placeholder=\"Novo email\" id=\"email\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"user.email\" value=\"server.user.email\" />\r\n             <span style=\"display:none; font-weight:bold; position:absolute;color: red;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginid\"></span>\r\n\r\n           </div>\r\n           <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- password -------------->\r\n            <label style=\"font-size: 1.3rem\">Senha</label>\r\n                <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required=\"\" [(ngModel)]=\"user.password\" #password1=\"ngModel\">\r\n               </div>\r\n              <div class=\"form-group\">                    <!----- password -------------->\r\n                <label style=\"font-size: 1.3rem\">Confirme a senha</label>\r\n                <input class=\"form-control\" placeholder=\"Repita senha\" type=\"password\" name=\"passwordconfirm\" required=\"\" [(ngModel)]=\"user.passwordconfirm\" #password2=\"ngModel\" (keyup)=\"verifyPsw(user)\">\r\n                <span style=\"color: red; font-size: 11px;\" *ngIf=\"!isEqual\">\r\n                As senhas devem ser iguais\r\n                </span>\r\n                <br>\r\n            <a  (click)=\"updatePsw(user)\">\r\n              <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Alterar Senha</label></a>\r\n              <br>\r\n\r\n            <a  href=\"#excluir\" data-toggle=\"collapse\">\r\n            <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Excluir conta</label></a>\r\n\r\n            <div id=\"excluir\" class=\"collapse\">\r\n\r\n              <label style=\"font-size: 1.3rem;\">Tem certeza que deseja excluir sua conta?</label><br>\r\n\r\n              <div class=\"row\">\r\n\r\n              <div class=\"btncolumn1\" style=\"color:white;\">\r\n              <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\" (click)=\"delete()\">\r\n              </div>\r\n\r\n              <div class=\"btncolumn2\" style=\"color:white;\">\r\n              <input style=\"margin-top: 0px; background-color: #cccccc\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" href=\"#excluir\" data-toggle=\"collapse\">\r\n\r\n              </div>\r\n              </div>\r\n\r\n            </div>\r\n             <input style=\"margin-top: 20px;\"type=\"submit\" class=\"btn btn-green btn-block btn-flat\" value=\"Alterar\" (click)=\"updateInfo(user)\">\r\n\r\n           </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/modal editar perfil-->\r\n  <!--Modal demandas similares-->\r\n  <div class=\"modal fade\" id=\"Posts\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\" >\r\n          <div class=\"modal-dialog\" >\r\n            <div class=\"modal-content\" style=\"background-color:rgb(242,244,247)\">\r\n              <div class=\"modal-header \" style=\"text-align:center;\">\r\n                  <button #closeModalDemandsButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                  <h3 class=\"modal-title\" id=\"modalLabel\"> Verifique se existe alguma demanda similar a sua!</h3>\r\n                  <h5>Caso não exista, continue criando sua demanda para que todos possam ter acesso!</h5>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"mar rolavel\" style=\"margin-top:0px\" *ngIf=\"demandsSimilar\">\r\n                  <div class=\"card\" style=\"padding-bottom:15px\" *ngFor=\"let post of postsSimilar \">\r\n\r\n                    <div class=\"card-header textleft\">\r\n                      <div class=\"col-xs-2 card-header2\" style=\"width:auto; padding:1; height: 100%;\">\r\n                        <img [src]=\"post?.image_profile\" style=\"object-fit:cover; border-radius: 50%; margin-top:8px;\">\r\n                      </div>\r\n                      <p style=\"padding-top:5px;\">\r\n                        <a style=\"color:#0066cc; text-decoration: none;\" >  {{post?.name}}</a>\r\n                        publicou\r\n                        <b>{{post?.title}}</b>\r\n                        em\r\n                        <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"!post.local==''\">\r\n                          {{post?.local}}</i>\r\n                          <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"post.local==''\">\r\n                          {{post?.environment}} no {{post?.campus}}</i>\r\n                      </p>\r\n\r\n                      <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Aberta'\">\r\n                        <a class=\"icon pointer\" title=\"Demanda Aberta\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\" style=\"font-size:15px; margin-left:0px;\">&nbsp; Aberta</i></a>\r\n                      </div>\r\n\r\n                      <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Reclassificada'\">\r\n                        <a class=\"icon pointer\" title=\"Demanda Reclassificada\"><i class=\"fa fa-refresh\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Reclassificada</i></a>\r\n                      </div>\r\n\r\n                      <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Resolvida'\">\r\n                        <a class=\"icon pointer\" title=\"Demanda Resolvida\"><i class=\"fa fa-check-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Resolvida</i></a>\r\n                      </div>\r\n\r\n                      <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Solução Inviável'\">\r\n                        <a class=\"icon pointer\" title=\"Não foi possível resolver\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Solução Inviável</i></a>\r\n                      </div>\r\n\r\n                      <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Em Análise'\">\r\n                        <a class=\"icon pointer\" title=\"A demanda está sendo analisada\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Em Análise</i></a>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"card-body\" style=\"background-color:#fff;         border-radius: 10px;\">\r\n                      <img [src]=\"post?.image_demand\" style=\"width:90%\">\r\n                      <div style=\"background:none;\" >\r\n                      <p  style=\"text-align:left; margin-left: 50px; margin-top: 5px; overflow-wrap: break-word;width:460px; \">\r\n                      {{post?.description}}<br>\r\n                      </p>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                      <div class=\"linha\"></div>\r\n                      <ul class=\"list-inline\">\r\n                        <div class=\"pull-left notLiked\">\r\n                            <a (click)=\"like(post)\" class=\"pointer\" style=\"text-decoration: none;\" [ngClass]=\"{'liked': post.gave_like == 'true', 'notLiked': post.gave_like == 'false'}\"><i class=\"fa fa-thumbs-up\" style=\"  margin-left: 20px;\r\n                            font-size: 15px;\"></i>\r\n                            {{post?.total_likes}}</a>\r\n                          </div>\r\n\r\n                          <div class=\"textl pull-right icon\">\r\n                            <a class=\"pointer icon \" style=\"text-decoration: none;\" (click)=\"post.showcomments=!post.showcomments;\"><i class=\"fa fa-comments\"></i>\r\n                            {{post?.comments?.length}} comentários\r\n                            </a>\r\n                          </div>\r\n                          </ul>\r\n\r\n                        </div>\r\n\r\n<div style=\"text-align:center\"><button style=\"margin-top: 15px;color:white;font-size:12px; \"class=\"btn btn-blue\" type=\"button\" (click)=\"seeDemand(post)\">Ver esta demanda</button></div>\r\n                      </div>\r\n\r\n                    </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"mar rolavel\" style=\"margin-top:0px;text-align:center\" *ngIf=\"!demandsSimilar\">\r\n                <h5>Não existem demandas similares, por favor, crie sua demanda.</h5>\r\n            </div>\r\n              <div style=\"text-align:center\">\r\n                <button style=\"margin-top: 20px;\" type=\"button\" class=\"btn btn-green\" data-dismiss=\"modal\" (click)=\"demand()\" >Continuar demanda</button></div>\r\n            </div>\r\n          </div>\r\n                <!--/Card-->\r\n    </div>\r\n  </div>\r\n  <!--/Modal demandas similares-->\r\n  <div class=\"modal fade\" style=\"margin-top:125px\" id=\"Sair\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n\r\n    <!-- Modal content no 1-->\r\n     <div class=\"modal-content\">\r\n       <div class=\"modal-header\">\r\n          <button #closeModalLogoutButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\r\n        <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Sair</h4>\r\n       </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"login-box-body\">\r\n          <p class=\"login-box-msg\" style=\"color: grey;margin-bottom:20px\">Você realmente deseja sair?</p>\r\n\r\n\r\n          <div class=\"row\" style=\"padding-left: 30%;\" >\r\n\r\n          <div class=\"btncolumn\" style=\"color:white;\">\r\n          <input style=\"margin-top: 0px;background-color:#cccccc\" type=\"submit\" class=\"btn   btn-flat\"  (click)=\"logout()\" value=\"Sim\" >\r\n          </div>\r\n\r\n          <div class=\"btncolumn\" style=\"color:white;\">\r\n          <input style=\"margin-top: 0px; background-color: #cccccc; margin-left:20px;\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" data-dismiss=\"modal\">\r\n\r\n          </div>\r\n          </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- Sidebar-->\r\n  <div class=\"s-layout__sidebar\">\r\n    <nav class=\"s-sidebar__nav\" style=\"margin-top: 60px;\">\r\n      <ul style=\"width: 144px;height: auto;\">\r\n        <img [src]=\"server.user.image_profile\">\r\n        <br>\r\n        <div class=\"row\" style=\"margin-left: 20px; text-align: center;\">\r\n        <em class=\"text-center\">{{server.user.name}}</em>\r\n      </div>\r\n       <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#\" data-target=\"#changeInfo\" data-toggle=\"modal\" (click)=\"clearInputs()\" >\r\n          <i class=\"fa fa-user\"></i><em>Editar Perfil</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" routerLink=\"/post\">\r\n          <i class=\"fa fa-newspaper-o\"></i><em>Publicar</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#demo\" data-toggle=\"collapse\">\r\n          <i class=\"fa fa-pencil-square-o\"></i><em>Demandas</em>\r\n          </a>\r\n        </li>\r\n        <div id=\"demo\" class=\"collapse\">\r\n          <div style=\"margin-left: 60px; margin-top: 8px; padding-top: 40px;\"><a  style=\"text-decoration: none;\" routerLink=\"/madeByme\" >Criadas</a></div>\r\n            <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\"routerLink=\"/liked\" >Curtidas/<br>Comentadas</a></div>\r\n             </div>\r\n\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <!--/ Sidebar-->\r\n  <div class=\"s-layout__content\">\r\n    <div class=\"mar\">\r\n      <div class=\"group\" *ngIf=\"card1\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header text-center\">\r\n            <h4>Vamos criar sua demanda!</h4>\r\n          </div>\r\n          <div class=\"card-body text-center\">\r\n            <p style=\"color:#0066cc\">Qual o tipo da sua demanda?</p>\r\n            <div class=\"row\" *ngFor=\"let type of types\">\r\n                <input type=\"radio\" style=\"margin:10px;\" name=\"tipo\" (click)=\"setType(type)\">{{type?.demands}}\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <i class=\"fa fa-map-marker\" aria-hidden=\"true\" id=\"local\" style=\"font-size:54px\"></i>\r\n            <br>\r\n            <label for=\"campus\">\r\n              Selecione o Campus\r\n            </label>\r\n            <br>\r\n            <br>\r\n            <select id=\"campus\" name=\"campus\" [(ngModel)]=\"selectedValue\">\r\n              <option *ngFor=\"let campus of campusArray\" [ngValue]=\"campus\">{{campus?.campus}}</option>\r\n            </select>\r\n            <br>\r\n            <button style=\"margin-top: 20px;\" type=\"submit\" class=\"btn btn-green btn-block\" (click)=\" setCampus(selectedValue); proxcard()\">CONFIRMAR</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"group\" *ngIf=\"card2\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header text-center\">\r\n            <h4>Vamos criar sua demanda!</h4>\r\n          </div>\r\n          <div class=\"card-body text-center\">\r\n              <p style=\"color:#0066cc\">Sua demanda está localizada\r\n              em que tipo de ambiente?</p>\r\n              <div class=\"row\" *ngFor=\"let area of areas\">\r\n              <input type=\"radio\" style=\"margin:10px;\" name=\"ambiente\" (click)=\"setArea(area)\">{{area?.area}}\r\n              </div>\r\n              <br>\r\n              <br>\r\n            <i class=\"fa fa-sitemap\" aria-hidden=\"true\" style=\"font-size:54px\"></i>\r\n            <br>\r\n            <label for=\"category\">\r\n              Selecione uma opção de categoria para sua demanda.\r\n            </label>\r\n            <br>\r\n            <br>\r\n            <select id=\"category\" name=\"category\" [(ngModel)]=\"selectedValueCategory\">\r\n                <option *ngFor=\"let category of categories\"  [ngValue]=\"category\">{{category?.type}}</option>\r\n            </select>\r\n            <br>\r\n            <button style=\"margin-top: 20px;\" type=\"submit\" class=\"btn btn-green btn-block\" (click)=\"setCategory(selectedValueCategory); ambiente();\">CONFIRMAR</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"group\" *ngIf=\"card3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header text-center\">\r\n            <h4>Vamos criar sua demanda!</h4>\r\n          </div>\r\n          <div class=\"card-body text-center\">\r\n            <i class=\"fa fa-map-marker\" aria-hidden=\"true\" id=\"local\" style=\"font-size:54px\"></i>\r\n            <br>\r\n            <label for=\"predio\">\r\n              Selecione o local\r\n            </label>\r\n            <br>\r\n            <br>\r\n            <select *ngIf=\"ambienteIn\" name=\"local\" [(ngModel)] = \"demands.selectedValueLocal\">\r\n                <option *ngFor=\"let local of locais\" [ngValue]=\"local\">{{local.local}}</option>\r\n            </select>\r\n            <br>\r\n            <br>\r\n            <select name=\"ambiente\" [(ngModel)]=\"demands.selectedValueEnvironment\">\r\n                <option *ngFor=\"let environment of environments\" [ngValue]=\"environment\" >{{environment.environment}}</option>\r\n            </select>\r\n            <br>\r\n            <br>\r\n            <button style=\"margin-bottom: 20px;\" type=\"button\" class=\"btn btn-green btn-block\" (click)=\"setLocal(demands);\">CONFIRMAR</button>\r\n            <button style=\"margin-bottom: 20px;\" [hidden]=\"true\" type=\"button\" id=\"modalSimilar\" data-toggle=\"modal\" data-target=\"#Posts\"></button>          \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"group\" *ngIf=\"posts\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header text-center\">\r\n              <h4>Vamos criar sua demanda!</h4>\r\n            </div>\r\n            <div class=\"card-body text-center\">\r\n                <label for=\"titleDemand\" style=\"color:#0066cc; font-size: 14px\">Dê um título à sua demanda</label>\r\n                <br>\r\n                <input type=\"text\" id=\"titleDemand\" required maxlength=\"25\" style=\"border-radius:10px\" [(ngModel)]=\"demands.title\">\r\n                <br>\r\n                <br>\r\n                <label for=\"description\" style=\"color:#0066cc; font-size: 14px\">Faça uma breve descrição sobre a demanda e o local onde está localizada (ex: sala BT15/18)</label>\r\n                <textarea type=\"text\" id=\"description\" required maxlength=\"150\" style=\"width: 100%; height: 100px;margin-top:15px; border:#0066cc solid\" [(ngModel)]=\"demands.description\"></textarea>\r\n                <br>\r\n                <br>\r\n                <br>\r\n              <i class=\"fa fa-camera text-justify\" aria-hidden=\"true\" id=\"local\" style=\"font-size:48px\"></i>\r\n              <br>\r\n              <label>\r\n                Insira uma foto\r\n              </label>\r\n              <br>\r\n              <br>\r\n              <input class=\"text-justify\" style=\"font-size: 14px;\" type=\"file\" accept=\"image/*\" (change)=\"changeListener($event)\">\r\n              <br>\r\n              <button style=\"margin-top: 20px;\" type=\"button\" class=\"btn btn-green btn-block\" (click)=\"addDemand(demands)\">Publicar</button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<script src=\"post.ts\"></script>\r\n"

/***/ }),

/***/ "./src/app/post/post.ts":
/*!******************************!*\
  !*** ./src/app/post/post.ts ***!
  \******************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/server */ "./src/providers/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Added

var PostComponent = /** @class */ (function () {
    function PostComponent(_router, server) {
        this._router = _router;
        this.server = server;
        this.card1 = true;
        this.card2 = false;
        this.card3 = false;
        this.posts = false;
        this.demandsSimilar = false;
        this.ambienteIn = false;
        this.isEqual = true;
        this.demands = [];
        this.postsSimilar = [];
        this.types = [];
        this.campusArray = [];
        this.areas = [];
        this.categories = [];
        this.locais = [];
        this.environments = [];
        this.user = [];
    }
    // Functions
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.typeDemand().then(function (response) {
            response = response.json();
            for (var i = 0; i < response['dados'].length; i++) {
                _this.types.push(response['dados'][i]);
            }
        });
        this.server.getCampus().then(function (response) {
            response = response.json();
            for (var i = 0; i < response['dados'].length; i++) {
                _this.campusArray.push(response['dados'][i]);
            }
        });
    };
    PostComponent.prototype.setType = function (e) {
        this.demands.selectedType = e.id;
    };
    PostComponent.prototype.setCampus = function (e) {
        if (typeof e == 'undefined') {
        }
        else {
            this.demands.selectedCampus = e.id;
        }
    };
    PostComponent.prototype.setArea = function (e) {
        this.demands.selectedArea = e.id;
    };
    PostComponent.prototype.setCategory = function (e) {
        if (typeof e == 'undefined') {
        }
        else {
            this.demands.selectedCategory = e.id;
        }
    };
    PostComponent.prototype.setLocal = function (e) {
        if (this.ambienteIn == true && typeof e.selectedValueLocal == 'undefined') {
            bootbox.alert({
                size: "small",
                title: "Atenção!",
                message: "Selecione o local.",
                backdrop: true,
            });
        }
        else if (this.ambienteIn == false) {
            this.demands.local_id = '';
            console.log(this.demands.local_id);
            this.setEnvironment(e);
        }
        else {
            this.demands.local_id = e.selectedValueLocal.id;
            this.setEnvironment(e);
        }
    };
    PostComponent.prototype.setEnvironment = function (e) {
        if (typeof e.selectedValueEnvironment == 'undefined') {
            bootbox.alert({
                size: "small",
                title: "Atenção!",
                message: "Selecione um ambiente.",
                backdrop: true,
            });
        }
        else {
            this.demands.environment = e.selectedValueEnvironment.id;
            this.getSimilars();
        }
    };
    PostComponent.prototype.getCard2 = function () {
        var _this = this;
        this.server.areaDemand().then(function (response) {
            response = response.json();
            for (var i = 0; i < response['dados'].length; i++) {
                _this.areas.push(response['dados'][i]);
            }
        });
        this.server.categoryDemand().then(function (response) {
            response = response.json();
            for (var i = 0; i < response['dados'].length; i++) {
                _this.categories.push(response['dados'][i]);
            }
        });
    };
    PostComponent.prototype.local = function () {
        var _this = this;
        this.server.getLocal(this.demands).then(function (response) {
            response = response.json();
            if (response['dados'].local.length != 0) {
                _this.ambienteIn = true;
            }
            for (var i = 0; i < response['dados'].local.length; i++) {
                _this.locais.push(response['dados'].local[i]);
            }
            for (var i = 0; i < response['dados'].environment.length; i++) {
                _this.environments.push(response['dados'].environment[i]);
            }
        });
    };
    PostComponent.prototype.getSimilars = function () {
        var _this = this;
        this.server.getDemandsSimilar(this.demands).then(function (response) {
            response = response.json();
            if (response['dados'].length != 0) {
                _this.demandsSimilar = true;
                _this.postsSimilar = [];
                for (var i = 0; i < response['dados'].length; i++) {
                    _this.postsSimilar.push(response['dados'][i]);
                }
            }
            else {
                _this.demandsSimilar = false;
            }
        }).catch(function (error) {
            try {
            }
            catch (e) {
            }
        });
        document.getElementById("modalSimilar").click();
    };
    PostComponent.prototype.seeDemand = function (post) {
        this.server.demand = post.demand_id;
        this.closeModalDemandsButton.nativeElement.click();
        this._router.navigate(['/solved']);
    };
    PostComponent.prototype.addDemand = function (demands) {
        this.demands.title = demands.title;
        this.demands.description = demands.description;
        if (typeof this.demands.title == 'undefined' || typeof this.demands.description == 'undefined') {
            bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "Inclua um título e uma descrição para sua demanda.",
                backdrop: true,
            });
        }
        else {
            this.server.newDemand(this.demands);
            this._router.navigate(['/feed']);
        }
    };
    PostComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    PostComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.demands.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    PostComponent.prototype.changePhoto = function ($event) {
        this.readThisPhoto($event.target);
    };
    PostComponent.prototype.readThisPhoto = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.user.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    PostComponent.prototype.updateInfo = function (user) {
        var _this = this;
        if (typeof user.email == 'undefined' || user.email == '') {
            this.user.email = this.server.user.email;
        }
        else {
            this.user.email = user.email;
        }
        this.server.updateInfo(this.user).then(function (response) {
            _this.closeModalChangeButton.nativeElement.click();
        }).catch(function (error) {
            var body = JSON.parse(error['_body']);
            if (body.hasOwnProperty('erro')) {
                switch (body.erro.update) {
                    case 6: {
                        bootbox.alert({
                            size: "small",
                            title: "Ops, algo aconteceu..",
                            message: "Email inválido.",
                            backdrop: true,
                        });
                        break;
                    }
                    default: {
                        bootbox.alert({
                            size: "small",
                            title: "Ops, algo aconteceu..",
                            message: "Erro.",
                            backdrop: true,
                        });
                    }
                }
            }
        });
        if (typeof this.user.image == 'undefined' || this.user.image == '') {
            this.server.user.image_profile = this.server.user.image_profile;
        }
        else {
            this.server.user.image_profile = this.user.image;
        }
    };
    PostComponent.prototype.verifyPsw = function (user) {
        if (user.password != user.passwordconfirm || typeof user.password == 'undefined') {
            this.isEqual = false;
        }
        else {
            this.isEqual = true;
        }
    };
    PostComponent.prototype.updatePsw = function (user) {
        var _this = this;
        if (typeof user.password == 'undefined' || typeof user.passwordconfirm == 'undefined') {
            bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "As senhas devem ser iguais e conter no mínimo 6 digitos.",
            });
        }
        else {
            this.server.updatePsw(user.password).then(function (response) {
                bootbox.alert({
                    size: "small",
                    title: "Atenção!",
                    message: "Senha alterada com sucesso.",
                });
                _this.closeModalChangeButton.nativeElement.click();
            }).catch(function (error) {
                var body = JSON.parse(error['_body']);
                if (body.hasOwnProperty('erro')) {
                    switch (body.erro.password) {
                        case 3: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Senha deve conter no mínimo 6 dígitos.",
                                backdrop: true,
                            });
                            break;
                        }
                        default: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Senha deve conter no mínimo 6 dígitos.",
                                backdrop: true,
                            });
                            break;
                        }
                    }
                }
            });
        }
    };
    PostComponent.prototype.delete = function () {
        var _this = this;
        this.server.deleteAccount().then(function (response) {
            _this.closeModalChangeButton.nativeElement.click();
            bootbox.alert({
                size: "small",
                title: "Atenção",
                message: "Conta deletada com sucesso.",
                backdrop: true,
            });
            _this.logout();
        });
    };
    PostComponent.prototype.clearInputs = function () {
        this.user = {};
        this.isEqual = true;
    };
    PostComponent.prototype.logout = function () {
        this.server.token = null;
        this._router.navigate(['/home']);
        this.closeModalLogoutButton.nativeElement.click();
    };
    // Seleção de cards
    PostComponent.prototype.proxcard = function () {
        if (typeof this.demands.selectedType == 'undefined') {
            bootbox.alert({
                size: "small",
                title: "Atenção!",
                message: "Marque o tipo de sua demanda.",
                backdrop: true,
            });
        }
        else if (typeof this.demands.selectedCampus == 'undefined') {
            bootbox.alert({
                size: "small",
                title: "Atenção!",
                message: "Selecione um campus.",
                backdrop: true,
            });
        }
        else {
            this.getCard2();
            this.card1 = !this.card1;
            this.card2 = !this.card2;
        }
    };
    PostComponent.prototype.ambiente = function () {
        if (typeof this.demands.selectedArea == 'undefined') {
            bootbox.alert({
                size: "small",
                title: "Atenção!",
                message: "Marque a área onde sua demanda está localizada.",
                backdrop: true,
            });
        }
        else if (typeof this.demands.selectedCategory == 'undefined') {
            bootbox.alert({
                size: "small",
                title: "Atenção!",
                message: "Selecione uma categoria para sua demanda.",
                backdrop: true,
            });
        }
        else {
            this.local();
            this.card2 = !this.card2;
            this.card3 = !this.card3;
        }
    };
    PostComponent.prototype.demand = function () {
        this.closeModalDemandsButton.nativeElement.click();
        this.card3 = !this.card3;
        this.posts = !this.posts;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalChangeButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PostComponent.prototype, "closeModalChangeButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalDemandsButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PostComponent.prototype, "closeModalDemandsButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalLogoutButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PostComponent.prototype, "closeModalLogoutButton", void 0);
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.html */ "./src/app/post/post.html"),
            styles: [__webpack_require__(/*! ./post.css */ "./src/app/post/post.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers_server__WEBPACK_IMPORTED_MODULE_2__["ServerProvider"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/ranking/ranking.css":
/*!*************************************!*\
  !*** ./src/app/ranking/ranking.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {cursor: pointer;}\r\n/*CSS PERFIL*/\r\n.principal {background-color:  rgb(242, 244, 247);}\r\n.responsivo{\r\n   margin-left: 5px;\r\n}\r\n.responsivo2{\r\n   margin-left: 20px;\r\n}\r\n.caixa{\r\nborder: 0px 1px 1px 0px;\r\nborder-radius: 0px 18px 18px 0px;\r\nborder-color:white;\r\n    background-color: #fff;\r\n\r\n}\r\n.dropdown:hover .dropdown-toggle {\r\n    background-color: #0066cc;\r\n}\r\n.dropdown .dropdown-toggle {\r\n    background-color: #0066cc  !important;\r\n}\r\n.dropdown-menu > li > a:hover {background-color: #0066cc;color: rgb(101, 191, 91);}\r\n.dropdown-menu > li > a {color:#fff;}\r\n.liked{\r\n  color: #0066cc;\r\n}\r\n.notLiked{\r\n  color:gray;\r\n}\r\n.icon{\r\n  color: gray;\r\n}\r\n.icon a:hover,\r\n.notLiked a:hover{color: #0066cc;}\r\n/* Create two equal columns that floats next to each other */\r\n.firstcol{\r\n    text-align: right;\r\n    width: 20%;\r\n\r\n}\r\n.secndcol{\r\n    text-align: left;\r\n    width: 70%;\r\n\r\n\r\n}\r\n.thirdcol{\r\n  text-align: left;\r\n  width: 1%;\r\n}\r\n.icon-background {\r\n    color: #add8e6;\r\n}\r\n.icon-background1 {\r\n    color: #ffd700;\r\n}\r\n.icon-background2 {\r\n    color: #c0c0c0;\r\n}\r\n.icon-background3 {\r\n    color: #cd7f32;\r\n}\r\n.inputWithIcon textarea[type=\"text\"] {\r\n  padding-left: 40px;\r\n}\r\n.inputWithIcon {\r\n  position: relative;\r\n}\r\n.inputWithIcon i {\r\n  text-align: right;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0px;\r\n  padding: 9px 8px;\r\n  transition: 0.3s;\r\n  border-radius: 50px;\r\n}\r\n.inputWithIcon textarea[type=\"text\"]:focus + i {\r\n  color: dodgerBlue;\r\n}\r\ndiv.center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 65%;\r\n  }\r\n.btncolumn {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n.btncolumn1 {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n.btncolumn2 {\r\n  float: left;\r\n  width: 80%;\r\n  padding: 10px;\r\n  text-align: left;\r\n  }\r\n@media screen and (max-width: 991px) {\r\n\r\n    .column {\r\n    float: left;\r\n    width: 100%;\r\n\r\n\r\n    }\r\n    .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .firstcol{\r\n      text-align: center;\r\n\r\n  }\r\n  .secndcol{\r\n    text-align: center;\r\n  }\r\n  .thirdcol{\r\n    text-align: center;\r\n  }\r\n\r\n  .responsivo{\r\n     margin-left: 101px;\r\n  }\r\n\r\n  .responsivo2{\r\n     margin-left: 30px;\r\n  }\r\n\r\n  }\r\n@media screen and (max-width: 1024px) {\r\n    div.center {\r\n      margin-left: -13px;\r\n      margin-top: -60px;\r\n      width: 30%;\r\n\r\n    }\r\n  }\r\nbody {\r\n\t\tfont-size: 15px;\r\n    line-height: 1.52;\r\n    color: #717f86;\r\n    font-size: 16px;\r\n\t  font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n\t\tbackground-color: pink;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    padding: 0px;\r\n  \tmargin: 10px 5px;\r\n  \tpadding: 10px 15px;\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.text-dec{\r\n\tfont-size: 26px;\r\n\tpadding: 10px 20px;\r\n  margin: 2px 0;\r\n\ttext-transform: uppercase;\r\n  color: #fff;\r\n\r\n}\r\n.text-border{\r\n\tborder: 5px solid #0066cc;\r\n\tdisplay: inline-block;\r\n\tmargin-top: 90px;\r\n}\r\n.intro-para{\r\n\tfont-family: 'Alegreya Sans', sans-serif;\r\n\tfont-size: 45px;\r\n\tcolor: #fff;\r\n\tmargin-top: 10px;\r\n}\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n@media (max-width: 568px) {\r\n.modal-sm{\r\n        width: 320px;\r\n        transition: all 0.3s;\r\n        padding-left: 0px;\r\n    }\r\n  }\r\n.btn-green, .btn-green:hover{\r\n    background-color:rgb(101, 191, 91);\r\n    color: #fff;\r\n}\r\n/******************\r\nSidebar\r\n******************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n   box-sizing: border-box;\r\n}\r\nem {\r\n   font-style: normal;\r\n\r\n}\r\n/* Layout */\r\n.s-layout {\r\n   display: flex;\r\n   width: 100%;\r\n   min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   flex: 1;\r\n}\r\n/* Sidebar */\r\n.s-sidebar__nav {\r\n  position: fixed;\r\n  top: 0;\r\n  overflow: hidden;\r\n  transition: all .3s ease-in;\r\n  height: 100%;\r\n  z-index: 1;\r\n  background:linear-gradient(#0066cc 30%, rgb(101,191,91));;\r\n\r\n}\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__nav:focus,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav {\r\nleft: 0;\r\n}\r\n.s-sidebar__nav ul {\r\n  position: absolute;\r\n  left: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 15em;\r\n  top: 4em;\r\n  }\r\n.s-sidebar__nav ul li {\r\n    width: 100%;\r\n    margin: 10px;\r\n\r\n    }\r\n.s-sidebar__nav-link {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 100%;\r\n    color:white;\r\n    margin: 0;\r\n    }\r\n.s-sidebar__nav-link em {\r\n      position: absolute;\r\n      left: 3.5em;\r\n      -webkit-transform: translateY(-50%);\r\n              transform: translateY(-50%);\r\n      }\r\n.s-sidebar__nav-link > i , .s-sidebar__nav-link a{\r\n      position: absolute;\r\n      top: 0;\r\n      width: 4em;\r\n      }\r\n.s-sidebar__nav-link > i::before {\r\n      position: absolute;\r\n      top: 90%;\r\n      left: 50%;\r\n      -webkit-transform: translate(-50%, -50%);\r\n              transform: translate(-50%, -50%);\r\n      }\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n   .s-layout__content {\r\n      margin-left: 4em;\r\n   }\r\n\r\n\r\n   /* Sidebar */\r\n\r\n   .s-sidebar__nav {\r\n      width: 4em;\r\n      left: 0;\r\n   }\r\n\r\n   .s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover ,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n   width: 11em;\r\n   color: white;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\n top: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a {\r\n color: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover{\r\n color: rgb(101, 191, 91);\r\n}\r\n\r\n}\r\n@media (min-width: 68em) {\r\n   .s-layout__content {\r\n      margin-left: 15em;\r\n   }\r\n\r\n   .s-sidebar__nav {\r\n    width: 11em;\r\n }\r\n\r\n .s-sidebar__nav ul {\r\n    top: 1.3em;\r\n }\r\n .s-sidebar__nav em,\r\n .s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  }\r\n  .s-sidebar__nav-link em:hover,\r\n  .s-sidebar__nav-link li:hover{\r\n      color: rgb(101, 191, 91);\r\n  }\r\n}\r\n/**********************\r\nFeed\r\n***********************/\r\n@media screen and (max-width: 1024px) {\r\n  div.center {\r\n    margin-left: -13px;\r\n    margin-top: -60px;\r\n    width: 30%;\r\n\r\n  }\r\n}\r\n.rounded{\r\n\r\n    border-radius: 50%;\r\n   width:70px;\r\n  height:70px;\r\n\r\n  }\r\n.rounded2{\r\n\r\n    border-radius: 50%;\r\n   width:30px;\r\n  height:30px;\r\n\r\n  }\r\n.card{\r\n    background-color:#fff;\r\n    margin-top:20px;\r\n    margin-bottom:-15px;\r\n    border-radius: 10px;\r\n     }\r\n.card .card-header{\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  }\r\n.card .card-header img{\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n.card .card-header2 img{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n.card .card-footer{\r\n    padding-top: 10px;\r\n    padding-bottom: 20px;\r\n    }\r\n.card-info{\r\n    margin-top:30px;\r\n    border-radius: 10%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n  }\r\n.linha {\r\n  margin-top: 18px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n.linha2 {\r\n  margin-bottom: 12px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n.borda{\r\n  border-width: 1px 1px 1px 1px; /* aqui, cada lado possui uma borda de largura diferente */\r\n   /* estilos de borda diferentes para cima-baixo e esquerda-direita */\r\n    border-color: #000 #090 #900 #009; /* uma cor de borda para cada lado */\r\n    padding: 5px;\r\n    background-color:rgb(242,244,247);\r\n    border-radius: 18px;\r\n}\r\n.btn-search{\r\ncolor:#28a745;\r\nfloat:right;\r\nborder-radius:50%;\r\njustify-content: center;\r\nmargin-left: 5px;\r\nalign-items: center;\r\ndisplay: flex;\r\nwidth:35px;\r\nheight: 35px;\r\n    background-color:#fff;\r\n  }\r\n.search-txt{\r\nborder-radius:10px;\r\npadding: 0;\r\ncolor:green;\r\nfont-size: 16px;\r\ntransition:0.4s;\r\nwidth:300px;\r\nline-height: 30px;\r\n}\r\n.comentarios{\r\n\r\nborder:solid 0px ;\r\nbackground-color: #fff;\r\npadding-bottom: 10px;\r\n  }\r\n.textinfo{\r\n\r\n    color:  #868e96;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textlike{\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 20px;\r\n  }\r\n.textleft2{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft3{\r\n    text-align: left;\r\n\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.rolavel {\r\n  height: 1000px;\r\n\r\n  overflow-y: scroll;\r\n    background-color: rgb(242,244,247);\r\n      overflow-x: hidden;\r\n\r\n\r\n\r\n}\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n    width: 100%;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    margin: 10px 5px;\r\n      padding: 10px 15px;\r\n\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n    position: relative;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n/***********************************\r\n Sidebar\r\n************************************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\nem {\r\n  font-style: normal;\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n.s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\nem:hover,\r\n.s-sidebar__nav .collapse.in a:hover {\r\n color: rgb(101, 191, 91);\r\n}\r\n/* Layout */\r\n.s-layout {\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n  .s-layout__content {\r\n     margin-left: 6em;\r\n     align-content: center;\r\n     margin-right: 3em;\r\n    }\r\n    .mar{\r\n      margin-top:60px;\r\n      align-items: center;\r\n      text-align: center;\r\n      min-width: 260px;\r\n      max-width: 500px;\r\n\r\n      margin-right: -50px;\r\n\r\n}\r\n.list-inline{\r\n\r\n  font-size: 12px;\r\n}\r\n  /* Sidebar */\r\n\r\n  .s-sidebar__nav {\r\n     width: 4em;\r\n     left: 0;\r\n  }\r\n\r\n  .s-sidebar__nav ul{\r\n   top: 1.3em;\r\n  }\r\n  .s-sidebar__nav-link{\r\n    top: 2.3em;\r\n    }\r\n\r\n  .s-sidebar__nav:hover em,\r\n  .s-sidebar__nav:focus em,\r\n  .s-sidebar__nav:hover ,\r\n  .s-sidebar__trigger:hover + .s-sidebar__nav,\r\n  .s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n  {\r\n     width: 11em;\r\n     color: white;\r\n  }\r\n  .s-sidebar__nav:hover .collapse.in a,\r\n.s-sidebar__nav:focus .collapse.in a{\r\n  color: white;\r\n}\r\n  .s-sidebar__nav:hover img,\r\n  .s-sidebar__nav:focus img {\r\n   width: 9em;\r\n   height: 9em;\r\n   margin-left: 15px;\r\n  }\r\n  .s-sidebar__nav:hover ul,\r\n  .s-sidebar__nav:focus ul\r\n  {\r\n   top: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a{\r\ncolor: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover,\r\n.s-sidebar__nav .collapse.in a:hover{\r\ncolor: rgb(101, 191, 91);\r\n}\r\nul > img{\r\nwidth: 3em;\r\nheight:3em;\r\nborder-radius: 50%;\r\nmargin-left: 8px;\r\n}\r\n.card-info{\r\n  display: none;\r\n}\r\n.card{\r\n  max-width: 550px;\r\n  height: auto;\r\n  min-width: 260px;\r\n}\r\n.card-header, .card-body{\r\n  font-size: 10px;\r\n}\r\n}\r\n@media (min-width: 58em) {\r\n  .s-layout__content {\r\n     margin-left: 15em;\r\n     margin-right: 15em;\r\n\r\n\r\n  }\r\n  .mar{\r\n    min-width: 500px;\r\n\r\n}\r\n  .card{\r\n    width: 550px;\r\n    height: auto;\r\n  }\r\n  .card-header, .card-body{\r\n    font-size: 16px;\r\n  }\r\n  .s-sidebar__nav {\r\n     width: 11em;\r\n  }\r\n  .list-inline{\r\n\r\n    font-size: 14px;\r\n  }\r\n  .s-sidebar__nav ul {\r\n     top: 1.3em;\r\n  }\r\n  .s-sidebar__nav em,\r\n  .s-sidebar__nav .collapse.in a{\r\n   color: white;\r\n   }\r\n   .s-sidebar__nav-link em:hover,\r\n   .s-sidebar__nav-link li:hover,\r\n   .s-sidebar__nav .collapse.in a:hover\r\n   {\r\n       color: rgb(101, 191, 91);\r\n   }\r\n   ul > img{\r\n       width: 9em;\r\n       height:9em;\r\n       border-radius: 50%;\r\n       margin-left: 15px;\r\n       }\r\n}\r\n"

/***/ }),

/***/ "./src/app/ranking/ranking.html":
/*!**************************************!*\
  !*** ./src/app/ranking/ranking.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\r\n  <!--Navigation bar-->\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a routerLink=\"/feed\" style=\"margin-left: 10px\"><img src=\"./assets/img/logo.png\" width=\"60\" height=\"60\" alt=\"\" ></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 10px\">\r\n\r\n      <li class=\"dropdown\">\r\n      <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Campus\r\n      <span class=\"caret\"></span></a>\r\n      <ul class=\"dropdown-menu\" style=\"background-color: #0066cc;\">\r\n        <li><a (click)=\"setCampus(10)\" class=\"pointer\">Geral</a>\r\n          <a *ngFor=\"let campus of campusArray\" value=\"campus\" (click)=\"setCampus(campus)\" class=\"pointer\">{{campus?.campus}}</a></li>\r\n      </ul>\r\n    </li>\r\n        <li><a routerLink=\"/feed\">Feed</a></li>\r\n        <li><a routerLink=\"/ranking\">Ranking</a></li>\r\n        <li><a data-target=\"#Sair\" data-toggle=\"modal\"  class=\"pointer\">Logout</a></li>\r\n\r\n\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--/Navigation bar-->\r\n <!--modal editar perfil-->\r\n <div class=\"modal fade\" id=\"changeInfo\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button #closeModalChangeButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Editar Perfil</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"login-box-body\">\r\n          <div>\r\n            <img [src]=\"server.user.image_profile\" class=\"rounded\" style=\"width: 80px; height:80px; margin-left: 38%;\">\r\n          </div>\r\n          <p class=\"login-box-msg\" style=\"color: grey;\">Insira uma foto</p>\r\n          <form action=\"#\" method=\"post\" name=\"changeInfo\" style=\"width: 350px; margin-left:-20px;\" >\r\n          <input class=\"form-control\" type=\"file\" name=\"image\" accept=\"image/*\" (change)=\"changeListener($event)\" [(ngModel)]=\"user.image\"/>\r\n          <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n           <!----- username -------------->\r\n           <label for=\"nome\" style=\"font-size: 1.3rem\">Nome completo:</label><br>\r\n           <p style=\"font-size: 1.3rem\">{{server.user.name}}</p>\r\n         </div>\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- matricula -------------->\r\n           <label for=\"matricula\" style=\"font-size: 1.3rem\">Matrícula:</label>\r\n           <p style=\"font-size: 1.3rem\">{{server.user.registry}}</p>\r\n         </div>\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n          <label for=\"rg\" style=\"font-size: 1.3rem;\">Número RG:</label><br>\r\n          <p style=\"font-size: 1.3rem\">{{server.user.identity}}</p>\r\n         </div>\r\n\r\n\r\n       <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n         <label for=\"campoData\" style=\"font-size: 1.3rem\">Data de nascimento:</label>\r\n         <p style=\"font-size: 1.3rem\">{{server.user.date_birth}}</p>\r\n       </div>\r\n\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n           <label for=\"email\" style=\"font-size: 1.3rem\">E-mail</label>\r\n           <input class=\"form-control\" placeholder=\"Novo email\" id=\"email\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"user.email\" value=\"server.user.email\" />\r\n           <span style=\"display:none; font-weight:bold; position:absolute;color: red;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginid\"></span>\r\n\r\n         </div>\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- password -------------->\r\n          <label style=\"font-size: 1.3rem\">Senha</label>\r\n              <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required=\"\" [(ngModel)]=\"user.password\" #password1=\"ngModel\">\r\n             </div>\r\n            <div class=\"form-group\">                    <!----- password -------------->\r\n              <label style=\"font-size: 1.3rem\">Confirme a senha</label>\r\n              <input class=\"form-control\" placeholder=\"Repita senha\" type=\"password\" name=\"passwordconfirm\" required=\"\" [(ngModel)]=\"user.passwordconfirm\" #password2=\"ngModel\" (keyup)=\"verifyPsw(user)\">\r\n              <span style=\"color: red; font-size: 11px;\" *ngIf=\"!isEqual\">\r\n              As senhas devem ser iguais\r\n              </span>\r\n              <br>\r\n          <a  (click)=\"updatePsw(user)\">\r\n            <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Alterar Senha</label></a>\r\n            <br>\r\n\r\n          <a  href=\"#excluir\" data-toggle=\"collapse\">\r\n          <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Excluir conta</label></a>\r\n\r\n          <div id=\"excluir\" class=\"collapse\">\r\n\r\n            <label style=\"font-size: 1.3rem;\">Tem certeza que deseja excluir sua conta?</label><br>\r\n\r\n            <div class=\"row\">\r\n\r\n            <div class=\"btncolumn1\" style=\"color:white;\">\r\n            <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\" (click)=\"delete()\">\r\n            </div>\r\n\r\n            <div class=\"btncolumn2\" style=\"color:white;\">\r\n            <input style=\"margin-top: 0px; background-color: #cccccc\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" href=\"#excluir\" data-toggle=\"collapse\">\r\n\r\n            </div>\r\n            </div>\r\n\r\n          </div>\r\n           <input style=\"margin-top: 20px;\"type=\"submit\" class=\"btn btn-green btn-block btn-flat\" value=\"Alterar\" (click)=\"updateInfo(user)\">\r\n\r\n         </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--/modal editar perfil-->\r\n  <div class=\"modal fade\" id=\"modalLabel\" role=\"dialog\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-sm\">\r\n\r\n      <!-- Modal content no 1-->\r\n       <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n            <button #closeModalDangerButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\r\n          <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Denunciar Publicação</h4>\r\n         </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"login-box-body\">\r\n            <p class=\"login-box-msg\" style=\"color: grey;\">Esta publicação será denunciada.<br>\r\n            Deseja continuar?</p>\r\n\r\n\r\n            <div class=\"row\" style=\"padding-left: 30%;\" >\r\n\r\n              <div class=\"btncolumn\" style=\"color:white;\">\r\n                <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\" (click)=\"report()\">\r\n                </div>\r\n\r\n                <div class=\"btncolumn\" style=\"color:white;\">\r\n                <input style=\"margin-top: 0px; background-color: #cccccc; margin-left:20px;\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" data-dismiss=\"modal\">\r\n\r\n            </div>\r\n            </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  <!--/ Modal box-->\r\n  <div class=\"modal fade\" id=\"Sair\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n\r\n    <!-- Modal content no 1-->\r\n     <div class=\"modal-content\">\r\n       <div class=\"modal-header\">\r\n          <button #closeModalLogoutButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\r\n        <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Sair</h4>\r\n       </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"login-box-body\">\r\n          <p class=\"login-box-msg\" style=\"color: grey;margin-bottom:20px\">Você realmente deseja sair?</p>\r\n\r\n\r\n          <div class=\"row\" style=\"padding-left: 30%;\" >\r\n\r\n          <div class=\"btncolumn\" style=\"color:white;\">\r\n          <input style=\"margin-top: 0px;background-color:#cccccc\" type=\"submit\" class=\"btn   btn-flat\"  (click)=\"logout()\" value=\"Sim\" >\r\n          </div>\r\n\r\n          <div class=\"btncolumn\" style=\"color:white;\">\r\n          <input style=\"margin-top: 0px; background-color: #cccccc; margin-left:20px;\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" data-dismiss=\"modal\">\r\n\r\n          </div>\r\n          </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n <!-- Sidebar-->\r\n <div class=\"s-layout__sidebar\">\r\n  <nav class=\"s-sidebar__nav\" style=\"margin-top: 60px;\">\r\n    <ul style=\"width: 144px;height: auto;\">\r\n      <img [src]=\"server.user.image_profile\">\r\n      <br>\r\n      <div class=\"row\" style=\"margin-left: 20px; text-align: center;\">\r\n      <em class=\"text-center\">{{server.user.name}}</em>\r\n    </div>\r\n    <li>\r\n        <a class=\"s-sidebar__nav-link\" href=\"#\" data-target=\"#changeInfo\" data-toggle=\"modal\" (click)=\"clearInputs()\" >\r\n        <i class=\"fa fa-user\"></i><em>Editar Perfil</em>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a class=\"s-sidebar__nav-link\" routerLink=\"/post\">\r\n        <i class=\"fa fa-newspaper-o\"></i><em>Publicar</em>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a class=\"s-sidebar__nav-link\" href=\"#demo\" data-toggle=\"collapse\">\r\n        <i class=\"fa fa-pencil-square-o\"></i><em>Demandas</em>\r\n        </a>\r\n      </li>\r\n      <div id=\"demo\" class=\"collapse\">\r\n        <div style=\"margin-left: 60px; margin-top: 8px; padding-top: 40px;\"><a  style=\"text-decoration: none;\" routerLink=\"/madeByme\" >Criadas</a></div>\r\n          <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\"routerLink=\"/liked\" >Curtidas/<br>Comentadas</a></div>\r\n           </div>\r\n\r\n    </ul>\r\n  </nav>\r\n</div>\r\n<!--/ Sidebar-->\r\n  <!--Cabeçalho-->\r\n  <div class=\"s-layout__content\">\r\n    <div class=\"mar\">\r\n      <div class=\"card\" >\r\n        <div class=\"card-header textcenter\">\r\n          <h2 style=\"color:#0066cc; padding-top: 5px;\">Ranking</h2>\r\n          <h2 *ngIf=\"campusSelect\" style=\"color:#0066cc; padding-top:0; margin-top: -10px;\">{{campusName}}</h2>\r\n        </div>\r\n      </div>\r\n  <!--/Cabeçalho-->\r\n  <!--Card-->\r\n\r\n  <div class=\"card pointer\"  *ngFor=\"let post of posts; index as i\">\r\n    <div class=\"row\" >\r\n      <div class=\"col-md-4 firstcol column\" (click)=\"post.collapsed=!post.collapsed\">\r\n        <img [src]=\"post?.image_demand\" class=\"rounded\" style=\"width: 70px; height:70px;\"  vspace=\"5\">\r\n      </div>\r\n      <div class=\"col-md-4 secndcol column\" (click)=\"post.collapsed=!post.collapsed\">\r\n        <div class=\"row \" >\r\n         <a style=\"font-size:16px; text-decoration: none; color:#0066cc;\">{{post?.title}}</a>\r\n        </div>\r\n        <div class=\"row\" >\r\n          <a class=\"text-muted\" style=\"font-size:13px; text-decoration: none;\"> {{post?.created_date}}</a>&nbsp;\r\n          <br>\r\n          <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"!post.local==''\">\r\n            {{post?.local}}</i>\r\n            <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"post.local==''\">\r\n            {{post?.environment}} no {{post?.campus}}</i>\r\n        </div>\r\n        <div class=\"row\" (click)=\"post.collapsed=!post.collapsed\">\r\n          <ul class=\"list-inline\">\r\n\r\n            <div class=\"pull-left notLiked\">\r\n                <a (click)=\"like(post)\" class=\"pointer responsivo\" style=\"text-decoration: none;\" [ngClass]=\"{'liked': post.gave_like == 'true', 'notLiked': post.gave_like == 'false'}\"><i class=\"fa fa-thumbs-up\" style=\"font-size: 15px;\"></i>\r\n                {{post?.total_likes}}</a>\r\n              </div>\r\n\r\n                <div class=\"textl icon\" (click)=\"post.collapsed=!post.collapsed\">\r\n                  <a class=\"pointer icon responsivo2\" style=\"text-decoration: none;\" (click)=\"post.showcomments=!post.showcomments;\"><i class=\"fa fa-comments\"></i>\r\n                  {{post?.comments?.length}} comentários\r\n                  </a>\r\n                </div>\r\n                <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Aberta'\" (click)=\"post.collapsed=!post.collapsed\">\r\n                  <a class=\"icon pointer\" title=\"Demanda Aberta\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\" style=\"font-size:15px; margin-left:0px;\" >&nbsp; Aberta</i></a>\r\n                </div>\r\n\r\n                <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Reclassificada'\"(click)=\"post.collapsed=!post.collapsed\">\r\n                  <a class=\"icon pointer\" title=\"Demanda Reclassificada\"><i class=\"fa fa-refresh\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Reclassificada</i></a>\r\n                </div>\r\n\r\n                <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Resolvida'\" (click)=\"post.collapsed=!post.collapsed\">\r\n                  <a class=\"icon pointer\" title=\"Demanda Resolvida\"><i class=\"fa fa-check-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Resolvida</i></a>\r\n                </div>\r\n\r\n                <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Solução Inviável'\" (click)=\"post.collapsed=!post.collapsed\">\r\n                  <a class=\"icon pointer\" title=\"Não foi possível resolver\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Solução Inviável</i></a>\r\n                </div>\r\n\r\n                <div class=\"icon\" style=\"margin-left:3px;\" *ngIf=\"post.status=='Em Análise'\" (click)=\"post.collapsed=!post.collapsed\">\r\n                  <a class=\"icon pointer\" title=\"A demanda está sendo analisada\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Em Análise</i></a>\r\n                </div>\r\n\r\n\r\n          </ul>\r\n        </div>\r\n        </div>\r\n        <div class=\"col-md-4 thirdcol column\" >\r\n          <span class=\"fa-stack fa-lg\">\r\n            <i class=\"fa fa-circle fa-stack-2x icon-background\"></i>\r\n            <i class=\"fa fa-circle-thin fa-stack-2x\" style=\"color:blue\"></i>\r\n              <strong class=\"fa-stack-1x\" style=\"color:blue\">\r\n              {{i+1}}\r\n              </strong>\r\n          </span>\r\n        </div>\r\n    </div>\r\n  <!--Expanded card1-->\r\n  <div class=\"card\" style=\"padding-bottom:15px;\" *ngIf=\"post.collapsed\">\r\n    <div class=\"linha\"></div>\r\n    <div class=\"pull-right icon\">\r\n      <a data-toggle=\"modal\" data-target=\"#modalLabel\" (click)=\"reportId(post)\" class=\"icon\">\r\n        <i class=\"fa fa-ellipsis-v pointer\" style=\"font-size:20px; padding: 15px;padding-top: 20px;\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"card-header textleft\">\r\n      <div class=\"col-xs-2 card-header2\" style=\"width:auto; padding:1; height: 100%;\">\r\n        <img [src]=\"post?.image_profile\" style=\"object-fit:cover; border-radius: 50%;margin-top: 10px;\">\r\n      </div>\r\n      <p style=\"padding-top:5px;\">\r\n        <a>  {{post?.name}}</a>\r\n        publicou\r\n        <b>{{post?.title}}</b>\r\n        em<br>\r\n        <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"!post.local==''\">\r\n          {{post?.local}}</i>\r\n          <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"post.local==''\">\r\n          {{post?.environment}} no {{post?.campus}}</i>\r\n      </p>\r\n\r\n      <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Aberta'\">\r\n        <a class=\"icon pointer\" title=\"Demanda Aberta\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\" style=\"font-size:15px; margin-left:0px;\">&nbsp; Aberta</i></a>\r\n      </div>\r\n\r\n      <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Reclassificada'\">\r\n        <a class=\"icon pointer\" title=\"Demanda Reclassificada\"><i class=\"fa fa-refresh\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Reclassificada</i></a>\r\n      </div>\r\n\r\n      <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Resolvida'\">\r\n        <a class=\"icon pointer\" title=\"Demanda Resolvida\"><i class=\"fa fa-check-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Resolvida</i></a>\r\n      </div>\r\n\r\n      <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Solução Inviável'\">\r\n        <a class=\"icon pointer\" title=\"Não foi possível resolver\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Solução Inviável</i></a>\r\n      </div>\r\n\r\n      <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Em Análise'\">\r\n        <a class=\"icon pointer\" title=\"A demanda está sendo analisada\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Em Análise</i></a>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"card-body\" style=\"background-color:#fff; text-align: justify;\">\r\n      <img [src]=\"post?.image_demand\" style=\"width:90%; margin-left: 25px;\">\r\n      <p style=\"margin-left: 35px; padding-right:30px;\">\r\n      {{post?.description}}\r\n      </p>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n      <div class=\"linha\"></div>\r\n      <ul class=\"list-inline\">\r\n        <div class=\"pull-left notLiked\">\r\n            <a (click)=\"like(post)\" class=\"pointer\" style=\"text-decoration: none;\" [ngClass]=\"{'liked': post.gave_like == 'true', 'notLiked': post.gave_like == 'false'}\"><i class=\"fa fa-thumbs-up\" style=\"  margin-left: 20px;\r\n            font-size: 15px;\"></i>\r\n            {{post?.total_likes}}</a>\r\n          </div>\r\n          <div class=\"textl pull-right icon\">\r\n            <a class=\"pointer icon \" style=\"text-decoration: none; margin-right: 20px;\" (click)=\"post.showcomments=!post.showcomments;\"><i class=\"fa fa-comments\" ></i>\r\n            {{post?.comments?.length}} comentários\r\n            </a>\r\n          </div>\r\n\r\n      </ul>\r\n\r\n        </div>\r\n      </div>\r\n          <div class=\"linha2\"></div>\r\n    </div>\r\n    <div class=\"card-footer rolavel\" style=\"height:auto;max-height:300px; background:none;\" *ngIf=\"post.showcomments\">\r\n      <div class=\"card-header textleft\" *ngFor=\"let comment of post.answers;\">\r\n        <div class=\"col-xs-2\">\r\n          <img [src]=\"comment?.image_profile\" style=\"object-fit:cover;border-radius: 50%; margin-top: 10px;\">\r\n        </div>\r\n        <p class=\"borda\"  style=\" background: #0066cc; color:white;\">\r\n          <a class=\"pointer\" style=\"text-decoration: none;\"></a>{{comment?.name}}\r\n\r\n          <br>\r\n          {{comment?.comment}}\r\n        </p>\r\n    </div>\r\n          <div class=\"card-header textleft\" *ngFor=\"let comment of post.comments\" style=\"padding: 0px;\">\r\n            <div class=\"col-xs-2\" style=\"width:auto;\">\r\n              <img [src]=\"comment.image_profile\" style=\"object-fit:cover;border-radius: 50%; margin-top: 10px;\">\r\n            </div>\r\n            <p class=\"borda\" style=\"word-break: break-all;width:500px;\">\r\n              <a class=\"pointer\" style=\"text-decoration: none;\">{{comment.name}}</a>\r\n\r\n              <a class=\"pointer fa fa-trash pull-right\" style=\"padding:0; text-decoration: none;\" (click)=\"delComment(comment,post)\" *ngIf=\"comment.owner_comment == 'true'\"></a>\r\n              <br>\r\n              {{comment.comment}}\r\n            </p>\r\n        </div>\r\n        </div>\r\n  <div class=\"textleft inputWithIcon icon\" >\r\n    <textarea rows=\"1\" type=\"text\" class=\"form-control\" placeholder=\"Escreva seu comentário...\" style=\"border-radius: 10px;  resize: none;\" [(ngModel)]=\"comment\">  </textarea>\r\n  <a (click)=\"newComment(post, comment)\" class=\"pointer icon\" style=\"text-decoration: none;\"><i class=\"fa fa-mail-forward\"></i></a>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<!--/Card-->\r\n\r\n<script src=\"ranking.ts\"></script>\r\n"

/***/ }),

/***/ "./src/app/ranking/ranking.ts":
/*!************************************!*\
  !*** ./src/app/ranking/ranking.ts ***!
  \************************************/
/*! exports provided: RankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingComponent", function() { return RankingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/server */ "./src/providers/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Added

var RankingComponent = /** @class */ (function () {
    function RankingComponent(_router, server) {
        this._router = _router;
        this.server = server;
        this.posts = [];
        this.user = [];
        this.campusArray = [];
        this.campus = '';
        this.isEqual = true;
        this.campusSelect = false;
    }
    RankingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.getCampus().then(function (response) {
            response = response.json();
            for (var i = 0; i < response['dados'].length; i++) {
                _this.campusArray.push(response['dados'][i]);
            }
        });
        this.server.getRankingDemands('').then(function (response) {
            response = response.json();
            for (var i = 0; i < response['dados'].length; i++) {
                response['dados'][i].collapsed = false;
                _this.posts.push(response['dados'][i]);
            }
        });
    };
    RankingComponent.prototype.setCampus = function (e) {
        var _this = this;
        if (e == 10) {
            this.campus = '';
            this.campusSelect = false;
            this.campusName = '';
        }
        else {
            this.campus = e.id;
            this.campusSelect = true;
            this.campusName = e.campus;
        }
        this.server.getRankingDemands(this.campus).then(function (response) {
            response = response.json();
            _this.posts = [];
            for (var i = 0; i < response['dados'].length; i++) {
                response['dados'][i].collapsed = false;
                _this.posts.push(response['dados'][i]);
            }
        });
    };
    RankingComponent.prototype.like = function (post) {
        //Remove like
        post.total_likes = Number(post.total_likes);
        if (post.gave_like == "true") {
            this.server.unlikeDemand(post.demand_id).then(function (response) {
                post.total_likes -= 1;
                post.gave_like = "false";
            });
        }
        //Add like
        else {
            this.server.likeDemand(post.demand_id).then(function (response) {
                post.total_likes += 1;
                post.gave_like = "true";
            });
        }
    };
    RankingComponent.prototype.newComment = function (post, comment) {
        var _this = this;
        //Add comment
        this.server.commentDemand(post.demand_id, comment).then(function (response) {
            response = response.json();
            post.comments.push({ comment_id: response['dados'].comment_id, name: _this.server.user.name, image_profile: _this.server.user.image_profile, comment: comment, owner_comment: "true" });
        }).catch(function (error) {
        });
        this.comment = "";
    };
    RankingComponent.prototype.delComment = function (post, demand) {
        //Delete comment
        this.server.deleteComment(post.comment_id).then(function (response) {
            response = response.json();
            for (var i = demand.comments.length - 1; i >= 0; --i) {
                if (demand.comments[i].comment_id == post.comment_id) {
                    demand.comments.splice(i, 1);
                }
            }
        }).catch(function (error) {
        });
    };
    RankingComponent.prototype.report = function () {
        var _this = this;
        this.server.reportDemand(this.id).then(function (response) {
            _this.closeModalDangerButton.nativeElement.click();
            bootbox.alert({
                size: "small",
                title: "Atenção!",
                message: "A demanda foi denunciada. Você não conseguirá mais visualizá-la.",
                backdrop: true,
            });
            for (var i = _this.posts.length - 1; i >= 0; --i) {
                if (_this.posts[i].demand_id == _this.id) {
                    _this.posts.splice(i, 1);
                }
            }
        });
    };
    RankingComponent.prototype.reportId = function (post) {
        this.id = post.demand_id;
    };
    RankingComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    RankingComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.user.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    RankingComponent.prototype.updateInfo = function (user) {
        var _this = this;
        if (typeof user.email == 'undefined' || user.email == '') {
            this.user.email = this.server.user.email;
        }
        else {
            this.user.email = user.email;
        }
        this.server.updateInfo(this.user).then(function (response) {
            _this.closeModalChangeButton.nativeElement.click();
        }).catch(function (error) {
            var body = JSON.parse(error['_body']);
            if (body.hasOwnProperty('erro')) {
                switch (body.erro.update) {
                    case 6: {
                        bootbox.alert({
                            size: "small",
                            title: "Ops, algo aconteceu..",
                            message: "Email inválido.",
                            backdrop: true,
                        });
                        break;
                    }
                    default: {
                        bootbox.alert({
                            size: "small",
                            title: "Ops, algo aconteceu..",
                            message: "Erro.",
                            backdrop: true,
                        });
                    }
                }
            }
        });
        if (typeof this.user.image == 'undefined' || this.user.image == '') {
            this.server.user.image_profile = this.server.user.image_profile;
        }
        else {
            this.server.user.image_profile = this.user.image;
        }
    };
    RankingComponent.prototype.verifyPsw = function (user) {
        if (user.password != user.passwordconfirm || typeof user.password == 'undefined') {
            this.isEqual = false;
        }
        else {
            this.isEqual = true;
        }
    };
    RankingComponent.prototype.updatePsw = function (user) {
        var _this = this;
        if (typeof user.password == 'undefined' || typeof user.passwordconfirm == 'undefined') {
            bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "As senhas devem ser iguais e conter no mínimo 6 digitos.",
            });
        }
        else {
            this.server.updatePsw(user.password).then(function (response) {
                bootbox.alert({
                    size: "small",
                    title: "Atenção!",
                    message: "Senha alterada com sucesso.",
                });
                _this.closeModalChangeButton.nativeElement.click();
            }).catch(function (error) {
                var body = JSON.parse(error['_body']);
                if (body.hasOwnProperty('erro')) {
                    switch (body.erro.password) {
                        case 3: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Senha deve conter no mínimo 6 dígitos.",
                                backdrop: true,
                            });
                            break;
                        }
                        default: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Senha deve conter no mínimo 6 dígitos.",
                                backdrop: true,
                            });
                            break;
                        }
                    }
                }
            });
        }
    };
    RankingComponent.prototype.delete = function () {
        var _this = this;
        this.server.deleteAccount().then(function (response) {
            _this.closeModalChangeButton.nativeElement.click();
            bootbox.alert({
                size: "small",
                title: "Atenção",
                message: "Conta deletada com sucesso.",
                backdrop: true,
            });
            _this.logout();
        });
    };
    RankingComponent.prototype.clearInputs = function () {
        this.user = {};
        this.isEqual = true;
    };
    RankingComponent.prototype.logout = function () {
        this.server.token = null;
        this._router.navigate(['/home']);
        this.closeModalLogoutButton.nativeElement.click();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalDangerButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RankingComponent.prototype, "closeModalDangerButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalChangeButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RankingComponent.prototype, "closeModalChangeButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalLogoutButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RankingComponent.prototype, "closeModalLogoutButton", void 0);
    RankingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ranking',
            template: __webpack_require__(/*! ./ranking.html */ "./src/app/ranking/ranking.html"),
            styles: [__webpack_require__(/*! ./ranking.css */ "./src/app/ranking/ranking.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers_server__WEBPACK_IMPORTED_MODULE_2__["ServerProvider"]])
    ], RankingComponent);
    return RankingComponent;
}());



/***/ }),

/***/ "./src/app/solved/solved.css":
/*!***********************************!*\
  !*** ./src/app/solved/solved.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {cursor: pointer;}\r\n/*CSS PERFIL*/\r\n.principal {background-color:  rgb(242, 244, 247);}\r\n.responsivo{\r\n   margin-left: 5px;\r\n}\r\n.responsivo2{\r\n   margin-left: 20px;\r\n}\r\n.liked{\r\n  color: #0066cc;\r\n}\r\n.notLiked{\r\n  color:gray;\r\n}\r\n.icon{\r\n  color: gray;\r\n}\r\n.icon a:hover,\r\n.notLiked a:hover{color: #0066cc;}\r\n/* Create two equal columns that floats next to each other */\r\n.firstcol{\r\n    text-align: right;\r\n    width: 20%;\r\n\r\n}\r\n.secndcol{\r\n    text-align: left;\r\n    width: 70%;\r\n\r\n}\r\n.thirdcol{\r\n  text-align: left;\r\n  width: 10%;\r\n}\r\n.inputWithIcon textarea[type=\"text\"] {\r\n  padding-left: 40px;\r\n}\r\n.inputWithIcon {\r\n  position: relative;\r\n}\r\n.inputWithIcon i {\r\n  text-align: right;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0px;\r\n  padding: 9px 8px;\r\n  transition: 0.3s;\r\n  border-radius: 50px;\r\n}\r\n.inputWithIcon textarea[type=\"text\"]:focus + i {\r\n  color: dodgerBlue;\r\n}\r\ndiv.center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 65%;\r\n  }\r\n.btncolumn1 {\r\n  float: left;\r\n  width: 20%;\r\n  padding: 10px;\r\n  text-align: right;\r\n  }\r\n.btncolumn2 {\r\n  float: left;\r\n  width: 80%;\r\n  padding: 10px;\r\n  text-align: left;\r\n  }\r\n@media screen and (max-width: 991px) {\r\n\r\n    .column {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 10px;\r\n\r\n    }\r\n    .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  .firstcol{\r\n      text-align: center;\r\n\r\n  }\r\n  .secndcol{\r\n    text-align: center;\r\n  }\r\n  .thirdcol{\r\n    text-align: center;\r\n  }\r\n\r\n  .responsivo{\r\n     margin-left: 100px;\r\n  }\r\n\r\n  .responsivo2{\r\n     margin-left: 31px;\r\n  }\r\n\r\n\r\n  }\r\n@media screen and (max-width: 1024px) {\r\n    div.center {\r\n      margin-left: -13px;\r\n      margin-top: -60px;\r\n      width: 30%;\r\n\r\n    }\r\n  }\r\nbody {\r\n\t\tfont-size: 15px;\r\n    line-height: 1.52;\r\n    color: #717f86;\r\n    font-size: 16px;\r\n\t  font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n\t\tbackground-color: pink;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    padding: 0px;\r\n  \tmargin: 10px 5px;\r\n  \tpadding: 10px 15px;\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.text-dec{\r\n\tfont-size: 26px;\r\n\tpadding: 10px 20px;\r\n  margin: 2px 0;\r\n\ttext-transform: uppercase;\r\n  color: #fff;\r\n\r\n}\r\n.text-border{\r\n\tborder: 5px solid #0066cc;\r\n\tdisplay: inline-block;\r\n\tmargin-top: 90px;\r\n}\r\n.intro-para{\r\n\tfont-family: 'Alegreya Sans', sans-serif;\r\n\tfont-size: 45px;\r\n\tcolor: #fff;\r\n\tmargin-top: 10px;\r\n}\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n@media (max-width: 568px) {\r\n.modal-sm{\r\n        width: 320px;\r\n        transition: all 0.3s;\r\n        padding-left: 0px;\r\n    }\r\n  }\r\n.btn-green, .btn-green:hover{\r\n    background-color:rgb(101, 191, 91);\r\n    color: #fff;\r\n}\r\n/******************\r\nSidebar\r\n******************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n   box-sizing: border-box;\r\n}\r\nem {\r\n   font-style: normal;\r\n\r\n}\r\n/* Layout */\r\n.s-layout {\r\n   display: flex;\r\n   width: 100%;\r\n   min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n   flex: 1;\r\n}\r\n/* Sidebar */\r\n.s-sidebar__nav {\r\n  position: fixed;\r\n  top: 0;\r\n  overflow: hidden;\r\n  transition: all .3s ease-in;\r\n  height: 100%;\r\n  z-index: 1;\r\n  background:linear-gradient(#0066cc 30%, rgb(101,191,91));;\r\n\r\n}\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__nav:focus,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav {\r\nleft: 0;\r\n}\r\n.s-sidebar__nav ul {\r\n  position: absolute;\r\n  left: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 15em;\r\n  top: 4em;\r\n  }\r\n.s-sidebar__nav ul li {\r\n  width: 100%;\r\n  margin: 10px;\r\n\r\n  }\r\n.s-sidebar__nav-link {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  color:white;\r\n  margin: 0;\r\n  }\r\n.s-sidebar__nav-link em {\r\n    position: absolute;\r\n    left: 3.5em;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    }\r\n.s-sidebar__nav-link > i , .s-sidebar__nav-link a{\r\n    position: absolute;\r\n    top: 0;\r\n    width: 4em;\r\n    }\r\n.s-sidebar__nav-link > i::before {\r\n    position: absolute;\r\n    top: 90%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    }\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n   .s-layout__content {\r\n      margin-left: 4em;\r\n   }\r\n\r\n\r\n   /* Sidebar */\r\n\r\n   .s-sidebar__nav {\r\n      width: 4em;\r\n      left: 0;\r\n   }\r\n\r\n   .s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover ,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n   width: 11em;\r\n   color: white;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\n top: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a {\r\n color: transparent;\r\n}\r\n\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover{\r\n color: rgb(101, 191, 91);\r\n}\r\n\r\n}\r\n@media (min-width: 68em) {\r\n   .s-layout__content {\r\n      margin-left: 15em;\r\n   }\r\n\r\n   .s-sidebar__nav {\r\n      width: 11em;\r\n   }\r\n\r\n   .s-sidebar__nav ul {\r\n      top: 1.3em;\r\n   }\r\n   .s-sidebar__nav em,\r\n   .s-sidebar__nav .collapse.in a{\r\n    color: white;\r\n    }\r\n    .s-sidebar__nav-link em:hover,\r\n    .s-sidebar__nav-link li:hover{\r\n        color: rgb(101, 191, 91);\r\n    }\r\n}\r\n/**********************\r\nFeed\r\n***********************/\r\n@media screen and (max-width: 1024px) {\r\n  div.center {\r\n    margin-left: -13px;\r\n    margin-top: -60px;\r\n    width: 30%;\r\n\r\n  }\r\n}\r\n.rounded{\r\n\r\n   border-radius: 50%;\r\n   width:70px;\r\n   height:70px;\r\n\r\n  }\r\n.rounded2{\r\n  border-radius: 50%;\r\n  width:30px;\r\n  height:30px;\r\n\r\n  }\r\n.card{\r\n    background-color:#fff;\r\n    margin-top:20px;\r\n    margin-bottom:-15px;\r\n    border-radius: 10px;\r\n     }\r\n.card .card-header{\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  }\r\n.card .card-header img{\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n.card .card-header2 img{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n.card .card-footer{\r\n    padding-top: 10px;\r\n    padding-bottom: 20px;\r\n    }\r\n.card-info{\r\n    margin-top:30px;\r\n    border-radius: 10%;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n  }\r\n.linha {\r\n  margin-top: 18px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n.linha2 {\r\n  margin-bottom: 12px;\r\n  width: 100%;\r\n  border-bottom: 1.3px solid #ced4da;\r\n}\r\n.borda{\r\n  border-width: 1px 1px 1px 1px; /* aqui, cada lado possui uma borda de largura diferente */\r\n   /* estilos de borda diferentes para cima-baixo e esquerda-direita */\r\n    border-color: #000 #090 #900 #009; /* uma cor de borda para cada lado */\r\n    padding: 5px;\r\n    background-color:rgb(242,244,247);\r\n    border-radius: 18px;\r\n}\r\n.btn-search{\r\ncolor:#28a745;\r\nfloat:right;\r\nborder-radius:50%;\r\njustify-content: center;\r\nmargin-left: 5px;\r\nalign-items: center;\r\ndisplay: flex;\r\nwidth:35px;\r\nheight: 35px;\r\n    background-color:#fff;\r\n  }\r\n.search-txt{\r\nborder-radius:10px;\r\npadding: 0;\r\ncolor:green;\r\nfont-size: 16px;\r\ntransition:0.4s;\r\nwidth:300px;\r\nline-height: 30px;\r\n}\r\n.comentarios{\r\n\r\nborder:solid 0px ;\r\nbackground-color: #fff;\r\npadding-bottom: 10px;\r\n  }\r\n.textinfo{\r\n\r\n    color:  #868e96;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textlike{\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 20px;\r\n  }\r\n.textleft2{\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.textleft3{\r\n    text-align: left;\r\n\r\n\r\n    font-family: arial;\r\n    font-size: 15px;\r\n  }\r\n.rolavel {\r\n  height: 1000px;\r\n\r\n  overflow-y: scroll;\r\n    background-color: rgb(242,244,247);\r\n      overflow-x: hidden;\r\n\r\n\r\n\r\n}\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n.section-padding{\r\n\tpadding: 60px 0px;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: Open Sans, sans-serif;\r\n    font-weight: 700;\r\n    color: #4B4B4C;\r\n}\r\n/***********************************\r\nNavigation bar\r\n************************************/\r\n/*cor da barra de navegação*/\r\n.navbar-default {\r\n    background-color: #0066cc;\r\n    width: 100%;\r\n}\r\n/*caracteristicas do conteudo da barra*/\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    margin: 10px 5px;\r\n      padding: 10px 15px;\r\n\r\n}\r\n/*Quando passa o mouse*/\r\n.navbar-default .navbar-nav > li > a:hover\r\n{\r\n\tcolor: rgb(101, 191, 91);\r\n}\r\n/*Quando clica*/\r\n.navbar-nav .active a{\r\n    background: none !important;\r\n    color: rgb(101, 191, 91) !important;\r\n    outline: none;\r\n}\r\n/***********************************\r\nBanner\r\n************************************/\r\n.modal-dialog {\r\n    width: 600px;\r\n    margin: 150px auto;\r\n    position: relative;\r\n}\r\n.modal-content h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.login-box-body {\r\n    padding: 15px 30px;\r\n}\r\n.login-box-msg, .register-box-msg {\r\n    margin: 0px;\r\n    text-align: center;\r\n    padding: 0px 20px 10px;\r\n}\r\n.modal-sm {\r\n    width: 400px;\r\n}\r\n/***********************************\r\n Sidebar\r\n************************************/\r\n/* Primary Styles */\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\nem {\r\n  font-style: normal;\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n.s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\nem:hover,\r\n.s-sidebar__nav .collapse.in a:hover {\r\n color: rgb(101, 191, 91);\r\n}\r\n/* Layout */\r\n.s-layout {\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n.s-layout__content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n/* Mobile First */\r\n@media (min-width: 10em) {\r\n  .s-layout__content {\r\n     margin-left: 6em;\r\n     align-content: center;\r\n     margin-right: 3em;\r\n    }\r\n    .mar{\r\n      margin-top:60px;\r\n      align-items: center;\r\n      text-align: center;\r\n      min-width: 260px;\r\n      max-width: 500px;\r\n\r\n      margin-right: -50px;\r\n\r\n}\r\n.list-inline{\r\n\r\n  font-size: 12px;\r\n}\r\n  /* Sidebar */\r\n\r\n  ul > img{\r\nwidth: 3em;\r\nheight:3em;\r\nborder-radius: 50%;\r\nmargin-left: 8px;\r\n}\r\n.card-info{\r\n  display: none;\r\n}\r\n.card{\r\n  max-width: 550px;\r\n  height: auto;\r\n  min-width: 260px;\r\n}\r\n.card-header, .card-body{\r\n  font-size: 10px;\r\n}\r\n.s-sidebar__nav {\r\n  width: 4em;\r\n  left: 0;\r\n}\r\n\r\n.s-sidebar__nav ul{\r\ntop: 1.3em;\r\n}\r\n.s-sidebar__nav-link{\r\n  top: 2.3em;\r\n  }\r\n.s-sidebar__nav:hover em,\r\n.s-sidebar__nav:focus em,\r\n.s-sidebar__nav:hover,\r\n.s-sidebar__trigger:hover + .s-sidebar__nav,\r\n.s-sidebar__trigger:focus + .s-sidebar__nav\r\n\r\n{\r\n  width: 11em;\r\n  color: white;\r\n\r\n}\r\n.s-sidebar__nav:hover .collapse.in a,\r\n.s-sidebar__nav:focus .collapse.in a{\r\n  color: white;\r\n}\r\n.s-sidebar__nav:hover img,\r\n.s-sidebar__nav:focus img {\r\nwidth: 9em;\r\nheight: 9em;\r\nmargin-left: 15px;\r\n}\r\n.s-sidebar__nav:hover ul,\r\n.s-sidebar__nav:focus ul\r\n{\r\ntop: 1.3em;\r\n}\r\n\r\n.s-sidebar__nav em,\r\n.s-sidebar__nav .collapse.in a{\r\ncolor: transparent;\r\n}\r\n.s-sidebar__nav-link em:hover,\r\n.s-sidebar__nav-link a:hover,\r\n.s-sidebar__nav .collapse.in a:hover{\r\ncolor: rgb(101, 191, 91);\r\n}\r\n}\r\n@media (min-width: 58em) {\r\n  .s-layout__content {\r\n     margin-left: 15em;\r\n     margin-right: 15em;\r\n\r\n  }\r\n  .mar{\r\n    min-width: 500px;\r\n\r\n}\r\n  .card{\r\n    width: 550px;\r\n    height: auto;\r\n  }\r\n  .card-header, .card-body{\r\n    font-size: 16px;\r\n  }\r\n  .s-sidebar__nav {\r\n    width: 11em;\r\n }\r\n .list-inline{\r\n\r\n   font-size: 14px;\r\n }\r\n .s-sidebar__nav ul {\r\n    top: 1.3em;\r\n }\r\n .s-sidebar__nav em,\r\n .s-sidebar__nav .collapse.in a{\r\n  color: white;\r\n  }\r\n  .s-sidebar__nav-link em:hover,\r\n  .s-sidebar__nav-link li:hover,\r\n  .s-sidebar__nav .collapse.in a:hover\r\n  {\r\n      color: rgb(101, 191, 91);\r\n  }\r\n    ul > img{\r\n       width: 9em;\r\n       height:9em;\r\n       border-radius: 50%;\r\n       margin-left: 15px;\r\n       }\r\n}\r\n"

/***/ }),

/***/ "./src/app/solved/solved.html":
/*!************************************!*\
  !*** ./src/app/solved/solved.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\r\n  <!--Navigation bar-->\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a routerLink=\"/feed\" style=\"margin-left: 10px\"><img src=\"./assets/img/logo.png\" width=\"60\" height=\"60\" alt=\"\" ></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 10px\">\r\n        <li><a routerLink=\"/feed\">Feed</a></li>\r\n        <li><a routerLink=\"/ranking\">Ranking</a></li>\r\n        <li><a data-target=\"#Sair\" data-toggle=\"modal\"  class=\"pointer\">Logout</a></li>\r\n\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--/Navigation bar-->\r\n <!--modal editar perfil-->\r\n <div class=\"modal fade\" id=\"changeInfo\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button #closeModalChangeButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Editar Perfil</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"login-box-body\">\r\n          <div>\r\n            <img [src]=\"server.user.image_profile\" class=\"rounded\" style=\"width: 80px; height:80px; margin-left: 38%;\">\r\n          </div>\r\n          <p class=\"login-box-msg\" style=\"color: grey;\">Insira uma foto</p>\r\n          <form action=\"#\" method=\"post\" name=\"changeInfo\" style=\"width: 350px; margin-left:-20px;\" >\r\n          <input class=\"form-control\" type=\"file\" name=\"image\" accept=\"image/*\" (change)=\"changeListener($event)\" [(ngModel)]=\"user.image\"/>\r\n          <div class=\"form-group\" style=\"margin-bottom:0rem\">\r\n           <!----- username -------------->\r\n           <label for=\"nome\" style=\"font-size: 1.3rem\">Nome completo:</label><br>\r\n           <p style=\"font-size: 1.3rem\">{{server.user.name}}</p>\r\n         </div>\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- matricula -------------->\r\n           <label for=\"matricula\" style=\"font-size: 1.3rem\">Matrícula:</label>\r\n           <p style=\"font-size: 1.3rem\">{{server.user.registry}}</p>\r\n         </div>\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n          <label for=\"rg\" style=\"font-size: 1.3rem;\">Número RG:</label><br>\r\n          <p style=\"font-size: 1.3rem\">{{server.user.identity}}</p>\r\n         </div>\r\n\r\n\r\n       <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n         <label for=\"campoData\" style=\"font-size: 1.3rem\">Data de nascimento:</label>\r\n         <p style=\"font-size: 1.3rem\">{{server.user.date_birth}}</p>\r\n       </div>\r\n\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- username -------------->\r\n           <label for=\"email\" style=\"font-size: 1.3rem\">E-mail</label>\r\n           <input class=\"form-control\" placeholder=\"Novo email\" id=\"email\" type=\"email\" name=\"email\" required=\"\" [(ngModel)]=\"user.email\" value=\"server.user.email\" />\r\n           <span style=\"display:none; font-weight:bold; position:absolute;color: red;position: absolute;padding:4px;font-size: 11px;background-color:rgba(128, 128, 128, 0.26);z-index: 17;  right: 27px; top: 5px;\" id=\"span_loginid\"></span>\r\n\r\n         </div>\r\n         <div class=\"form-group\" style=\"margin-bottom:0rem\">                    <!----- password -------------->\r\n          <label style=\"font-size: 1.3rem\">Senha</label>\r\n              <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" name=\"password\" required=\"\" [(ngModel)]=\"user.password\" #password1=\"ngModel\">\r\n             </div>\r\n            <div class=\"form-group\">                    <!----- password -------------->\r\n              <label style=\"font-size: 1.3rem\">Confirme a senha</label>\r\n              <input class=\"form-control\" placeholder=\"Repita senha\" type=\"password\" name=\"passwordconfirm\" required=\"\" [(ngModel)]=\"user.passwordconfirm\" #password2=\"ngModel\" (keyup)=\"verifyPsw(user)\">\r\n              <span style=\"color: red; font-size: 11px;\" *ngIf=\"!isEqual\">\r\n              As senhas devem ser iguais\r\n              </span>\r\n              <br>\r\n          <a  (click)=\"updatePsw(user)\">\r\n            <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Alterar Senha</label></a>\r\n            <br>\r\n\r\n          <a  href=\"#excluir\" data-toggle=\"collapse\">\r\n          <label style=\"font-size: 1.3rem; color:#717f86; margin-top: 4px;\" class=\"pointer\">Excluir conta</label></a>\r\n\r\n          <div id=\"excluir\" class=\"collapse\">\r\n\r\n            <label style=\"font-size: 1.3rem;\">Tem certeza que deseja excluir sua conta?</label><br>\r\n\r\n            <div class=\"row\">\r\n\r\n            <div class=\"btncolumn1\" style=\"color:white;\">\r\n            <input style=\"margin-top: 0px;background-color: #cccccc\"type=\"submit\" class=\"btn   btn-flat\" value=\"Sim\" (click)=\"delete()\">\r\n            </div>\r\n\r\n            <div class=\"btncolumn2\" style=\"color:white;\">\r\n            <input style=\"margin-top: 0px; background-color: #cccccc\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" href=\"#excluir\" data-toggle=\"collapse\">\r\n\r\n            </div>\r\n            </div>\r\n\r\n          </div>\r\n           <input style=\"margin-top: 20px;\"type=\"submit\" class=\"btn btn-green btn-block btn-flat\" value=\"Alterar\" (click)=\"updateInfo(user)\">\r\n\r\n         </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--/modal editar perfil-->\r\n  <div class=\"modal fade\" id=\"Sair\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n\r\n    <!-- Modal content no 1-->\r\n     <div class=\"modal-content\">\r\n       <div class=\"modal-header\">\r\n          <button #closeModalLogoutButton type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\r\n        <h4 class=\"modal-title text-center form-title\" style=\"color: #0066cc;\">Sair</h4>\r\n       </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"login-box-body\">\r\n          <p class=\"login-box-msg\" style=\"color: grey;margin-bottom:20px\">Você realmente deseja sair?</p>\r\n\r\n\r\n          <div class=\"row\" style=\"padding-left: 30%;\" >\r\n\r\n          <div class=\"btncolumn\" style=\"color:white;\">\r\n          <input style=\"margin-top: 0px;background-color:#cccccc\" type=\"submit\" class=\"btn   btn-flat\"  (click)=\"logout()\" value=\"Sim\" >\r\n          </div>\r\n\r\n          <div class=\"btncolumn\" style=\"color:white;\">\r\n          <input style=\"margin-top: 0px; background-color: #cccccc; margin-left:20px;\"type=\"submit\" class=\"btn btn-flat\" value=\"Não\" data-dismiss=\"modal\">\r\n\r\n          </div>\r\n          </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- Sidebar-->\r\n  <div class=\"s-layout__sidebar\">\r\n    <nav class=\"s-sidebar__nav\" style=\"margin-top: 60px;\">\r\n      <ul style=\"width: 144px;height: auto;\">\r\n        <img [src]=\"server.user.image_profile\">\r\n        <br>\r\n        <div class=\"row\" style=\"margin-left: 20px; text-align: center;\">\r\n        <em class=\"text-center\">{{server.user.name}}</em>\r\n      </div>\r\n       <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#\" data-target=\"#changeInfo\" data-toggle=\"modal\" (click)=\"clearInputs()\" >\r\n          <i class=\"fa fa-user\"></i><em>Editar Perfil</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" routerLink=\"/post\">\r\n          <i class=\"fa fa-newspaper-o\"></i><em>Publicar</em>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"s-sidebar__nav-link\" href=\"#demo\" data-toggle=\"collapse\">\r\n          <i class=\"fa fa-pencil-square-o\"></i><em>Demandas</em>\r\n          </a>\r\n        </li>\r\n        <div id=\"demo\" class=\"collapse\">\r\n          <div style=\"margin-left: 60px; margin-top: 8px; padding-top: 40px;\"><a  style=\"text-decoration: none;\" routerLink=\"/madeByme\" >Criadas</a></div>\r\n            <div style=\"margin-left: 60px; margin-top: 8px;\"><a  style=\"text-decoration: none;\"routerLink=\"/liked\" >Curtidas/<br>Comentadas</a></div>\r\n             </div>\r\n\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <!--/ Sidebar-->\r\n  <!--Card-->\r\n <div class=\"s-layout__content\">\r\n  <div class=\"mar\">\r\n    <div class=\"card\" style=\"padding-bottom:15px;\" *ngFor=\"let post of posts \">\r\n      <div class=\"pull-right icon\">\r\n        <a data-toggle=\"modal\" data-target=\"#modalLabel\" (click)=\"reportId(post)\" class=\"icon\">\r\n          <i class=\"fa fa-ellipsis-v pointer\" style=\"font-size:20px; padding: 15px;padding-top: 20px;\"></i>\r\n        </a>\r\n      </div>\r\n      <div class=\"card-header textleft\">\r\n        <div class=\"col-xs-2 card-header2\" style=\"width:auto; padding:1; height: 100%;\">\r\n          <img [src]=\"post?.image_profile\" style=\"object-fit:cover; border-radius: 50%; margin-top:10px; margin-top:8px;\">\r\n        </div>\r\n        <div class=\"container\" style=\"width:237.33;\">\r\n\r\n          <a style=\"text-decoration:none;textleft\">  {{post?.name}}</a>\r\n          publicou\r\n          <b>{{post?.title}}</b><br>\r\n          <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"!post.local==''\">\r\n            {{post?.local}}</i>\r\n            <i class=\"fa fa-map-marker\" style=\"color:gray\" name=\"pin\" *ngIf=\"post.local==''\">\r\n            {{post?.environment}} no {{post?.campus}}</i>\r\n\r\n        </div>\r\n\r\n        <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Aberta'\">\r\n          <a class=\"icon pointer\" title=\"Demanda Aberta\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\" style=\"font-size:15px; margin-left:0px;\">&nbsp; Aberta</i></a>\r\n        </div>\r\n\r\n        <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Reclassificada'\">\r\n          <a class=\"icon pointer\" title=\"Demanda Reclassificada\"><i class=\"fa fa-refresh\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Reclassificada</i></a>\r\n        </div>\r\n\r\n        <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Resolvida'\">\r\n          <a class=\"icon pointer\" title=\"Demanda Resolvida\"><i class=\"fa fa-check-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Resolvida</i></a>\r\n        </div>\r\n\r\n        <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Solução Inviável'\">\r\n          <a class=\"icon pointer\" title=\"Não foi possível resolver\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Solução Inviável</i></a>\r\n        </div>\r\n\r\n        <div class=\"icon\" style=\"text-align:center\" *ngIf=\"post.status=='Em Análise'\">\r\n          <a class=\"icon pointer\" title=\"A demanda está sendo analisada\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"font-size:15px;\">&nbsp; Em Análise</i></a>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n      <div class=\"card-body\" style=\"background-color:#fff; ;\">\r\n        <img [src]=\"post?.image_demand\" style=\"width:90%\">\r\n        <div style=\"background:none;\" >\r\n        <p  style=\"text-align:left; margin-left: 50px; margin-top: 5px; overflow-wrap: break-word;width:460px; \">\r\n        {{post?.description}}<br>\r\n        </p>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n        <div class=\"linha\"></div>\r\n            <ul class=\"list-inline\">\r\n              <div class=\"pull-left notLiked\">\r\n                  <a (click)=\"like(post)\" class=\"pointer\" style=\"text-decoration: none;\" [ngClass]=\"{'liked': post.gave_like == 'true', 'notLiked': post.gave_like == 'false'}\"><i class=\"fa fa-thumbs-up\" style=\"  margin-left: 20px;\r\n                  font-size: 15px;\"></i>\r\n                  {{post?.total_likes}}</a>\r\n                </div>\r\n                <div class=\"textl pull-right icon\">\r\n                  <a class=\"pointer icon \" style=\"text-decoration: none; margin-right: 20px;\" (click)=\"post.showcomments=!post.showcomments;\"><i class=\"fa fa-comments\"></i>\r\n                  {{post?.comments?.length}} comentários\r\n                  </a>\r\n                </div>\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n            <div class=\"linha2\"></div>\r\n    </div>\r\n      <div class=\"card-footer rolavel\" style=\"height:auto;max-height:300px; background:none;\" *ngIf=\"post.showcomments\">\r\n        <div class=\"card-header textleft\" *ngFor=\"let comment of post.answers;\">\r\n          <div class=\"col-xs-2\">\r\n            <img [src]=\"comment?.image_profile\" style=\"object-fit:cover;border-radius: 50%; margin-top: 10px;\">\r\n          </div>\r\n          <p class=\"borda\"  style=\" background: #0066cc; color:white;\">\r\n            <a class=\"pointer\" style=\"text-decoration: none;\"></a>{{comment?.name}}\r\n    \r\n            <br>\r\n            {{comment?.comment}}\r\n          </p>\r\n      </div>\r\n            <div class=\"card-header textleft\" *ngFor=\"let comment of post.comments\" style=\"padding: 0px;\">\r\n              <div class=\"col-xs-2\" style=\"width:auto;\">\r\n                <img [src]=\"comment.image_profile\" style=\"object-fit:cover;border-radius: 50%; margin-top: 10px;\">\r\n              </div>\r\n              <p class=\"borda\" style=\"word-break: break-all;width:500px;\">\r\n                <a class=\"pointer\" style=\"text-decoration: none;\">{{comment.name}}</a>\r\n    \r\n                <a class=\"pointer fa fa-trash pull-right\" style=\"padding:0; text-decoration: none;\" (click)=\"delComment(comment,post)\" *ngIf=\"comment.owner_comment == 'true'\"></a>\r\n                <br>\r\n                {{comment.comment}}\r\n              </p>\r\n          </div>\r\n          </div>\r\n    <div class=\"textleft inputWithIcon icon\" >\r\n    <textarea rows=\"1\" type=\"text\" class=\"form-control\" placeholder=\"Escreva seu comentário...\" style=\"border-radius: 10px;  resize: none;\" [(ngModel)]=\"comment\">  </textarea>\r\n      <a (click)=\"newComment(post, comment)\" class=\"pointer icon\" style=\"text-decoration: none;\"><i class=\"fa fa-mail-forward\"></i></a>\r\n    </div>\r\n </div>\r\n </div>\r\n</div>\r\n  <!--/ wrapper-->\r\n  <script src=\"solved.ts\"></script>\r\n"

/***/ }),

/***/ "./src/app/solved/solved.ts":
/*!**********************************!*\
  !*** ./src/app/solved/solved.ts ***!
  \**********************************/
/*! exports provided: SolvedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolvedComponent", function() { return SolvedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/server */ "./src/providers/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Added

var SolvedComponent = /** @class */ (function () {
    function SolvedComponent(_router, server) {
        this._router = _router;
        this.server = server;
        this.posts = [];
        this.user = [];
        this.isEqual = true;
    }
    SolvedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.seeDemand().then(function (response) {
            response = response.json();
            for (var i = 0; i < response['dados'].length; i++)
                _this.posts.push(response['dados'][i]);
        });
    };
    SolvedComponent.prototype.like = function (post) {
        //Remove like
        post.total_likes = Number(post.total_likes);
        if (post.gave_like == "true") {
            this.server.unlikeDemand(post.demand_id).then(function (response) {
                post.total_likes -= 1;
                post.gave_like = "false";
            });
        }
        //Add like
        else {
            this.server.likeDemand(post.demand_id).then(function (response) {
                post.total_likes += 1;
                post.gave_like = "true";
            });
        }
    };
    SolvedComponent.prototype.newComment = function (post, comment) {
        var _this = this;
        //Add comment
        this.server.commentDemand(post.demand_id, comment).then(function (response) {
            response = response.json();
            post.comments.push({ comment_id: response['dados'].comment_id, name: _this.server.user.name, image_profile: _this.server.user.image_profile, comment: comment, owner_comment: "true" });
        }).catch(function (error) {
        });
        this.comment = "";
    };
    SolvedComponent.prototype.delComment = function (post, demand) {
        //Delete comment
        this.server.deleteComment(post.comment_id).then(function (response) {
            response = response.json();
            for (var i = demand.comments.length - 1; i >= 0; --i) {
                if (demand.comments[i].comment_id == post.comment_id) {
                    demand.comments.splice(i, 1);
                }
            }
        }).catch(function (error) {
        });
    };
    SolvedComponent.prototype.report = function () {
        var _this = this;
        this.server.reportDemand(this.id).then(function (response) {
            _this.closeModalDangerButton.nativeElement.click();
            bootbox.alert({
                size: "small",
                title: "Atenção!",
                message: "A demanda foi denunciada. Você não conseguirá mais visualizá-la.",
                backdrop: true,
            });
            for (var i = _this.posts.length - 1; i >= 0; --i) {
                if (_this.posts[i].demand_id == _this.id) {
                    _this.posts.splice(i, 1);
                }
            }
        });
    };
    SolvedComponent.prototype.reportId = function (post) {
        this.id = post.demand_id;
    };
    SolvedComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    SolvedComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.user.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    SolvedComponent.prototype.updateInfo = function (user) {
        var _this = this;
        if (typeof user.email == 'undefined' || user.email == '') {
            this.user.email = this.server.user.email;
        }
        else {
            this.user.email = user.email;
        }
        this.server.updateInfo(this.user).then(function (response) {
            _this.closeModalChangeButton.nativeElement.click();
        }).catch(function (error) {
            var body = JSON.parse(error['_body']);
            if (body.hasOwnProperty('erro')) {
                switch (body.erro.update) {
                    case 6: {
                        bootbox.alert({
                            size: "small",
                            title: "Ops, algo aconteceu..",
                            message: "Email inválido.",
                            backdrop: true,
                        });
                        break;
                    }
                    default: {
                        bootbox.alert({
                            size: "small",
                            title: "Ops, algo aconteceu..",
                            message: "Erro.",
                            backdrop: true,
                        });
                    }
                }
            }
        });
        if (typeof this.user.image == 'undefined' || this.user.image == '') {
            this.server.user.image_profile = this.server.user.image_profile;
        }
        else {
            this.server.user.image_profile = this.user.image;
        }
    };
    SolvedComponent.prototype.verifyPsw = function (user) {
        if (user.password != user.passwordconfirm || typeof user.password == 'undefined') {
            this.isEqual = false;
        }
        else {
            this.isEqual = true;
        }
    };
    SolvedComponent.prototype.updatePsw = function (user) {
        var _this = this;
        if (typeof user.password == 'undefined' || typeof user.passwordconfirm == 'undefined') {
            bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "As senhas devem ser iguais e conter no mínimo 6 digitos.",
            });
        }
        else {
            this.server.updatePsw(user.password).then(function (response) {
                bootbox.alert({
                    size: "small",
                    title: "Atenção!",
                    message: "Senha alterada com sucesso.",
                });
                _this.closeModalChangeButton.nativeElement.click();
            }).catch(function (error) {
                var body = JSON.parse(error['_body']);
                if (body.hasOwnProperty('erro')) {
                    switch (body.erro.password) {
                        case 3: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Senha deve conter no mínimo 6 dígitos.",
                                backdrop: true,
                            });
                            break;
                        }
                        default: {
                            bootbox.alert({
                                size: "small",
                                title: "Ops, algo aconteceu..",
                                message: "Senha deve conter no mínimo 6 dígitos.",
                                backdrop: true,
                            });
                            break;
                        }
                    }
                }
            });
        }
    };
    SolvedComponent.prototype.delete = function () {
        var _this = this;
        this.server.deleteAccount().then(function (response) {
            _this.closeModalChangeButton.nativeElement.click();
            bootbox.alert({
                size: "small",
                title: "Atenção",
                message: "Conta deletada com sucesso.",
                backdrop: true,
            });
            _this.logout();
        });
    };
    SolvedComponent.prototype.clearInputs = function () {
        this.user = {};
        this.isEqual = true;
    };
    SolvedComponent.prototype.logout = function () {
        this.server.token = null;
        this._router.navigate(['/home']);
        this.closeModalLogoutButton.nativeElement.click();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalDangerButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SolvedComponent.prototype, "closeModalDangerButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalChangeButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SolvedComponent.prototype, "closeModalChangeButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModalLogoutButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SolvedComponent.prototype, "closeModalLogoutButton", void 0);
    SolvedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solved',
            template: __webpack_require__(/*! ./solved.html */ "./src/app/solved/solved.html"),
            styles: [__webpack_require__(/*! ./solved.css */ "./src/app/solved/solved.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _providers_server__WEBPACK_IMPORTED_MODULE_2__["ServerProvider"]])
    ], SolvedComponent);
    return SolvedComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/providers/server.ts":
/*!*********************************!*\
  !*** ./src/providers/server.ts ***!
  \*********************************/
/*! exports provided: ServerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerProvider", function() { return ServerProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//const BASE_URL = "https://homol.redes.unb.br/sos-unb/api";
//const BASE_URL = "https://sosunb.000webhostapp.com/api";
var BASE_URL = "https://mundolalala.com.br/sosunb/api";
var ServerProvider = /** @class */ (function () {
    function ServerProvider(http) {
        this.http = http;
        this.user = {};
        this.demand = [];
        this.problems = [];
        this.suggestions = [];
        this.liked = [];
        this.commented = [];
    }
    //FEED
    ServerProvider.prototype.getFeedDemands = function (search, status, limit) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        body.set('search', search);
        body.set('status', status);
        body.set('limit', limit);
        return this.http.post(BASE_URL + '/get-demands/feed', body.toString(), options).toPromise();
    };
    //RANKING
    ServerProvider.prototype.getRankingDemands = function (campus) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        body.set('campus', campus);
        return this.http.post(BASE_URL + '/get-demands/ranking', body.toString(), options).toPromise();
    };
    //DEMANDS
    ServerProvider.prototype.getSelectedDemands = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        return this.http.post(BASE_URL + '/get-demands/profile', body.toString(), options).toPromise();
    };
    //SOLVED
    ServerProvider.prototype.getSolvedDemands = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        return this.http.post(BASE_URL + '/get-demands/resolved', body.toString(), options).toPromise();
    };
    //HOME PAGE
    // Registration
    ServerProvider.prototype.createUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('name', user.name);
        body.set('email', user.email);
        body.set('registry', user.registry);
        body.set('identity', user.identity);
        body.set('password', user.password);
        body.set('conf_password', user.password);
        body.set('date_birth', user.date_birth);
        return this.http.post(BASE_URL + '/user/register', body.toString(), options).toPromise();
    };
    // Login
    ServerProvider.prototype.loginUser = function (email, password) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('email', email);
        body.set('password', password);
        return this.http.post(BASE_URL + '/sessions/login', body.toString(), options).toPromise();
    };
    // Forgot password
    ServerProvider.prototype.newPsw = function (email) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('email', email);
        return this.http.post(BASE_URL + '/sessions/recover', body.toString(), options).toPromise();
    };
    //POSTS FUNCTIONS
    // like demand
    ServerProvider.prototype.likeDemand = function (params) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        body.set('demands_id', params);
        return this.http.post(BASE_URL + '/like/add', body.toString(), options).toPromise();
    };
    ;
    // Unlike demand
    ServerProvider.prototype.unlikeDemand = function (params) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        body.set('demands_id', params);
        return this.http.post(BASE_URL + '/like/delete', body.toString(), options).toPromise();
    };
    ;
    // New comment
    ServerProvider.prototype.commentDemand = function (params, comment) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        body.set('demands_id', params);
        body.set('comment', comment);
        return this.http.post(BASE_URL + '/coments/add', body.toString(), options).toPromise();
    };
    // Delete comment
    ServerProvider.prototype.deleteComment = function (params) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        body.set('comment_id', params);
        return this.http.post(BASE_URL + '/coments/delete', body.toString(), options).toPromise();
    };
    // Report demand
    ServerProvider.prototype.reportDemand = function (params) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        body.set('demands_id', params);
        return this.http.post(BASE_URL + '/demands/report', body.toString(), options).toPromise();
    };
    //POST PAGE
    // Get demand type
    ServerProvider.prototype.typeDemand = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        return this.http.post(BASE_URL + '/type-demand/get', body.toString(), options).toPromise();
    };
    // Get campus
    ServerProvider.prototype.getCampus = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        return this.http.post(BASE_URL + '/campus/get', body.toString(), options).toPromise();
    };
    // Get status
    ServerProvider.prototype.getStatus = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        return this.http.post(BASE_URL + '/status/get', body.toString(), options).toPromise();
    };
    // Get area
    ServerProvider.prototype.areaDemand = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        return this.http.post(BASE_URL + '/area/get', body.toString(), options).toPromise();
    };
    // Get problem type
    ServerProvider.prototype.categoryDemand = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        return this.http.post(BASE_URL + '/type-problem/get', body.toString(), options).toPromise();
    };
    // Get local
    ServerProvider.prototype.getLocal = function (demand) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        body.set('campus', demand.selectedCampus);
        body.set('area', demand.selectedArea);
        return this.http.post(BASE_URL + '/local/get', body.toString(), options).toPromise();
    };
    // Get similars
    ServerProvider.prototype.getDemandsSimilar = function (demand) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        body.set('type_problems_id', demand.selectedCategory);
        body.set('type_demand_id', demand.selectedType);
        body.set('local_id', demand.local_id);
        body.set('campus', demand.selectedCampus);
        body.set('area_id', demand.selectedArea);
        body.set('environment', demand.environment);
        return this.http.post(BASE_URL + '/get-demands/similar', body.toString(), options).toPromise();
    };
    // See demand
    ServerProvider.prototype.seeDemand = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        body.set('demands_id', this.demand);
        return this.http.post(BASE_URL + '/get-demands/single', body.toString(), options).toPromise();
    };
    // Add demand
    ServerProvider.prototype.newDemand = function (demand) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        body.set('title', demand.title);
        body.set('description', demand.description);
        body.set('type_problems_id', demand.selectedCategory);
        body.set('type_demand_id', demand.selectedType);
        body.set('local_id', demand.local_id);
        body.set('campus_id', demand.selectedCampus);
        body.set('environment_id', demand.environment);
        body.set('image', demand.hasOwnProperty('image') ? demand.image : '');
        return this.http.post(BASE_URL + '/demands/add', body.toString(), options).toPromise();
    };
    //PROFILE FUNCTIONS
    // Delete demand
    ServerProvider.prototype.deleteDemand = function (demand_id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        body.set('demands_id', demand_id);
        return this.http.post(BASE_URL + '/demands/delete', body.toString(), options).toPromise();
    };
    // Change infos
    ServerProvider.prototype.updateInfo = function (newinfo) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        body.set('image', newinfo.hasOwnProperty('image') ? newinfo.image : '');
        body.set('email', newinfo.email);
        return this.http.post(BASE_URL + '/user/update', body.toString(), options).toPromise();
    };
    // Change Password
    ServerProvider.prototype.updatePsw = function (password) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        body.set('password', password);
        return this.http.post(BASE_URL + '/user/update/password', body.toString(), options).toPromise();
    };
    // Delete account
    ServerProvider.prototype.deleteAccount = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var body = new URLSearchParams();
        body.set('Authorization', this.token);
        return this.http.post(BASE_URL + '/user/delete', body.toString(), options).toPromise();
    };
    ServerProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ServerProvider);
    return ServerProvider;
}());



/***/ }),

/***/ "./src/shared/confirm-equal-validator.directive.ts":
/*!*********************************************************!*\
  !*** ./src/shared/confirm-equal-validator.directive.ts ***!
  \*********************************************************/
/*! exports provided: ConfirmEqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidatorDirective", function() { return ConfirmEqualValidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmEqualValidatorDirective = /** @class */ (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective_1 = ConfirmEqualValidatorDirective;
    ConfirmEqualValidatorDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.signUpConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    var ConfirmEqualValidatorDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmEqualValidatorDirective.prototype, "signUpConfirmEqualValidator", void 0);
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[signUpConfirmEqualValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
                    useExisting: ConfirmEqualValidatorDirective_1,
                    multi: true
                }]
        })
    ], ConfirmEqualValidatorDirective);
    return ConfirmEqualValidatorDirective;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mariana\Desktop\angular\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
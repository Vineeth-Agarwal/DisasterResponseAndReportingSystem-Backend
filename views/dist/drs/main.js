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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_incident_create_incident_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-incident/create-incident.component */ "./src/app/create-incident/create-incident.component.ts");
/* harmony import */ var _create_teams_create_teams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-teams/create-teams.component */ "./src/app/create-teams/create-teams.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _review_application_review_application_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review-application/review-application.component */ "./src/app/review-application/review-application.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _team1_details_team1_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team1-details/team1-details.component */ "./src/app/team1-details/team1-details.component.ts");
/* harmony import */ var _archived_incidents_archived_incidents_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./archived-incidents/archived-incidents.component */ "./src/app/archived-incidents/archived-incidents.component.ts");
// Assigned to Kishan
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'createIncident', component: _create_incident_create_incident_component__WEBPACK_IMPORTED_MODULE_2__["CreateIncidentComponent"] },
    { path: 'createTeams', component: _create_teams_create_teams_component__WEBPACK_IMPORTED_MODULE_3__["CreateTeamsComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'reviewApplication', component: _review_application_review_application_component__WEBPACK_IMPORTED_MODULE_6__["ReviewApplicationComponent"] },
    { path: 'teams', component: _teams_teams_component__WEBPACK_IMPORTED_MODULE_7__["TeamsComponent"] },
    { path: 'team1Details', component: _team1_details_team1_details_component__WEBPACK_IMPORTED_MODULE_8__["Team1DetailsComponent"] },
    { path: 'archivedIncidents', component: _archived_incidents_archived_incidents_component__WEBPACK_IMPORTED_MODULE_9__["ArchivedIncidentsComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<!-- \r\n    Assinged to Kishan\r\n -->\r\n<div class=\"container-fluid\">\r\n    <!-- Navigation bar for the web application -->\r\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n        <a class=\"navbar-brand\">DRMS</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\r\n            aria-label=\"Toggle navigation\"> \r\n            <span class=\"navbar-toggler-icon\"></span></button>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" routerLink=\"/reviewApplication\">Review Applications</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" routerLink=\"/teams\">Teams</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" routerLink=\"\">Logout</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n    </nav>\r\n    <router-outlet></router-outlet>\r\n</div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: DemoMaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _create_incident_create_incident_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-incident/create-incident.component */ "./src/app/create-incident/create-incident.component.ts");
/* harmony import */ var _review_application_review_application_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./review-application/review-application.component */ "./src/app/review-application/review-application.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _create_teams_create_teams_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-teams/create-teams.component */ "./src/app/create-teams/create-teams.component.ts");
/* harmony import */ var _team1_details_team1_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./team1-details/team1-details.component */ "./src/app/team1-details/team1-details.component.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _archived_incidents_archived_incidents_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./archived-incidents/archived-incidents.component */ "./src/app/archived-incidents/archived-incidents.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_13__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
            ],
            declarations: []
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _create_incident_create_incident_component__WEBPACK_IMPORTED_MODULE_8__["CreateIncidentComponent"],
                _review_application_review_application_component__WEBPACK_IMPORTED_MODULE_9__["ReviewApplicationComponent"],
                _teams_teams_component__WEBPACK_IMPORTED_MODULE_10__["TeamsComponent"],
                _create_teams_create_teams_component__WEBPACK_IMPORTED_MODULE_11__["CreateTeamsComponent"],
                _team1_details_team1_details_component__WEBPACK_IMPORTED_MODULE_12__["Team1DetailsComponent"],
                _archived_incidents_archived_incidents_component__WEBPACK_IMPORTED_MODULE_16__["ArchivedIncidentsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                DemoMaterialModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/archived-incidents/archived-incidents.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/archived-incidents/archived-incidents.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Assigned to kishan */\r\n\r\n.example-container {\r\n    display: flex;\r\n    /* flex-direction: column;\r\n    min-width: 300px; */\r\n  }\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n.table-header{\r\n  font-size: 18px;\r\n  color: black;\r\n}\r\n\r\n/* for buttons - download */\r\n\r\n.buttons {\r\n    font-size: 1em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/archived-incidents/archived-incidents.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/archived-incidents/archived-incidents.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n  This page is to show past incidents \r\n  Assigned to Kishan \r\n-->\r\n<div class=\"container\">\r\n   <!-- Header for the Archived Incidents page -->\r\n  <h1>Archived Incidents</h1>\r\n  <hr>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"example-container mat-elevation-z8\">\r\n      <div class=\"col-sm-3\">\r\n        <div class=\"example-header\">\r\n          <mat-form-field>\r\n            <!-- <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\"> -->\r\n            <!-- Picker is added to select the date from calendar -->\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a start date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker touchUi=\"true\" #picker></mat-datepicker>           \r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <!-- Table contains details of the archived incidents -->\r\n        <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n          <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n          <!-- Incident Name Column -->\r\n          <ng-container matColumnDef=\"incidentName\">\r\n            <mat-header-cell *matHeaderCellDef class=\"table-header\"> Incident Name </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.incidentName }} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Location Name Column -->\r\n          <ng-container matColumnDef=\"location\">\r\n            <mat-header-cell *matHeaderCellDef class=\"table-header\"> Location </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.location }} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Date Column -->\r\n          <ng-container matColumnDef=\"date\">\r\n            <mat-header-cell *matHeaderCellDef class=\"table-header\"> Date </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.date | date }} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Time Column -->\r\n          <ng-container matColumnDef=\"time\">\r\n            <mat-header-cell *matHeaderCellDef class=\"table-header\"> Time </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.time }} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Description Column -->\r\n          <ng-container matColumnDef=\"description\">\r\n            <mat-header-cell *matHeaderCellDef class=\"table-header\"> Description </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.description }} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- When clicked on any row a popup is displayed showing the details of incident -->\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"rowClicked(row)\"></mat-row>\r\n        </mat-table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<hr>\r\n  <div class=\"row\">\r\n    <div class=\"col text-center\">\r\n      <!-- Button is provided to download the archived incidents to excel sheet -->\r\n    <button mat-raised-button color=\"primary\" class=\"buttons\">Download</button>\r\n  </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/archived-incidents/archived-incidents.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/archived-incidents/archived-incidents.component.ts ***!
  \********************************************************************/
/*! exports provided: ArchivedIncidentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedIncidentsComponent", function() { return ArchivedIncidentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArchivedIncidentsComponent = /** @class */ (function () {
    function ArchivedIncidentsComponent(dataService) {
        this.dataService = dataService;
        this.events = []; // for date filter
        this.displayedColumns = ['incidentName', 'location', 'date', 'time', 'description'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
    }
    ArchivedIncidentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getIncidentsList()
            .subscribe(function (data) {
            _this.incidents = data['data'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.incidents);
            // console.log(this.incidents)
        });
    };
    ArchivedIncidentsComponent.prototype.addEvent = function (type, event) {
        console.log(type + " " + event.value);
    };
    ArchivedIncidentsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ArchivedIncidentsComponent.prototype, "sort", void 0);
    ArchivedIncidentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archived-incidents',
            template: __webpack_require__(/*! ./archived-incidents.component.html */ "./src/app/archived-incidents/archived-incidents.component.html"),
            styles: [__webpack_require__(/*! ./archived-incidents.component.css */ "./src/app/archived-incidents/archived-incidents.component.css")]
        }),
        __metadata("design:paramtypes", [_common_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ArchivedIncidentsComponent);
    return ArchivedIncidentsComponent;
}());



/***/ }),

/***/ "./src/app/common/applicant.ts":
/*!*************************************!*\
  !*** ./src/app/common/applicant.ts ***!
  \*************************************/
/*! exports provided: Applicant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Applicant", function() { return Applicant; });
// Assigned to Kishan
var Applicant = /** @class */ (function () {
    function Applicant(values) {
        if (values === void 0) { values = {}; }
        /*Constructor initialization*/
        Object.assign(this, values);
    }
    return Applicant;
}());



/***/ }),

/***/ "./src/app/common/dataService.ts":
/*!***************************************!*\
  !*** ./src/app/common/dataService.ts ***!
  \***************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getApplicantsList = function () {
        //   http call
        return this.http.get("https://drrs.herokuapp.com/getApplicantsList");
    };
    DataService.prototype.getIncidentsList = function () {
        //   http call
        return this.http.get("https://drrs.herokuapp.com/getIncidentsList");
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/create-incident/create-incident.component.css":
/*!***************************************************************!*\
  !*** ./src/app/create-incident/create-incident.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".createContainer {\r\n    padding-left: 30em;\r\n    padding-right: 29em;\r\n}\r\n\r\n.primary{\r\n    background: #673ab7;\r\n    color: white;\r\n    font-size: 1em;\r\n}"

/***/ }),

/***/ "./src/app/create-incident/create-incident.component.html":
/*!****************************************************************!*\
  !*** ./src/app/create-incident/create-incident.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  Assigned to Hemanth\r\n -->\r\n <div class=\"container\">\r\n   <!-- Header for the Create Incident page -->\r\n    <h1>Create Incident</h1>\r\n    <hr>\r\n  </div>\r\n \r\n <div class=\"createContainer\">\r\n\r\n<!-- Form provided to input details for incident details -->\r\n<form novalidate (ngSubmit)=\"onCreate(createInc)\" #createInc=\"ngForm\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"incident\">\r\n      <b>Incident Name</b>\r\n    </label>\r\n    <!-- Input for incident name -->\r\n    <input type=\"text\" class=\"form-control\" [ngModel]=\"applicant.incident\" name=\"incident\" incident #incident=\"ngModel\" id=\"inputincident\"\r\n      placeholder=\"Enter incident\" required>\r\n    <!-- \r\n      incident error block \r\n      by Kishan\r\n    -->\r\n    <!-- Input validation for incident name-->\r\n    <div *ngIf=\"(incident.invalid && ( incident.touched || incident.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n      <div *ngIf=\"incident.errors?.required\">\r\n        Please enter the incident\r\n      </div>\r\n    </div>\r\n\r\n    <label for=\"location\">\r\n      <b>Location</b>\r\n    </label>\r\n    <!-- Input field for location name -->\r\n    <input type=\"text\" class=\"form-control\" [ngModel]=\"applicant.location\" name=\"location\" location #location=\"ngModel\" id=\"inputlocation\"\r\n      placeholder=\"Enter location\" required>\r\n    <!-- \r\n      location error block \r\n      by Kishan\r\n    -->\r\n    <!-- Input validation for location -->\r\n    <div *ngIf=\"(location.invalid && ( location.touched || location.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n      <div *ngIf=\"location.errors?.required\">\r\n        Please enter the location\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Selection for certTeam block -->\r\n    <label for=\"certTeam\">\r\n      <b>CERT Team</b>\r\n    </label>\r\n    <select id=\"certTeam\" class=\"form-control\" [ngModel]=\"user.certTeam\" name=\"certTeam\" required>\r\n      <option value=\"Team 01\">Team 01</option>\r\n      <option value=\"Team 02\">Team 02</option>\r\n      <option value=\"Team 03\">Team 03</option>\r\n      <option value=\"Team 04\">Team 04</option>\r\n      <option value=\"Team 05\">Team 05</option>\r\n    </select>\r\n\r\n    <!-- Select date block -->\r\n    <label for=\"date\">\r\n      <b>Date</b>\r\n    </label>\r\n    <input type=\"date\" class=\"form-control\" [ngModel]=\"user.date\" name=\"date\" #date=\"ngModel\" id=\"inputdate\" placeholder=\"Select date\"\r\n      required>\r\n    <!-- \r\n      date error block \r\n      by Kishan\r\n    -->\r\n    <!-- Validtion for date block -->\r\n    <div *ngIf=\"(date.invalid && ( date.touched || date.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n      <div *ngIf=\"date.errors?.required\">\r\n        Please enter the date\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Select time block -->\r\n    <label for=\"time\">\r\n      <b>Time</b>\r\n    </label>\r\n    <input type=\"time\" class=\"form-control\" [ngModel]=\"user.time\" name=\"time\" #time=\"ngModel\" id=\"inputtime\" placeholder=\"Select time\"\r\n      required>\r\n    <!-- \r\n      time error block \r\n      by Kishan\r\n    -->\r\n    <!-- Validation for time block -->\r\n    <div *ngIf=\"(time.invalid && ( time.touched || time.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n      <div *ngIf=\"time.errors?.required\">\r\n        Please enter the time\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Button provided to Create Incident -->\r\n  <button class=\"btn primary\"> Create </button>\r\n  \r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/create-incident/create-incident.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/create-incident/create-incident.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateIncidentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIncidentComponent", function() { return CreateIncidentComponent; });
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


var CreateIncidentComponent = /** @class */ (function () {
    function CreateIncidentComponent(router) {
        this.router = router;
    }
    CreateIncidentComponent.prototype.ngOnInit = function () {
    };
    CreateIncidentComponent.prototype.onCreate = function (createInc) {
        alert("Incident module created successfully");
        this.router.navigate(['/dashboard']);
    };
    CreateIncidentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-incident',
            template: __webpack_require__(/*! ./create-incident.component.html */ "./src/app/create-incident/create-incident.component.html"),
            styles: [__webpack_require__(/*! ./create-incident.component.css */ "./src/app/create-incident/create-incident.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreateIncidentComponent);
    return CreateIncidentComponent;
}());



/***/ }),

/***/ "./src/app/create-teams/create-teams.component.css":
/*!*********************************************************!*\
  !*** ./src/app/create-teams/create-teams.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary{\r\n    background: #673ab7;\r\n    color: white;\r\n    font-size: 1em;\r\n}"

/***/ }),

/***/ "./src/app/create-teams/create-teams.component.html":
/*!**********************************************************!*\
  !*** ./src/app/create-teams/create-teams.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  Assigned to Chandra mouli\r\n -->\r\n<!-- @Author Chandra Mouli Kantipudi -->\r\n<!-- Page not yet completed -->\r\n <div class=\"container\">\r\n   <!-- Header for the page -->\r\n    <h1>Create Team</h1>\r\n    <hr>\r\n    \r\n    <!-- Form to input the team details -->\r\n    <form novalidate (ngSubmit)=\"onCreate(createTeam)\" #createTeam=\"ngForm\">\r\n    \r\n      <div class=\"form-group\">\r\n        <label for=\"team\">\r\n          <b>Team Name</b>\r\n        </label>\r\n        <!-- Input for team name -->\r\n        <input type=\"text\" class=\"form-control\" [ngModel]=\"team.teamname\" name=\"team name\" teamname #teamname=\"ngModel\" id=\"inputteamname\"\r\n          placeholder=\"Enter Team Name\" required>\r\n      \r\n          <!-- Validation for the team name -->\r\n        <div *ngIf=\"(incident.invalid && ( incident.touched || incident.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n          <div *ngIf=\"incident.errors?.required\">\r\n            Please enter the incident\r\n          </div>\r\n        </div><br>\r\n    \r\n        <!-- TeamID should autogenerate -->\r\n        <label for=\"teamid\">\r\n          <b>Team ID</b>\r\n        </label>\r\n        <input type=\"text\" class=\"form-control\" [ngModel]=\"team.teamid\" name=\"teamid\" teamid #teamid=\"ngModel\" id=\"teamid\"\r\n          placeholder=\"Team ID\" required><br>\r\n\r\n      </div>\r\n\r\n      \r\n    <!-- Button provided to create team -->\r\n      <button class=\"btn primary\"> Create Team</button>\r\n    </form>\r\n    </div>\r\n    "

/***/ }),

/***/ "./src/app/create-teams/create-teams.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-teams/create-teams.component.ts ***!
  \********************************************************/
/*! exports provided: CreateTeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTeamsComponent", function() { return CreateTeamsComponent; });
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


var CreateTeamsComponent = /** @class */ (function () {
    function CreateTeamsComponent(router) {
        this.router = router;
    }
    CreateTeamsComponent.prototype.ngOnInit = function () {
    };
    CreateTeamsComponent.prototype.onCreate = function (createTeam) {
        alert("Team created successfully");
        this.router.navigate(['/teams']);
    };
    CreateTeamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-teams',
            template: __webpack_require__(/*! ./create-teams.component.html */ "./src/app/create-teams/create-teams.component.html"),
            styles: [__webpack_require__(/*! ./create-teams.component.css */ "./src/app/create-teams/create-teams.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreateTeamsComponent);
    return CreateTeamsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Assigned to Mouli and Kishan*/\r\n\r\n/* cards */\r\n\r\n.example-card {\r\n    max-width: 235px;\r\n}\r\n\r\n/* for buttons - Create incident and Archived Incidents */\r\n\r\n.buttons {\r\n    font-size: 1em;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  Assigned to Chandra mouli\r\n -->\r\n<!-- @Author Chandra Mouli Kantipudi -->\r\n\r\n<div class=\"container\">\r\n  <!-- Header for the dashboard page -->\r\n  <h1>Dashboard</h1>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <!-- Create incident button provided to route to create incident page -->\r\n      <button routerLink=\"/createIncident\" mat-raised-button color=\"primary\" class=\"buttons\">Create Incident</button>\r\n    </div>\r\n\r\n    <div class=\"col text-right\">\r\n      <!-- Archived Incidents button provided to route to Archived Incidents page -->\r\n      <button routerLink=\"/archivedIncidents\" mat-raised-button color=\"primary\" class=\"buttons\">Archived Incidents</button>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-3 text-center\">\r\n      <!-- The incident modules are shown using cards. Card has image of incident,\r\n      brief description and two buttons edit and archive -->\r\n      <mat-card class=\"example-card\">\r\n        <a routerLink=\"/dashboard\">\r\n          <!-- Image of incident -->\r\n          <img mat-card-image src=\"assets/images/incidents/img.1.jpg\" alt=\"Earthquake\">\r\n        </a>\r\n        <mat-card-content>\r\n          <!-- Name of incident -->\r\n          <h2>Earthquake</h2>\r\n          <p>\r\n            <!-- Brief description of incident -->\r\n            Magnitude 5.7 earthquake 1238 miles from Salvador, Falkland Islands (Islas Malvinas) · Jun 25, 8:48 PM\r\n          </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <!-- Edit button is provided to edit features of the incident module-->\r\n          <button mat-raised-button color=\"primary\">Edit</button>\r\n          <!-- Archive button is provided to archive the incident module -->\r\n          <button mat-raised-button color=\"warn\">Archive</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-3 text-center\">\r\n      <!-- The incident modules are shown using cards. Card has image of incident,\r\n      brief description and two buttons edit and archive -->\r\n      <mat-card class=\"example-card\">\r\n        <a routerLink=\"/dashboard\">\r\n          <!-- Image of incident -->\r\n          <img mat-card-image src=\"assets/images/incidents/img.2.jpg\" alt=\"Earthquake\">\r\n        </a>\r\n        <mat-card-content>\r\n          <h2>Wildfires</h2>\r\n          <p>\r\n            <!-- Brief description of incident -->\r\n            Sardinas Canyon Fire: Sardinas Canyon Fire, June 28,2018 Acres: Approximately 1672\r\n          </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <!-- Edit button is provided to edit features of the incident module-->\r\n          <button mat-raised-button color=\"primary\">Edit</button>\r\n          <!-- Archive button is provided to archive the incident module -->\r\n          <button mat-raised-button color=\"warn\">Archive</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginContainer {\r\n    padding-left: 30em;\r\n    padding-right: 29em;\r\n    padding-top: 6em;\r\n}\r\n\r\n.primary{\r\n    background: #673ab7;\r\n    color: white;\r\n    font-size: 1em;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  Assigned to Hemanth\r\n -->\r\n <div class=\"loginContainer\">\r\n   <!-- Header for login page -->\r\n  <h1>Login </h1>\r\n  <!-- Form provided to input login details -->\r\n  <form novalidate (ngSubmit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">\r\n        <b>Email</b>\r\n      </label>\r\n      <!-- Input for emailID -->\r\n      <input type=\"text\" class=\"form-control\" [ngModel]=\"applicant.email\" name=\"email\" email #email=\"ngModel\" id=\"inputEmail\" placeholder=\"Email\"\r\n        pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required>\r\n      <!-- \r\n        Email error block \r\n        by kishan\r\n      -->\r\n      <!-- Validation for emailID -->\r\n      <div *ngIf=\"(email.invalid && ( email.touched || email.dirty)) || isSubmitted\" class=\"text-danger\">\r\n        <div *ngIf=\"email.errors?.required\">\r\n          Please enter the email id\r\n        </div>\r\n        <div *ngIf=\"email.errors?.pattern &&  email.dirty\">\r\n            Please enter the valid email id\r\n        </div>\r\n      </div>\r\n\r\n      <!-- \r\n        Password block \r\n        by kishan\r\n      -->\r\n      <label for=\"password\">\r\n        <b>Password</b>\r\n      </label>\r\n      <!-- Input for password -->\r\n      <input type=\"password\" class=\"form-control\" [ngModel]=\"applicant.password\" name=\"password\" #password=\"ngModel\" id=\"inputpassword\"\r\n        placeholder=\"Password\" pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\" required>\r\n      <!-- password error block -->\r\n      <!-- Validation for password -->\r\n      <div *ngIf=\"(password.invalid && ( password.touched || password.dirty)) || isSubmitted\" class=\"text-danger\">\r\n        <div *ngIf=\"password.errors?.required\">\r\n          Please enter the password\r\n        </div>\r\n        <!-- <div *ngIf=\"password.errors?.pattern && password.dirty\">\r\n          Password must have UpperCase, LowerCase, Number/SpecialChar and mininmum 8 characters.\r\n        </div> -->\r\n      </div>\r\n      </div>\r\n      <!-- Button provided to submit login details -->\r\n     <button class=\"btn primary\"> Login </button>\r\n  </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_applicant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/applicant */ "./src/app/common/applicant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        // for validation
        this.isSubmitted = false;
        this.applicant = new _common_applicant__WEBPACK_IMPORTED_MODULE_1__["Applicant"]({
            email: ''
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value);
        console.log(valid);
        this.isSubmitted = true;
        if (value) {
            console.log(value);
            this.router.navigate(['/dashboard']);
        }
        else {
            console.log("something went wrong");
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/review-application/review-application.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/review-application/review-application.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Assigned to kishan */\r\n\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n.table-header{\r\n  font-size: 18px;\r\n  color: black;\r\n}"

/***/ }),

/***/ "./src/app/review-application/review-application.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/review-application/review-application.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  Assigned to Sreevani and kishan\r\n -->\r\n<!-- <table class=\"userTable table-bordered\">\r\n  <tr>\r\n    <th>First Name</th>\r\n    <th>Last Name</th>\r\n    <th>Email</th>\r\n    <th>Date of Birth</th>\r\n    <th>Address line1</th>\r\n    <th>Address Line2</th>\r\n    <th>Country</th>\r\n    <th>State</th>\r\n    <th>City</th>\r\n    <th>County</th>\r\n    <th>Phone Number</th>\r\n    <th>Skills</th>\r\n    <th>License</th>\r\n    <th>Certification</th>\r\n    <th>File Upload</th>\r\n    <th>Limitations</th>\r\n  </tr>\r\n  <tr *ngFor=\"let applicant of applicants\">\r\n      <td> {{ applicant.firstName }} </td>\r\n      <td> {{ applicant.lastName }} </td>\r\n      <td> {{ applicant.email }} </td>\r\n      <td> {{ applicant.dob | date:'MM-dd-yyyy'}} </td>\r\n      <td> {{ applicant.address1 }} </td>\r\n      <td> {{ applicant.address2 }} </td>\r\n      <td> {{ applicant.country }} </td>\r\n      <td> {{ applicant.state }} </td>\r\n      <td> {{ applicant.city }} </td>\r\n      <td> {{ applicant.county }} </td>\r\n      <td> {{ applicant.phone }} </td>\r\n      <td> {{ applicant.skills }} </td>\r\n      <td> {{ applicant.lisence }} </td>\r\n      <td> {{ applicant.certification }} </td>\r\n      <td> {{ applicant.fileUpload }} </td>\r\n      <td> {{ applicant.limitations }} </td>\r\n  </tr>\r\n</table> -->\r\n\r\n<div class=\"container\">\r\n  <!-- Header for Review Applications -->\r\n<h1>Review Applications</h1>\r\n<hr>\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-header\">\r\n    <mat-form-field>\r\n      <!-- Filter provided to filter the table data -->\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n  </div>\r\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- First Name Column -->\r\n    <ng-container matColumnDef=\"firstName\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> First Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.firstName }} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Last Name Column -->\r\n    <ng-container matColumnDef=\"lastName\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> Last Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.lastName }} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Email Column -->\r\n    <ng-container matColumnDef=\"email\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> Email </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.email}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Date of Birth Column -->\r\n    <ng-container matColumnDef=\"dob\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> Date of Birth </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.dob}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- County Column -->\r\n    <ng-container matColumnDef=\"county\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> County </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.county}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Skills Column -->\r\n    <ng-container matColumnDef=\"skills\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\"> skills </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.skills}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click) = \"rowClicked(row)\"></mat-row>\r\n  </mat-table>\r\n  <!-- <mat-paginator #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\" [showFirstLastButtons]=\"true\">\r\n  </mat-paginator> -->\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/review-application/review-application.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/review-application/review-application.component.ts ***!
  \********************************************************************/
/*! exports provided: ReviewApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewApplicationComponent", function() { return ReviewApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
// Assigned to Kishan
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { applicant } from '../common/mock-applicants'; // for mock user



var ReviewApplicationComponent = /** @class */ (function () {
    function ReviewApplicationComponent(dataService) {
        this.dataService = dataService;
        this.displayedColumns = ['firstName', 'lastName', 'email', 'county', 'skills'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.applicants);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
    }
    ReviewApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getApplicantsList()
            .subscribe(function (data) {
            _this.applicants = data['data'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.applicants);
        });
    };
    ReviewApplicationComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ReviewApplicationComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ReviewApplicationComponent.prototype.rowClicked = function (row) {
        console.log(row);
        confirm("First Name: " + row.firstName + "\n" +
            "Last Name: " + row.lastName + "\n" +
            "County: " + row.county + "\n" +
            "Phone Number: " + row.skills);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ReviewApplicationComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ReviewApplicationComponent.prototype, "sort", void 0);
    ReviewApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-application',
            template: __webpack_require__(/*! ./review-application.component.html */ "./src/app/review-application/review-application.component.html"),
            styles: [__webpack_require__(/*! ./review-application.component.css */ "./src/app/review-application/review-application.component.css")]
        }),
        __metadata("design:paramtypes", [_common_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ReviewApplicationComponent);
    return ReviewApplicationComponent;
}());



/***/ }),

/***/ "./src/app/team1-details/team1-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/team1-details/team1-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/team1-details/team1-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/team1-details/team1-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  Assigned to Chandra Mouli\r\n -->\r\n <!-- @Author Chandra Mouli Kantipudi -->\r\n <!-- Header for team details page -->\r\n <h1>Team1 Members</h1><br>\r\n <!-- Table is provide with the team members details -->\r\n<table class=\"userTable table-bordered\">\r\n  <tr>\r\n    <th>First Name</th>\r\n    <th>Last Name</th>\r\n    <th>Email</th>\r\n    <th>Date of Birth</th>\r\n    <th>City</th>\r\n    <th>Phone Number</th>\r\n    <th>Skills</th>\r\n  </tr>\r\n  <tr *ngFor=\"let applicant of applicants\">\r\n    <td> {{ applicant.firstName }} </td>\r\n    <td> {{ applicant.lastName }} </td>\r\n    <td> {{ applicant.email }} </td>\r\n    <td> {{ applicant.dob | date:'MM-dd-yyyy'}} </td>\r\n    <td> {{ applicant.city }} </td>\r\n    <td> {{ applicant.phone }} </td>\r\n    <td> {{ applicant.skills }} </td>\r\n  </tr>\r\n</table>"

/***/ }),

/***/ "./src/app/team1-details/team1-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/team1-details/team1-details.component.ts ***!
  \**********************************************************/
/*! exports provided: Team1DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team1DetailsComponent", function() { return Team1DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { applicant } from '../common/mock-applicants';
var Team1DetailsComponent = /** @class */ (function () {
    // applicants = applicant;
    function Team1DetailsComponent() {
    }
    Team1DetailsComponent.prototype.ngOnInit = function () {
    };
    Team1DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team1-details',
            template: __webpack_require__(/*! ./team1-details.component.html */ "./src/app/team1-details/team1-details.component.html"),
            styles: [__webpack_require__(/*! ./team1-details.component.css */ "./src/app/team1-details/team1-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Team1DetailsComponent);
    return Team1DetailsComponent;
}());



/***/ }),

/***/ "./src/app/teams/teams.component.css":
/*!*******************************************!*\
  !*** ./src/app/teams/teams.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 235px;\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/teams/teams.component.html":
/*!********************************************!*\
  !*** ./src/app/teams/teams.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  Assigned to Chandra Mouli\r\n -->\r\n <!-- @Author Chandra Mouli Kantipudi -->\r\n <div class=\"container\">\r\n    <!-- Header for the dashboard page -->\r\n <h1>Teams</h1>\r\n <hr>\r\n <!-- Create team button provided to route to create team page -->\r\n <button routerLink = \"/createTeams\" mat-raised-button color = \"primary\">Create Team</button>\r\n <br><br>\r\n <!-- The team modules are shown using cards. Card has image of team and team name -->\r\n <mat-card class=\"example-card\" >\r\n    <!-- Image for team is provided when clicked on image it redirects to the team page -->\r\n   <a routerLink = \"/team1Details\">\r\n   <img mat-card-image src=\"assets/images/teams/img1.jpg\" alt=\"Team1\"></a>\r\n   <mat-card-content >\r\n     <!-- Team name -->\r\n     <h2>Team 1</h2>\r\n   </mat-card-content>\r\n </mat-card>\r\n </div>"

/***/ }),

/***/ "./src/app/teams/teams.component.ts":
/*!******************************************!*\
  !*** ./src/app/teams/teams.component.ts ***!
  \******************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamsComponent = /** @class */ (function () {
    function TeamsComponent() {
    }
    TeamsComponent.prototype.ngOnInit = function () {
    };
    TeamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teams',
            template: __webpack_require__(/*! ./teams.component.html */ "./src/app/teams/teams.component.html"),
            styles: [__webpack_require__(/*! ./teams.component.css */ "./src/app/teams/teams.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamsComponent);
    return TeamsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\s530945\Desktop\Wednesday\DisasterResponseAndReportingSystem-Backend\views\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
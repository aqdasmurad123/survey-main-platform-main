/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Register from "views/Register.js";
import Login from "views/Login.js";
import Survey from "views/Survey";
import SurveyDetail from "views/SurveyDetail";

var routes = [
	{
		path: "/survey",
		name: "Survey",
		icon: "fa fa-sticky-note text-primary",
		component: Survey,
		layout: "/admin",
		show: true,
	},
	{
		path: "/survey/detail",
		name: "Survey Detail",
		icon: "fa fa-sticky-note text-primary",
		component: SurveyDetail,
		layout: "/admin",
		show: false,
	},
	{
		path: "/login",
		name: "Login",
		icon: "ni ni-key-25 text-info",
		component: Login,
		layout: "/auth",
		show: false,
	},
	{
		path: "/register",
		name: "Register",
		icon: "ni ni-circle-08 text-pink",
		component: Register,
		layout: "/auth",
		show: false,
	},
];
export default routes;

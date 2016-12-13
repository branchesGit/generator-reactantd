'use strict';

require('./styles/app.scss');

import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './pages/App'

var render = ReactDom.render;

var routes = {
	path: '/',
	component: App,
	childRoutes: [
		/*{
			path: 'exam/teacherAbilityAnalysis/basicAbilityAnalysis',
			getComponent:function( location,cb ){
				require.ensure( [], function(require){
					cb( null, require("./pages/Exam/TeacherAbilityAnalysis/BasicAbilityAnalysis/BasicAbilityAnalysis") );
				})
			}
		},
		{
			path: 'exam/teacherIncrementAnalysis/incrementAnalysis',
			getComponent:function( location,cb ){
				require.ensure( [], function(require){
					cb( null, require("./pages/Exam/TeacherAbilityAnalysis/TeacherIncrementAnalysis/IncrementAnalysis") );
				})
			}
		}*/
	]
};


//最终渲染
render( <Router history={hashHistory} routes={routes}/>, document.getElementById('app'));

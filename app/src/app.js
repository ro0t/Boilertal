import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import store from './stores/example';
import insertElement from './framework/element';
import log from './framework/logger';
import masterComponent from './components/master.vue';

export default class Application {

	constructor() {

		// Don't touch this unless you know what ya'll doin' 😇
		this.boiler = insertElement('boiler-application');

		log('Boiler element appended');

		this.instance = null;
		this.router = [];
		this.propsData = {};

		// Apply plugins
		this.applyPlugins();

		return this;
	}

	/************************************************************************
	*
	*	When Vue is used with a modular system we need to tell Vue to
	*	use some external plugins like State management or a Router.
	*
	************************************************************************/
	applyPlugins() {

		Vue.use(Vuex);
		Vue.use(VueRouter);

	}

	/************************************************************************
	*
	*	Set the default props data that should be passed into the
	*	main component.
	*
	************************************************************************/
	setPropsData(props = {}) {
		this.propsData = props;

		log('Did set props data');
	}

	/************************************************************************
	*
	*	Load your routes into the Boiler framework and Boiler will passed
	*	them into the Vue Router for you 💙
	*
	************************************************************************/
	setRoutes(routes = {}) {
		this.router = routes;

		log('Routes have been set');
	}

	/************************************************************************
	*
	*	Render the main Vue component and pass in the middleware and propsData
	*	data that has been set in the bootstrap file.
	*
	************************************************************************/
	render() {

		this.instance = new Vue({
			router: this.router,
			el: `#${this.boiler.id}`,
			store: new Vuex.Store(store),
			render: h => h(masterComponent, {
				props: this.propsData
			})
		});

		log('Vue component attached & rendered');
		log('Put debug mode to false in production to disable these logs!');

	}

}

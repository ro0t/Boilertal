![Boiler](boiler@2x.png)

Another javascript framework, but this one has Swag, Emojis and Vue! 👾 made by *Adam* from https://igital.co

Including:
*	Vue.js
* 	Vue Router and VueX for State management
*	Hot 🔥 reloading dev server
*	Swag Sass Framework 💎
*	Super simple responsive Css ⭐️
*	ES6 Javascript 😎
*	Did I mention Emojis already? ⛄️

## Responsive example
![Responsive example with Boiler](example.gif)

## Configuration
Before you install and run the webpack compiler, edit the config ***/config/settings.json*** and insert your values there.

## Development
Download the project, install packages with **yarn** or **npm install** and run the dev server.
```Shell
git clone https://github.com/ro0t/Boiler.git
cd Boiler
yarn
npm run dev
```

## Production
Assuming you've already installed all the packages, just **run npm run build** and your files should end up in the ***public/*** directory, ready for production use.
```Shell
npm run build
```

## Vue Components
Insert your Vue components at ***/app/src/components*** and configure the main component called _main_.
The main component has access to all the middleware supplied in ***app/bootstrap.js*** and configured in ***app/src/app.js***

## Stylesheets
Edit the config files in ***/app/style/config/*** to fit your needs.
Use styled scoping for Vue components, you can import the **Swag sass framework** to get all the hot mixins and variables like this:
```Vue
<style lang="scss" scoped>
	@import '../swag';

	h1 {
		font-size: 2em;
		font-weight: 100;
		color: $main;

		@include size('large') {
			color: $avocado;
		}

		@include size('medium') {
			color: $strawberry;
		}

		@include size('small') {
			color: $pumpkin;
			font-size: 1.5em;
		}
	}
</style>
```

## The checklist
In the project you can find a **CHECKLIST.md** file to help you prepare for launching your website.

*	[x] Started using Boilertal
*	[x] Imported the Igital Swag Sass Framework
*	[ ] Created your Vue components
*	[ ] Favicon
*	[ ] Meta description and default open graph tags have been added
*	[ ] Google Analytics ID inserted
*	[ ] Minified Javascript & CSS
*	[ ] Images have been optimized
*	[ ] Tested in all browsers (except IE 🤮)
*	[ ] Proofread all content
*	[ ] Make sure all links work, test clicking on all of them 😈
*	[ ] Add a sitemap
*	[ ] Validation, validate them forms!!1
*	[ ] Added a Print stylesheet? Check how your web looks in print mode CMD+P
*	[ ] Test your entire website... 🤡

## Special thanks
The web penguin **Jón Þór** for showing me 30 Seconds of CSS. 😍

Thanks to **Atomiks** for all the tips and tricks. ⭐️ (https://github.com/atomiks/30-seconds-of-css)

Thanks to Evan You *(true legend)* for making **Vue.js** (https://vuejs.org)

Thanks to the awesome devs of **Webpack** for their super moist bundler (https://webpack.js.org/)

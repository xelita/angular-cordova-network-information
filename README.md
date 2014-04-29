angular-cordova-network-information
==============================

Bring Apache Cordova Network Information API to AngularJS Mobile Apps...

Define a simple service to deal with Cordova Network Information Plugin (https://github.com/apache/cordova-plugin-network-information).

[![Build Status](https://travis-ci.org/xelita/angular-cordova-network-information.png?branch=master)](https://travis-ci.org/xelita/angular-cordova-network-information)

Usage
-----
Include cordovaBatteryStatusModule.js in your Cordova application.

```html
<script src="js/cordovaNetworkInformationModule.js"></script>
```

or use the minified version:

```html
<script src="js/cordovaNetworkInformationModule.min.js"></script>
```

Add the module `cordovaNetworkInformationModule` as a dependency to your app module:

```js
var myapp = angular.module('myapp', ['cordovaNetworkInformationModule']);
```

Use the cordovaNetworkInformationService and cordovaNetworkInformationConstants as controller dependencies and call cordovaNetworkInformationService API:

```js
$scope.onNetworkStatusOffline = function() {
    cordovaNetworkInformationService.addConnectionStatusChangedListener(cordovaNetworkInformationService.offline, function(){
        alert('Your are now offline');
};
```

Sample
------
A sample based on Ionic Framework can be found here:
https://github.com/xelita/angular-cordova-plugins-sample

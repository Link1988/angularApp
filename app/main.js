requirejs.config({
  'baseUrl': 'scripts',
  'paths': {
    'jquery': '../bower_components/jquery/dist/jquery',
    'angular': '/bower_components/angular/angular',
    'angular-resource': '/bower_components/angular-resource/angular-resource',
    'angular-cookies': '/bower_components/angular-cookies/angular-cookies',
    'angular-sanitize': '/bower_components/angular-sanitize/angular-sanitize',
    'angular-animate': '/bower_components/angular-animate/angular-animate',
    'angular-touch': '/bower_components/angular-touch/angular-touch',
    'angular-route': '/bower_components/angular-route/angular-route',
    'angularAMD': '/bower_components/angularAMD/angularAMD',
    'twitter': '/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap'
  },
  shim: {
    'angular': {
      'exports': 'angular'
    },
    'angularAMD': ['angular'], 
    'angular-resource': ['angular'],
    'angular-cookies': ['angular'],
    'angular-sanitize': ['angular'],
    'angular-animate': ['angular'],
    'angular-touch': ['angular'], 
    'angular-route': ['angular']
  },
  deps: ['app']
});
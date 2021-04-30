const mix = require('laravel-mix');


mix.js('resources/assets/js/app.js', 'public/dist/js')
    .sass('resources/assets/sass/app.scss', 'public/dist/css');

const mix = require('laravel-mix');
const { exec } = require('child_process');

mix.postCss('src/css/style.css', 'src/css/output.css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')
    ])
    .sass('src/css/style.scss', '')
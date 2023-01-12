
// Moduls

const {src, dest, parallel, series, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const webp = require('gulp-webp');
const del = require('del');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const ttfToWoff = require("gulp-ttf-to-woff");
const svgSprite = require('gulp-svg-sprite');
// const ttfToWoff2 = require("gulp-ttftowoff2");
// Setting

const srcFolder = './src';
const buildFolder = './app';
const paths = {
  srcImgFolder: `${srcFolder}/img`,
  buildImgFolder: `${buildFolder}/img`,
  srcStyle: `${srcFolder}/scss`,
  srcScss: `${srcFolder}/scss/*.scss`,
  buildCssFolder: `${buildFolder}/css`,
  srcJsFolder: `${srcFolder}/js`,
  buildJsFolder: `${buildFolder}/js`,
  srcPartialsFolder: `${srcFolder}/partials`,
  resourcesFolder: `${srcFolder}/resources`,
  srcVideoFolder: `${srcFolder}/video`,
  buildVideoFolder: `${buildFolder}/video`,
};



const removeBuild = () =>{
    return del([buildFolder]);
}


const fonts = () => {
    return src(`${srcFolder}/fonts/**/*.ttf`)
    .pipe(ttfToWoff())
    .pipe(dest(`${buildFolder}/fonts/`));

    // return src(`${srcFolder}/fonts/**/*.ttf`)
    // .pipe(ttfToWoff2())
    // .pipe(dest(`${buildFolder}/fonts/`));
}

const scss = () =>{
    src(`${paths.srcScss}`)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest(`${paths.buildCssFolder}`)) // Чистый css

        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        
        .pipe(dest(`${paths.buildCssFolder}`)) //Минифицированый css
        .pipe(browserSync.stream());

    return src(`${paths.srcStyle}/libs/*.{scss,css,sass}`)
        .pipe(concat('libs.css'))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest(`${paths.buildCssFolder}`))
}


const html = () => {
    return src(`${srcFolder}/*.html`)
    .pipe(fileinclude({
        prefix: '@',
        basepath: '@file'
    }))
    .pipe(dest(`${buildFolder}`))
    .pipe(browserSync.stream());
}


const images = () => {
    src(`${paths.srcImgFolder}/**/*.{jpg,jpeg,png,gif,ico}`)
    .pipe(dest(`${paths.buildImgFolder}`))
    .pipe(webp({
        quality: 100
    }))
    .pipe(dest(`${paths.buildImgFolder}`))

    return src(`${paths.srcImgFolder}/**/*.{svg,webp}`)
    .pipe(dest(`${paths.buildImgFolder}`))

}

const video = () => {
    return src(`${paths.srcVideoFolder}/**/*.{mp4,webm}`)
    .pipe(dest(`${paths.buildVideoFolder}`))
}



const js = () =>{
    src(`${paths.srcJsFolder}/libs/*.js`)
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(dest(paths.buildJsFolder))
    return src(`${paths.srcJsFolder}/*.js`)
    .pipe(dest(paths.buildJsFolder))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(dest(paths.buildJsFolder))
    .pipe(browserSync.stream());
    
}


const svgSpritesCombine = () => {
    return src(`${srcFolder}/svg/**/*.svg`)
    .pipe(svgSprite({
              mode: {
                  stack: {
                      sprite: "../sprite-new.svg"  //sprite file name
                  }
              },
          })
      )
    .pipe(dest(paths.srcImgFolder));
}




const watching = () =>{
    browserSync.init({
        server:{
            baseDir: `${buildFolder}`
        }
    });

    watch(`${paths.srcScss}`, scss);
    watch(`${paths.srcStyle}/libs/*.{scss,css,sass}`, scss);
    watch(`${paths.srcStyle}/**/*.scss`, scss);
    watch(`${paths.srcPartialsFolder}/*.html`, html); 
    watch(`${paths.srcPartialsFolder}/**/*.html`, html); 
    watch(`${srcFolder}/*.html`, html);
    watch(`${paths.srcImgFolder}/**/*.{jpg,jpeg,png,gif,ico,webp,svg}`, images);
    watch(`${paths.srcImgFolder}/**/*.{mp4,webm}`, video);
    watch(`${paths.srcJsFolder}/libs/*.js`, js);
    watch(`${paths.srcJsFolder}/*.js`, js);
    watch(`${srcFolder}/fonts/**/*.ttf`, fonts);
    watch(`${srcFolder}/svg/**/*.svg`, svgSpritesCombine);

}




exports.styles = scss;
exports.watching = watching;

exports.default = series(removeBuild, html, scss, images, video, js, fonts, svgSpritesCombine, watching);
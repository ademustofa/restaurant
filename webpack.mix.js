let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/module.js', 'public/js/sample.js')
   .js('resources/assets/js/add.js', 'public/js/add.js')

   // Controller
   .js('resources/assets/js/index.js', 'public/js/index.js')
   .js('resources/assets/js/controller/userController.js', 'public/js/controller.js')
   .js('resources/assets/js/controller/globalController.js', 'public/js/controller.js')
   .js('resources/assets/js/controller/navController.js', 'public/js/controller.js')
   .js('resources/assets/js/controller/galleryController.js', 'public/js/controller.js')
   .js('resources/assets/js/controller/notifController.js', 'public/js/controller.js')
   .js('resources/assets/js/controller/chatController.js', 'public/js/controller.js')
   .js('resources/assets/js/controller/foodController.js', 'public/js/controller.js')
   .js('resources/assets/js/controller/orderController.js', 'public/js/controller.js')

   // Model
   .js('resources/assets/js/model/userModel.js', 'public/js/model.js')
   .js('resources/assets/js/model/dataModel.js', 'public/js/model.js')
   .js('resources/assets/js/model/galleryModel.js', 'public/js/model.js')
   .js('resources/assets/js/model/notifModel.js', 'public/js/model.js')
   .js('resources/assets/js/model/chatModel.js', 'public/js/model.js')
   .js('resources/assets/js/model/foodModel.js', 'public/js/model.js')
   .js('resources/assets/js/model/orderModel.js', 'public/js/model.js')


   // CSS
   .sass('resources/assets/sass/app.scss', 'public/css/sample.css')
   .sass('resources/assets/sass/style.scss', 'public/css/style.css');

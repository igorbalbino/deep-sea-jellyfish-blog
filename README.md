# deep-sea-jellyfish-blog

## Build Setup

```
CRIAÇÃO BLOG deep-sea-jellyfish-blog
LINK: https://tailwindcss.com/docs/guides/nuxtjs
https://support.google.com/adsense/answer/9274019?hl=en //Get and copy the AdSense code
https://support.google.com/adsense/answer/6084409?hl=en //Link Analytics and AdSense
https://console.firebase.google.com/u/1/project/deep-sea-jellyfish/overview // tutorial firebase basic
https://firebase.nuxtjs.org/guide/getting-started // using firebase with nuxt


COMANDOS:
npm run dev

npm run build
npm run start

npm run test


DESCRIÇÃO:
1.Create your project - npx create-nuxt-app deep-sea-jellyfish-blog

2.Install and Init Tailwind CSS
npm install -D tailwindcss postcss@latest autoprefixer@latest @nuxt/postcss8
npx tailwindcss init

3.Enable the Nuxt.js PostCSS plugin
In your nuxt.config.js file, enable the @nuxt/postcss8 plugin.
export default {
  buildModules: [
    '@nuxt/postcss8',
    // ...
  ],
}

4.Add Tailwind to your PostCSS configuration
Add tailwindcss and autoprefixer to the build.postcss.plugins object of your nuxt.config.js file.
export default {
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}

5.Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

6.Add the Tailwind directives to your CSS
Create an ./assets/css/main.css file and add the @tailwind directives for each of Tailwind’s layers.
@tailwind base;
@tailwind components;
@tailwind utilities;

7.Import the CSS file
Add the newly-created ./assets/css/main.css file to the css array in the nuxt.config.js file.
'@/assets/css/main.css'

8.Start your build process
Run your build process with "npm run dev".

```

### Model
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

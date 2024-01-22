# Ninternational.eu 

**Ninternational** is an online repository and community about fan-translations for Nintendo games.
You can find info about multiple fan-translations in a variety of languages.

**Ninternational does not host any fan-translations.**

# Structure

The website is built using [Astro](http://astro.build/).
Want to self-host? Clone this repository, open a terminal in the folder and type:
```sh
npm i
npm run dev
```
This will install any dependencies Astro requires, as well as launching the development server on your computer.

The [`src`](src) folder contains components, layouts and the four types of pages available on this website.
Inside [`src/pages/projects`](src/pages/projects), you will find sub-folders for every language, and ``.mdx`` files containing the data and content of a fan-translation.
The [`public`](public) contains most icons used on the website, including flags, platforms icons and controllers icons.

# Adding a fan-translation

You can fork this repository and create a pull request to add a new fan-translation. However, please note that your file needs to match the others in its structure.

## Properties

The properties are on top of a ``.mdx``. It defines which layout to use, the name of the game, the fan-translation's author, the fan-translation's language, the platform on which the game is available, the compatible controllers, the release date, the banner and a description.

However, when defining the language, platform and controllers, please read the following instructions.

### Language

The ``projectLanguage`` section is using [IETF language tags](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) to define the language.
If your fan-translation is the first one in the selected language, you will have to:
- Create a folder in [`pages/projects`](/src/pages/projects) with the corresponding IETF tag. 
- Add the [Twemoji](https://github.com/twitter/twemoji) flag corresponding to your language, and renaming it to ``[language tag].svg``.

Please note that if Twemoji doesn't have the corresponding flag, you will have to provide one yourself, following the Twemoji specifications (two spaces on the top and bottom of the flag, and rounded corners. I would recommend downloading one and replacing the flag by the one you need. Don't forget to export to a color ``.svg`` too!)

### Platform

Every Nintendo platform is available (except the very niche ones, like Pokémon Mini).
When defining the platform, please write the platform using the following syntax:
```
NES
Super Nintendo
Nintendo 64
Nintendo GameCube
Wii
WiiWare
Wii U
Nintendo Switch
Game Boy
Game Boy Color
Game Boy Advance
Nintendo DS
Nintendo DSi
DSiWare
Nintendo 3DS
```

### Controllers

For now, only Wii controller icons are available.
This section is optional, you can leave it empty if needed.
But if you want to fill it, please write it using the following syntax:
```
Wii Remote
Wii Remote (1P)
Wii Remote (2P)
Wii Remote (3P)
Wii Remote (4P)
Nunchuck
Wii Motion Plus
Wii Wheel
Wii Zapper
Wii Balance Board
Classic Controller
GameCube Controller
```
## Content

The content of the page is below the properties.
Here, you can write anything you want by following the ``.md`` writing syntax.

You will also see a ``<Button>`` tag. This component is the download button for your project.
You can change the ``buttonTitle`` property with anything you want, and the ``downloadLink`` property with the download link to your project.

You can add as many buttons as needed for your fan-translation.

# Attributions
Flags emojis by [Twemoji](https://github.com/twitter/twemoji) / CC-BY 4.0
[astro-i18next](https://github.com/yassinedoghri/astro-i18next) by Yassine Doghri
This website is using the [MIT Licence](LICENCE).

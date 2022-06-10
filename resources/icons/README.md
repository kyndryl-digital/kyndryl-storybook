# Kyndryl Icon Font

This is the source files for the icon font. It was generated using [IcoMoon App](https://icomoon.io/app/).

## Steps to update icons.

- Import `kyndryl-Icons.json` into the IcoMoon app using the *Import Icons* button
- Make updates using the app to add, remove, rename, etc. icons.
- Download the updated `kyndryl-Icons.json` with the changes. (download link is under the hamburger menu of the icon set)
- Select all the icons in the set and use the *Generate font* button at the bottom of the screen to download the new font.
- Unzip and save the downloaded files to the `resources/icons` directory.
- Update the font files in the `src/styles/lib/fonts` directory with the new version.
- Update all icon variables with the necessary revisions.
  - `src/styles/variables/_icons.scss`
  - `src/styles/variables/_icons-lit.scss`
  - `src/global/defs/iconIds.ts`


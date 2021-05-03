# Sample QR Parsing App

This mobile App gives the details of the QR Code.

### Development

This project uses submodules for getting the translations done from https://github.com/dhiway/seqr-mobile-translations.

the project is checked out at `src/i18n`. If you make any changes inside that Repo, it needs to be committed from inside that repo only.

Do below steps to get submodules working:

```
$ cd src/i18n
$ git submodule init
$ git submodule update
```

Now your repository is ready to be used.

Everytime you want to make a build, make sure to pull the latest from the translation repo, to be up-to-date with the latest translations:

```
$ cd src/i18n
$ git pull
```

If you make changes in `src/i18n`, you need to commit and push to the corresponding repo. (`git push origin HEAD:main`)

### Install dependencies

`yarn`

### Build locally and test

Below command should get the development build installed in your phone.

`react-native run-android && react-native start`


### Building Signed Images for 'Production' release:

```
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/index.android.bundle
cd android/
./gradlew assembleRelease

OR
./gradlew :app:bundleRelease

```

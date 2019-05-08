<img src="https://trello-attachments.s3.amazonaws.com/5c82625330e45541dbf27260/1024x490/67ec3b475a64f121cedf53b866fadece/banner.png" width="100%">

## About Nutrivo
A health application that assists with improving your dietary intake. Provides simple nutrition guides to help you select healthier food options. Search and discover recipes that meet your dietary requirements. Monitor your calories/nutrition to reach your goals, and view your progress. Initial aim was to automate dietary data collection - by capturing an image of a food label, then using Cloud Vision API to detect the text on that label, and storing those results. 

Built with React Native, Redux, Firebase. 

## Current Features
 - [x] Cross-platform (but mainly tested on iOS)
 - [x] Signing in or creating an account
 - [x] Ability to log, save, edit and delete meals
 - [x] Access to nutritional guide 
 - [x] View meals and food suggestions
 - [x] Search healthy recipes
 - [x] Access camera library to store image (of nutrition label)
 - [ ] Text recognition on nutrition labels

## Build Instructions
- As the project hasn't been deployed yet, it will currently require [Xcode](https://developer.apple.com/xcode/) to view the application on a simulator.
- Download [zip file](https://gitlab.doc.gold.ac.uk/sakth050/nutrivo/-/archive/master/nutrivo-master.zip) or clone the repository to your local computer using the command line `git clone https://gitlab.doc.gold.ac.uk/sakth050/nutrivo.git`
- Install dependencies: `npm install` (See end of doc for a list of npm packages used)
- Open the **ios** folder from the root of the project, and open **.xcodeproj** file on Xcode, then select **AppDelegate.m** file and run the iOS app.
- Alternatively, build and run the iOS app, by running `npm run ios` from the root of the project. 
- The first build will take some time, but on a successful build it will launch the simulator.

If all has gone well you'll see an initial screen like the one above.

## Personal Use
### Using ESLint for Debugging
- `npm i eslint-config-rallycoding`
- `touch .eslintrc`
- Paste the following content into the file
`{
    extends: "rallycoding",
    "rules": {
    "arrow-body-style": 0
    }
}
`
### myjson
- A simple JSON store for mobile apps
- Current json file: `http://myjson.com/1gj9mk`

### Npm Packages
Installed the following npm packages:
- `npm i --save react-redux redux`
- `npm i --save redux-thunk`
- `npm i --save firebase`
- `npm i --save axios`
- `npm i --save lodash`
- `npm i react-native-router-flux`
- `npm i native-base`
- `npm install react-native-vector-icons` 
- Execute react-native link: `react-native link react-native-vector-icons`
- `npm i @ant-design/icons-react-native` and see [doc](https://www.npmjs.com/package/@ant-design/icons-react-native) for usage.
-`npm i --save react-native-image-picker` see [doc](https://github.com/react-native-community/react-native-image-picker/blob/master/docs/Install.md) for installing process.

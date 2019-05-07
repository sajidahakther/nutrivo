<img src="https://trello-attachments.s3.amazonaws.com/5c82625330e45541dbf27260/1024x490/d2c7e4cffff37aacc3865d70203450fe/nutrivo-white.png" width="100%">

## About Nutrivo
A health monitoring app that assists with reaching the recommended dietary intake (RDI). 
Aim is to scan food labels using the mobile phone camera and it will utilise Cloud Vision API to detect and analyse text for automated data collection.

Built with React Native, Redux, Firebase. 

## Current Features
 - [x] Cross-platform (but mainly tested on iOS)
 - [x] Signing in or creating an account
 - [x] Ability to log, save, edit and delete meals
 - [x] Access to nutritional guide 
 - [x] View recipes
 - [ ] Search recipes
 - [ ] Text recognition with food labels

## Build Instructions
- As the project hasn't been deployed yet, it will currently require [Xcode](https://developer.apple.com/xcode/) to view the application on a simulator.
- Download [zip file](https://gitlab.doc.gold.ac.uk/sakth050/nutrivo/-/archive/master/nutrivo-master.zip) or clone the repository to your local computer using the command line `git clone https://gitlab.doc.gold.ac.uk/sakth050/nutrivo.git`
- Install dependencies: `npm install`
- Install the following npm packages:
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
- Open the **ios** folder from the root of the project, and open **.xcodeproj** file on Xcode, then select **AppDelegate.m** file and run the iOS app.
- Alternatively, build and run the iOS app, by running `npm run ios` from the root of the project. 
- The first build will take some time, but on a successful build it will launch the simulator.

If all has gone well you'll see an initial screen like the one below.

## Screenshots

<img src="https://trello-attachments.s3.amazonaws.com/5cb1a4d1b9cfc93bc4f0ba3f/766x1410/a162f989b8a9d74e9b33e0e932116bb7/Screenshot_2019-04-13_at_10.01.40.png">

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
## myjson
- A simple JSON store for mobile apps
- Current json file: `http://myjson.com/1gj9mk`

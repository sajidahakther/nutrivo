const environments = {
  staging: {
    FIREBASE_API_KEY: 'AIzaSyCVqGWaMw6MAxoautqPcPJIy5G7-XCbTpY',
    FIREBASE_AUTH_DOMAIN: 'nutrivo-health.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://nutrivo-health.firebaseio.com',
    FIREBASE_PROJECT_ID: 'nutrivo-health',
    FIREBASE_STORAGE_BUCKET: 'nutrivo-health.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '504943005646',
    GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyALOvOduu9gLuIyHJ-StyvEqmfn6asNv-k'
  },
  production: {
    // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
  }
};

function getReleaseChannel() {
  const releaseChannel = Expo.Constants.manifest.releaseChannel;
  if (releaseChannel === undefined) {
    return 'staging';
  } else if (releaseChannel === 'staging') {
    return 'staging';
  }
    return 'staging';
}
function getEnvironment(env) {
  console.log('Release Channel: ', getReleaseChannel());
  return environments[env];
}

const Environment = getEnvironment(getReleaseChannel());

export default Environment;

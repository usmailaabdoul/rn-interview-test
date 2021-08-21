import OneSignal from 'react-native-onesignal';

export function generateErrorMsg(errors) {
  let errorMessage = '';
  for (var key in errors) {
    if (errors.hasOwnProperty(key)) {
      errorMessage += `${key.toLocaleUpperCase()}: ${errors[key]} \n\n`;
    }
  }

  return errorMessage;
}

export function getOneSignalId() {
  return new Promise((resolve, reject) => {
    OneSignal.addEventListener('ids', (device) => {
      deviceId(device);
    });

    const deviceId = (device) => {
      resolve(device);
    };
  });
}

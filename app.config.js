import 'dotenv/config'; // loads .env files automatically

export default ({ config }) => {
  const ENV = process.env.APP_ENV || 'development';

  return {
    ...config,
    name: ENV === 'production' ? 'ecoaudit-pro' : `ecoaudit-pro (${ENV})`,
    slug: 'ecoaudit-pro',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    newArchEnabled: true,
    assetBundlePatterns: [
      'assets/fonts/*'
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.apolloenergies.ecoaudit',
      infoPlist: {
        "ITSAppUsesNonExemptEncryption": true
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      edgeToEdgeEnabled: true,
      package: 'com.apolloenergies.ecoaudit'
    },
    web: {
    },
    extra: {
      eas: {
        projectId: '2c79d9ed-58b6-4407-b029-975a3893df5f'
      },
      apiUrl: process.env.API_URL,
      environment: ENV
    }
  };
};

export default ({ config }) => {
  const { APP_ENV } = process.env;

  switch (APP_ENV) {
    case "development": {
      return {
        ...config,
        name: "Pokedex (DEVELOPMENT)",
        android: {
          package: "com.hmdakfire.pokedex.development",
        },
      };
    }
    case "preview": {
      return {
        ...config,
        name: "Pokedex (PREVIEW)",
        android: {
          package: "com.hmdakfire.pokedex.preview",
        },
      };
    }
    default: {
      return {
        ...config,
      };
    }
  }
};

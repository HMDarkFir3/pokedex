module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            "@src": "./src",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@contexts": "./src/contexts",
            "@dtos": "./src/dtos",
            "@hooks": "./src/hooks",
            "@reducers": "./src/reducers",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@storages": "./src/storages",
            "@themes": "./src/themes",
            "@utils": "./src/utils",
            "@components-of-screens": "./src/screens",
          },
        },
      ],
    ],
  };
};

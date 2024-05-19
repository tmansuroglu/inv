import path from "path";

module.exports = {
  webpack: {
    alias: {
      "@redux": path.resolve(__dirname, "src/redux"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
};

import type { CracoConfig } from "@craco/types";
import path from "path";

const cracoConfig: CracoConfig = {
  webpack: {
    alias: {
      "@redux": path.resolve(__dirname, "src/redux"),
    },
  },
};

export default cracoConfig;

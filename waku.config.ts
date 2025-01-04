import { defineConfig } from "waku/config";

const getConfig = () => ({
  base: "/waku-deploy-to-github-pages/",
});

export default defineConfig({
  basePath: "/waku-deploy-to-github-pages/",
  unstable_viteConfigs: {
    common: getConfig,
    "dev-main": getConfig,
    "dev-rsc": getConfig,
    "build-ssr": getConfig,
    "build-server": getConfig,
    "build-client": getConfig,
    "build-analyze": getConfig,
  },
});

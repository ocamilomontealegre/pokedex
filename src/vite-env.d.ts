/// <reference types="vite/client" />
declare module "*.svg?react" {
  import React = require("react");
  const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default SVG;
}

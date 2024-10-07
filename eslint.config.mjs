import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  { ignores: ['coverage/*', 'dist/*', './src/__test__/*'] }
];
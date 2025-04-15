import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["library/src/workflow/**/*.ts"],
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
});

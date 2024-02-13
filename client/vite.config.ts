import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const cwd = process.cwd();
const REPOSITORY_NAME = cwd.split("\\").pop();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${REPOSITORY_NAME}/`,
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project from /<repo-name>/, not from the domain root.
  base: "/Calculadora-Imposto---Importa-o/",
});

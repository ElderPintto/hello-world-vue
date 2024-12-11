import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
// Exporta a configuração padrão do Vite
export default defineConfig({
  // Define os plugins utilizados, neste caso apenas o plugin Vue
  plugins: [vue()],
  // Configurações de build
  build: {
    // Configurações da biblioteca
    lib: {
      // Arquivo de entrada do componente
      entry: "src/components/HelloWorld.vue",
      // Nome da biblioteca
      name: "HelloWorld",
      // Função que define o nome do arquivo de saída baseado no formato
      fileName: (format) => `HelloWorld.${format}.js`,
      // Formatos de saída suportados (ES modules e UMD)
      formats: ["es", "umd"],
    },
    // Opções do Rollup
    rollupOptions: {
      // Define Vue como dependência externa
      external: ["vue"],
      // Configurações de saída
      output: {
        // Define variáveis globais para dependências externas
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
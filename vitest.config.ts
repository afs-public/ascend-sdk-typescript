import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
  
export default defineConfig({
  resolve: {
    alias: {
      '@apexfintechsolutions/ascend-sdk': resolve(__dirname, './src')
    }
  }
});

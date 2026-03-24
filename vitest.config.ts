import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import { VitestQaseReporter } from 'vitest-qase-reporter';

const reporters: any[] = ['default'];
if (process.env.QASE_MODE === 'testops') {
  reporters.push(new VitestQaseReporter({
    testops: {
      api: {
        token: process.env.QASE_API_TOKEN || '',
      },
      project: process.env.QASE_PROJECT || 'CDX',
      run: {
        title: 'Ascend SDK TypeScript Tests',
        complete: true,
      },
    },
  }));
}

export default defineConfig({
  resolve: {
    alias: {
      '@apexfintechsolutions/ascend-sdk': resolve(__dirname, './src')
    }
  },
  test: {
    reporters,
  },
});

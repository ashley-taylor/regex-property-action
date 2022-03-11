const path = require('path');
const cp = require('child_process');
const { expect } = require('@jest/globals');

test('test run', () => {
    process.env['INPUT_VALUE'] = 'Hello, world!';
    process.env['INPUT_REGEX'] = 'world';
    process.env['INPUT_FLAGS'] = 'g';
    process.env['INPUT_REPLACEMENT'] = 'universe';
    const np = process.execPath;
    const ip = path.join(__dirname, 'dist', 'index.js');
    const options = {
      env: process.env,
    };
    const ret = cp.execFileSync(np, [ip], options).toString();
    expect(ret).toContain('Hello, universe!');
    expect(ret).not.toContain('Hello, world!');
});

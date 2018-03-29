#!/usr/bin/env node
const read = () => require('fs').readFileSync('/dev/stdin', 'utf8');

const camelize = input => input
  .replace(/^\s*\.[a-z0-9]/, s => s.toUpperCase())
  .replace(/-+([a-z0-9])/g, (_, s) => s.toUpperCase())
  .replace(/_+([a-z0-9])/g, (_, s) => s.toUpperCase());

const CLASS = /^\s*(\.|&)\w/;
const convertLine = s => CLASS.test(s) ? camelize(s) : s;

const convert = input => input
  .split(/\r?\n/)
  .map(convertLine)
  .join('\n');

console.log(convert(read()));

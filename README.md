# diff-cli
[![Dependency Status][dependencies-image]][dependencies-url]

A simple CLI wrapper around [diff](https://www.npmjs.com/package/diff) that provides command for generating a patch/diff given two files.

## Installation

Currently this module is not being published but it can be the git repository may be referenced.

Install from NPM:
```shell
npm install git://github.com/Brightspace/diff-cli.git
```

## Usage

A diff/patch can be created for two files:

```javascript
patchcli --file1 old.css --file2 new.css -o css-diff
```
### Options

#### Error

The CLI can be instructed to exit with an error return code if differences are found by specifying the `-e` or `--error` option. For example:

```javascript
patchcli --file1 old.css --file2 new.css -o css-diff -e
```

[dependencies-url]: https://david-dm.org/brightspace/diff-cli
[dependencies-image]: https://img.shields.io/david/Brightspace/diff-cli.svg

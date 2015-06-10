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

### Create a Diff/Patch

A diff/patch can be created for two files using the `createpatch` command:

```javascript
createpatch --file1 old.css --file2 new.css -o css-diff
```

### Assert No Differences

To assert there are no differences, use the `assertnodiff` command. This is helpful in build/test environment to assert no changes to particular files (ex. comparing output of different CSS preprocessing). If differences are found, the process will exit with an error.

```javascript
assertnodiff --file1 old.css --file2 new.css
```

[dependencies-url]: https://david-dm.org/brightspace/diff-cli
[dependencies-image]: https://img.shields.io/david/Brightspace/diff-cli.svg

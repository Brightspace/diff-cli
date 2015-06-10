'use strict';

var fs = require('fs'),
	diff = require('diff');

var getContents = function(filePath) {
	if (fs.existsSync(filePath)) {
		return fs.readFileSync(filePath).toString();
	} else {
		return '';
	}
};

var getDiff = function(file1, file2) {

	var content1 = getContents(file1),
		content2 = getContents(file2);

	return diff.diffLines(content1, content2);

};

var hasDiff = function(file1, file2) {

	var differences = getDiff(file1, file2);

	var hasDiff = differences && differences.length!==0 &&
		((differences[0].count && differences[0].count!==0) || differences[0].removed || differences.added);

	return hasDiff;

};

module.exports = {
	getContents: getContents,
	getDiff: getDiff,
	hasDiff: hasDiff
};

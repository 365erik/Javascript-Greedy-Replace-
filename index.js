// Test data.
const str = '{{Tokens}} will be {{replaced}} with {{markdown}} style *emphasis*.' ;

console.log('/{{(.*?)}}/ matches only the first instance of the {{TOKEN}}:')
const ungreeedy = str.replace(/{{(.*?)}}/, `*$1*`);
console.log(ungreeedy);

console.log('\n\nAdding g flag matches ALL instances, like str.replaceAll()');
const greedy = str.replace(/{{(.*?)}}/g, `*$1*`);
console.log(greedy);

// String.replaceAll() works in browsers, but it is not 
// found in Nodejs until v15, see https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V15.md#v8-86---35415
if (typeof str.replaceAll === 'function') {
  console.log(`\n\nString.prototype.replaceAll() requires a Global regex and can't be localized to the function call.`)
  const re = new RegExp("{{(.*?)}}", "g");
  const allReplaced = orig.replaceAll(re, `*$1*`);
  console.log(allReplaced)
} else {
console.log(`\n\nString.prototype.replaceAll() is supported in most browsers, but you won't find it in Nodejs until v15 and greater.`)
}

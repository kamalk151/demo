#!/usr/bin/env node
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data) {
 var parsed_json = JSON.parse(data);

console.log('Parsed JSON:---', parsed_json.response.body);
 // Modify the response status code
 parsed_json.response.status = 201;


 // Modify the response body
 parsed_json.response.body = "Response modified by middleware";


 // Stringify the modified JSON
 var newJsonString = JSON.stringify(parsed_json);


 // Write the modified JSON to stdout
 process.stdout.write(newJsonString);
});
process.stdin.on('end', function() {
  process.exit(0);
});
// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', function(data) {
//   var parsed_json = JSON.parse(data);
//   // Modify the response status code
//   parsed_json.response.status = 201;
//   // Modify the response body
//   parsed_json.response.body = "Response modified by middleware";
//   // Stringify the modified JSON
//   var newJsonString = JSON.stringify(parsed_json);
//   // Write the modified JSON to stdout
//   process.stdout.write(newJsonString);
// }
// );
// process.stdin.on('end', function() {
//   process.exit(0);
// });

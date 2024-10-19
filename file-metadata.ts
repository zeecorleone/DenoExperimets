const fileInfo = await Deno.stat("./deno.json");

if (fileInfo.isFile) {
  console.log(`File size: ${fileInfo.size} bytes`);
  console.log(`Last modified: ${fileInfo.mtime}`);
} else {
  console.log("This is not a file.");
}
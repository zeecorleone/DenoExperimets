// Function to check and request read/write permissions
async function requestPermissions() {

    await Deno.permissions.request({ name: "read", path: "./example.txt" });

    // Check read permission
  
    // Check write permission
    const writePerm = await Deno.permissions.query({ name: "write", path: "./example.txt" });
    if (writePerm.state === "denied") {
      console.log("Write permission denied. Requesting permission...");
      await Deno.permissions.request({ name: "write", path: "./example.txt" });
    }
  }
  
  // Function to write to a file
  async function writeToFile(content: string) {
    try {
      await Deno.writeTextFile("./example.txt", content);
      console.log("File written successfully!");
    } catch (error) {
      console.error("Error writing to file:", error);
    }
  }
  
  // Function to read from a file
  async function readFromFile() {
    try {
      const data = await Deno.readTextFile("./example.txt");
      console.log("File content:", data);
    } catch (error) {
      console.error("Error reading file:", error);
    }
  }
  
  // Main function to handle permissions and file operations
  async function main() {
    // Request necessary permissions
    await requestPermissions();
  
    // Attempt to write to the file
    await writeToFile("Hello, Deno! This is a permissions example.");
  
    // Attempt to read from the file
    await readFromFile();
  }
  
  // Run the main function
  main();
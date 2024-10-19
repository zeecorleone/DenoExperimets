
const text = "Hello World";
const encoder = new TextEncoder();
const data = encoder.encode(text);

console.log(data);

const key = await crypto.subtle.generateKey(
 {
    name: "AES-GCM",
    length: 256,
 },
 true,
 ["encrypt", "decrypt"]
);

const iv = crypto.getRandomValues(new Uint8Array(12));

const encryptedData = await crypto.subtle.encrypt(
    {
        name: "AES-GCM",
        iv: iv
    },
        key,
        data
)

console.log("Encrypted Data:", new Uint8Array(encryptedData));

// Decrypt the data
const decryptedData = await crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    encryptedData
  );
  
  console.log("Decrypted Text:", new TextDecoder().decode(decryptedData));
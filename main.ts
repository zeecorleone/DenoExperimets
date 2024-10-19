import { hello } from "./hello-world.ts"

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {

  console.log(hello("john"));
  console.log(hello("sarah"));
  console.log(hello("kai"));

  console.log("Add 2 + 3 =", add(2, 3));
}




function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function hello(name: string): string {
    return "Hello " + capitalize(name);
}


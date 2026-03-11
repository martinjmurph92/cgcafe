import { generate } from "generate-password";

export function generatePassword() {
  return generate({
    length: 10,
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: false,
    excludeSimilarCharacters: true,
  });
}

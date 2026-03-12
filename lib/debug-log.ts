import fs from "node:fs";
import path from "node:path";

const LOG_FILE = path.join(process.cwd(), "contact-form-debug.log");

export function debugLog(...args: unknown[]) {
  const line = `[${new Date().toISOString()}] ${args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" ")}\n`;
  try {
    fs.appendFileSync(LOG_FILE, line);
  } catch {
    // ignore write errors
  }
}

export function buildCacheKey(
  base: string[],
  options: Record<string, unknown>
): string[] {
  return [
    ...base,
    ...Object.entries(options)
      .sort(([a], [b]) => a.localeCompare(b)) // ensure consistent order
      .map(([key, value]) => `${key}:${JSON.stringify(value)}`),
  ];
}

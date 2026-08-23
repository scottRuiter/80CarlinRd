export const basePath = "/80CarlinRd";

export function asset(path: string) {
  if (!path.startsWith("/") || path.startsWith(`${basePath}/`)) return path;
  return `${basePath}${path}`;
}

export function formatCreated(created: string) {
  const day = created.slice(8, 10);
  const month = created.slice(5, 7);
  const year = created.slice(0, created.indexOf("-"));

  return `${day}.${month}.${year}`;
}

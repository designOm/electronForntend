export function hexToRGB(h: string, a = 1): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);

  if (result) {
    const r: number = parseInt(result[1], 16);
    const g: number = parseInt(result[2], 16);
    const b: number = parseInt(result[3], 16);

    return `rgba(${r ?? 225}, ${g ?? 225}, ${b ?? 225}, ${a})`;
  } else {
    return h;
  }
}

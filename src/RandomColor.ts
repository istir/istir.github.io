export interface HSL {
  h: number;
  s: number;
  l: number;
}

export default class RandomColor {
  static randomHover(): HSL {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);
    return { h, s, l };
  }
  static randomHeaderColor(type: string, background: HSL): HSL {
    const newLum = this.calculateNewLuminance(background.l);
    if (type === "h1") {
      return { h: background.h, s: background.s, l: newLum };
    } else if (type === "h2") {
      return {
        h: background.h,
        s: background.s,
        l: background.l <= 33 ? newLum + 20 : newLum - 20,
      };
    } else return { h: 0, s: 0, l: 0 };
  }
  static calculateNewLuminance(luminance: number) {
    const ratio = 3;
    if (luminance <= 33) {
      return Math.floor((luminance + 5) * ratio - 5);
    } else {
      return Math.floor((luminance + 5) / ratio - 5);
    }
  }

  static HSLtoString(color: HSL, opacity?: number) {
    if (opacity)
      return `hsla(${color.h}deg, ${color.s}%, ${color.l}%, ${opacity})`;
    return `hsl(${color.h}deg, ${color.s}%, ${color.l}%)`;
  }
}

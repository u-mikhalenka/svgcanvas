export class Context {
  public strokeStyle: string;
  public fillStyle: string;
  public lineCap: CanvasLineCap;
  public lineDashOffset: number;
  public lineJoin: CanvasLineJoin;
  public lineWidth: number;
  public globalAlpha: number;

  public setLineDash(segments: number[]): void;

  public save(): void;
  public restore(): void;
  public beginPath(): void;
  public closePath(): void;
  public lineTo(x: number, y: number): void;
  public moveTo(x: number, y: number): void;
  public rect(x: number, y: number, w: number, h: number): void;
  public clip(): void;
  public fill(): void;
  public stroke(): void;
  public transform(a: number, b: number, c: number, d: number, e: number, f: number): void;

  public getSvg(): SVGSVGElement | undefined | null;
}

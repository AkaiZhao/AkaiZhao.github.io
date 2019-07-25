import { WindowData, ChessData } from './interfaces';

export default class {
  data: number[][] = [];
  isWhite: boolean = false;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  win: boolean = false;
  lastChess: { x: number; y: number; px: number; py: number };
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.createNewGame();
  }

  /**
   * 開始新遊戲
   */
  public createNewGame() {
    for (let x = 0; x < 15; x++) {
      this.data[x] = [];
      for (let y = 0; y < 15; y++) {
        this.data[x][y] = 0;
      }
    }
    this.isWhite = false;
    this.win = false;
    this.lastChess = null;
  }
  /**
   * 下棋
   */
  public play({ e, offset }: WindowData) {
    let { x, y, px, py } = this.calcPosition({ e, offset });
    if (x >= 15 || x < 0 || y >= 15 || y < 0 || this.data[x][y] != 0) return;
    this.lastChess = { x, y, px, py };
    if (this.isWhite) {
      this.data[x][y] = -1;
      this.drawChess({ x, y, c: this.data[x][y] });
      this.isWhite = false;
    } else {
      this.data[x][y] = 1;
      this.drawChess({ x, y, c: this.data[x][y] });

      this.isWhite = true;
    }
    this.judgement({ x, y, c: this.data[x][y] });
    this.refresh();
  }
  /**
   * 重整棋盤
   */
  public refresh() {
    for (let x = 0; x < this.data.length; x++) {
      for (let y = 0; y < this.data.length; y++) {
        this.drawChess({ x, y, c: this.data[x][y] });
        this.mark();
      }
    }
  }
  /**
   * 滑鼠特效
   */
  public hover({ e, offset }: WindowData) {
    let { px, py } = this.calcPosition({ e, offset });
    this.drawBlock(px, py);
  }
  /**
   * 計算位置
   * @param e 滑鼠事件
   * @param offset 螢幕間隔
   */
  private calcPosition({
    e,
    offset
  }: WindowData): { x: number; y: number; px: number; py: number } {
    let x: number = Math.round((e.clientX - offset.left - 20) / 40);
    let y: number = Math.round((e.clientY - offset.top - 20) / 40);
    let px: number = 20 + x * 40;
    let py: number = 20 + y * 40;
    return { x, y, px, py };
  }
  /**
   *  將棋子畫到畫布上
   * @param {number} x X座標
   * @param {number} y Y座標
   * @param {number} c 棋子顏色
   */
  private drawChess({ x, y, c }: ChessData) {
    let rx: number = 20 + x * 40,
      ry: number = 20 + y * 40,
      r: number = 15,
      pi: number = 2 * Math.PI;
    this.context.beginPath();
    this.context.arc(rx, ry, r, 0, pi);
    this.context.closePath();
    let gradient = this.context.createRadialGradient(
      rx + 2,
      ry - 2,
      r,
      rx + 2,
      ry + 2,
      0
    );
    if (c === 1) {
      gradient.addColorStop(0, '#0A0A0A');
      gradient.addColorStop(1, '#636766');
    } else if (c === -1) {
      gradient.addColorStop(0, '#D1D1D1');
      gradient.addColorStop(1, '#F9F9F9');
    }
    this.context.fillStyle = gradient;
    this.context.fill();
  }
  /**
   * 計算輸贏結果
   * @param {number} x 座標X軸
   * @param {number} y 座標Y軸
   * @param {number} c 棋子顏色(1or-1)
   */
  private judgement({ x, y, c }: ChessData): void {
    let countH: number = 0,
      countV: number = 0;

    for (let i = x; i > 0; i--) {
      if (this.data[i][y] !== c) break;
      countH += 1;
    }
    for (let i = 0; i < x; i++) {
      if (this.data[i][y] !== c) break;
      countH += 1;
    }
    for (let i = y; i > 0; i--) {
      if (this.data[x][i] !== c) break;
      countV += 1;
    }
    for (let i = 0; i < y; i++) {
      if (this.data[x][i] !== c) break;
      countV += 1;
    }
  }
  /**
   * 在棋子上標記紅點
   */
  private mark() {
    if (!this.lastChess) return;
    let { px, py } = this.lastChess;
    this.context.fillStyle = 'red';
    this.context.beginPath();
    this.context.fillRect(px - 2.5, py - 2.5, 5, 5);
    this.context.closePath();
  }
  /**
   * 滑入的時候繪製方塊
   * @param px X軸位置
   * @param py Y軸位置
   */
  private drawBlock(px: number, py: number) {
    if (this.isWhite) this.context.fillStyle = 'rgba(255, 255, 255, 0.5)';
    else this.context.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this.context.beginPath();
    this.context.fillRect(px - 20, py - 20, 40, 40);
    this.context.closePath();
  }
}

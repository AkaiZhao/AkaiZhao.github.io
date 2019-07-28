/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/chess.ts":
/*!**********************!*\
  !*** ./src/chess.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var default_1 = /** @class */ (function () {
    function default_1(context) {
        this.data = [];
        this.isWhite = false;
        this.winner = 0;
        this.undoCount = 0;
        this.context = context;
        this.createNewGame();
    }
    /**
     * 開始新遊戲
     */
    default_1.prototype.createNewGame = function () {
        for (var x = 0; x < 15; x++) {
            this.data[x] = [];
            for (var y = 0; y < 15; y++) {
                this.data[x][y] = 0;
            }
        }
        this.isWhite = false;
        this.winner = 0;
        this.lastChess = null;
    };
    /**
     * 悔棋
     */
    default_1.prototype.undo = function () {
        if (!this.lastChess || this.undoCount == 1)
            return;
        this.undoCount++;
        var _a = this.lastChess, x = _a.x, y = _a.y;
        this.isWhite = !this.isWhite;
        this.data[x][y] = 0;
        this.lastChess = this.lastTwoChess;
        this.lastTwoChess = null;
    };
    /**
     * 下棋
     */
    default_1.prototype.play = function (_a) {
        var e = _a.e, offset = _a.offset;
        if (this.winner)
            return;
        var _b = this.calcPosition({ e: e, offset: offset }), x = _b.x, y = _b.y, px = _b.px, py = _b.py;
        if (x >= 15 || x < 0 || y >= 15 || y < 0 || this.data[x][y] != 0)
            return;
        if (this.lastChess)
            this.lastTwoChess = this.lastChess;
        this.lastChess = { x: x, y: y, px: px, py: py };
        if (this.isWhite) {
            this.data[x][y] = -1;
            this.drawChess({ x: x, y: y, c: this.data[x][y] });
            this.isWhite = false;
        }
        else {
            this.data[x][y] = 1;
            this.drawChess({ x: x, y: y, c: this.data[x][y] });
            this.isWhite = true;
        }
        this.undoCount = 0;
        this.judgement({ x: x, y: y, c: this.data[x][y] });
        this.refresh();
    };
    /**
     * 重整棋盤
     */
    default_1.prototype.refresh = function () {
        for (var x = 0; x < this.data.length; x++) {
            for (var y = 0; y < this.data.length; y++) {
                this.drawChess({ x: x, y: y, c: this.data[x][y] });
                this.mark();
            }
        }
    };
    /**
     * 滑鼠特效
     */
    default_1.prototype.hover = function (_a) {
        var e = _a.e, offset = _a.offset;
        if (this.winner)
            return;
        var _b = this.calcPosition({ e: e, offset: offset }), px = _b.px, py = _b.py;
        this.drawBlock(px, py);
    };
    /**
     * 計算位置
     * @param e 滑鼠事件
     * @param offset 螢幕間隔
     */
    default_1.prototype.calcPosition = function (_a) {
        var e = _a.e, offset = _a.offset;
        var x = Math.round((e.clientX - offset.left - 20) / 40);
        var y = Math.round((e.clientY - offset.top - 20) / 40);
        var px = 20 + x * 40;
        var py = 20 + y * 40;
        return { x: x, y: y, px: px, py: py };
    };
    /**
     *  將棋子畫到畫布上
     * @param {number} x X座標
     * @param {number} y Y座標
     * @param {number} c 棋子顏色
     */
    default_1.prototype.drawChess = function (_a) {
        var x = _a.x, y = _a.y, c = _a.c;
        var rx = 20 + x * 40, ry = 20 + y * 40, r = 15, pi = 2 * Math.PI;
        this.context.beginPath();
        this.context.arc(rx, ry, r, 0, pi);
        this.context.closePath();
        var gradient = this.context.createRadialGradient(rx + 2, ry - 2, r, rx + 2, ry + 2, 0);
        if (c === 1) {
            gradient.addColorStop(0, '#0A0A0A');
            gradient.addColorStop(1, '#636766');
        }
        else if (c === -1) {
            gradient.addColorStop(0, '#D1D1D1');
            gradient.addColorStop(1, '#F9F9F9');
        }
        this.context.fillStyle = gradient;
        this.context.fill();
    };
    /**
     * 計算輸贏結果
     * @param {number} x 座標X軸
     * @param {number} y 座標Y軸
     * @param {number} c 棋子顏色(1or-1)
     */
    default_1.prototype.judgement = function (_a) {
        var x = _a.x, y = _a.y, c = _a.c;
        var row = { count: -1, bright: false, bleft: false };
        var col = { count: -1, bright: false, bleft: false };
        var ltrb = { count: -1, bright: false, bleft: false };
        var rtlb = { count: -1, bright: false, bleft: false };
        for (var i = 0; i < 5; i++) {
            // 水平
            if (this.data[x + i] && !row.bright) {
                if (this.data[x + i][y] == c)
                    row.count++;
                else
                    row.bright = true;
            }
            if (this.data[x - i] && !row.bleft) {
                if (this.data[x - i][y] === c)
                    row.count++;
                else
                    row.bleft = true;
            }
            // 垂直
            if (this.data[y + i] && !col.bright) {
                if (this.data[x][y + i] == c)
                    col.count++;
                else
                    col.bright = true;
            }
            if (this.data[y - i] && !col.bleft) {
                if (this.data[x][y - i] === c)
                    col.count++;
                else
                    col.bleft = true;
            }
            // 左上右下
            if (this.data[x + i] && this.data[y + i] && !ltrb.bright) {
                if (this.data[x + i][y + i] == c)
                    ltrb.count++;
                else
                    ltrb.bright = true;
            }
            if (this.data[x - i] && this.data[y - i] && !ltrb.bleft) {
                if (this.data[x - i][y - i] === c)
                    ltrb.count++;
                else
                    ltrb.bleft = true;
            }
            // 右上左下
            if (this.data[x + i] && this.data[y - i] && !rtlb.bright) {
                if (this.data[x + i][y - i] == c)
                    rtlb.count++;
                else
                    rtlb.bright = true;
            }
            if (this.data[x - i] && this.data[y + i] && !rtlb.bleft) {
                if (this.data[x - i][y + i] === c)
                    rtlb.count++;
                else
                    rtlb.bleft = true;
            }
        }
        if (row.count >= 5 ||
            col.count >= 5 ||
            ltrb.count >= 5 ||
            rtlb.count >= 5) {
            this.winner = c;
        }
    };
    /**
     * 在棋子上標記紅點
     */
    default_1.prototype.mark = function () {
        if (!this.lastChess)
            return;
        var _a = this.lastChess, px = _a.px, py = _a.py;
        this.context.fillStyle = 'red';
        this.context.beginPath();
        this.context.fillRect(px - 2.5, py - 2.5, 5, 5);
        this.context.closePath();
    };
    /**
     * 滑入的時候繪製方塊
     * @param px X軸位置
     * @param py Y軸位置
     */
    default_1.prototype.drawBlock = function (px, py) {
        if (this.isWhite)
            this.context.fillStyle = 'rgba(255, 255, 255, 0.5)';
        else
            this.context.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.context.beginPath();
        this.context.fillRect(px - 20, py - 20, 40, 40);
        this.context.closePath();
    };
    return default_1;
}());
/* harmony default export */ __webpack_exports__["default"] = (default_1);


/***/ }),

/***/ "./src/drawMap.ts":
/*!************************!*\
  !*** ./src/drawMap.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var default_1 = /** @class */ (function () {
    function default_1(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.inital();
    }
    /**
     *  初始化棋盤
     */
    default_1.prototype.inital = function () {
        this.clearBoard();
        this.drawBoard();
    };
    /**
     * 清除棋盤
     */
    default_1.prototype.clearBoard = function () {
        this.context = this.canvas.getContext('2d');
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = '#845c3b';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    /**
     * 繪製棋盤
     */
    default_1.prototype.drawBoard = function () {
        for (var i = 20; i < this.canvas.height; i += 40) {
            this.context.strokeStyle = '#000';
            this.context.beginPath();
            this.context.moveTo(20, i);
            this.context.lineTo(this.canvas.height - 20, i);
            this.context.moveTo(i, 20);
            this.context.lineTo(i, this.canvas.height - 20);
            this.context.closePath();
            this.context.stroke();
        }
    };
    return default_1;
}());
/* harmony default export */ __webpack_exports__["default"] = (default_1);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawMap */ "./src/drawMap.ts");
/* harmony import */ var _chess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chess */ "./src/chess.ts");


var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var drawMap = new _drawMap__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, context);
var chess = new _chess__WEBPACK_IMPORTED_MODULE_1__["default"](context);
canvas.addEventListener('click', function (e) {
    chess.play({ e: e, offset: canvas.getBoundingClientRect() });
    if (chess.winner)
        document.getElementById('title').innerText =
            chess.winner == 1 ? 'BLACK WIN' : 'WHITE WIN';
});
window.addEventListener('keyup', function (e) {
    drawMap.inital();
    chess.refresh();
});
function refresh(e) {
    drawMap.inital();
    chess.refresh();
    chess.hover({ e: e, offset: canvas.getBoundingClientRect() });
}
canvas.addEventListener('mousemove', function (e) {
    refresh(e);
});
var restartBtn = document.getElementById('restart');
restartBtn.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('title').innerText = 'GOMOKU';
    drawMap.inital();
    chess.createNewGame();
});
var undoBtn = document.getElementById('undo');
undoBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (chess.winner)
        return;
    chess.undo();
    drawMap.inital();
    chess.refresh();
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZXNzLnRzIiwid2VicGFjazovLy8uL3NyYy9kcmF3TWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQUE7SUFRRSxtQkFBWSxPQUFpQztRQVByQyxTQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFMUIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUdsQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQ0FBYSxHQUFwQjtRQUNFLEtB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U0FBUyxHQUFHLFFBQVEsQ0FBQztJQUN0RCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBSSxPQUFPLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0QsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxXQUFDO0lBQ2pDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuQixJQUFJLEtBQUssQ0FBQyxNQUFNO1FBQUUsT0FBTztJQUN6QixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBXaW5kb3dEYXRhLCBDaGVzc0RhdGEsIENvdW50ZXIgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG4gIHByaXZhdGUgZGF0YTogbnVtYmVyW11bXSA9IFtdO1xyXG4gIHByaXZhdGUgaXNXaGl0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIHB1YmxpYyB3aW5uZXI6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBsYXN0Q2hlc3M6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHB4OiBudW1iZXI7IHB5OiBudW1iZXIgfTtcclxuICBwcml2YXRlIGxhc3RUd29DaGVzczogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgcHg6IG51bWJlcjsgcHk6IG51bWJlciB9O1xyXG4gIHByaXZhdGUgdW5kb0NvdW50OiBudW1iZXIgPSAwO1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgIHRoaXMuY3JlYXRlTmV3R2FtZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6ZaL5aeL5paw6YGK5oiyXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZU5ld0dhbWUoKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDE1OyB4KyspIHtcclxuICAgICAgdGhpcy5kYXRhW3hdID0gW107XHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTU7IHkrKykge1xyXG4gICAgICAgIHRoaXMuZGF0YVt4XVt5XSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaXNXaGl0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy53aW5uZXIgPSAwO1xyXG4gICAgdGhpcy5sYXN0Q2hlc3MgPSBudWxsO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDmgpTmo4tcclxuICAgKi9cclxuICBwdWJsaWMgdW5kbygpIHtcclxuICAgIGlmICghdGhpcy5sYXN0Q2hlc3MgfHwgdGhpcy51bmRvQ291bnQgPT0gMSkgcmV0dXJuO1xyXG4gICAgdGhpcy51bmRvQ291bnQrKztcclxuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMubGFzdENoZXNzO1xyXG4gICAgdGhpcy5pc1doaXRlID0gIXRoaXMuaXNXaGl0ZTtcclxuICAgIHRoaXMuZGF0YVt4XVt5XSA9IDA7XHJcbiAgICB0aGlzLmxhc3RDaGVzcyA9IHRoaXMubGFzdFR3b0NoZXNzO1xyXG4gICAgdGhpcy5sYXN0VHdvQ2hlc3MgPSBudWxsO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDkuIvmo4tcclxuICAgKi9cclxuICBwdWJsaWMgcGxheSh7IGUsIG9mZnNldCB9OiBXaW5kb3dEYXRhKSB7XHJcbiAgICBpZiAodGhpcy53aW5uZXIpIHJldHVybjtcclxuICAgIGxldCB7IHgsIHksIHB4LCBweSB9ID0gdGhpcy5jYWxjUG9zaXRpb24oeyBlLCBvZmZzZXQgfSk7XHJcbiAgICBpZiAoeCA+PSAxNSB8fCB4IDwgMCB8fCB5ID49IDE1IHx8IHkgPCAwIHx8IHRoaXMuZGF0YVt4XVt5XSAhPSAwKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5sYXN0Q2hlc3MpIHRoaXMubGFzdFR3b0NoZXNzID0gdGhpcy5sYXN0Q2hlc3M7XHJcbiAgICB0aGlzLmxhc3RDaGVzcyA9IHsgeCwgeSwgcHgsIHB5IH07XHJcbiAgICBpZiAodGhpcy5pc1doaXRlKSB7XHJcbiAgICAgIHRoaXMuZGF0YVt4XVt5XSA9IC0xO1xyXG4gICAgICB0aGlzLmRyYXdDaGVzcyh7IHgsIHksIGM6IHRoaXMuZGF0YVt4XVt5XSB9KTtcclxuICAgICAgdGhpcy5pc1doaXRlID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGFbeF1beV0gPSAxO1xyXG4gICAgICB0aGlzLmRyYXdDaGVzcyh7IHgsIHksIGM6IHRoaXMuZGF0YVt4XVt5XSB9KTtcclxuICAgICAgdGhpcy5pc1doaXRlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMudW5kb0NvdW50ID0gMDtcclxuICAgIHRoaXMuanVkZ2VtZW50KHsgeCwgeSwgYzogdGhpcy5kYXRhW3hdW3ldIH0pO1xyXG4gICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOmHjeaVtOaji+ebpFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWZyZXNoKCkge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmRhdGEubGVuZ3RoOyB4KyspIHtcclxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmRhdGEubGVuZ3RoOyB5KyspIHtcclxuICAgICAgICB0aGlzLmRyYXdDaGVzcyh7IHgsIHksIGM6IHRoaXMuZGF0YVt4XVt5XSB9KTtcclxuICAgICAgICB0aGlzLm1hcmsoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiDmu5HpvKDnibnmlYhcclxuICAgKi9cclxuICBwdWJsaWMgaG92ZXIoeyBlLCBvZmZzZXQgfTogV2luZG93RGF0YSkge1xyXG4gICAgaWYgKHRoaXMud2lubmVyKSByZXR1cm47XHJcbiAgICBsZXQgeyBweCwgcHkgfSA9IHRoaXMuY2FsY1Bvc2l0aW9uKHsgZSwgb2Zmc2V0IH0pO1xyXG4gICAgdGhpcy5kcmF3QmxvY2socHgsIHB5KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6KiI566X5L2N572uXHJcbiAgICogQHBhcmFtIGUg5ruR6byg5LqL5Lu2XHJcbiAgICogQHBhcmFtIG9mZnNldCDonqLluZXplpPpmpRcclxuICAgKi9cclxuICBwcml2YXRlIGNhbGNQb3NpdGlvbih7XHJcbiAgICBlLFxyXG4gICAgb2Zmc2V0XHJcbiAgfTogV2luZG93RGF0YSk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHB4OiBudW1iZXI7IHB5OiBudW1iZXIgfSB7XHJcbiAgICBsZXQgeDogbnVtYmVyID0gTWF0aC5yb3VuZCgoZS5jbGllbnRYIC0gb2Zmc2V0LmxlZnQgLSAyMCkgLyA0MCk7XHJcbiAgICBsZXQgeTogbnVtYmVyID0gTWF0aC5yb3VuZCgoZS5jbGllbnRZIC0gb2Zmc2V0LnRvcCAtIDIwKSAvIDQwKTtcclxuICAgIGxldCBweDogbnVtYmVyID0gMjAgKyB4ICogNDA7XHJcbiAgICBsZXQgcHk6IG51bWJlciA9IDIwICsgeSAqIDQwO1xyXG4gICAgcmV0dXJuIHsgeCwgeSwgcHgsIHB5IH07XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqICDlsIfmo4vlrZDnlavliLDnlavluIPkuIpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geCBY5bqn5qiZXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgWeW6p+aomVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjIOaji+WtkOmhj+iJslxyXG4gICAqL1xyXG4gIHByaXZhdGUgZHJhd0NoZXNzKHsgeCwgeSwgYyB9OiBDaGVzc0RhdGEpIHtcclxuICAgIGxldCByeDogbnVtYmVyID0gMjAgKyB4ICogNDAsXHJcbiAgICAgIHJ5OiBudW1iZXIgPSAyMCArIHkgKiA0MCxcclxuICAgICAgcjogbnVtYmVyID0gMTUsXHJcbiAgICAgIHBpOiBudW1iZXIgPSAyICogTWF0aC5QSTtcclxuICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY29udGV4dC5hcmMocngsIHJ5LCByLCAwLCBwaSk7XHJcbiAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICBsZXQgZ3JhZGllbnQgPSB0aGlzLmNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoXHJcbiAgICAgIHJ4ICsgMixcclxuICAgICAgcnkgLSAyLFxyXG4gICAgICByLFxyXG4gICAgICByeCArIDIsXHJcbiAgICAgIHJ5ICsgMixcclxuICAgICAgMFxyXG4gICAgKTtcclxuICAgIGlmIChjID09PSAxKSB7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAnIzBBMEEwQScpO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJyM2MzY3NjYnKTtcclxuICAgIH0gZWxzZSBpZiAoYyA9PT0gLTEpIHtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICcjRDFEMUQxJyk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnI0Y5RjlGOScpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6KiI566X6Ly46LSP57WQ5p6cXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHgg5bqn5qiZWOi7uFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IOW6p+aomVnou7hcclxuICAgKiBAcGFyYW0ge251bWJlcn0gYyDmo4vlrZDpoY/oibIoMW9yLTEpXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBqdWRnZW1lbnQoeyB4LCB5LCBjIH06IENoZXNzRGF0YSk6IHZvaWQge1xyXG4gICAgbGV0IHJvdzogQ291bnRlciA9IHsgY291bnQ6IC0xLCBicmlnaHQ6IGZhbHNlLCBibGVmdDogZmFsc2UgfTtcclxuICAgIGxldCBjb2w6IENvdW50ZXIgPSB7IGNvdW50OiAtMSwgYnJpZ2h0OiBmYWxzZSwgYmxlZnQ6IGZhbHNlIH07XHJcbiAgICBsZXQgbHRyYjogQ291bnRlciA9IHsgY291bnQ6IC0xLCBicmlnaHQ6IGZhbHNlLCBibGVmdDogZmFsc2UgfTtcclxuICAgIGxldCBydGxiOiBDb3VudGVyID0geyBjb3VudDogLTEsIGJyaWdodDogZmFsc2UsIGJsZWZ0OiBmYWxzZSB9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgLy8g5rC05bmzXHJcbiAgICAgIGlmICh0aGlzLmRhdGFbeCArIGldICYmICFyb3cuYnJpZ2h0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YVt4ICsgaV1beV0gPT0gYykgcm93LmNvdW50Kys7XHJcbiAgICAgICAgZWxzZSByb3cuYnJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kYXRhW3ggLSBpXSAmJiAhcm93LmJsZWZ0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YVt4IC0gaV1beV0gPT09IGMpIHJvdy5jb3VudCsrO1xyXG4gICAgICAgIGVsc2Ugcm93LmJsZWZ0ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICAvLyDlnoLnm7RcclxuICAgICAgaWYgKHRoaXMuZGF0YVt5ICsgaV0gJiYgIWNvbC5icmlnaHQpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhW3hdW3kgKyBpXSA9PSBjKSBjb2wuY291bnQrKztcclxuICAgICAgICBlbHNlIGNvbC5icmlnaHQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRhdGFbeSAtIGldICYmICFjb2wuYmxlZnQpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhW3hdW3kgLSBpXSA9PT0gYykgY29sLmNvdW50Kys7XHJcbiAgICAgICAgZWxzZSBjb2wuYmxlZnQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIOW3puS4iuWPs+S4i1xyXG4gICAgICBpZiAodGhpcy5kYXRhW3ggKyBpXSAmJiB0aGlzLmRhdGFbeSArIGldICYmICFsdHJiLmJyaWdodCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGFbeCArIGldW3kgKyBpXSA9PSBjKSBsdHJiLmNvdW50Kys7XHJcbiAgICAgICAgZWxzZSBsdHJiLmJyaWdodCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZGF0YVt4IC0gaV0gJiYgdGhpcy5kYXRhW3kgLSBpXSAmJiAhbHRyYi5ibGVmdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGFbeCAtIGldW3kgLSBpXSA9PT0gYykgbHRyYi5jb3VudCsrO1xyXG4gICAgICAgIGVsc2UgbHRyYi5ibGVmdCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgLy8g5Y+z5LiK5bem5LiLXHJcbiAgICAgIGlmICh0aGlzLmRhdGFbeCArIGldICYmIHRoaXMuZGF0YVt5IC0gaV0gJiYgIXJ0bGIuYnJpZ2h0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YVt4ICsgaV1beSAtIGldID09IGMpIHJ0bGIuY291bnQrKztcclxuICAgICAgICBlbHNlIHJ0bGIuYnJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kYXRhW3ggLSBpXSAmJiB0aGlzLmRhdGFbeSArIGldICYmICFydGxiLmJsZWZ0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YVt4IC0gaV1beSArIGldID09PSBjKSBydGxiLmNvdW50Kys7XHJcbiAgICAgICAgZWxzZSBydGxiLmJsZWZ0ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICByb3cuY291bnQgPj0gNSB8fFxyXG4gICAgICBjb2wuY291bnQgPj0gNSB8fFxyXG4gICAgICBsdHJiLmNvdW50ID49IDUgfHxcclxuICAgICAgcnRsYi5jb3VudCA+PSA1XHJcbiAgICApIHtcclxuICAgICAgdGhpcy53aW5uZXIgPSBjO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiDlnKjmo4vlrZDkuIrmqJnoqJjntIXpu55cclxuICAgKi9cclxuICBwcml2YXRlIG1hcmsoKSB7XHJcbiAgICBpZiAoIXRoaXMubGFzdENoZXNzKSByZXR1cm47XHJcbiAgICBsZXQgeyBweCwgcHkgfSA9IHRoaXMubGFzdENoZXNzO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICdyZWQnO1xyXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHB4IC0gMi41LCBweSAtIDIuNSwgNSwgNSk7XHJcbiAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOa7keWFpeeahOaZguWAmee5quijveaWueWhilxyXG4gICAqIEBwYXJhbSBweCBY6Lu45L2N572uXHJcbiAgICogQHBhcmFtIHB5IFnou7jkvY3nva5cclxuICAgKi9cclxuICBwcml2YXRlIGRyYXdCbG9jayhweDogbnVtYmVyLCBweTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5pc1doaXRlKSB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSc7XHJcbiAgICBlbHNlIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjUpJztcclxuICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdChweCAtIDIwLCBweSAtIDIwLCA0MCwgNDApO1xyXG4gICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLmluaXRhbCgpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiAg5Yid5aeL5YyW5qOL55ukXHJcbiAgICovXHJcbiAgcHVibGljIGluaXRhbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJCb2FyZCgpO1xyXG4gICAgdGhpcy5kcmF3Qm9hcmQoKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5riF6Zmk5qOL55ukXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjbGVhckJvYXJkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJyM4NDVjM2InO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDnuaroo73mo4vnm6RcclxuICAgKi9cclxuICBwcml2YXRlIGRyYXdCb2FyZCgpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSAyMDsgaSA8IHRoaXMuY2FudmFzLmhlaWdodDsgaSArPSA0MCkge1xyXG4gICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XHJcbiAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbygyMCwgaSk7XHJcbiAgICAgIHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5jYW52YXMuaGVpZ2h0IC0gMjAsIGkpO1xyXG4gICAgICB0aGlzLmNvbnRleHQubW92ZVRvKGksIDIwKTtcclxuICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyhpLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSAyMCk7XHJcbiAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgRHJhd01hcCBmcm9tICcuL2RyYXdNYXAnO1xyXG5pbXBvcnQgQ2hlc3MgZnJvbSAnLi9jaGVzcyc7XHJcbmxldCBjYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG5sZXQgY29udGV4dCA9IDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+Y2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbmxldCBkcmF3TWFwID0gbmV3IERyYXdNYXAoY2FudmFzLCBjb250ZXh0KTtcclxubGV0IGNoZXNzID0gbmV3IENoZXNzKGNvbnRleHQpO1xyXG5cclxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgY2hlc3MucGxheSh7IGUsIG9mZnNldDogY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIH0pO1xyXG4gIGlmIChjaGVzcy53aW5uZXIpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS5pbm5lclRleHQgPVxyXG4gICAgICBjaGVzcy53aW5uZXIgPT0gMSA/ICdCTEFDSyBXSU4nIDogJ1dISVRFIFdJTic7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XHJcbiAgZHJhd01hcC5pbml0YWwoKTtcclxuICBjaGVzcy5yZWZyZXNoKCk7XHJcbn0pO1xyXG5mdW5jdGlvbiByZWZyZXNoKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICBkcmF3TWFwLmluaXRhbCgpO1xyXG4gIGNoZXNzLnJlZnJlc2goKTtcclxuICBjaGVzcy5ob3Zlcih7IGUsIG9mZnNldDogY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIH0pO1xyXG59XHJcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHtcclxuICByZWZyZXNoKGUpO1xyXG59KTtcclxuXHJcbmxldCByZXN0YXJ0QnRuID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0Jyk7XHJcblxyXG5yZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLmlubmVyVGV4dCA9ICdHT01PS1UnO1xyXG4gIGRyYXdNYXAuaW5pdGFsKCk7XHJcbiAgY2hlc3MuY3JlYXRlTmV3R2FtZSgpO1xyXG59KTtcclxubGV0IHVuZG9CdG4gPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuZG8nKTtcclxudW5kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoY2hlc3Mud2lubmVyKSByZXR1cm47XHJcbiAgY2hlc3MudW5kbygpO1xyXG4gIGRyYXdNYXAuaW5pdGFsKCk7XHJcbiAgY2hlc3MucmVmcmVzaCgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
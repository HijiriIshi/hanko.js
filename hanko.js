/*!
 * hanko.js v0.1.0
 * Copyright (c) HijiriIshi
 * Released under the MIT License
 * https://github.com/HijiriIshi/hanko.js
 *
 * @author HijiriIshi
 * @version 0.1.0
 * @license MIT
 * @since 2025-02-07
 */
class Hanko {
    constructor(settings) {
        this.layout = settings.layout || "standard";
        this.fontFamily = settings.fontFamily || "'Yu Gothic', 'Hiragino Kaku Gothic ProN', 'Meiryo'";
        this.color = settings.color || "red";
        this.size = settings.size || 50;
    }

    generate(text) {
        if (!text || text.length === 0) return undefined;

        const layoutMethods = {
            standard: this.#generateStandard.bind(this)
        };

        return layoutMethods[this.layout](text);
    }

    #generateStandard(text) {
        const circle = this.#generateCircle();
        const texts = this.#generateStandardTexts(text);
        return `<svg width="${this.size}" height="${this.size}">${circle}${texts}</svg>`;
    }

    #generateCircle() {
        return `<circle cx="${this.size / 2}" cy="${this.size / 2}" r="${this.size / 2 - this.size * 0.05}" stroke="${this.color}" stroke-width="${this.size * 0.05}" fill="none" />`;
    }

    #generateStandardTexts(text) {
        let positions = [];
        let fontSize = this.size;

        switch (text.length) {
            case 1:
                fontSize *= 0.5;
                positions = [this.#getPosition(this.size / 2, this.size / 1.5, fontSize)];
                break;
            case 2:
                fontSize *= 0.36;
                positions = [
                    this.#getPosition(this.size / 2, this.size / 2.2, fontSize),
                    this.#getPosition(this.size / 2, this.size / 1.2, fontSize)
                ];
                break;
            case 3:
                fontSize *= 0.28;
                positions = [
                    this.#getPosition(this.size / 2, this.size / 3, fontSize),
                    this.#getPosition(this.size / 2, this.size / 1.65, fontSize),
                    this.#getPosition(this.size / 2, this.size / 1.15, fontSize)
                ];
                break;
            case 4:
                fontSize *= 0.33;
                positions = [
                    this.#getPosition(this.size / 1.5, this.size / 2.2, fontSize),
                    this.#getPosition(this.size / 1.5, this.size / 1.26, fontSize),
                    this.#getPosition(this.size / 2.7, this.size / 2.2, fontSize),
                    this.#getPosition(this.size / 2.7, this.size / 1.26, fontSize)
                ];
                break;
            default:
                fontSize *= 0.28;
                positions = [
                    this.#getPosition(this.size / 1.55, this.size / 3, fontSize),
                    this.#getPosition(this.size / 1.55, this.size / 1.65, fontSize),
                    this.#getPosition(this.size / 1.55, this.size / 1.15, fontSize),
                    this.#getPosition(this.size / 2.7, this.size / 2.2, fontSize),
                    this.#getPosition(this.size / 2.7, this.size / 1.26, fontSize)
                ];
        }

        return positions.map((pos, index) => 
            `<text x="${pos.x}" y="${pos.y}" font-size="${pos.fontSize}" font-family="${this.fontFamily}" fill="${this.color}" text-anchor="middle">${text[index]}</text>`
        ).join('');
    }

    #getPosition(x, y, fontSize) {
        return { x, y, fontSize };
    }
}

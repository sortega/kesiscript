"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
    const width = 1024;
    const height = 768;
    const tileSize = 32;

    class Kesi {
        constructor(canvas) {
            this.canvas = document.getElementById("canvas");
            this.sprites = document.getElementById("sprites");
            this.sprites.onload = () => kesi.draw();
            this.row = 0
            this.col = 0
            this.facing = "east"
        }

        draw() {
            // Background
            const ctx = this.canvas.getContext("2d");
            ctx.fillStyle = "#00FF00";
            ctx.fillRect(0, 0, width, height);

            // Kesi itself
            const sx = tileSize;
            let sy;
            switch (this.facing) {
                case "north":
                    sy = 3 * tileSize;
                    break;
                case "south":
                    sy = 0 * tileSize;
                    break;
                case "east":
                    sy = 2 * tileSize;
                    break;
                case "west":
                    sy = 1 * tileSize;
                    break;
            }
            const dx = this.col * tileSize;
            const dy = this.row * tileSize;
            ctx.drawImage(this.sprites, sx, sy, tileSize, tileSize, dx, dy, tileSize, tileSize);
        }

        turnLeft() {
            switch (this.facing) {
                case "north":
                    this.facing = "west";
                    break;
                case "south":
                    this.facing = "east";
                    break;
                case "east":
                    this.facing = "north";
                    break;
                case "west":
                    this.facing = "south";
                    break;
            }
            this.draw();
            return this;
        }

        turnRight() {
            switch (this.facing) {
                case "north":
                    this.facing = "east";
                    break;
                case "south":
                    this.facing = "west";
                    break;
                case "east":
                    this.facing = "south";
                    break;
                case "west":
                    this.facing = "north";
                    break;
            }
            this.draw();
            return this;
        }

        advance() {
            switch (this.facing) {
                case "north":
                    this.row -= 1;
                    break;
                case "south":
                    this.row += 1;
                    break;
                case "east":
                    this.col += 1;
                    break;
                case "west":
                    this.col -= 1;
                    break;
            }
            this.draw();
            return this;
        }
    }

    window.kesi = new Kesi();
    console.log("KesiScript 1.0 ready to go")
})
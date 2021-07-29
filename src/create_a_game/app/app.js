"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@babylonjs/core/Debug/debugLayer");
require("@babylonjs/inspector");
require("@babylonjs/loaders/glTF");
const core_1 = require("@babylonjs/core");
//enum for states
var State;
(function (State) {
    State[State["START"] = 0] = "START";
    State[State["GAME"] = 1] = "GAME";
    State[State["LOSE"] = 2] = "LOSE";
    State[State["CUTSCENE"] = 3] = "CUTSCENE";
})(State || (State = {}));
class App2 {
    constructor() {
        //scene - related
        this._state = 0;
        this._canvas = this._createCanvas();
        //initialise babylon scene and engine
        this._engine = new core_1.Engine(this._canvas, true);
        this._scene = new core_1.Scene(this._engine);
        var camera = new core_1.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, core_1.Vector3.Zero(), this._scene);
        camera.attachControl(this._canvas, true);
        var light1 = new core_1.HemisphericLight("light1", new core_1.Vector3(1, 1, 0), this._scene);
        var sphere = core_1.MeshBuilder.CreateSphere("sphere", { diameter: 1 }, this._scene);
        //hide/show the inspector
        window.addEventListener("keydown", (e) => {
            //shift+ctrl+alt+I
            if (e.shiftKey && e.ctrlKey && e.altKey && e.key === "I") {
                if (this._scene.debugLayer.isVisible()) {
                    this._scene.debugLayer.hide();
                }
                else {
                    this._scene.debugLayer.show();
                }
            }
        });
        //run main render loop
        this._engine.runRenderLoop(() => {
            this._scene.render();
        });
    }
    _createCanvas() {
        document.documentElement.style["overflow"] = "hidden";
        document.documentElement.style.overflow = "hidden";
        document.documentElement.style.width = "100%";
        document.documentElement.style.height = "100%";
        document.documentElement.style.margin = "0";
        document.documentElement.style.padding = "0";
        document.body.style.overflow = "hidden";
        document.body.style.width = "100%";
        document.body.style.height = "100%";
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        //create the canvas html element and attach it to the webpage
        this._canvas = document.createElement("canvas");
        this._canvas.style.width = "100%";
        this._canvas.style.height = "100%";
        this._canvas.id = "gameCanvas";
        document.body.appendChild(this._canvas);
        return this._canvas;
    }
}
new App2();
//# sourceMappingURL=app2.js.map
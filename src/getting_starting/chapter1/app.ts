import { ArcRotateCamera, Engine, HemisphericLight, MeshBuilder, Scene, Vector3 } from '@babylonjs/core'

class App {
    constructor() {

        const scene = new Scene(engine);

        const camera = new
            ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), scene);
        camera.attachControl(canvas, true);

        const light = new
            HemisphericLight("light", new Vector3(0, 1, 0), scene);

            const box = MeshBuilder.CreateBox("box", {}, scene)
    }
}
import { Mesh, Scene, Vector3 } from "@babylonjs/core";

export class Environment {
    private _scene: Scene;


    constructor(scene: Scene) { //scene: Scene dicates that the param "scene" must be of the "Scene" type (from babylonjs)
        this._scene = scene;
    }

    public async load() {
        var ground = Mesh.CreateBox("ground", 24, this._scene);
        ground.scaling = new Vector3(1, .02, 1);
    }
}
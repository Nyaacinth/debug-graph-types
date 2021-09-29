/// <reference path="./IDebugGraph.d.ts"/>

/** @noResolution */
declare module "debugGraph" {
    interface IDebugGraphModule {
        /**
         * Create a new debug graph
         * @param type Graph Type
         * @param x Position X-axis, defaults to 0
         * @param y Position Y-axis, defaults to 0
         * @param width Graph Width, defaults to 50
         * @param height Graph Height, defaults to 30
         * @param delay Update Delay, defaults to 0.5 (in seconds)
         * @param label Graph Label, defaults to graph type
         * @param font Graph Font Object, defaults to Vera Sans 8px
         */
        new: (
            type: "fps" | "mem" | "custom",
            x?: number,
            y?: number,
            width?: number,
            height?: number,
            delay?: number,
            label?: string,
            font?: import("love.graphics").Font
        ) => IDebugGraph // TODO
    }

    /**
     * debugGraph
     * @description A Löve2D graph tool for drawing FPS, memory or custom graphs
     * @link https://github.com/Mechazawa/Love-Debug-Graph
     * @version master@a5ff0e64dad9e4e6275c490358c7fee05161bc26
     * @author Mechazawa
     * @license Unlicense-PL
     */
    let debugGraph: IDebugGraphModule
    export = debugGraph
}

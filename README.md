## debug-graph-types

Type declarations of [Love-Debug-Graph](https://github.com/Mechazawa/Love-Debug-Graph), a Löve2D graph tool for drawing FPS, memory or custom graphs

**NOTE: This Declaration is Designed to be used with [TypeScriptToLua](https://typescripttolua.github.io), Not Common Typescript**

| Command | Description |
|-|-|
|`yarn add -D debug-graph-types`| Install this declaration |
|`yarn add debugGraph@Mechazawa/Love-Debug-Graph`| Install debugGraph |

Upon installation this declaration package can be linked to a *tsconfig.json* file.

```json
{
    "compilerOptions": {
        "types": [
            "debug-graph-types"
        ]
    }
}
```

And used anywhere like this:

```typescript
import * as debugGraph from "debugGraph"

let fps_graph = debugGraph.new("fps")

love.update = (dt: number) => {
    fps_graph.update(dt)
}

love.draw = () => {
    fps_graph.draw()
}
```

Make sure to append ";./node_modules/?/?.lua" to your package.path to assist where Lua looks for modules. (for love2d you will need to do this with [`love.filesystem.setRequirePath`](https://love2d.org/wiki/love.filesystem.setRequirePath))

```typescript
package.path += ";./node_modules/?/?.lua"

// ... or in love2d (main.ts, conf.ts won't work):

love.filesystem.setRequirePath(love.filesystem.getRequirePath() + ";node_modules/?/?.lua")
```

interface IDebugGraph {
    /** Position X-axis */
    x: number

    /** Position Y-axis */
    y: number

    /** Graph Width */
    width: number

    /** Graph Height */
    height: number

    /** Update Delay */
    delay: number

    /** Graph Label */
    label: string

    /** Graph Font */
    font: number

    /**
     * Update current graph
     * @param dt Delta Time
     * @param value Value, for `custom` graph usage, will overwrite current measurement
     */
    update(dt: number, value?: number): void

    /** Draw Function */
    draw(): void
}

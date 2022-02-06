declare class SingleDiceResult {
    /**
     * Number of side of the dice
     */
    dimension: number;

    /**
     * Result of the dice
     */
    value: number;

    /**
     * Is this dice discarded in the global result ?
     */
    discarded: boolean;
}

type Visibility = 'all' | 'gm' | 'gmonly'

declare class DiceResult {
    /**
     * The title of this roll, only available at the top
     */
    title: string;

    /**
     * The dice formula
     */
    expression: string;

    /**
     * Who can view this roll ? Possible value : "visible", "gm", "gmonly"
     */
    visibility: Visibility;

    /**
     * Type of roll. Either "number", "dice" or "comparison"
     */
    type: string;

    /**
     * The sum of the roll
     */
    total: number;

    /**
     * List of tags for this entry
     */
    tags: string[];

    /**
     * List of tags for this entry and all children entries
     */
    allTags: string[];

    /**
     * All dice results
     */
    all: SingleDiceResult[];

    /**
     * Children entries
     */
    children: DiceResult[];

    /**
     * Number of dice thrown
     */
    size: number;

    /**
     * Number of faces for dice thrown
     */
    dimension: number;

    /**
     * What numbers the dice outputed
     */
    values: number[];

    /**
     * What numbers were discarded
     */
    discarded: number[];

    /**
     * The left part of the comparison
     */
    left: DiceResult;

    /**
     * THe righ part of the comparison
     */
    right: DiceResult;

    /**
     * Number of successes
     */
    success: number;

    /**
     * Number of failures
     */
    failure: number;
    
    public containsTag(tag: string): boolean;
}

declare class Sheet {
    /**
    * Get a component by its id
    */
    public get(id: string): Component

    /**
     * Get a variable\'s value by its id
     */
    public getVariable(id: string): number|string;

    /**
     * Set multiple components values at the same time.
     */
    public setData(data: any): void;

    /**
     * Prompt the user for additional information
     */
    public prompt(title: string, view: string, callback: Function): void;

    /**
     * Get the id of the sheet
     */
    public id(): string;

    /**
     * Get the name of the sheet
     */
    public name(): string;
}


declare class Dice {
    /**
    * Roll dice
    */
    static roll(sheet: Sheet, expression: string, title: string, visibility?: Visibility, actions?: any): void

    /**
     * Create a new DiceBuilder instance
     */
    static create(base: string): DiceBuilder;
}

declare class Component {
    /**
     * Get the parent component
     */
    public parent(): Component;

    /**
     * Find a repeater\'s element
     */
    public find(id: string): Component;

    /**
     * The callback function is called when the event is triggered
     * Possible events : click, update, mouseenter, mouseleave, keyup
     */
    public on(event: string, callback: Function): void;

    /**
     * The callback function is called when the event is triggered on
     * one of the delegates
     * Possible events : click, update, mouseenter, mouseleave, keyup
     */
    public on(event: string, delegate: string, callback: Function): void;

    /**
     * Remove the listening of an event
     */
    public off(event: string): void;

    /**
     * Remove the listening of a delegated event
     */
    public off(event: string, delegate: string): void;

    /**
     * Hide the component
     */
    public hide(): void;

    /**
     * Show the component if it has been hidden
     */
    public show(): void;

    /**
     * Add a CSS class to the component
     */
    public addClass(className: string): void;

    /**
     * Get the value
     */
    public value(): any;

    /**
     * Set the value of the component
     */
    public value(newValue: any): void;

    /**
     * Get the non-virtual value
     */
    public rawValue(): any;

    /**
     * Get the virtual value
     */
    public virtualValue(): any;

    /**
     * Set the virtual value
     */
    public virtualValue(newValue: any): void;

    /**
     * Get the text content, if the component is a label
     */
    public text(): string;

    /**
     * Replace the text of the label
     */
    public text(replacement: string): void;

    /**
     * Returns true is the component is not hidden
     */
    public visible(): boolean;

    /**
     * Returns the sheet attached to this component
     */
    public sheet(): Sheet;

    /**
     * Get the name
     */
    public name(): string;

    /**
     * Get the id
     */
    public id(): string;
}

declare class DiceBuilder {
    public add(value: DiceBuilder|string): DiceBuilder;
    public minus(value: DiceBuilder|string): DiceBuilder;
    public multiply(value: DiceBuilder|string): DiceBuilder;
    public divide(value: DiceBuilder|string): DiceBuilder;
    public tag(...tags: string[]): DiceBuilder;
    public compare(type: string, right: DiceBuilder|string, weights?: string): DiceBuilder;
    public round(): DiceBuilder;
    public ceil(): DiceBuilder;
    public floor(): DiceBuilder;
    public keeph(max: number): DiceBuilder;
    public keepl(max: number): DiceBuilder;
    public remh(max: number): DiceBuilder;
    public reml(max: number): DiceBuilder;
    public expl(...explodes: number[]): DiceBuilder;
    public expladd(...explodes: number[]): DiceBuilder;
    public mul(multiplier: number): DiceBuilder;
    public reroll(...rerolls: number[]): DiceBuilder;
    public rerolln(...rerolls: number[]): DiceBuilder;
    public ternary(thenParam: DiceBuilder|string, elseParam: DiceBuilder|string): DiceBuilder;
}

declare class Bindings {
    /**
     * Creates a new binding
     */
    static add(name: string, componentId: string, viewId: string, dataCallback: Function): void;

    /**
     * Sends a binding in the chat
     */
    static send(sheet: Sheet, name: string): void;

    /**
     * Removes a binding by its name
     */
    static remove(name: string): void;

    /**
     * Removes all bindings for a component
     */
    static clear(componentId: string): void;
}

declare class Tables {
    /**
     * Gets a table by its id
     */
    static get(id: string): Table;
}

declare class Table {
    /**
     * Gets a line by its id
     */
    public get(id: string): any;

    /**
     * Loop over every line
     */
    public each(callback: (line: any) => void): void;

    /**
     * Get a random line
     */
    public random(callback: (line: any) => void): void;

    public random(count: number, callback: (lines: any[]) => void): void;
}

declare var sheet: Sheet;
declare var init: (sheet: Sheet) => void;
declare var drop: (from: Sheet, to: Sheet) => void;
declare var dropDice: (result: DiceResult, to: Sheet) => void;
declare var initRoll: (result: DiceResult, callback: (view: string, onRender: (sheet: Sheet) => void) => void) => void;
declare var getReferences: (sheet: Sheet) => any;
declare var getBarAttributes: (sheet: Sheet) => any;

declare function _(key: string): string;

declare function each<T>(data: Record<string, T>, callback: (t: T, key?: string) => void);
declare function each<T>(data: T[], callback: (t: T) => void);

declare function log(message: string): void;
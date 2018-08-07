// declare class enJn {
export declare class enJn {

    // main.js
    static each(collection: Object, callback: Function, startingIndex?: number | string, finalIndex?: number | string);

    static selectByText(text: string, context?: enJn | Element | string): enJn;

    // element.js
    // selectText(start?: number | string, end?: number | string): enJn;

    // focus(): enJn;

    // addClass(...classList): enJn;

    // removeClass(...classList): enJn;

    // removeAttr(attrName: string): enJn;

    // html(content): enJn;

    // attribute(attrName: string, value?): enJn | undefined;

    // property(propertyName: string, value?): enJn | undefined;

    // select(): enJn | undefined;

    // unselect(): enJn | undefined;

    // check(): enJn | undefined;

    // uncheck(): enJn | undefined;

    // tagName(): string;

    // selected(): boolean;

    // checked(): boolean;

    // visible(): boolean;

    // query.js

    static eachInBreadth(callback: Function);

    static reverseEach(collection: Object, callback: Function, startingIndex?: number | string);

    static select(collection: Object, callback: Function): Object;

    static isIterable(object: Object): boolean;

    find(query: string): enJn;

    filter(callback: Function): enJn;

    filterInBreadth(callback: Function): enJn;

    sort(compareFunction: Function): enJn;

    orderTextNodeByAsc(): enJn;

    orderTextNodeByDesc(): enJn;

    push(...items): enJn;

    concat(replace?: boolean, ...items): enJn;

    elements(): enJn;

    firstNode(): enJn;

    firstElement(): enJn;

    previous(filter: string): enJn;

    next(filter: string): enJn;

    clone(copyChildren: boolean): enJn;

    copy(): enJn;

    first(): enJn;

    last(): enJn;

    findHasNotArr(query: string, attr: string): enJn;

    asNode(): Node | null;

    asArray(): Array<enJn>;

    textContentsAsArray(): Array<Text>;

    selectEach(callback: Function): Array<any> | undefined;

    each(callback: Function);

    eachInBreadth(callback: Function);

    asString(): string;

    isEmpty(): boolean;

    hasSome(): boolean;

    amount(): number;

    findByAttr(query: string, attr: string, value): enJn;

    item(index: number | string): enJn;

}

// declare class nJn extends enJn {
export declare class nJn extends enJn {

}

// export { enJn };
// export { nJn };

export declare module enJn {

}

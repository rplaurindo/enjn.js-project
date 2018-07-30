export declare class enJn {

    // main.js
    static each(collection, callback: Function, startingIndex?: number, finalIndex?: number): void;

    static selectByText(text: string, context?: enJn | Element | string): enJn;

    // element.js
    selectText(start?: number, end?: number): enJn;

    focus(): enJn;

    addClass(...classList): enJn;

    removeClass(...classList): enJn;

    removeAttr(attrName: string): enJn;

    html(content): enJn;

    attribute(attrName: string, value?): enJn | any | undefined;

    property(propertyName: string, value?): enJn | any | undefined;

    select(): enJn | any | undefined;

    unselect(): enJn | any | undefined;

    check(): enJn | any | undefined;

    uncheck(): enJn | any | undefined;

    tagName(): string;

    selected(): boolean;

    checked(): boolean;

    visible(): boolean;

}

export class nJn extends enJn {

}

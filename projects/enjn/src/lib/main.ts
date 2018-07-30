export declare class enJn {

    // main.js
    static each(collection, callback: Function, startingIndex?: number, finalIndex?: number): void;

    static selectByText(text: string, context?: enJn | Element | string): enJn;

    // element.js
    // selectText(start?: number, end?: number): enJn;

    // focus(): enJn;

    // addClass(...classList): enJn;

    // removeClass(...classList): enJn;

    // removeAttr(attrName: string): enJn;

    // html(content): enJn;

    // attribute(attrName: string, value?): enJn | any | undefined;

    // property(propertyName: string, value?): enJn | any | undefined;

    // select(): enJn | any | undefined;

    // unselect(): enJn | any | undefined;

    // check(): enJn | any | undefined;

    // uncheck(): enJn | any | undefined;

    // tagName(): string;

    // selected(): boolean;

    // checked(): boolean;

    // visible(): boolean;

    // query.js

//     reverseEach: {
//         value: function (collection, startingIndex, callback) {
//     var
//         iterator = Iterator.Proxy.new(collection);

//     if (typeof startingIndex == "function") {
//         callback = startingIndex;
//     }

//     iterator.reverseEach(startingIndex, callback);
// }
//       },

// select: {
//     value: function (collection, callback) {
//         var
//             iterator = Iterator.Proxy.new(collection);

//         return iterator.select(callback);
//     }
// },

// selectInBreadth: {
//     value: function (collection, callback) {
//         var
//             strategy;

//         if (iterable instanceof window.Node) {
//             strategy = SearchContext.Proxy.new(Search.Graphs.BFS.Element
//                 .new(iterable));
//         } else {
//             strategy = SearchContext.Proxy.new(Search.Graphs.BFS.Object
//                 .new(iterable));
//         }

//         return strategy.research(callback);
//     }
// },

// isIterable: {
//     value: function (object) {
//         return Iterator.isIterable(object);
//     }
// }

//     });

// Object.defineProperties(ConstructorReference.prototype, {

//     asArray: {
//         value: function () {
//             return Array.from(this);
//         },
//         writable: true
//     },

//     asNode: {
//         value: function () {
//             if (this.some()) {
//                 return this.first()[0];
//             }
//             return null;
//         }
//     },

//     textContentsAsArray: {
//         value: function () {
//             var
//                 array = [],

//                 callback = function (node) {
//                     array.push(ConstructorReference(node).text().trim());
//                 };

//             this.each(callback);

//             return array;
//         }
//     },

//     asString: {
//         value: function () {
//             var
//                 string = "",

//                 callback = function (node) {
//                     if (node instanceof window.Element) {
//                         string += node.outerHTML + "\n";
//                     } else if (node instanceof window.Text) {
//                         string += node.wholeText + "\n";
//                     }
//                 };

//             this.each(callback);

//             return string;
//         }
//     },

//     empty: {
//         value: function () {
//             return this.length === 0;
//         }
//     },

//     some: {
//         value: function () {
//             return !this.empty();
//         }
//     },

//     each: {
//         value: function (callback) {
//             // delegate
//             ConstructorReference(ConstructorReference.each(this, callback));
//         }
//     },

//     selectEach: {
//         value: function (callback) {
//             return ConstructorReference(ConstructorReference
//                 .select(this, callback));
//         }
//     },

//     selectInBreadth: {
//         value: function (callback) {
//             return ConstructorReference(ConstructorReference
//                 .selectInBreadth(this, callback));
//         }
//     },

//     filter: {
//         value: function (callback) {
//             var
//                 self = this,
//                 filtered = ConstructorReference(),

//                 iteratorBlock = function (node, i) {
//                     // if (callback.call(ConstructorReference(node), node, i, this)) {
//                     if (callback.call(self, node, i)) {
//                         filtered.push(node);
//                     }
//                 };

//             this.each(iteratorBlock);

//             return filtered;
//         }
//     },

//     filterInBreadth: {
//         valiue: function (callback) {
//             var
//                 filtered = ConstructorReference(),

//                 iteratorBlock = function (node, i) {
//                     if (callback.call(ConstructorReference(node), node, i, this)) {
//                         filtered.push(node);
//                     }
//                 };

//             this.selectInBreadth(iteratorBlock);

//             return filtered;
//         }
//     },

//     filterText: {
//         value: function (text) {
//             var
//                 callback = function (node) {
//                     return ConstructorReference(node).text().trim() == text.trim();
//                 };

//             return this.selectInBreadth(callback);
//         }
//     },

//     // revise
//     sort: {
//         value: function (compareFunction) {
//             return ConstructorReference(ConstructorReference.Collection.new(this)
//                 .sort(compareFunction));
//         }
//     },

//     orderTextNodeByAsc: {
//         value: function () {
//             var
//                 callback = function (node1, node2) {
//                     return ConstructorReference(node1).text() >
//                         ConstructorReference(node2).text();
//                 };

//             return this.sort(callback);
//         }
//     },

//     orderTextNodeByDesc: {
//         value: function () {
//             var
//                 callback = function (node1, node2) {
//                     return ConstructorReference(node1).text() <
//                         ConstructorReference(node2).text();
//                 };

//             return this.sort(callback);
//         }
//     },

//     push: {
//         value: function () {
//             var
//                 index,
//                 mainReference = this,

//                 callback = function (node) {
//                     index = mainReference.lastIndex() + 1;
//                     mainReference[index] = node;
//                 };

//             Array.from(arguments).forEach(callback);

//             this.length = Object.amount(this);

//             return this;
//         }
//     },

//     concat: {
//         value: function (replace) {
//             var
//                 concatened,
//                 args = Array.from(arguments),

//                 callback = function (collection) {
//                     var
//                         iteratorBlock = function (node) {
//                             concatened.push(node);
//                         };

//                     collection = Array.from(collection);
//                     collection.forEach(iteratorBlock);
//                 };

//             if (typeof replace == "boolean" && replace) {
//                 concatened = this;
//                 args = args.slice(1, args.length);
//             } else {
//                 concatened = this.copy();
//             }

//             args.forEach(callback);

//             return concatened;
//         }
//     },

//     elements: {
//         value: function () {
//             var
//                 elements = ConstructorReference(),

//                 callback = function (node) {
//                     if (ConstructorReference(node).isA(window.Element)) {
//                         elements.push(node);
//                     }
//                 };

//             this.each(callback);

//             return elements;
//         }
//     },

//     firstNode: {
//         value: function () {
//             var
//                 childNodes,
//                 firstNodes = ConstructorReference(),

//                 callback = function (node) {
//                     childNodes = ConstructorReference(node).childNodes();
//                     if (childNodes.some()) {
//                         firstNodes.push(childNodes.asNode());
//                     }
//                 };

//             this.each(callback);

//             return firstNodes;
//         }
//     },

//     firstElement: {
//         value: function () {
//             var
//                 childElements,
//                 firstElements = ConstructorReference(),

//                 callback = function (node) {
//                     childElements = ConstructorReference(node).childElements();
//                     if (childElements.some()) {
//                         firstElements.push(childElements.asNode());
//                     }
//                 };

//             this.each(callback);

//             return firstElements;
//         }
//     },

//     previous: {
//         value: function (filter) {
//             var
//                 query,
//                 sibling,
//                 siblings = ConstructorReference(),

//                 iteratorBlock = function (node) {
//                     return ConstructorReference(node).is(query);
//                 },

//                 callback = function (node) {
//                     sibling = node.previousElementSibling;
//                     if (sibling && sibling instanceof window.Node) {
//                         siblings.push(sibling);
//                     }
//                 };

//             if (filter) {
//                 query = this.parent().find(filter);

//                 if (query.some()) {
//                     siblings = this.previousSiblings().filter(iteratorBlock);
//                 }
//             } else {
//                 this.each(callback);
//             }

//             return siblings;
//         }
//     },

//     next: {
//         value: function (filter) {
//             var
//                 query,
//                 sibling,
//                 siblings = ConstructorReference(),

//                 iteratorBlock = function (node) {
//                     return ConstructorReference(node).is(query);
//                 },

//                 callback = function (node) {
//                     sibling = node.nextSibling;
//                     if (sibling && sibling instanceof window.Node) {
//                         siblings.push(sibling);
//                     }
//                 };

//             if (filter) {
//                 query = this.parent().find(filter);

//                 if (query.some()) {
//                     siblings = this.nextSiblings().filter(iteratorBlock);
//                 }
//             } else {
//                 this.each(callback);
//             }

//             return siblings;
//         }
//     },

//     amount: {
//         value: function () {
//             return this.length;
//         }
//     },

//     find: {
//         value: function (query) {
//             return ConstructorReference(query, this);
//         }
//     },

//     clone: {
//         value: function (copyChildren) {
//             if (typeof copyChildren != "boolean") { copyChildren = true; }

//             var
//                 cloned = ConstructorReference(),

//                 callback = function (node) {
//                     cloned.push(node.cloneNode(copyChildren));
//                 };

//             this.each(callback);

//             return cloned;
//         }
//     },

//     copy: {
//         value: function () {
//             var
//                 copy = ConstructorReference();

//             Object.assign(copy, this);
//             copy.length = Object.amount(copy);

//             return copy;
//         }
//     },

//     first: {
//         value: function () {
//             return ConstructorReference(this[0]);
//         }
//     },

//     last: {
//         value: function () {
//             return ConstructorReference(this[this.lastIndex()]);
//         }
//     },

//     findHasNotAttr: {
//         value: function (query, attr) {
//             return this.find(query + ":not([" + attr + "])");
//         }
//     },

//     findByAttr: {
//         value: function (query, attr, value) {
//             return this.find(query + "[" + attr + "=\"" + value + "\"]");
//         }
//     },

//     item: {
//         value: function (index) {
//             return ConstructorReference(this[index]);
//         }
//     }

}

export class nJn extends enJn {

}

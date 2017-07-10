/**
 * Created by chensiwei on 2017-7-10.
 */
var o = {}; // create object

// Example of an object property added with defineProperty with a data property descriptor
Object.defineProperty(o, "a", {
    value : 37,
    writable : true,
    enumerable : true,
    configurable : true
});

// Example of an object property added with defineProperty with an accessor property descriptor
var bValue;
Object.defineProperty(o, "b", {
    get : function(){
        return bValue;
    },
    set : function(newValue){
        bValue = newValue + 10;
    },
    enumerable : true,
    configurable : true
});

// Example of an object property added with defineProperty with a data property descriptor
Object.defineProperty(o, "c", {
    value : 39,
    writable : false,
    enumerable : true,
    configurable : true
});

o.a = 37
o.b = 38;
o.c = 40;
console.log(o.a, o.b, o.c)
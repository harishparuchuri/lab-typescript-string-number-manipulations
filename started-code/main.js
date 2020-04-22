"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(2));
        console.log(word.concat("harish"));
        console.log(word.slice(2, -1));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence);
        console.log(sentence.split("").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        console.log(str);
        var vowel_list = 'aeiouAEIOU';
        var vcount = 0;
        for (var x = 0; x < str.length; x++) {
            if (vowel_list.indexOf(str[x]) !== -1) {
                vcount += 1;
            }
        }
        console.log(vcount);
    };
    return StringManipulations;
}());
var obj = new StringManipulations();
obj.print("paruchuri");
obj.printWithSpace("grnadhasiri");
obj.findVowel("harish");
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        console.log(num);
        if (num % num == 0 && num % 1 == num) {
            console.log("prime number");
        }
        else {
            console.log("not a prime number");
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        console.log(num);
        if (num % 9 == 1) {
            console.log("magic number");
        }
        else {
            console.log("not magic number");
        }
    };
    return NumbersManipulations;
}());
var obj1 = new NumbersManipulations();
obj1.findPrime(677);
obj1.findMagic(1999);

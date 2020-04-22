import {
    StringManipulationService,
    NumberManipulationService

    
} from "./main-service";

class StringManipulations implements StringManipulationService {
    public print(word: string): void {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(2));
        console.log(word.concat("harish"));
        console.log(word.slice(2, -1));

        console.log(word.length);
    }

 


    printWithSpace(sentence: string): void {
        console.log(sentence);
        console.log(sentence.split("").join(" "));
    }
    findVowel(str: string): void {
        console.log(str);
        var vowel_list = 'aeiouAEIOU';
        var vcount = 0;
    for(var x = 0; x < str.length ; x++)
    {
        if (vowel_list.indexOf(str[x]) !== -1)
        {
            vcount += 1;
        }
  
  }
  console.log(vcount);
 }


}
let obj=new StringManipulations();
obj.print("paruchuri");
obj.printWithSpace("grnadhasiri");
obj.findVowel("harish");

class NumbersManipulations implements NumberManipulationService{
    findPrime(num: number) : void{
        
        console.log(num);
        if (num % num == 0 && num % 1 == num) {
            console.log("prime number");
        } else {
            console.log("not a prime number");
        }
    }
    findMagic(num: number) : void{
        console.log(num);

        if (num % 9 == 1) {
            console.log("magic number");
        } else {
            console.log("not magic number");
        }

    }

    
 }   
 let obj1=new NumbersManipulations();
 obj1.findPrime(677);
 obj1.findMagic(1999);
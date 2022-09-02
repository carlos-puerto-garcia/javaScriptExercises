
/*


Ejercicio 1 => Done

Escribe una función llamada `numDuplicados` que reciba un string y retorne el número de caracteres
 que aparecen más de una vez.


    console.log(numDuplicados("abcaa")); // 1
    console.log(numDuplicados("abab")); // 2
    console.log(numDuplicados("abc")); // 0 

*/

//1)

function numDuplicados (str) {
    str = Array.from(str);
    let repeat = 0;
    for(let i = 0; i< str.length; i++) {
        let itemout = str.shift();
        let repeatArray = str.filter(letter => letter === itemout)
        //console.log(repeatArray, repeatArray.length) 
        if(repeatArray.length > 0) {
            repeat++;
        }
    }
    return repeat;
}
//console.log(numDuplicados("abcaa")); // 1
//console.log(numDuplicados("abab")); // 2
//console.log(numDuplicados("abc")); // 0 



/*
Ejercicio 2 => Done

Escribe una función llamada `frecuencias` que reciba una cadena de texto y retorne un objeto con
el número de veces que aparece cada caracter (exceptuando el espacio en blanco)


    console.log(frecuencias("hola mundo"));
    // { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }
    
    console.log(frecuencias("anita lava la tina"));
    // { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }

*/


function frecuencias(arreglo){
    let cant= {};
    arreglo2=arreglo.split("")
      for (let i of arreglo2){
          if(cant[i])
              cant[i]++;
          else
              cant[i] = 1;
      }
    return cant;
}
//console.log(frecuencias("hola mundo"));    




/*
Ejercicio 3 => Done

Crea una función llamada `caracteresEnComun` que recibe dos argumentos: `str1` y `str2`.
La función debe retornar un arreglo con todos los caracteres que las dos cadenas tienen en común.


    caracteresEnComun("Hola", "Mundo"); // ["o"]
    caracteresEnComun("German", "Gabriela"); // ["G", "e", "r", "a"]
    caracteresEnComun("Hola", "Bye"); // []

*/

function caracteresEnComun(str1, str2) {
    str1 = Array.from(str1);
    str2 = Array.from(str2);
    let common = [];
    for(let i=0; i< str1.length; i++) {
        for(let j=0; j<str2.length;j++) {
            if(str1[i] === str2[j]) {
                common.push(str1[i])
            }
        }
    }
    return [...new Set(common)];
}
//console.log(caracteresEnComun("Hola", "Mundo")); // ["o"]
//console.log(caracteresEnComun("German", "Gabriela")); // ["G", "e", "r", "a"]
//console.log(caracteresEnComun("Hola", "Bye")); // []



/*
Ejercicio 4 => Done

Escribir una función llamada `ajustarTexto` que reciba dos argumentos:  un string y un número 
(que representa una longitud).  La función debe retornar la cadena ajustada a la longitud recibida.
Si la longitud de la cadena es mayor al número, debes recortar la cadena. De lo contrario agrega espacios
en blanco hasta completar la longitud.


    console.log("${ajustarTexto("", 3)}") // " " 
    console.log("${ajustarTexto("hola", 2)}") // "ho" 
    console.log("${ajustarTexto("Hola", 0)}") // "" 
    console.log("${ajustarTexto("Hola", 5)}") // "Hola "

*/
function ajustarTexto(str, num) {
    str1 = Array.from(str);
    let repeat= [];
    for(let i=0; i< num; i++) {
        repeat.push(str[i])
    }
    return repeat.join('');
}
//console.log("${ajustarTexto("", 3)}"); // " " 
//console.log(`${ajustarTexto("hola", 2)}`); // "ho" 
//console.log(`${ajustarTexto("Hola", 0)}`); // "" 
//console.log(`${ajustarTexto("Hola", 5)}`); // "Hola "


/*
Ejercicios de Leetcode

Completa los siguientes ejercicios en LeetCode:


5- https://leetcode.com/problems/valid-anagram/
6- https://leetcode.com/problems/move-zeroes/
7- https://leetcode.com/problems/two-sum/


*/
/*

Ejercicio 5 => Done
https://leetcode.com/problems/valid-anagram/


Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the
original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?   
  
*/


// Anagram
// casa === asac -> false
// ala === ala -> true
function isAnagram(word) {
    const reverseWord = word.split('').reverse().join('')
  
    if (word === reverseWord) {
      return true
    }
  
    return false
  }
  
 // console.log(isAnagram('carac'));

/*
Ejercicio 6 => Done

https://leetcode.com/problems/move-zeroes/

283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?


*/
function findZeroes(array) {
    let newIndex = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== 0) {
        array[newIndex] = array[i]
        newIndex = newIndex + 1
      }
    }
  
    for (let i = newIndex; i < array.length; i++) {
      array[i] = 0
    }
  
    return array;
  }
  
 // console.log(findZeroes([0,1,0,3,12]))



//Ejercicio 7 => Done
//7- https://leetcode.com/problems/two-sum/
/*

1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/


  function findMyNumbers(array, numberToFind) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === numberToFind) {
          return [i, j]
        }
      }
    }
  }
//console.log(findMyNumbers([2, 7, 11, 15],9));


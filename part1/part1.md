1. it will print i, which is prices.length. var's scope binds only to global and function, it is not block scoped like "let". and i is defined within the same function scope as the console log at line 11, even though it is a part of the for loop specifically.
2. it will print the latest modification of discountedprice, and that value is prices[prices.length - 1] * (1 - discount). the index is the final index because the for loop terminates before it reaches prices.length, it is printed exactly due to the same reasoning used in question 1, i.e. discountedprice is in the same function scope as line 12.
3. this is less tricky than the previous two questions. finalPrice is already defined and initialized before even the for loop, indeed it is only modified inside the for loop as the iteration unfolds; line 13 will print the latest update to finalPrice, i.e. Math.round((prices[prices.length - 1] * (1 - discount)) * 100) / 100
4. it returns [50, 100, 150]. The discount is set throughout the iterations, which means that the value of discountedPrice is always a half of the current price of the current iteration. The loop goes through the entire prices array in an ascending index order, in which the finalPrice is always calculated to be the discountedPrice itself. the value of the discountedPrice is never such that Math.round will do anything to it, and 100 / 100 = 1. Lastly, the current finalPrice is pushed to the discounted arrays, push appends at the end of the array, so the original ordering persisted.
5. reference error, let is block scoped, which means that what is declared inside the for loop scoped is limited to only its internal.
6. reference error, same reasoning.
7. it will print the latest update to finalPrice, unlike with the two previous questions, here the variable is declared OUTSIDE of the loop, which means that it binds to the function scope not the loop scope.
8. The same result question 4 got, there is no inherent difference between whether we use var or let inside the for loop, let's no-redeclaration rule does not mean that we can not have the same declaration across different iterations.
9. same answer as question 5, after all, nothing is changed with regards to i.
10. reference error. const is pretty similar to let, the only difference is that const also disallow itself to be updated. it also means that it is also block scoped, just like let.
11. type error, const value can not be updated once it is initialized.
12. assuming that finalPrice typeError is ignored that is, maybe the finalPrice is left as 0 throughout, then discounted array will be [0,0,0]. indeed const disallows reassignment, but it does not forbid the manipulation of the data contained within, or the data to which the value itself infers. If you want to disallow this functionality maybe try using object freeze.
13. 1. student.name
    2. student['Grad Year']
    3. student.greeting()
    4. student['Favorite Teacher'].name
    5. student.courseLoad[0]
14. 1. 32, it is treated as string concatenation
    2. 1, it is treated as Number arithmetic
    3. 2, the null is converted implicitly to 0
    4. 3null, it is treated as string concatenation, concat always reign supreme
    5. 4, true is converted implicitly to 1
    6. 0, both false and null are converted to 0, 0 + 0
    7. 3undefined, again, string concatenation reign supreme
    8. Nan, undefined is converted implicitly to Nan, arithmetic operation to Nan will always yield Nan
15. 1. true, '2' is converted to Number
    2. true, string comparison is done lexicographically
    3. true, '2' is converted to Number, 2 == 2
    4. false, strict equality, no type conversion is done
    5. false, true is converted to 1
    6. true, any value that is not intuitively false is converted to true
16. == entails implicit conversion, === is strict such that no conversion is done, in this case two operands need also to be matching in types.
17. How are you?, the first if is false, 2 does not equal to 1 which is the Number converted version of true. In the next else if 2 is converted to boolean and any value that is not "intuitively false" becomes true. Intuitively false values include: null, undefined, NAn, false
18. answer in part1-question18.js
19. [6, 8, 10], what doSomething does is to increment the argument of its own parametric callback call by two and then return the output. The parametric callback of doSomething is, in this case a function that multiply the input by two and then return it. The process goes a little something like: each element of array is increased by two and then pass that updated value of the element into the innermost function, inside which it will be doubled and the returned.
20. answer in part1-question20.js
21. 1 4 3 2 (disregarding the newline whitespace) it is so because all the non-timeout statements get executed first in the order they are defined and then, after all of them are executed we can go to the timeout statements, with the ordering reliant on the timeout value, starting from the smallest timeout window to the largest. 
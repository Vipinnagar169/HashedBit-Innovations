// 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.


function sumOfDigitProducts(n1, n2) {
    let str1 = String(n1);
    let str2 = String(n2);

    let maxLen = Math.max(str1.length, str2.length);
    str1 = str1.padStart(maxLen, '0');
    str2 = str2.padStart(maxLen, '0');

    let total = 0;
    for (let i = 0; i < maxLen; i++) {
        let d1 = parseInt(str1[i]);
        let d2 = parseInt(str2[i]);
        total += d1 * d2;
    }

    return total;
}

// Example:
 result = sumOfDigitProducts(6, 34);
console.log("Sum of products:", result);  // Output: 24

// D-Task: Shunday class tuzing nomi Shop va uni constructoriga 3 hil mahsulot pass bolsin,
// hamda classning 3 ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method
// ishga tushgan vaqt ham log qilinsin.
// Masalan: const shop = new Shop(4,5,2) shop.qoldiq() return hozir 20:40 4ta non, 5ta lagmon
// va 2ta cola mavjud! shop.sotish("non", 3) & shop.qabul("cola", 4) & shop.qoldiq() return hozir 20:50 ta 1ta non va 5 ta lagmon va 6ta cola mavjud


let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
minute = minute < 10 ? "0" + minute : minute;

class Shop {
  constructor(lagmon, non, cola) {
    this.lagmon = lagmon;
    this.non = non;
    this.cola = cola;
  }

  sotish(items, amount) {
    // lagmon
    if (items === "lagmon") {
      if (this.lagmon >= amount) {
        this.lagmon -= amount;
      }
    }

    // non
    if (items === "non") {
      if (this.non >= amount) {
        this.non -= amount;
      }
    }

    // cola

    if (items === "cola") {
      if (this.cola >= amount) {
        this.cola -= amount;
      }
    }

    return `hozir ${hour}:${minute} da ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola bor holos!`;
  }

  qabul(items, amount) {
    // lagmon
    if (items === "lagmon") {
      this.lagmon += amount;
    }

    // non
    if (items === "non") {
      this.non += amount;
    }

    // cola
    if (items === "cola") {
      this.cola += amount;
    }
    return `hozir ${hour}:${minute} da ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola bor holos!`;
  }

  qoldiq() {
    return `hozir ${hour}:${minute} da ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola qolgan!`;
  }
}

const trade = new Shop(6, 2, 4);
console.log(trade.sotish("cola", 2));
console.log(trade.qabul("non", 2));









// console.log("saved changes to develop branch") 


// function countDigits(str) {
  
//   const digitRegex = /\d/g;

//   const digitMatches = str.match(digitRegex);
//   if (!digitMatches) {
//     return 0;
//   }
//   return digitMatches.length;
// }

// const exampleString = "ad2a54y79we35t0sfgb9";
// const digitCount = countDigits(exampleString);

// console.log("The count of digits is", digitCount);
// let userName = "Sobir"



// console.log(userName);

// let h1 = document.querySelector(".h1") as HTMLElement
// console.log((h1.innerHTML = "Sobir"));


// let a = 999999999999999 

// console.log(a);



// let userName:string = "Sobir"
// let greeting:string = "Hello My Friend"
// let message:string = `Soobshenia dlya ${userName} : ${greeting}`
// console.log(message);


// let age: number = 25
// let temparature: number = -5.7
// let distance: number = 1e5
// console.log(distance);
// console.log(age);
// console.log(temparature);


// let isActive: boolean = true
// let isInactive: boolean = false
// let hasPermesson: boolean = (10 > 5)
// console.log(isActive);
// console.log(isInactive);
// console.log(hasPermesson);


// let undefinedVar: undefined = undefined
// let nullVar: null = null
// let emptyValue: string | null = null
// console.log(emptyValue);



// let flexibleVar: any = "Sobir"
// flexibleVar = 8
// flexibleVar = true
// console.log(flexibleVar);



// let uncertainValue: unknown = "In Sobir ast"
// uncertainValue = 55

// if (typeof uncertainValue === 'number'){
//     console.log(uncertainValue * 55);
// }

// console.log(uncertainValue);




// function userInfo(name : string, age : number) : void {
//     console.log(`Nomi in shaxs ${name} ast , vay ${age} sola ast`)
// }
// userInfo("Sobir",55)











// HOME WORK

// Primitive Types

// 1 - Type String 
// let userName: string = "Fahim"
// let firstName: string = "Bodurov"
// let fullName: string = `Hello my name is ${userName} my surname ${firstName}`
// console.log(fullName);
// console.log(userName);
// console.log(firstName);




// 2 - Type Number
// let age: number = 25
// let temperature: number = -5.0
// let size: number = 5e5
// console.log(size);
// console.log(age);
// console.log(temperature);




// 3 - Type Bollean
// let active: boolean = true
// let inactive:boolean = false
// let hasPremission: boolean = (10 > 9 || 8 < 10)
// console.log(hasPremission);
// console.log(active);
// console.log(inactive);


// 4 - Type null, undefined
// let undefinedVar:undefined = undefined
// let nullVar:null = null
// let emptyValue: string | null = null
// console.log(emptyValue);
// console.log(undefinedVar);
// console.log(nullVar);



// 5 - Type Any 
// let flexibleVar: any = "Name"
// flexibleVar = 25
// flexibleVar = true
// console.log(flexibleVar);




// 6 - Type  Unknown
// let uncertainValue: unknown = "Name"

// if(typeof uncertainValue === 'string'){
//     console.log(uncertainValue.toUpperCase())
// }



// 7 - Type  Void
// function displayUserInfo(name : string,age : number,status : boolean): void {
//     console.log(`Name : ${name} Age : ${age} Status : ${status ? 'Active' : 'Inactive'}`);
// }
// displayUserInfo("Sobir",10,false)





// OBJECT TYPES


// 1 - Interface

// interface Person {
//     name : string
//     age : number
//     status : boolean
// }

// let user:Person = {
//     name : "Fahim",
//     age : 20,
//     status : true
// }

// console.log(`Name : ${user.name} Age : ${user.age} Status : ${user.status ? 'Active' : "Inactive"}`);




// 2 - Function
// function SumTwoNumbers(num1 : number, num2 : number) : number {
//     return num1 + num2
// }
// console.log(SumTwoNumbers(50,15));




// 3 - Class
// class Car {

//     private brend : string

//     constructor(brend : string) {
//         this.brend = brend
//     }

//     public getBrands() : string {
//         return this.brend
//     }

// }

// let myCar = new Car("Range Rover")
// console.log(myCar.getBrands());



// 4 - (Enum) -  Барои сохтани рӯйхати арзишҳои собит
// enum color {
//     Red = "Red",
//     Green = "Green",
//     Blue = "Blue"
// }
// let c : color = color.Red
// console.log(c);



// 5 - Arrays
// let numbers: number[] = [1, 2, 3];
// console.log(numbers);




// 6 - (never) - Барои функсияҳое, ки ҳеҷ вақт барнамегарданд (масалан, хатогӣ партоянд)
// function error(msg: string): never {
//     throw new Error(msg);
// }
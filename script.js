// let obj = {
//     name: 'Vasya',
//     age: 20,
//     gender:'male',
//     do: function(){
//         return 'jump'
//     }
// }

// let keysArr = []
// for(let key in obj){
//     keysArr.arr.push(key)
// }
// console.log(keysArr);
// console.log(object.keys(obj));
// console.log('hello'.toLocaleUpperCase())
// console.log(obj.do());

// const callback = () =>{
//     return 'Callback function'
// }

// const foo = (cb) =>{
//     return cb() 
// }
// console.log(foo(callback));


// let a = 10

// const foo = () =>{
    
// console.log(a);
// }
// foo()



// const arr = [1,2,3,4,5]
// console.log(arr.map((el) => {
//     return el * 2
// }));

// const arr = [1,2,3,4,5]
// function maper () {
//     let newArr = []
//     for(let i = 0; i < arr.length;i++){
//         newArr.push(arr[i] * 2)
//     }
//      console.log(newArr);
//     return newArr
   
// }
// maper()

//  const arr = [1,2,3,4,5]
// console.log(arr.filter((el) => {
//     return el > 1 && el < 7
// }));
// const arr = [1,2,3,4,'fd',5]
// console.log(arr.filter((el) => {
//     return typeof el === 'string'
// }));




// const arr = [4, 6, 'Ivan', 5, 'Denis']
// console.log(arr.filter((el) => {

// }));return typeof el === 'string'

// task 1

// const task1 = ( arr ) => {
//     return arr.map((el) => {
//         return typeof el === 'string' ? null:el
//     })
// }
// console.log(task1([4, 6, 'Ivan', 5, 'Denis']));

// const task1 = ( arr ) => {
//     return arr.map((el) => {
//         if(typeof el === 'string'){
//             return null
//         }else{
//             return el
//         }
// })
// }
// console.log(task1([4, 6, 'Ivan', 5, 'Denis']));


// task2


// const arr = ['Евдоким', 'Ivan','Игнат', 'Denis']
// const newArr = []
// for(let i = 0;i < arr.length;i++){
//     if(arr[i].length < 6){
//             newArr.push(arr[i])
//     }
// }
// console.log(newArr);


// task 3

// const arr = [7, 8, 15, 30, 2]
// function map () {
//     let newArr = []
//     for(let i = 0; i < arr.length;i++){
//               if(arr%5===0 && arr%3===0){
//             return 0
//         }
//         newArr.push(arr[i] ** 3) 
//     }
//      console.log(newArr);
//     return newArr 
// }
// map()

// const task3 = (arr) => {
//     return arr.map(el => el ** 3).map(el => el %3 === 0 && el%5 === 0 ? 0 : el)
// }
// console.log(task3([7, 8, 15, 30, 2]));


// task 4

//  const task4 = (arr) => { 
//     return arr.map((el) => el.length)
// }
// console.log(task4(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень']));



// task 5

// const task5 = (arr) => {
//     return arr.map((el) =>  `<div>${el}</div>`)
// }
// console.log(task5(1, 2, 3, 4, 5));

// task 6


// const task6 = (arr) => {
//     return arr.filter((el) => el.length %2 === 0)
// }
// console.log(task6(['ab', 'abc', 'abcd']));


// const arr = ['ab', 'abc', 'abcd']
// console.log(arr.filter((el) =>{
//     return el.length %2 === 0
// }));

// task 7

// const task7 = (a, b) => {
//     return a.map((el,index) => el + b[index]  )
// }
// console.log(task7([1,7],[9,3]));



// task8

// const task8 = (obj) => {
//     return obj.map(el => el.id )
// }
// console.log(task8([{id: 1}, {id: 2}, {id: 3}, {id: 4}]));

// task 9

// const task9 = (arr) => {
//     return arr.map((el) => el * 2)
// }
// console.log(task9([1,2,3,4,5]));


// task 10

// const task10 = (arr) => {
//     return arr.map((el) => `<div>${el}</div>`)
// }
//     console.log(task10(['Anakin']));


// task 11

// const task11 = (arr) => {
//     return arr.filter((el) => el.length%2 === 0)
// }
// console.log(task11(['ab','abc','abcd']));


// task 12

// const task12 = (arr) => {
//     return arr.map((el) => el * 2).filter((el) => el%10 === 0 ? el:0)
// }
//     console.log(task12([1,2,3,7,9,4]));


// task 13

// const task13 = (arr) => {
//     return arr.filter((el) => el === 'true')
// }
// console.log(task13(['true','false','true','true']));


// task 14

// const task14 = (arr) => {
//     return arr.filter((el) => el === 'true' || el === 'false' )
// }

// console.log(task14(['true','false','true','true','undefined','true','undefined']));


// task 15

// const task15 = (arr) => {
//     return  arr.reduce((rec,acc,idx,array) => acc + rec)
   
// }
//     console.log(task15([2,11,5]));
// [true,1,'wow','you are smart, bro']));
// task 16


// const task16 = (arr) => {
//     return arr.reduce((acc,rec,idx,array) => acc && rec)
// }
//          console.log(task16([true,false,true]));       


// task 17

// const task17 = (arr) => {
//     return arr.reduce((accumulator,currentValue,index) => {
//         return {
//             ...accumulator,
//             [`field${index+1}`]:currentValue
//         }
//     },{})
// }
// console.log(task17([true,1,'wow','you are smart, bro']));


// task 18
 

// const task18 = (obj) => {
//     return Object.entries(obj).reduce((acc, rec) => {
//         if(typeof rec [1]=== 'string'){
//             return {...acc,[rec[0]]: rec[1]}
//         }else{
//             return acc
//         }
//     }, {})
// }
// console.log(task18({name:'pilot', isActive:true, gender: 'male', age: 25 }));

// task 19


// const task19 = (obj) => {
//     return Object.keys(obj).filter((el) => {
//         return !obj[el]
//     })
// }
// console.log(task19({ isActive:false,isPilot:true}));


// const task19 = (obj) => {
//     return Object.keys(obj).reduce((acc,rec) => {
//         if(!obj[rec]){
//             return [...acc,rec]
//         }else{
//             return acc
//         }
//     },[])
// }
// console.log(task19({ isActive:false,isPilot:true}));


// task 20

//  const task20 = (arr) => {
//     return arr.reduce((acc,rec) => {
//         return (acc + rec) / arr.length
//     })
//  }
//  console.log(task20([2,4]));

    // task 21

    // const task21 = (arr,initialVal) => {
    //    return arr.reduce((acc, rec) => {
    //         return rec(acc)
    //     },initialVal)
    // }
    // console.log(task21([
    //     (a) => a+ 1,
    //     (a) => a* 2,
    //     (a) => a / 2
    //     ],5));


    

// let str = 'hello'
// console.log(str.split('').filter((el) => el !== 'l').join(''));

// let str = '0555 55 55 55'
// console.log(str.split(' ').join('-'));

// let arr = [1, 2, 3, 4, 5]

// console.log(arr.reduce((acc, rec, idx, array) => {
//     return {
//         ...acc,rec

//     }
// }, {}));



// let arr = [1, 2, 3, 4, 5]

// console.log(arr.reduce((acc, rec, idx, array) => {
//     return [...acc, rec *2]
// }, []));

 
// {rec:1}
// {rec:1, rec:2}

// + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// akkumulator 


// let obj = {
//     name: 'Petya',
//     age:25
// }
// obj['gender'] = 'male'
// console.log(obj);

    // const arr = [1,2,3,4,5]

    // console.log(arr.reduce((acc,rec,idx,array) =>{
    //     return acc + rec
    // }));


    // const arr = [1,2,3,4,5]

    // console.log(arr.reduce((acc,rec,idx,array) =>{
    //     return [...acc, rec ** 2]
    // }, []));






    // H W


    // const task1 = (a,b) => {
    //     return a + b 
    // }
    // console.log(task1(2,2));


    // const task2 = (arr) => {
    //     return arr.map((el) => `My Name Is:${el}`)
    // }
    // console.log(task2(['Anakin','SkyWalker']));




// const task3 = (val) => {
//     return `${val} typeof ${typeof val}`

// }
// console.log(task1(1));


// const task4 = (num) => {
//    if(num<0){
//     return 'Negative'
//    }else if(num>0){
//     return 'Positive'
//    }else{num<=0}
//    return 'Zero'
// }
// console.log(task4(0));




// const task5 = (arr) => {
//     return arr.id
// }
// console.log(task5({id:0}));


// const task6 = (obj) =>{
//     if(obj.name.length%2===0){
//         return 0
//     }else{
//         return 1
//     }
// }
// console.log(task6({name:'abrac'}));


// const task7 = (numOne, numTwo) =>{
//     if(numOne>5 && numTwo<0){
//         return 1
//     }else if(numOne<2 && numTwo>0){
//         return -1
//     }else{numOne===0 && numTwo===0}
//     return 0
// }
// console.log(task7(0, 1));



// const task8 = (arr) => {
//     if(arr === Boolean){
//         return {}
//      }else{
//         return { name:'' }
//      }
// }
// console.log(task8(true,true,'abra'));



// const task9 = (num1,num2) => {
//     if(num1 === 100 && num2 < 15){
//       return 100
//     } else if(num1===90 && num2 < 5) {
//         return  75
//     } else if (num1===50 && num2 < 2){
//           return 50
//     }else{
//          return 0
//     }
//     }
   
// console.log(task9(90,5)); 

// task 10

// const squareSum = (a,b) => {
//     return (a ** a) + 2 * a * b * (b ** b)
// }
// console.log(squareSum());


"use strict";
// function parentfunction(func: () => void) {
// console.log("I am the parentfunction ");func();
// }
Object.defineProperty(exports, "__esModule", { value: true });
// parentfunction(function(){
//     console.log("I`m the child function");
// })
// function parentfunction(func : () => void){
//     console.log("I`m the parentfunction");func();
// }
// function func(){
//     console.log("I,m the child function");
// }
// parentfunction(func)
// Attributes of callback function 
// 1_ the function passed in the parameter/paranthesis/arguenemt of the function(called parent function)
// called callback function 
// 2_ the callback function has no paranthesis 
// properties 
// the invocation/control/calling of callack function is dependent by parentfunction
// function parentfunction(func: () => void) {
// console.log("I am the parentfunction ");func();
// }
// parentfunction(function(){
//     console.log("I`m the child function");
// })
// NESTED FUNCTION: means to make a function under function 
// CALLBACK FUNCTION: means to expect a function under function
// Multi tasking --> Concurrency(allow us to perform multiple tasking) -->> Behind the sceen 
// CONcurrency                               BEHInd THe Sceen 
// 1_ callbacks                           Event Loop(when use in browser) + Web/Node APIs(when use in  
// 2_ promises                              node projects)
// 3_ Async+Await==> Await
// setTimeout(function(){console.log("Hello world!");},5000);
// console.log("two"); //concurrency achieved/
// function washing (callback:any){
//     console.log("wahing started...");
//     setTimeout(() => {
//         console.log("washed!");callback()}
// ,3000)
// };
// function soaking (callack:any ){
//     console.log("soaking started...");
//     setTimeout(() => {
//         console.log('soaked!');callack
//     },2000)
// }
// function drying (){
//     console.log('drying started...');
//     setTimeout(() => {
//         console.log('Dried!');
//     },3000)
// }
// washing(() => {
//     soaking(() => {
//         drying();
//     });});
// function pie(callback: () => void) {
//   console.log('Boiling..');
//   setTimeout(() => {
//     console.log('Boiled!');
//     callback();
//   }, 5000);
// }
// }
// function Rice(callback: () => void) {
//   console.log('Rice is boiling yet');
//   setTimeout(() => {
//     console.log('Boiled!');
//     callback();
//   }, 4000);
// }
// ;
// function salah() {
//   console.log('PRAYING SALAH');
//   setTimeout(() => {
//     console.log('Prayed!');
//   }, 5000);
// }
// pie(() => {
//   massala(() => {
//     Rice(() => {
//       salah();
//     });
//   });
// });
// console.log(1);
// console.log(0);
// function washing (callback:any){
//     console.log("wahing started...");
//     setTimeout(() => {
//         console.log("washed!");callback()}
// ,3000)
// };
// function soaking (callack:any ){
//     console.log("soaking started...");
//     setTimeout(() => {
//         console.log('soaked!');callack
//     },2000)
// }
// console.log('Folding laundry');
// function drying (){
//     console.log('drying started...');
//     setTimeout(() => {
//         console.log('Dried!');
//     },3000)
// }
// washing(() => {
//     soaking(() => {
//         drying();
//     });});
//     console.log("I am making biryani");
// boiling pae --> massala making --> boiling rice --> praying salah
//     function pie(callback :() => void) {
//         console.log('Boiling..');
//         setTimeout(()=>{console.log('Boiled!');5000
//         })
//     }
//     function massala (callack:() => void) {
//         console.log('Cooking masalas with cotinuous stirring');
//         setTimeout(( ) =>{
//             console.log('Cooked!');4000
//         })
//     }
//     function Rice (callback : () => void){
//         console.log('Rice is boiling yet');
//         setTimeout(() => void) {
//             console.log('bOILEd!');4000
//         }
//     }
// function salah() {
//     console.log('PRAYING SALAH');
// setTimeout( () => {
// }
// pie(() =>{
// massala(() => {
//     Rice(() => {
//         salah(
//         );
//     });
// });
//     }
// );
// ><-----------------------.><-----------------------------><
// promises
// States 
//          pending
// Promise ---------> Fulfilled{.then()} or Reject{.cache()} 
//example
// const returnMoney = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Money returned!');
//     }, 3000);
//   });
//   returnMoney
//     .then((value) => {
//       console.log(value);
//       console.log('Thank you for returning money');
//     })
//     .catch((error) => {
//       console.log('Sorry');
//     });
//   setTimeout(() => {
//     console.log('Payed!');
//   }, 5000);
// const project = new Promise( (a , b) => {
//   setTimeout( () => {},5000)
//   b('Failure!');
// });
// project
// .then( ( ) => { setTimeout( () => {},3000)
//   console.log('Prgram is executed');
// })
// .catch( () => {setTimeout(() => {}, 4000)
//   console.log('Error');
//   console.log('Error executed!');
// })
// .finally( () => { setTimeout( () => {},3000)
//   console.log('Thanks!');
// });
// ><-----------------------------------><--------------------------------><
// function Washing() {
//   console.log('Washing started...');
//   return new Promise((resolve,reject) => {
//     setTimeout( () => {
//       resolve('Washed!');
//     },4000);
//   });
// }
// function soaking() {
//   console.log('SOaking started..');
//   return new Promise( (resolve,rejects) => {
//   setTimeout( () => resolve('Soaked!'),4000);
//   });
// }
// function drying() {
//   console.log('Drying started...'); 
//   return new Promise( (resolve ,rejects ) => {
//     setTimeout( () => {
//       resolve('Dried!');
//     } , 5000);
//   }) ;
// }
// Washing()
// .then( (value) => {
//   console.log(value);
//   return soaking();
// }) 
// .then( (value) => {
//   console.log(value);
//   return drying();
// })
// .then((value) => {
//   console.log(value);
// }
// )
// .catch( (error) => {
//   console.log('Machine is stopped!');
// });
// ><----------------------------------><------------------------------------><
//Async Await
function Washing() {
    console.log('Washing started...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Washed!');
        }, 4000);
    });
}
function soaking() {
    console.log('SOaking started..');
    return new Promise((resolve, rejects) => {
        setTimeout(() => resolve('Soaked!'), 4000);
    });
}
function drying() {
    console.log('Drying started...');
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve('Dried!');
        }, 5000);
    });
}
// async function RunWashingMachine() {
//   await Washing();
// await soaking();
// await drying();
// };
Washing()
    .then((value) => {
    console.log(value);
    return soaking();
})
    .then((value) => {
    console.log(value);
    return drying();
})
    .then((value) => {
    console.log(value);
})
    .catch((error) => {
    console.log('Machine is stopped!');
});

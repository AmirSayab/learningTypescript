"use strict";
// const anchor = document.querySelector('a')!; // ! means it must return a value OR this is not null
// if(anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);
// //const form = document.querySelector('form')!;
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   console.log(
//     type.value, 
//     tofrom.value, 
//     details.value, 
//     amount.valueAsNumber
//   );
// });
// const anchor = document.querySelector('a')!;
// // if (anchor) {
// //   console.log(anchor.href); 
// // }
// console.log(anchor.href);
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e: Event)=>{
//   e.preventDefault();
//   console.log(
//     type.value,
//     tofrom.value,
//     details.value,
//     amount.valueAsNumber
//   )
// })
// --------------Class-----------------------
// class Invoice{
//   readonly client: string; // dont edit inside or outside the class
//   private details: string; // only edit inside class
//   public amount: number;  // can edit inside or outside class
//   constructor(a:string, b:string, c:number){
//     this.client=a;
//     this.details=b;
//     this.amount=c;
//   }
//   format(){
//     return `${this.client} owes $${this.amount} for ${this.details}`
//   }
// }
// const invOne = new Invoice("AMIR", "for the Website", 9000);
// const invTwo = new Invoice("KTK", "for the SEO", 9900);
// // console.log(invOne,invTwo);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
// invoices.forEach(inv=>{
//   console.log(inv.client, inv.amount, inv.format());
// })

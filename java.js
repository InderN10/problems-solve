function niilber(too1, too2, too3) {
    a = too1 + too2 + too3;
    return a;
}

function niilber2(too1, too2,) {
    a = too1 + too2;
    return a;
}

function cubeV(tal) {
    a = tal * tal * tal;
    return a;
}
function cubeGUITSET(tal) {
    a = (tal * tal) * 6;
    return a;
}

function olohTALBAI(tal1, tal2) {
    s = tal1 * tal2;
    return s;
}
function premetr(tal1, tal2) {
    p = (tal1 + tal2) * 2;
    return p;
}
function funkts1(x) {
    a = 3 * x - 5;
    return a;
}
function funkts2(x) {
    a = 4 * (x * x) - (3 * x) + 5;
    return a;
}
function suulinORON(n) {
    a = n % 10;
    return a;
}
function goliinORON(n) {
    n = n % 100;
    a = n / 10;
    return parseInt(a);
}
function tsiiferURJVER(a) {
    f = a % 10;
    b = a / 10;
    p = f * parseInt(b)
    return p
}
function tsiiferNIILBER(a) {
    b = parseInt(a / 100);
    o = a / 10;
    c = parseInt(o) % 10;
    p = a % 10;
    h = b + c + p;
    return h;
}
function secTOmin(a) {
    b = parseInt(a / 60);
    c = a % 60
    return `${b} ${c}`
}

function secTOhour(a) {
    b = parseInt(a / 3600);
    c = parseInt(a / 60);
    n = a % 60;
    return `${b} ${c} ${n}`
}
function minsecTOsec(a, b) {
    c = a * 60;
    u = c + b;
    return u;
}
function hourminsecTOsec(a, b, c) {
    a = a * 3600;
    b = b * 60;
    p = a + b + c;
    return p;
}
function dayTOhour(a) {
    b = parseInt(a / 24);
    c = a % 24;
    return `${b} ${c}`
}
function dayhourTOhour(a, b) {
    a = 2 * 24;
    c = a + b;
    return c;
}
function sarTOjil(a) {
    c = parseInt(a / 12);
    b = a - parseInt(c * 12);
    return `${c} ${b}`
}



// // prob18
// let a=2, b=7, c;
// a=a*12;
// c=a+b;
// console.log(c)
// // prob19
// let a=16, b=14;
// if (a>b){
//     console.log(a)
// }
// else{
//     console.log(b)
// }
// // prob20
// let a=2, b=6, c=7;

//  if (a>c && a>b){
//     console.log(a)
// }
// else if(b>a && b>c){
//     console.log(b)
// }
// else{
//     console.log(c)
// }   

// // prob21
// let a=85, b=75, c=96, d=69, f=0;
// if (a>80){
//     f=f+a
// }
// else {
//     f=f
// }
// if (b>80){
//     f=f+b
// }
// else{
//     f=f
// }
// if (c>80){
//     f=f+c
// }
// else{
//     f=f
// }
// if (d>80){
//     f=f+d
// }
// else{
//     f=f
// }
// console.log(f)





// // prob22
// let a=3, b=8, c=5, d=4;
// if (a<b && a<c && a<d){
//     console.log(a)
// }
// else if (b<a && b<c && b<d){
//     console.log(b)
// }
// else if (c<a && c<b && c<d){
//     console.log(c)
// }
// else {
//     console.log(d)
// }




// // prob23
// let age=23;
// if(age>=18){
//     console.log('Tanii nas',age)
//     console.log('ta nasand hursen baina.');
// }
// else{
//     console.log('ta nasand hureegui bn');

// }
// // prob24test
// let a = 3, b = 6, c = 2, d = 4, l;
// if (a<5){
//     a=a
// }
// else if (a>5){
//     a=1
// }
// if (b<5){
//     b=b
// }
// else if (b>5){
//     b=1
// }
// if (c<5){
//     c=c
// }
// else if (c>5){
//     c=1
// }
// if (d<5){
//     d=d
// }
// else if (d>5){
//     d=1
// }
// l=a*b*c*d;
// console.log(l)
// // prob25
// let a = 10, b = 3, c = 5, g;
// if (a % 2 == 0) {
//     a = a
// }
// else {
//     a = 0
// }
// if (b % 2 == 0) {
//     b = b
// }
// else {
//     b = 0
// }
// if (c % 2 == 0) {
//     c = c
// }
// else {
//     c = 0
// }
// g = a + b + c
// console.log(g);
// // prob26
// let a = 5, b = 2, c = 3, p;
// if (a % 2 == 1) {
//     a = a
// }
// else {
//     a = 1
// }
// if (b % 2 == 1) {
//     b = b
// }
// else {
//     b = 1
// }
// if (c % 2 == 1) {
//     c = c
// }
// else {
//     c = 1
// }
// p=a*b*c;
// console.log(p);
// // prob27
// let a=2, b=5, c=5, k;
// if(a==5){
//     a=a
// }
// else{
//     a=0
// }
// if(b==5){
//     b=1
// }
// else{
//     b=0
// }
// if(c==5){
//     c=1
// }
// else{
//     c=0
// }
// k=a+b+c;
// console.log(k);
// // prob28
// let a=3, b=12, c=8, d=9, p;
// if(a%3==0){
//     a=1
// }
// else{
//     a=0
// }
// if(b%3==0){
//     b=1
// }
// else{
//     b=0
// }
// if(c%3==0){
//     c=1
// }
// else{
//     c=0
// }
// if(d%3==0){
//     d=1
// }
// else{
//     d=0
// }
// p=a+b+c+d;
// console.log(p);
// // prob29
// let a = 7, b = 22, c = 13, d = 30, l;
// if (a % 11 == 0) {
//     a = 0
// }
// else {
//     a = a
// }
// if (b % 11 == 0) {
//     b = 0
// }
// else {
//     b = b
// }
// if (c % 11 == 0) {
//     c = 0
// }
// else {
//     c = c
// }
// if (d % 11 == 0) {
//     d = 0
// }
// else {
//     d = d
// }
// l = a + b + c + d
// console.log(l);
// // prob30
// let a = prompt("toogoo oruulna uu?");
// if (a < 10) {
//     console.log('No');
// }
// else {
//     console.log('Yes');
// }
// // prob31
// let a = prompt("toogoo oruulna uu?");
// if (a < 5) {
//     console.log('Yes');
// }
// else {
//     console.log('No');
// }
// // prob32
// let a=3, b=4, c=5;

// if(a%2==0){
//     console.log("Yes"); 
// }
// else{
//     console.log("No");
// }
// if(b%2==0){
//     console.log("Yes"); 
// }
// else{
//     console.log("No");
// }
// if(c%2==0){
//     console.log("Yes"); 
// }
// else{
//     console.log("No");
// }








// // newprob1
// let a=prompt("Toogoo oruulns uu?");
// if(a%2==0){
// console.log(a, "Tegsh too")
// }
// else if(a%2==1){
//     console.log(a, "Sondgoi too")
// }




// // newprob2
// let a=prompt("add number");
// if(a<0){
//     console.log("sorog too");

// }
// else if(a>0){
//     console.log("tegsh too");

// }
// else if(a=0){
//     console.log(a, "teg");

// }





// // newprob3
// let a=prompt("Huvaagdagch oruulna uu?");
// b=prompt("Huvaagch oruulna uu?")
// if(a%b==0){
//     console.log("Huvaagdana");

// }
// else if(a%b>0){
//     console.log("Huvaagdahgui");

// }





// // newprob4
// let a="IOI"
// console.log(a);



// // newprob4
// let n=prompt("wouery iwgf");
// for(let i=0; i<n; i++){
//     console.log("ioi"); 
// }



// // newprob4
// let a=[1, 2, 20, 4, 5];
// let s=0,i;
// for (i = 0; i<a.length; i++ ){
//     s=s+a[i];
// }
// console.log(s);






// // probleme5
// let a = prompt("add number");
// let p = 1, r;
// for (r = 1; r <=a;  r++ ) {
// p=p*r
// }
// console.log(p);




// // prob6
// let a=100;
// let b=prompt("dahin urjuulhee oruul");
// let c=0
// for(let i=1; i<=b; i++ ){
//     c=c+a
// }
// console.log(c);






// // prob7
// let a = 50;
// let b = prompt("heden udaa nemeh");
// let m = 0;
// for (let e = 0; e < b; e++) {
//     m = m + a;
// }
// console.log(m);






// // prob8
// let a=5;
// let b=prompt("zereg");
// let c=1;
// for(let i=0; i<b; i++){
//     c=c*a
// }
// console.log(c);








// // prob9
// let a=prompt("too");
// let b=prompt("zereg");
// let c=1;
// for(let i=0; i<b; i++){
//     c=c*a
// }
// console.log(c);






// // prob10

// let b = prompt("avsan onoo");



// if(b>5 || b<2){
//     console.log("dun buruu bn")
// }else{
//     if(b>=3){
//         console.log("tentssen");
//     } else {
//         console.log("unasan");
//     }

// }








// // prob11
// let a=2, b=3, c=4, d=5;
// let p=prompt("avsan dun")

//     if(p>1 && p<3){
//         console.log("muu")
//     }

//     else if(p>2 && p<4){
//         console.log("dund")
//     }
//     else if(p>3 && p<5){
//         console.log("sain")
//     }
//      else if (p>4 && p<6){
//         console.log("onts")
//     }







// // prob12
// let b = prompt("avsan onoo");
// if (b < 0 || b > 100) {
//     console.log("zov onoo oruulna uu?");

// }
// else {
//     if (b >= 0 && b < 59) {
//         console.log("F");

//     } else if (b >= 60 && b < 69) {
//         console.log("D");

//     } else if (b >= 70 && b < 79) {
//         console.log("C");

//     } else if (b >= 80 && b < 89) {
//         console.log("B");

//     } else if (b >= 90 && b <= 100) {
//         console.log("A");

//     }
// }






// // prob13
// let b=prompt("Odor oo oruulna uu")
// if (b < 0 || b > 7){
// console.log("zovo odor oruulna uu");

// } else{
//     if(b==1){
//         console.log("Monday");

//     } else if(b==2){
//         console.log("Tuesday");

//     } else if(b==3){
//         console.log("Wednesday");

//     } else if(b==4){
//         console.log("Thursday");

//     } else if(b==5){
//         console.log("Friday");

//     } else if(b==6){
//         console.log("Saturday");

//     } else if(b==7){
//         console.log("Sunday");

//     }
// }







// // prob14
// let month = Number(prompt("saraa oruul"))
// if (month === 1 || month === 2 || month === 3) {
//     console.log('Winter')
// } else if (month === 4 || month === 5 || month === 6) {
//     console.log('Spring')
// } if (month === 7 || month === 8 || month === 9) {
//     console.log('Summer')
// } if (month === 10 || month === 11 || month === 12) {
//     console.log('Autumn')
// }



// //test
// switch (month) {
//     case 1:
//         console.log(1)

//     case 2:
//         console.log(2)

//     case 3:
//         console.log("Winer");
//         break;

//     default:
//         console.log("zov saraa oruul");

//         break;
// }







// // prob
// let a = 3
// let b = 4
// let c = 5
// if (a + b > c && c + b > a && a + c > b) {
//     console.log("YES");

// } else  {
//     console.log("NO");

// }








// // wrongg
// let b=prompt("toogoo oruulna uu");
// let r;
// r=b*1
// console.log(r)
// r=b*2
// console.log(r)
// r=b*3
// console.log(r)
// r=b*4
// console.log(r)
// r=b*5
// console.log(r)
// r=b*6
// console.log(r)
// r=b*7
// console.log(r)
// r=b*8
// console.log(r)
// r=b*9
// console.log(r)
// r=b*10
// console.log(r)




// // correct iss
// let a=3;
// let n=10;
// let s=0;
// for(let i=1; i<=n; i++){
//     s=a*i
//     console.log(a+"*"+i+"="+s);

// }







// // problemmmmmm
// let b=3
// let s=1
// const a=5;
// for(let i=1; i<=a; i++){
//     s=s*b;
//     console.log(3 + '^' + i + '=' + s);
// }






// // probleee
// let a=2, b=3, c=4, q;
// q=a*b-c;
// console.log(q);






// // probbb
// let b=3;
// let count=0;
// let a=[2, 3, 4, 5, 3]
// for(let i=0 ; i<a.length ; i++){
//     if(a[i]==b){
//         count+=1
//     }
// }
// console.log(count);






// // probb  HIEH
// let dun = [];
// let ind = [];
// let inx, i, j, k;
// let n = prompt("heden suragch bga ve?");
// for (i = 0; i < n; i++) {
//     dun.push(parseInt(prompt("avsan dun oruul")));
// }
// for (i = 0; i < n ; i++) {
//     ind.push(i + 1);
// }
// for (i = 0; i < n; i++) {
//     for (j = 0; j < n - 1 - i; j++) {
//         if (dun[j] < dun[j + 1]) {
//             let temp = dun[j];
//             dun[j] = dun[j + 1];
//             dun[j + 1] = temp;

//             let tempInd = ind[j];
//             ind[j] = ind[j + 1];
//             ind[j + 1] = tempInd;
//         }
//     }
// }
// for (i = 0; i < n; i++) {
//     console.log(ind[i]);

// }




// probbp

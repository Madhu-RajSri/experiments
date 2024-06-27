console.log("hiiiii");

function checkGivenNumber(number) {
    if (number > 100 && number < 1000) {
        console.log("message");
    } else {
        console.log("something");
    }
}

checkGivenNumber(1);
checkGivenNumber(200);
checkGivenNumber(2000);

function checkOddOrEven(number) {
    if (number % 2 == 0) {
        console.log("It is even");
    } else {
        console.log("It is odd");
    }
}

checkOddOrEven(30);

let v = typeof (22);
console.log(v);

const names = ['harini', 'madhu', 'kanish'];
console.log(names[0]);
console.log(names);

function Maxnum(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    console.log(array);
}

Maxnum([1, 2, 4, 3]);

names.forEach((item) => console.log(item));

const randomNumbers = [1, 465, 48];
const oddEvenArray = randomNumbers.filter(number => {
    if (number % 2 != 0) {
        return number;
    }
});

console.log(oddEvenArray);

const userObj = {
    name: 'madhu',
    age: 22,
    dep: 'eie',
    phone: 6369575344
};

console.log(userObj);
console.log(userObj.age);
console.log(userObj.dep);
userObj.address = 'Perumugaipidhur';
console.log(userObj);

const vowels = ['a', 'e', 'i', 'o'];
const consonants = ['d', 't', 'f'];
console.log(vowels + "," + consonants);
console.log(vowels.concat(consonants));
console.log([...vowels, ...consonants]);

const products = [
    {
        name: 'Madhu',
        dep: 'EIE',
        class: 'Final year'
    },
    {
        name: 'Harini',
        dep: 'EIE',
        class: 'Final year-best student'
    },
    {
        name: 'Kanishka',
        dep: 'EIE',
        class: 'Final year-funny student'
    }
];

const productNames = products.map(product => product.name);
console.log(productNames);

const pro = products.map(product => {
    const { name } = product;
    return name;
});
console.log(pro);

document.addEventListener("DOMContentLoaded", function () {
    console.log(document);
    const buttons = document.getElementsByTagName('button');
    console.log(buttons[0]);

    if (buttons.length > 0) {
        buttons[0].style.padding = "20px";
        buttons[0].onclick = function (event) {
            alert("clicked");
        };
        buttons[0].addEventListener("mouseover", function () {
            alert("add event");
        });

        function handleHover() {
            document.body.style.color = "white";
            document.body.style.backgroundColor = "black";
        }
        
        buttons[0].addEventListener("mouseover", handleHover);
        buttons[0].removeEventListener("mouseover",handleHover);
        
        // If you want to remove the event listener after some condition, you can do so like this:
        // buttons[0].removeEventListener("mouseover", handleHover);
    }
});
button.addEventListener('mouseover',()=>
{
    button.style.borderRadius='0';
    button.style.width='100px';
    button.style.height='100px'
});
button.addEventListener('mouseout',()=>
{
    button.style.borderRadius='0';
    button.style.height='100px';
    button.style.height='100px'
});
const ul=document.createElement("ul");
products.forEach((product) =>
{
    const list=document.createElement("li");
    list.innerText=product.name;
    ul.append(list);

});
console.log("1");
Promise.reject(2)
  .then((data)=> console.log(data))
  .catch((data)=> console.log(data));
  console.log("3");

  const getProducts=new Promise((resolve,rejected)=>
{
    resolve(products)
})
getProducts.then((data=> console.log(data)))





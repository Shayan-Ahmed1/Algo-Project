function swap(elemant1, elemant2) {
    console.log("Inside swaping function.");

    let temp = elemant1.style.height;
    elemant1.style.height = elemant2.style.height;
    elemant2.style.height = temp;

}

function disableSortingBtn() {
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".heapSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".radixSort").disabled = true;
}


function enableSortingBtn() {
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".heapSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".radixSort").disabled = false;
}

function disableSizeSlider() {
    document.querySelector("#arraySize").disabled = true;
}

function enableSizeSlider() {
    document.querySelector("#arraySize").disabled = false;
}

function disableNewArrayBtn() {
    document.querySelector(".newArray").disabled = true;
}

function enableNewArrayBtn() {
    document.querySelector(".newArray").disabled = false;
}

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

let arraySize = document.querySelector('#arraySize');

arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

let delay = 260;

let delayElemant = document.querySelector('#arraySpeed');

delayElemant.addEventListener('input', function(){
    console.log(delayElemant.value, typeof(delayElemant.value));
    delay = 320 - parseInt((delayElemant.value));
});

let array = [];

createNewArray();

function createNewArray(noOfBars = 40) {

    deleteChild();

    array = [];

    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    const bars = document.querySelector("#bars");

    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }

}


function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector('.newArray');
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});


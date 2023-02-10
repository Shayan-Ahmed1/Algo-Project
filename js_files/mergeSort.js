//let delay = 30;
async function merge(elemant, low, mid, high) {
    console.log('In merge()');
    console.log(`low=${low}, mid=${mid}, high=${high}`);
    const n1 = mid - low + 1;
    const n2 = high - mid;
    console.log(`n1=${n1}, n2=${n2}`);
    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await waitforme(delay);
        console.log('In merge left loop');
        console.log(elemant[low + i].style.height + ' at ' + (low + i));
        // color
        elemant[low + i].style.background = 'purple';
        left[i] = elemant[low + i].style.height;
    }
    for (let i = 0; i < n2; i++) {
        await waitforme(delay);
        console.log('In merge right loop');
        console.log(elemant[mid + 1 + i].style.height + ' at ' + (mid + 1 + i));
        // color
        elemant[mid + 1 + i].style.background = 'blue';
        right[i] = elemant[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while (i < n1 && j < n2) {
        await waitforme(delay);
        console.log('In merge while loop');
        console.log(parseInt(left[i]), parseInt(right[j]));

        // To add color for which two r being compared for merging

        if (parseInt(left[i]) <= parseInt(right[j])) {
            console.log('In merge while loop if');
            // color
            if ((n1 + n2) === elemant.length) {
                elemant[k].style.background = 'grey';
            }
            else {
                elemant[k].style.background = 'lightblue';
            }

            elemant[k].style.height = left[i];
            i++;
            k++;
        }
        else {
            console.log('In merge while loop else');
            // color
            if ((n1 + n2) === elemant.length) {
                elemant[k].style.background = 'grey';
            }
            else {
                elemant[k].style.background = 'lightblue';
            }
            elemant[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while (i < n1) {
        await waitforme(delay);
        console.log("In while if n1 is left");
        // color
        if ((n1 + n2) === elemant.length) {
            elemant[k].style.background = 'grey';
        }
        else {
            elemant[k].style.background = 'lightblue';
        }
        elemant[k].style.height = left[i];
        i++;
        k++;
    }
    while (j < n2) {
        await waitforme(delay);
        console.log("In while if n2 is left");
        // color
        if ((n1 + n2) === elemant.length) {
            elemant[k].style.background = 'grey';
        }
        else {
            elemant[k].style.background = 'lightblue';
        }
        elemant[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(elemant, l, r) {
    console.log('In mergeSort()');
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(N)";
    
    if (l >= r) {
        console.log(`return cause just 1 element l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    console.log(`left=${l} mid=${m} right=${r}`, typeof (m));
    await mergeSort(elemant, l, m);
    await mergeSort(elemant, m + 1, r);
    await merge(elemant, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function () {
    let elemant = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(elemant.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(elemant, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});



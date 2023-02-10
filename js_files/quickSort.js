
async function partitionLomuto(ele, l, r) {
    console.log('In partitionLomuto()');
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'grey';
    for (let j = l; j <= r - 1; j++) {
        console.log('In partitionLomuto for j');
        // color current element
        ele[j].style.background = 'blue';
        // pauseChamp
        await waitforme(delay);

        if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
            console.log('In partitionLomuto for j if');
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'darkblue';
            if (i != j) ele[j].style.background = 'darkblue';
            // pauseChamp
            await waitforme(delay);
        }
        else {
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++;
    // pauseChamp
    await waitforme(delay);
    swap(ele[i], ele[r]); // pivot height one
    console.log(`i = ${i}`, typeof (i));
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'grey';

    // pauseChamp
    await waitforme(delay);

    // color
    for (let k = 0; k < ele.length; k++) {
        if (ele[k].style.background != 'grey')
            ele[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(ele, l, r) {
    console.log('In quickSort()', `l=${l} r=${r}`, typeof (l), typeof (r));
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(log N)";
    
    if (l < r) {
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else {
        if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
            ele[r].style.background = 'grey';
            ele[l].style.background = 'grey';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function () {
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
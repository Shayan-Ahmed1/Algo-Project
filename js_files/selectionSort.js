async function selectionSort() {
    console.log('In selection()');
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N^2)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";
    
    const elemant = document.querySelectorAll(".bar");
    for (let i = 0; i < elemant.length; i++) {
        console.log('In ith loop');
        let min_index = i;
        // Change color of the position to swap with the next min
        elemant[i].style.background = 'blue';
        for (let j = i + 1; j < elemant.length; j++) {
            console.log('In jth loop');
            // Change color for the current comparision (in consideration for min_index)
            elemant[j].style.background = 'darkblue';

            await waitforme(delay);
            if (parseInt(elemant[j].style.height) < parseInt(elemant[min_index].style.height)) {
                console.log('In if condition height comparision');
                if (min_index !== i) {
                    // new min_index is found so change prev min_index color back to normal
                    elemant[min_index].style.background = 'cyan';
                }
                min_index = j;
            }
            else {
                // if the currnent comparision is more than min_index change is back to normal
                elemant[j].style.background = 'cyan';
            }
        }
        await waitforme(delay);
        swap(elemant[min_index], elemant[i]);
        // change the min element index back to normal as it is swapped 
        elemant[min_index].style.background = 'cyan';
        // change the sorted elements color to grey
        elemant[i].style.background = 'grey';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selectionSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
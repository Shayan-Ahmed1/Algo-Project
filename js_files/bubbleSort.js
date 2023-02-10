async function bubbleSort() {
    console.log('In bubbe()');
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";
    
    const elemant = document.querySelectorAll(".bar");
    for (let i = 0; i < elemant.length - 1; i++) {
        console.log('In ith loop');
        for (let j = 0; j < elemant.length - i - 1; j++) {
            console.log('In jth loop');
            elemant[j].style.background = 'blue';
            elemant[j + 1].style.background = 'blue';
            if (parseInt(elemant[j].style.height) > parseInt(elemant[j + 1].style.height)) {
                console.log('In if condition');
                await waitforme(delay);
                swap(elemant[j], elemant[j + 1]);
            }
            elemant[j].style.background = 'cyan';
            elemant[j + 1].style.background = 'cyan';
        }
        elemant[elemant.length - 1 - i].style.background = 'grey';
    }
    elemant[0].style.background = 'grey';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubbleSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

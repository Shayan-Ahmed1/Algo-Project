async function insertionSort(){
    console.log('In insertion()');
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";
    
    const elemant = document.querySelectorAll(".bar");
    // color
    elemant[0].style.background = 'darkblue';
    for(let i = 1; i < elemant.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = elemant[i].style.height;
        // color
        elemant[i].style.background = 'blue';    

        await waitforme(delay);

        while(j >= 0 && (parseInt(elemant[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            elemant[j].style.background = 'blue';
            elemant[j + 1].style.height = elemant[j].style.height;
            j--;

            await waitforme(delay);

            // color
            for(let k = i; k >= 0; k--){
                elemant[k].style.background = 'grey';
            }
        }
        elemant[j + 1].style.height = key;
        // color
        elemant[i].style.background = 'grey';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertionSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});



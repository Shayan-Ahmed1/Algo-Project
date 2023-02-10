
// A utility function to get maximum value in arr[]
async function getMax(arr,n)
{
	let mx = arr[0];
		for (let i = 1; i < n; i++)
			if (arr[i] > mx)
				mx = arr[i];
		return mx;
}

// A function to do counting sort of arr[] according to
	// the digit represented by exp.
async function countSort(arr,n,exp)
{
	let output = new Array(n); // output array
		let i;
		let count = new Array(10);
		for(let i=0;i<10;i++)
			count[i]=0;

		// Store count of occurrences in count[]
		for (i = 0; i < n; i++)
			count[Math.floor(arr[i] / exp) % 10]++;

		// Change count[i] so that count[i] now contains
		// actual position of this digit in output[]
		for (i = 1; i < 10; i++)
			count[i] += count[i - 1];

		// Build the output array
		for (i = n - 1; i >= 0; i--) {
			output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
			count[Math.floor(arr[i] / exp) % 10]--;
		}

		// Copy the output array to arr[], so that arr[] now
		// contains sorted numbers according to current digit
		for (i = 0; i < n; i++)
			arr[i] = output[i];

			console.log(arr);
}

// The main function to that sorts arr[] of size n using
	// Radix Sort
async function radixSort(arr,n)
{
	console.log("in radix");
	//Setting Time complexities
    document.getElementById("Time_Worst").innerText = " O(logb(mx)(n+b))";
    document.getElementById("Time_Average").innerText = "O(p*(n+d))";
    document.getElementById("Time_Best").innerText = "Ω(nd)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O((n+k))";
	// Find the maximum number to know number of digits
		let m = getMax(arr, n);

		// Do counting sort for every digit. Note that
		// instead of passing digit number, exp is passed.
		// exp is 10^i where i is current digit number
		for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
			countSort(arr, n, exp);
}



const radixSortbtn = document.querySelector(".radixSort");
radixSortbtn.addEventListener('click', async function(){
    const elemant = document.querySelectorAll('.bar');
    // let l = 0;
    let r = parseInt(elemant.length);
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await radixSort(elemant, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


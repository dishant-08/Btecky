
// O(n*k) solution for finding maximum sum of
// a subarray of size k

// Returns maximum sum in a subarray of size k.
function maxSum( arr, n, k){

	// Intiallizing the max_sum variable
let max_sum = 0; 

	// Runs a Loop from i to K
	
	for(let i = 0; i < K; i++){
		max_sum += Arr[i];
	}
	
	// Initallize the Window_sum & assign that max_sum for the window_sum
	
	let window_sum = max_sum;
	for(let i = K; i < N; i++){
		window_sum = window_sum - Arr[i-K] + Arr[i];
		max_sum = Math.max(max_sum,window_sum);
	}
	return max_sum
}

// Driver code
let arr = [ 1, 4, 2, 10, 2, 3, 1, 0, 20 ];
let k = 4;
let n = arr.length;
document.write(maxSum(arr, n, k));



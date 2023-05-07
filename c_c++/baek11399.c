#include <stdio.h>

int main() {

	int n, temp;
  int sum1 = 0, sum2 = 0;
	int arr[1001];
	scanf("%d", &n);

	for(int i=0; i<n; i++) {
		scanf("%d", &arr[i]);
	}
	for(int i=0; i<n; i++) {
		for(int j=0; j<n-(i+1); j++) {
			if(arr[j] > arr[j+1]) {
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}

	for(int i=0; i<n; i++) {
		sum1 = sum1 + arr[i];
    sum2 = sum2 + sum1;
	}
	printf("%d", sum2);
}
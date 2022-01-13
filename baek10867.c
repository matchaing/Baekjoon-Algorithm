#include <stdio.h>

int main(void) {
  int n, temp=0;
  scanf("%d", &n);
  int arr[1000];

  for(int i=0; i<n; i++){
    scanf("%d", &arr[i]);
  }
  for(int i=0; i<n-1; i++){
    for(int j=0; j<n-1; j++){
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
      else if(arr[j] == arr[j+1]){
        arr[j]=0;
      }
    }
  }
  for(int i=0; i<n; i++){
    if(arr[i] != 0){
      printf("%d ", arr[i]);
    }
  }
  return 0;
}
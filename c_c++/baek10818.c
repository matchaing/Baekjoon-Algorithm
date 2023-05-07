#include <stdio.h>

int main(void) {
  int n, min=1000001, max=-1000001;
  scanf("%d", &n);
  int arr[n];

  for(int i=0; i<n; i++){
    scanf("%d", &arr[i]);
    if(arr[i]<min) min = arr[i];
    if(arr[i]>max) max = arr[i];
  }
  printf("%d %d", min, max);
  return 0;
}
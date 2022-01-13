#include <stdio.h>

int main(void) {
  int n, temp;
  scanf("%d", &n);
  int arr[1000] ={ 0, };

  for(int i=0; i<n; i++){
    scanf("%d", &temp);
    arr[temp]++;
  }

  for(int i=0; i<1000; i++){
    if(arr[i] != 0){
      printf("%d ", i);
    }
  }
  return 0;
}
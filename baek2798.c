#include <stdio.h>
#include <stdlib.h> 

int main(void) {
  int n, m;
  scanf("%d %d", &n, &m);
  int* arr = (int*)malloc(sizeof(int) * n);

  int sum, max=0;

  for(int i=0; i<n; i++){
    scanf("%d", &arr[i]);
  }

  for(int i=0; i<n; i++){
    for(int j=i+1; j<n; j++){
      for(int k= j+1; k<n; k++){
        sum = arr[i]+arr[j]+arr[k];
          max = sum;
        }
      }
    }
  }
  printf("%d\n", max);
  
}
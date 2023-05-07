#include <stdio.h>

 void swap(int*a, int*b){
   int temp=*a;
   *a=*b;
   *b=temp;
 }

int main(void) {
  int n, temp=0;
  int num[1000] ={0,};

  scanf("%d", &n);
  for(int i=0; i<n; i++){
    scanf("%d", &num[i]);
  }

  for(int i=0; i<n; i++){
    for(int j=0; j<n-1; j++){
      if(num[j+1]<num[j]){
        swap(&num[j+1], &num[j]);

      }
    }
  }
  for(int i=0; i<n; i++){
    printf("%d\n", num[i]);
  }
  return 0;
}
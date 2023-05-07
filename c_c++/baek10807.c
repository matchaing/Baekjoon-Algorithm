#include <stdio.h>

int main(void) {
  int n,v, count=0;
  scanf("%d", &n);

  int num[100];
  for(int i=0; i<n; i++){
    scanf("%d", &num[i]);
  }
  scanf("%d", &v);
  for(int i=0; i<n; i++){
    if(num[i] == v) count++;
  }
  printf("%d", count);
  return 0;
}
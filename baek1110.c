#include <stdio.h>

int main(void) {
  int num, num2, a, b, c, d;
  int count = 0;
  scanf("%d", &num);
  num2 = num;

  while(1){
    a = num/10;
    b = num%10;
    c = (a+b)%10;
    d = (b*10)+c;
    count++;
    num = d;
    if(d == num2){
      break;
    }
  }
  printf("%d \n", count);
}
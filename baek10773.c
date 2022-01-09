#include <stdio.h>
int stack[100000];
int top = -1;

void pop(){
  if(top < 0) return;
  stack[top--] = 0;
}
void push(int data){
  stack[++top] = data;
}
int main(void) {
  int k, data, sum=0;
  scanf("%d", &k);

  while(k--){
    scanf("%d", &data);
    if(data==0) pop();
    else push(data);
  }
  for(int i=0; i<=top; i++){
    sum +=stack[i];
  }
  printf("%d\n", sum);
  return 0;
}
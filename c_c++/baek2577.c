#include <stdio.h>
 
int main() {
    int a, b, c, result = 0;
    int num[10] = { 0,  };
    scanf("%d %d %d", &a, &b, &c);
    result = a * b * c;
    
    for(int i=0; result > 0; i++){
        num[result % 10]++;
        result /= 10;
    }
 
    for (int i = 0; i < 10; i++) {
        printf("%d\n", num[i]);
    }
}
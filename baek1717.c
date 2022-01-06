#include <stdio.h>
#include <stdlib.h> 

int get_root(int *, int );
void union_root(int *, int, int);
int find_root(int *, int, int);

int main(void) {
  int n, m, c, x, y;
  scanf("%d %d", &n, &m);
  int MAX_ROOT= m;

  int root[MAX_ROOT+1];
  for(int i=0; i<=MAX_ROOT; i++){
    root[i]=i;
  }
  while(m--){
    scanf("%d %d %d", &c, &x, &y);
    if(c==0) union_root(root, x, y);
    else if(c==1){
      if(get_root(root, x) == get_root(root, y)){
        printf("YES\n");
      }
      else printf("NO\n");
    }
  }

}
int get_root(int *root, int x){
  if(root[x]==x) return x;
  else{
    return root[x] = get_root(root, root[x]);
  }
}

void union_root(int * root, int x,int y){
  int root_x, root_y;
  root_x = get_root(root, x);
  root_y = get_root(root, y);

  if(root_x < root_y) root[y]=root_x;
  else root[x] = root_y;
}

int find_root(int *root, int x, int y){
  if(get_root(root, x) == get_root(root, y)) return 1;
  else return 0;
}
#include <iostream>
using namespace std;

void insertNumber(int *arr,int pos, int num, int &n,int size = 10 ) {
    if (pos >= size || pos > n) {
        cout<< "ERROR" << endl;
        return;
    };
    //insert
    // analogy : we shift from the last to the position which increment the size of the array because the last element shift next index, in order to have place between.
    for (int i = n; i > pos; i--){
        arr[i] = arr[i-1];
    }
    arr[pos] = num;
    n++;
};
// delete
void deleteNumber(int *arr,int pos,int &n, int size =10) {
    if (pos >= size || pos > n) {
        cout<< "ERROR" << endl;
        return;
    };
    for (int i =pos; i < n; i++) {
        arr[i] = arr[i+1];
    }
    n--;
}




int main(){
    //Given array
    int arr[10] = {5,4,3,2,1};
    int n = 5;
    insertNumber(arr,2,10,n);
    deleteNumber(arr,1,n);
    for (int i = 0; i < n; i++){
        cout<<"Value "<<i<<": "<<arr[i]<<endl;
    }
    return 0;
}

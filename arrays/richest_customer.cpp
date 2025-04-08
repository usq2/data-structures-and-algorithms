/**
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
*/
#include <iostream>
#include <vector> 

using namespace std;

int maximumWealth(vector<vector<int>>& accounts) {
    int max_money = 0;
   for (int i = 0; i< accounts.size(); i++) {
       int money = 0;
       for (int j = 0; j< accounts[i].size(); j++) {
           money += accounts[i][j];
       }
       if (money > max_money) {
           max_money = money;
       }
   }
   return max_money;
}

int main () {
    vector<vector<int>> accounts = {{1,2,3}, {4,5,6}};
    if (maximumWealth(accounts) == 15) {
        std::cout << "success";
    } else {
        cout << "failure";
        return 0;
    }
    return 1;
}
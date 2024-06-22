219. Contains Duplicate II

Nhận một mảng số nguyên nums và 1 số nguyên k, trả về true nếu có 2 chỉ số i và j trong mảng sao cho nums[i] = num[j] và abs(i -j) <= k

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

### Solution

dùng hash map
Với điều kiện abs(i -j) <= k thì i và j luôn kề nhau để abs(i - j) là nhỏ nhất.

# Leetcode

## [26. Remove duplicates from sorted array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description)

[Solution](./26-remove-duplicates/26-remove-duplicates.js)

### Topics

> two-pointers

### Notes

- use two pointers
  - left one searching for duplicates
  - right one searching for next non duplicate value

## [27. Remove element](https://leetcode.com/problems/remove-element/description)

[Solution](./27-remove-lement/27-remove-lement.js)

### Topics

> two-pointers

### Notes

- use two pointers
  - left one searching for matches
  - right one searching for place to move the match

## [80. Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description)

[Solution](./80-remove-duplicates/80-remove-duplicates.js)

### Topics

> two-pointers

### Notes

- use two pointers
  - left one keeping place to put next item
  - right one searching for next non duplicate value

## [88. Merge sorted array](https://leetcode.com/problems/merge-sorted-array/description)

[Solution](./88-merge-sorted-array/88-merge-sorted-array.js)

### Topics

> two-pointers

> sorting

### Notes

- both arrays are already sorted
- use three pointers
  - max for arr1
  - max for arr2
  - last in arr1 - current
- take min
- update pointers
  - move current
  - move one of max pointers

## [169. Majority Element](https://leetcode.com/problems/majority-element/description)

[Solution](./169-majority-element/169-majority-element.js)

### Topics

> sorting

> hash-table

### Notes

#### Sorting

- sort nums
- get middle element
  - element appears more than ⌊n / 2⌋

#### Hash table

- use hash table to save count of each value
- get max count

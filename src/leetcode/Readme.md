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

## [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/description)

[Solution](./45-jump-game-2/45-jump-game-2.js)

### Topics

> two-pointers

### Notes

- one pointer keeps the max index that we can jump from current position
- second pointer keeps previous max jump index
- third pointer run from the start searching max jumps to update first pointer

## [55. Jump Game](https://leetcode.com/problems/jump-game/description)

[Solution](./55-jump-game/55-jump-game.js)

### Topics

> two-pointers

### Notes

- one pointer keeps current reachable index
- second pointer goes to the array's start search for the place index is reachable from
- update reachable index with second pointer value once it's founded

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

## [189. Rotate Array](https://leetcode.com/problems/rotate-array/description)

[Solution](./189-rotate-array/189-rotate-array.js)

### Topics

> two-pointers

### Notes

- one pointer at current index
- second at next position
- apply for 1..k indexes to handle circles

## [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description)

[Solution](./121-best-time/121-best-time.js)

### Topics

> two-pointers

> sliding-window

### Notes

- left pointer keeps min value for the current window
- right pointer looking for the max value in current window
- save max profit
  - update on every new window
- move left pointer if next min found

## [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description)

[Solution](./122-best-time-2/122-best-time-2.js)

### Topics

> two-pointers

> sliding-window

### Notes

- just sum all positive changes between 2 days
  - for [1, 2, 3, 4] `(2-1) + (3-2) + (4-3)` = `(4-1)`
- ignore negative changes

## [274. H-Index](https://leetcode.com/problems/h-index/description)

[Solution](./274-h-index/274-h-index.js)

### Topics

> sorting

> binary-search

### Notes

- sort array
- find min index where `count - i >= nums[i + 1]`
  - use linear search of binary search

## [275. H-Index II](https://leetcode.com/problems/h-index-ii/description)

[Solution](./275-h-index-2/275-h-index-2.js)

### Topics

> binary-search

### Notes

- see [274. H-Index](#274-h-index)
- array already sorted
- find min index where `count - i >= nums[i + 1]`
  - use binary search

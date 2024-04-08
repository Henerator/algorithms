# Leetcode

## [12. Integer to Roman](https://leetcode.com/problems/integer-to-roman/description)

[Solution](./12-int-to-roman/12-int-to-roman.js)

### Topics

> math

> hash-table

### Notes

- go from left to right by digits in number
- convert to appropriate string
  - consider cases
    - <= 3
    - == 4
    - <= 8
    - == 9
    - otherwise ''

## [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/description)

[Solution](./13-roman-int/13-roman-int.js)

### Topics

> math

### Notes

- go from the right to the left through roman value
  - if the value < previos one subtract it from the sum
  - if the value > previos one add it to the sum
- nice JS point
  - `return op1, op2, value` will execute op1, op2 and return value

## [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description)

[Solution](./14-longest-prefix/14-longest-prefix.js)

### Topics

> string

### Notes

- find the max word in the list
- go by each char in the word and compare this to every word in the list

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

## [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description)

[Solution](./42-trapping-water/42-trapping-water.js)

### Topics

> two-pointers

> dp

### Notes

### Two pointers

- move pointer with min or equal value forward summing water
- keep current min wall value to calculate water on each step

### Dynamic programming

- calculate maxLeft for each cell
  - [0, 0, 1, 1, 2, 3, 3]
- calculate maxRught for each cell
  - [3, 3, 3, 3, 2, 2, 0]
- calculate `min(L, R)` for each cell
- calculate `min(L, R) - heights[i]` for each cell

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

## [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description)

[Solution](./125-valid-palindrome/125-valid-palindrome.js)

### Topics

> two-pointers

### Notes

- move to pointers from different side of the string
- ignore invalida chars

## [134. Gas Station](https://leetcode.com/problems/gas-station/description)

[Solution](./134-gas-station/134-gas-station.js)

### Topics

> greedy

### Notes

- check if solution exist
  - sum all gas
  - sum all costs
  - gas sum should be >= cost sum
- find start index
  - set it to 0
  - sum current gas on each step
  - if current gas < 0
    - move startIndex to `index + 1`
    - reset current gas sum

## [135. Candy](https://leetcode.com/problems/candy/description)

[Solution](./135-candy/135-candy.js)

### Topics

> greedy

### Notes

- find all value increases from left to right
  - increase value by 1 for each case
- find all value increases from right to left
  - increase value by 1 for each case
- get `max(left, right)` for each index
- sum all the maximums

## [167. Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description)

[Solution](./167-two-sum-2/167-two-sum-2.js)

### Topics

> two-pointers

### Notes

- set two pointers to the first and last elements
- move right pointer `numbers[left] + numbers[right] > target`
- move left pointer `numbers[left] + numbers[right] < target`
- check `numbers[left] + numbers[right] === target`
- if solution not found repeat until `left < right`

## [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description)

[Solution](./238-product/238-product.js)

### Topics

> prefix

> suffix

### Notes

- calculate prefix product for every index
- calculate suffix product for every index
- map array multiplying prefix and suffix for every index

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

## [380. Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/description)

[Solution](./380-randomized-set/380-randomized-set.js)

### Topics

> hash-table

### Notes

- create array for values to be able to get random one
- create map to bind value to it's index in array
- remove
  - put last value into removed value place
  - update last value index in the map
  - remove value index binding from the map
  - remove last element from the array

## [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/description)

[Solution](./392-is-subsequence/392-is-subsequence.js)

### Topics

> two-pointers

### Notes

- first pointer goes through each symbol of text
- second one through the template
  - template pointer is moved once the same char is found in text

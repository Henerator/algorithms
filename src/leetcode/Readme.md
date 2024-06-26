# Leetcode

## [2. Add two numbers](https://leetcode.com/problems/add-two-numbers/description)

[Solution](./2-add-two-numbers/2-add-two-numbers.js)

### Topics

> linked-list

### Notes

- create dummy node
- keep 3 values to sum up
  - rest - the remainder of the division
  - headA value
    - skip if headA is null
  - headB value
    - skip if headB is null

## [3. Longest Substring Without Repeating](https://leetcode.com/problems/longest-substring-without-repeating-characters/description)

[Solution](./3-longest-wt-repeating/3-longest-wt-repeating.js)

### Topics

> two-pointers

> sliding-window

### Notes

- go through each symbol
  - update max window size on each step
  - update current window size on each step
  - check if symbol is already in the hash map
    - update current window size
    - move left pointer
      - `left = map.get(char) + 1`

## [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/description)

[Solution](./11-most-water/11-most-water.js)

### Topics

> two-pointers

### Notes

- set two pointers to the start and the end of heights
- calculate area
- update max area
- move the pointer with smaller value

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

## [15. 3Sum](https://leetcode.com/problems/3sum/description)

[Solution](./15-3sum/15-3sum.js)

### Topics

> two-pointers

> hash-table

### Notes

#### Two pointers

- handle edge case
  - if nums count < 3 -> no triples
- sort array
- handle edge case
  - `nums[0] > 0` -> no triples that give in sum `0`
- fix one pointer at the start of array
  - handle edge case
  - `nums[i] > 0` -> no triples that give in sum `0`
- set two pointers
  - `left = i + 1`
  - `right = arr.length - 1`
- calculate sum `nums[i] + nums[left] + nums[right]`
  - if `sum === 0`
    - push new triple to the answer
    - move left pointer
      - move until new left value to avoid duplicates
    - move right pointer
      - move until new right value to avoid duplicates
  - if `sum < 0`
    - move left pointer since we need to increase the sum
  - if `sum > 0`
    - move right pointer since we need to dencrease the sum

#### Hash table

- handle edge case
  - if nums count < 3 -> no triples
- sort array
- handle edge case
  - `nums[0] > 0` -> no triples that give in sum `0`
- put in hash map every value
  - `hashMap.add(nums[i], i)`
  - this step will set the last index for repeated values
    - `[1, 1, 1, 2, 2, 2]` -> `[[value: 1, index: 2], [value: 2, index: 5]]`
- fix one pointer at the start of array
  - handle edge case
  - `nums[i] > 0` -> no triples that give in sum `0`
- set second pointers
  - `left = i + 1`
  - loop to the end of array
    - calculate third value that you need to get zero
      - `nums[i] + nums[left] + value = 0` -> `value = -1 * (nums[i] + nums[left])`
    - check if third value in hashMap
      - check if index of value is not equal to left pointer to avoid duplicates
        - `hashMap.get(value) > left`
    - update second pointer
      - get next left from hashMap
        - pay attention that hashMap will help to skip the same values

## [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description)

[Solution](./19-remove-node/19-remove-node.js)

### Topics

> linked-list

### Notes

- create dummy node
- set 2 pointers to the dummy node
  - move one pointer on n+1 steps forward
  - move both pointers until the right pointer reaches the end of the list
- remove node after lefet pointer
  - `left.next = left.next.next`

## [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description)

[Solution](./20-valid-parentheses/20-valid-parentheses.js)

### Topics

> stack

### Notes

- add open bracket to the stack
- for close bracket
  - check if paired open bracket on the top of the stack

## [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description)

[Solution](./21-merge-sorted-list/21-merge-sorted-list.js)

### Topics

> linked-list

### Notes

- create dummy node
- create tail = node
- if listA.head is empty
  - `tail.next = listB.head`
  - note that no need to check all other nodes from listB
- if listB.head is empty
  - `tail.next = listA.head`
  - note that no need to check all other nodes from listA
- if `listA.head.value <= listB.head.value`
  - set `tail.next = listA.head`
  - udpate `listA.head = listA.head.next`
- if `listA.head.value > listB.head.value`
  - set `tail.next = listB.head`
  - udpate `listB.head = listB.head.next`
- update tail on every step
  - `tail = tail.next`

## [25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/description)

[Solution](./25-reverse-grooup/25-reverse-grooup.js)

### Topics

> linked-list

### Notes

- use [Reverse linked list idea](#92.-Reverse-Linked-List-II)
  - check if group to reverse exist
  - run reverse method
  - set previous to the tail of reversed part

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

## [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/description)

[Solution](./36-valid-sudoku/36-valid-sudoku.js)

### Topics

> hash-table

### Notes

- use one hash table for cols, rows and squares values
  - knowing x and y you can identify row, col and square to set the value
    - `row = y`
    - `col = x`
    - `squareRow = Math.floor(y / 3)`, `squareCol = Math.floor(x / 3)`
  - generate special hash table key for every case
    - rows
    - columns
    - squares

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

## [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/description)

[Solution](./49-group-anagrams/49-group-anagrams.js)

### Topics

> hash-table

### Notes

- go word by word
  - sort word's chars to get work hash key
  - add word to the groups
  - save group index for the word in map

## [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/description)

[Solution](./56-merge-intervals/56-merge-intervals.js)

### Topics

> two-pointers

### Notes

- use two pointers
  - first one keep the start of range
  - second one goes one by one searching for range end
- keep max end to handle cases with nested intervals
  - `[1, 10], [2, 3], [4, 5]`
- to make it ease push `[Infinity, Infinity]` to the array so you don't need to handle edge case on the end of the array

## [57. Insert Interval](https://leetcode.com/problems/insert-interval/description)

[Solution](./57-insert-interval/57-insert-interval.js)

### Topics

> binary-search

### Notes

- use binary search to find the start insert point for new interval
- use binary search to find the end insert point for new interval
- handle start insert case
  - if new interval overlaps startIndex interval takes min start point
    - `Math.min(newInterval.start, startIndexInverval.start)`
  - otherwise increase startIndex
- handle end insert case
  - if new interval overlaps endIndex interval takes max end point
    - `Math.max(newInterval.end, startIndexInverval.end)`
    - increase endIndex
- combine result
  - add intervals to the startIndex
  - add newInterval using min and max from previous steps
  - add intervals from endIndex

## [55. Jump Game](https://leetcode.com/problems/jump-game/description)

[Solution](./55-jump-game/55-jump-game.js)

### Topics

> two-pointers

### Notes

- one pointer keeps current reachable index
- second pointer goes to the array's start search for the place index is reachable from
- update reachable index with second pointer value once it's founded

## [61. Rotate List](https://leetcode.com/problems/rotate-list/description)

[Solution](./61-rotate-list/61-rotate-list.js)

### Topics

> linked-list

### Notes

- count kust length
- set `lastNode.next = head`
- find point to break link
  - `count - (k % count) - 1` steps from head
  - update head with `breakPoint.next`
  - set `breakPoint.next = null`

## [71. Simplify Path](https://leetcode.com/problems/simplify-path/description)

[Solution](./71-simplify-path/71-simplify-path.js)

### Topics

> stack

### Notes

- create empty stack
- split path by `/`
  - ignore `.` path
  - pop from stack for `..` path
  - push to stack any other part

## [80. Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description)

[Solution](./80-remove-duplicates/80-remove-duplicates.js)

### Topics

> two-pointers

### Notes

- use two pointers
  - left one keeping place to put next item
  - right one searching for next non duplicate value

## [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description)

[Solution](./82-remove-duplicates/82-remove-duplicates.js)

### Topics

> linked-list

> two-pointers

### Notes

- create dummy node
- use two pointers
  - left one keeping the node without duplicates
  - right one searching for next non duplicate value

## [86. Partition List](https://leetcode.com/problems/partition-list/description)

[Solution](./86-partition-list/86-partition-list.js)

### Topics

> linked-list

> two-pointers

### Notes

- create dummy node
- find first node with value >= x
  - save prev node
  - save the node
- go through the nodes
  - keep previous node
  - keep current node
  - search for node with value < x
    - move node to the place between saved nodes on pervious step

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

## [92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/description)

[Solution](./92-reverse-linked-list-2/92-reverse-linked-list-2.js)

### Topics

> linked-list

### Notes

- create dummy node
  - `const dummy = new ListNode(0, head)`
- go until reach head of the list need to be reversed
- save node before reversed list
- reverse `(right - left + 1)` nodes
- set `previousReversedList.next.next = current`
- set `previousReversedList.next = previous`

## [105. Construct Binary Tree](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description)

[Solution](./105-construct-tree/105-construct-tree.js)

### Topics

> binary-tree

### Notes

- preorder array gives next root value
- to find subtree for left and right values
  - search for current preorder value in inorder values
    - pay attention that values are unique by problem description
  - values to the left of the found value content left subtree
  - values to the right of the found value content right subtree

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

## [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/description)

[Solution](./124-tree-max-path-sum/124-tree-max-path-sum.js)

### Topics

> binary-tree

> dfs

### Notes

- consider 3 cases
  - take `left-root-right`
    - update max with this case
  - take `left-root`
  - take `root-right`

## [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description)

[Solution](./125-valid-palindrome/125-valid-palindrome.js)

### Topics

> two-pointers

### Notes

- move to pointers from different side of the string
- ignore invalida chars

## [128. Longest Consequtive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description)

[Solution](./128-longest-sequence/128-longest-sequence.js)

### Topics

> hash-table

### Notes

- add all values to the hash set
- go through the values
  - check if the value is the first in sequence
    - check if `value - 1` is in set
  - if the value is the first go through the values `value + 1`, `value + 2`, ... and check if they are in the set
    - udpate current longest sequence
    - update max longest sequence

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

## [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/description)

[Solution](./138-copy-list/138-copy-list.js)

### Topics

> linked-list

### Notes

- copy every node and add it to the map
  - origin_node -> cope_node
- set links using one more loop
  - set next using map
  - set random using map

## [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description)

[Solution](./141-linked-list-cycle/141-linked-list-cycle.js)

### Topics

> linked-list

> two-pointers

### Notes

- use Floyd's tortoise and hare algorithm
  - use two pointers: slow and fast
    - slow goes one step forward at a time
    - fast goes two step forward at a time
  - if there is no cycle fast one will reach the end of list
  - if there is a cycle fast pointer will catch up the slow one on the second round

## [146. LRU Cache](https://leetcode.com/problems/lru-cache/description)

[Solution](./146-lru-cache/146-lru-cache.js)

### Topics

> linked-list

> double-linked-list

> hash-table

### Notes

- use double linked list to save history of using nodes
  - put action
    - remove node from the list
    - push new one to the tail
  - get action
    - remove node from the list
    - push new one to the tail
  - least recently used item will be stored in the head of list
- use hash map to save link key -> { value, node }
  - put action
    - update node
    - update map value
  - get action
    - update node
    - return map value

## [150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/description)

[Solution](./150-polish-notation/150-polish-notation.js)

### Topics

> stack

### Notes

- if number push to stack
- if operator
  - get right operand from top of stack
  - get left operand from top of stack
  - calculate operation
    - pay attention to division: truncate the result
  - push result to the stack

## [155. Min Stack](https://leetcode.com/problems/min-stack/description)

[Solution](./155-min-stack/155-min-stack.js)

### Topics

> stack

### Notes

- create stacks
  - for values
  - for min values on each push action moment
- push
  - add `value` to the values stack
  - add `Math.min(value, current_step_min)` to the mins stack
- pop
  - remove top value from values stack
  - remove top value from mins stack
    - note that min value for previous push action now on the top of the stack

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

## [173. Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/description)

[Solution](./173-tree-iterator/173-tree-iterator.js)

### Topics

> binary-tree

> inorder-traversal

### Notes

- push all left nodes to the stack
- pop one node
- repeat for node.right

## [189. Rotate Array](https://leetcode.com/problems/rotate-array/description)

[Solution](./189-rotate-array/189-rotate-array.js)

### Topics

> two-pointers

### Notes

- one pointer at current index
- second at next position
- apply for 1..k indexes to handle circles

## [199. BInary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/description)

[Solution](./199-tree-right-view/199-tree-right-view.js)

### Topics

> binary-tree

> linked-list

> double-linked-list

> BFS

### Notes

- use BFS
  - use double linked list to save every level of tree
    - shift count of nodes from start of the list
    - push children of each node to the end of the list

## [202. Happy Number](https://leetcode.com/problems/happy-number/description)

[Solution](./202-happy-number/202-happy-number.js)

### Topics

> hash-table

### Notes

- according to the description there is either loop either 1
- save every next sum into set and check if this value already been before

## [205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/description)

[Solution](./205-isomorphic/205-isomorphic.js)

### Topics

> hash-table

### Notes

- encode every char with new value for the first string
- repeat for the second string
- compare encoded values

## [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/description)

[Solution](./209-min-size-subarray/209-min-size-subarray.js)

### Topics

> sliding-window

> two-pointers

### Notes

- set two pointers to that start of array
  - `left = 0`
  - `right = 0`
- move right pointer until `sum <= target`
- when `sum > target`
  - update min window size
  - move left pointer until `sum < target`

## [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description)

[Solution](./219-contains-uplicate/219-contains-uplicate.js)

### Topics

> sliding-window

> hash-table

### Notes

- go through the array
  - check if value already in the map
  - check `i-j <=k ` condition
  - add value to the map

## [222. Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/description)

[Solution](./222-count-tree-nodes/222-count-tree-nodes.js)

### Topics

> binary-tree

> complete-binary-tree

> binary-search

### Notes

- find depth of left nodes
- find depth of right nodes
- compare
  - if `leftDepth === rightDepth`
    - subtree is full
    - nodes count of full tree = `2^(h) - 1`
  - otherwise
    - repeat for left node
    - repeat for right node

## [224. Basic Calculator](https://leetcode.com/problems/basic-calculator/description)

[Solution](./224-basic-calc/224-basic-calc.js)

### Topics

> stack

### Notes

- save current sign in stack on every `(` char
- pop sign from stack on every `)` char
- read numbers by digit
  - `value = value * 10 + digit`
- add to result current value multiplied by current sign on every `+` or `-` char
- update current sign on every `+` or `-`
  - `currentSign = (char === '+' ? 1 : -1) * sings.last`

## [228. Summary Ranges](https://leetcode.com/problems/summary-ranges/description)

[Solution](./228-ranges/228-ranges.js)

### Topics

> two-pointers

### Notes

- use two pointers
  - first one keep the start of range
  - second one goes one by one searching for range end
- to make it ease push Infinity to the array so you don't need to handle edge case on the end of the array

## [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/description)

[Solution](./230-kth-in-bst/230-kth-in-bst.js)

### Topics

> binary-tree

> DFS

> inorder-traversal

### Notes

- make note that in BST left_node < node and right_node >= node
- use inorder traversal that for BST gives nodes in non-decreasing order

## [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description)

[Solution](./238-product/238-product.js)

### Topics

> prefix

> suffix

### Notes

- calculate prefix product for every index
- calculate suffix product for every index
- map array multiplying prefix and suffix for every index

## [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/description)

[Solution](./242-valid-anagram/242-valid-anagram.js)

### Topics

> hash-table

### Notes

- check edge case
  - length of s should be equal to length of t
- create chars map for s string
- check if t has the same chars map

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

## [289. Game of Life](https://leetcode.com/problems/game-of-life/description)

[Solution](./289-game-of-life/289-game-of-life.js)

### Topics

> matrix

> in-place

### Notes

- to solve it in place use the same matrix with value encoding
  - 0 - was dead will dead
  - 1 - was alive will dead
  - 2 - was dead will alive
  - 3 - was alive will alive
- calculate encoded value for each cell
- udpate each cell according to the value

## [290. Word Pattern](https://leetcode.com/problems/word-pattern/description)

[Solution](./290-word-pattern/290-word-pattern.js)

### Topics

> hash-table

### Notes

- use map to save char used for word
- use set to save used chars
- if word not in the map but char already used return false

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

## [452. Min Number of Arrows](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description)

[Solution](./452-balloons/452-balloons.js)

### Topics

> intervals

### Notes

- sort intervals
- set min end equal to first interval end
- set arrows count to 1
- go through intervals
  - if next interval starts after min end
    - add arrow
    - update min end to next interval end
  - if next interval starts before min end
    - update min end `minEnd = min(minEnd, interval.end)`

## [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/description)

[Solution](./530-min-tree-dif/530-min-tree-dif.js)

### Topics

> binary-tree

> DFS

> inorder-traversal

### Notes

- make note that in BST left_node < node and right_node >= node
- make note that in sorted array it's enough to check difference between neighbours
  - e.g. [1, 2, 4, 7, 8]
  - it makes no sense to compare `1` with others other than the `2`
- use inorder traversal that for BST gives nodes in non-decreasing order

## [637. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/description)

[Solution](./637-average-of-levels/637-average-of-levels.js)

### Topics

> binary-tree

> linked-list

> double-linked-list

> BFS

### Notes

- use BFS
  - use double linked list to save every level of tree
    - shift count of nodes from start of the list
    - push children of each node to the end of the list

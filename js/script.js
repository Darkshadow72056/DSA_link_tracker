const initialLinks = [
    // Arrays
    { topic: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum/", title: "Two Sum", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", title: "Best Time to Buy and Sell Stock", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/plus-one/", title: "Plus One", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/move-zeroes/", title: "Move Zeroes", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", title: "Best Time to Buy and Sell Stock II", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/running-sum-of-1d-array/", title: "Running Sum of 1d Array", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/find-pivot-index/", title: "Find Pivot Index", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/majority-element/", title: "Majority Element", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/fibonacci-number/", title: "Fibonacci Number", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/squares-of-a-sorted-array/", title: "Squares of a Sorted Array", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/pascals-triangle/", title: "Pascal's Triangle", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", title: "Remove Duplicates from Sorted Array", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/merge-intervals/", title: "Merge Intervals", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/3sum/", title: "3Sum", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/product-of-array-except-self/", title: "Product of Array Except Self", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/insert-delete-getrandom-o1/", title: "Insert Delete GetRandom O(1)", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/subarray-sum-equals-k/", title: "Subarray Sum Equals K", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/next-permutation/", title: "Next Permutation", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/spiral-matrix/", title: "Spiral Matrix", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/container-with-most-water/", title: "Container With Most Water", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/rotate-image/", title: "Rotate Image", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/word-search/", title: "Word Search", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/3sum-closest/", title: "3Sum Closest", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/game-of-life/", title: "Game of Life", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/", title: "Pairs of Songs With Total Durations Divisible by 60", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/4sum/", title: "4Sum", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/find-the-duplicate-number/", title: "Find the Duplicate Number", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum/", title: "Combination Sum", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/jump-game-ii/", title: "Jump Game II", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/", title: "Maximum Points You Can Obtain from Cards", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/", title: "Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/max-area-of-island/", title: "Max Area of Island", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/", title: "Find All Duplicates in an Array", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/k-diff-pairs-in-an-array/", title: "K-diff Pairs in an Array", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/subsets/", title: "Subsets", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/invalid-transactions/", title: "Invalid Transactions", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/jump-game/", title: "Jump Game", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/subarray-sums-divisible-by-k/", title: "Subarray Sums Divisible by K", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Hard", url: "https://leetcode.com/problems/first-missing-positive/", title: "First Missing Positive", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Hard", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", title: "Largest Rectangle in Histogram", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Hard", url: "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/", title: "Insert Delete GetRandom O(1) - Duplicates allowed", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Hard", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/", title: "Best Time to Buy and Sell Stock III", status: "Not Complete" },
    { topic: "Arrays", difficulty: "Hard", url: "https://leetcode.com/problems/max-value-of-equation/", title: "Max Value of Equation", status: "Not Complete" },
    // Recursion
    { topic: "Recursion", difficulty: "", url: "", title: "What is recursion", status: "Not Complete" },
    { topic: "Recursion", difficulty: "", url: "", title: "How Recursion Works", status: "Not Complete" },
    { topic: "Recursion", difficulty: "", url: "", title: "What is a recursion tree", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Medium", url: "https://leetcode.com/problems/powx-n/", title: "Pow(x, n)", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Easy", url: "https://leetcode.com/problems/valid-palindrome/", title: "Valid Palindrome", status: "Not Complete" },
    { topic: "Recursion", difficulty: "", url: "", title: "General Steps to recursion problems", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Medium", url: "https://leetcode.com/problems/subsets/", title: "Subsets", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Medium", url: "https://leetcode.com/problems/permutations/", title: "Permutations", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Medium", url: "https://leetcode.com/problems/permutations-ii/", title: "Permutations II", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Medium", url: "https://leetcode.com/problems/subsets-ii/", title: "Subsets II", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Medium", url: "https://leetcode.com/problems/combinations/", title: "Combinations", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum/", title: "Combination Sum", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum-ii/", title: "Combination Sum II", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum-iii/", title: "Combination Sum III", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Medium", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", title: "Letter Combinations of a Phone Number", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Medium", url: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/", title: "Partition to K Equal Sum Subsets", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/", title: "Maximum Length of a Concatenated String with Unique Characters", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Easy", url: "https://leetcode.com/problems/flood-fill/", title: "Flood Fill", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Medium", url: "https://leetcode.com/problems/word-search/", title: "Word Search", status: "Not Complete" },
    { topic: "Recursion", difficulty: "", url: "", title: "Rat in a Maze", status: "Not Complete" },
    { topic: "Recursion", difficulty: "Hard", url: "https://leetcode.com/problems/n-queens/", title: "N-Queens", status: "Not Complete" },
    // Dynamic Programming
    { topic: "Dynamic Programming", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-subarray/", title: "Maximum Subarray", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Easy", url: "https://leetcode.com/problems/climbing-stairs/", title: "Climbing Stairs", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Easy", url: "https://leetcode.com/problems/divisor-game/", title: "Divisor Game", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Easy", url: "https://leetcode.com/problems/counting-bits/", title: "Counting Bits", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/decode-ways/", title: "Decode Ways", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/word-break/", title: "Word Break", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/delete-and-earn/", title: "Delete and Earn", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/maximal-square/", title: "Maximal Square", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change/", title: "Coin Change", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-product-subarray/", title: "Maximum Product Subarray", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-length-of-repeated-subarray/", title: "Maximum Length of Repeated Subarray", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/palindromic-substrings/", title: "Palindromic Substrings", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber/", title: "House Robber", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/continuous-subarray-sum/", title: "Continuous Subarray Sum", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/knight-dialer/", title: "Knight Dialer", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/longest-increasing-subsequence/", title: "Longest Increasing Subsequence", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/unique-paths/", title: "Unique Paths", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/count-square-submatrices-with-all-ones/", title: "Count Square Submatrices with All Ones", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/range-sum-query-2d-immutable/", title: "Range Sum Query 2D - Immutable", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Medium", url: "https://leetcode.com/problems/longest-arithmetic-subsequence/", title: "Longest Arithmetic Subsequence", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/trapping-rain-water/", title: "Trapping Rain Water", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/word-break-ii/", title: "Word Break II", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/regular-expression-matching/", title: "Regular Expression Matching", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/maximal-rectangle/", title: "Maximal Rectangle", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/longest-valid-parentheses/", title: "Longest Valid Parentheses", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/edit-distance/", title: "Edit Distance", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/", title: "Minimum Difficulty of a Job Schedule", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/frog-jump/", title: "Frog Jump", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", title: "Best Time to Buy and Sell Stock IV", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/burst-balloons/", title: "Burst Balloons", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-cost-to-merge-stones/", title: "Minimum Cost to Merge Stones", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/", title: "Minimum Insertion Steps to Make a String Palindrome", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/super-egg-drop/", title: "Super Egg Drop", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/count-different-palindromic-subsequences/", title: "Count Different Palindromic Subsequences", status: "Not Complete" },
    { topic: "Dynamic Programming", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/", title: "Minimum Cost to Cut a Stick", status: "Not Complete" },
    // Strings
    { topic: "Strings", difficulty: "Easy", url: "https://leetcode.com/problems/add-strings/", title: "Add Strings", status: "Not Complete" },
    { topic: "Strings", difficulty: "Easy", url: "https://leetcode.com/problems/longest-common-prefix/", title: "Longest Common Prefix", status: "Not Complete" },
    { topic: "Strings", difficulty: "Easy", url: "https://leetcode.com/problems/valid-palindrome-ii/", title: "Valid Palindrome II", status: "Not Complete" },
    { topic: "Strings", difficulty: "Easy", url: "https://leetcode.com/problems/roman-to-integer/", title: "Roman to Integer", status: "Not Complete" },
    { topic: "Strings", difficulty: "Easy", url: "https://leetcode.com/problems/implement-strstr/", title: "Implement strStr()", status: "Not Complete" },
    { topic: "Strings", difficulty: "Medium", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", title: "Longest Substring Without Repeating Characters", status: "Not Complete" },
    { topic: "Strings", difficulty: "Medium", url: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/", title: "Minimum Remove to Make Valid Parentheses", status: "Not Complete" },
    { topic: "Strings", difficulty: "Medium", url: "https://leetcode.com/problems/longest-palindromic-substring/", title: "Longest Palindromic Substring", status: "Not Complete" },
    { topic: "Strings", difficulty: "Medium", url: "https://leetcode.com/problems/group-anagrams/", title: "Group Anagrams", status: "Not Complete" },
    { topic: "Strings", difficulty: "Medium", url: "https://leetcode.com/problems/generate-parentheses/", title: "Generate Parentheses", status: "Not Complete" },
    { topic: "Strings", difficulty: "Medium", url: "https://leetcode.com/problems/basic-calculator-ii/", title: "Basic Calculator II", status: "Not Complete" },
    { topic: "Strings", difficulty: "Medium", url: "https://leetcode.com/problems/integer-to-roman/", title: "Integer to Roman", status: "Not Complete" },
    { topic: "Strings", difficulty: "Medium", url: "https://leetcode.com/problems/reverse-words-in-a-string/", title: "Reverse Words in a String", status: "Not Complete" },
    { topic: "Strings", difficulty: "Medium", url: "https://leetcode.com/problems/simplify-path/", title: "Simplify Path", status: "Not Complete" },
    { topic: "Strings", difficulty: "Medium", url: "https://leetcode.com/problems/zigzag-conversion/", title: "Zigzag Conversion", status: "Not Complete" },
    { topic: "Strings", difficulty: "Hard", url: "https://leetcode.com/problems/text-justification/", title: "Text Justification", status: "Not Complete" },
    { topic: "Strings", difficulty: "Hard", url: "https://leetcode.com/problems/integer-to-english-words/", title: "Integer to English Words", status: "Not Complete" },
    { topic: "Strings", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-window-substring/", title: "Minimum Window Substring", status: "Not Complete" },
    { topic: "Strings", difficulty: "Hard", url: "https://leetcode.com/problems/valid-number/", title: "Valid Number", status: "Not Complete" },
    { topic: "Strings", difficulty: "Hard", url: "https://leetcode.com/problems/distinct-subsequences/", title: "Distinct Subsequences", status: "Not Complete" },
    { topic: "Strings", difficulty: "Hard", url: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/", title: "Smallest Range Covering Elements from K Lists", status: "Not Complete" },
    { topic: "Strings", difficulty: "Hard", url: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/", title: "Substring with Concatenation of All Words", status: "Not Complete" },
    // Maths
    { topic: "Maths", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-integer/", title: "Reverse Integer", status: "Not Complete" },
    { topic: "Maths", difficulty: "Easy", url: "https://leetcode.com/problems/add-binary/", title: "Add Binary", status: "Not Complete" },
    { topic: "Maths", difficulty: "Easy", url: "https://leetcode.com/problems/palindrome-number/", title: "Palindrome Number", status: "Not Complete" },
    { topic: "Maths", difficulty: "Easy", url: "https://leetcode.com/problems/minimum-moves-to-equal-array-elements/", title: "Minimum Moves to Equal Array Elements", status: "Not Complete" },
    { topic: "Maths", difficulty: "Easy", url: "https://leetcode.com/problems/happy-number/", title: "Happy Number", status: "Not Complete" },
    { topic: "Maths", difficulty: "Easy", url: "https://leetcode.com/problems/excel-sheet-column-title/", title: "Excel Sheet Column Title", status: "Not Complete" },
    { topic: "Maths", difficulty: "Easy", url: "https://leetcode.com/problems/missing-number/", title: "Missing Number", status: "Not Complete" },
    { topic: "Maths", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-product-of-three-numbers/", title: "Maximum Product of Three Numbers", status: "Not Complete" },
    { topic: "Maths", difficulty: "Easy", url: "https://leetcode.com/problems/power-of-two/", title: "Power of Two", status: "Not Complete" },
    { topic: "Maths", difficulty: "Medium", url: "https://leetcode.com/problems/encode-and-decode-tinyurl/", title: "Encode and Decode TinyURL", status: "Not Complete" },
    { topic: "Maths", difficulty: "Medium", url: "https://leetcode.com/problems/string-to-integer-atoi/", title: "String to Integer (atoi)", status: "Not Complete" },
    { topic: "Maths", difficulty: "Medium", url: "https://leetcode.com/problems/multiply-strings/", title: "Multiply Strings", status: "Not Complete" },
    { topic: "Maths", difficulty: "Medium", url: "https://leetcode.com/problems/angle-between-hands-of-a-clock/", title: "Angle Between Hands of a Clock", status: "Not Complete" },
    { topic: "Maths", difficulty: "Medium", url: "https://leetcode.com/problems/integer-break/", title: "Integer Break", status: "Not Complete" },
    { topic: "Maths", difficulty: "Medium", url: "https://leetcode.com/problems/valid-square/", title: "Valid Square", status: "Not Complete" },
    { topic: "Maths", difficulty: "Medium", url: "https://leetcode.com/problems/the-kth-factor-of-n/", title: "The kth Factor of n", status: "Not Complete" },
    { topic: "Maths", difficulty: "Hard", url: "https://leetcode.com/problems/basic-calculator/", title: "Basic Calculator", status: "Not Complete" },
    { topic: "Maths", difficulty: "Hard", url: "https://leetcode.com/problems/max-points-on-a-line/", title: "Max Points on a Line", status: "Not Complete" },
    { topic: "Maths", difficulty: "Hard", url: "https://leetcode.com/problems/permutation-sequence/", title: "Permutation Sequence", status: "Not Complete" },
    { topic: "Maths", difficulty: "Hard", url: "https://leetcode.com/problems/number-of-digit-one/", title: "Number of Digit One", status: "Not Complete" },
    // Greedy
    { topic: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/task-scheduler/", title: "Task Scheduler", status: "Not Complete" },
    { topic: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/gas-station/", title: "Gas Station", status: "Not Complete" },
    { topic: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/minimum-deletion-cost-to-avoid-repeating-letters/", title: "Minimum Deletion Cost to Avoid Repeating Letters", status: "Not Complete" },
    { topic: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/", title: "Maximum Number of Events That Can Be Attended", status: "Not Complete" },
    { topic: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/", title: "Minimum Deletions to Make Character Frequencies Unique", status: "Not Complete" },
    { topic: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/remove-k-digits/", title: "Remove K Digits", status: "Not Complete" },
    { topic: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/", title: "Restore The Array From Adjacent Pairs", status: "Not Complete" },
    { topic: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/non-overlapping-intervals/", title: "Non-overlapping Intervals", status: "Not Complete" },
    { topic: "Greedy", difficulty: "Hard", url: "https://leetcode.com/problems/candy/", title: "Candy", status: "Not Complete" },
    { topic: "Greedy", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/", title: "Minimum Number of Taps to Open to Water a Garden", status: "Not Complete" },
    { topic: "Greedy", difficulty: "Hard", url: "https://leetcode.com/problems/create-maximum-number/", title: "Create Maximum Number", status: "Not Complete" },
    // DFS
    { topic: "DFS", difficulty: "Medium", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", title: "Letter Combinations of a Phone Number", status: "Not Complete" },
    { topic: "DFS", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule-ii/", title: "Course Schedule II", status: "Not Complete" },
    { topic: "DFS", difficulty: "Medium", url: "https://leetcode.com/problems/decode-string/", title: "Decode String", status: "Not Complete" },
    { topic: "DFS", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-provinces/", title: "Number of Provinces", status: "Not Complete" },
    { topic: "DFS", difficulty: "Medium", url: "https://leetcode.com/problems/clone-graph/", title: "Clone Graph", status: "Not Complete" },
    { topic: "DFS", difficulty: "Medium", url: "https://leetcode.com/problems/shortest-bridge/", title: "Shortest Bridge", status: "Not Complete" },
    { topic: "DFS", difficulty: "Medium", url: "https://leetcode.com/problems/all-paths-from-source-to-target/", title: "All Paths From Source to Target", status: "Not Complete" },
    { topic: "DFS", difficulty: "Medium", url: "https://leetcode.com/problems/surrounded-regions/", title: "Surrounded Regions", status: "Not Complete" },
    { topic: "DFS", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber-iii/", title: "House Robber III", status: "Not Complete" },
    { topic: "DFS", difficulty: "Hard", url: "https://leetcode.com/problems/critical-connections-in-a-network/", title: "Critical Connections in a Network", status: "Not Complete" },
    { topic: "DFS", difficulty: "Hard", url: "https://leetcode.com/problems/remove-invalid-parentheses/", title: "Remove Invalid Parentheses", status: "Not Complete" },
    { topic: "DFS", difficulty: "Hard", url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/", title: "Longest Increasing Path in a Matrix", status: "Not Complete" },
    { topic: "DFS", difficulty: "Hard", url: "https://leetcode.com/problems/concatenated-words/", title: "Concatenated Words", status: "Not Complete" },
    { topic: "DFS", difficulty: "Hard", url: "https://leetcode.com/problems/making-a-large-island/", title: "Making A Large Island", status: "Not Complete" },
    { topic: "DFS", difficulty: "Hard", url: "https://leetcode.com/problems/contain-virus/", title: "Contain Virus", status: "Not Complete" },
    { topic: "DFS", difficulty: "Hard", url: "https://leetcode.com/problems/24-game/", title: "24 Game", status: "Not Complete" },
    { topic: "DFS", difficulty: "Hard", url: "https://leetcode.com/problems/remove-boxes/", title: "Remove Boxes", status: "Not Complete" },
    // Tree
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/diameter-of-binary-tree/", title: "Diameter of Binary Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/invert-binary-tree/", title: "Invert Binary Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/subtree-of-another-tree/", title: "Subtree of Another Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/range-sum-of-bst/", title: "Range Sum of BST", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/symmetric-tree/", title: "Symmetric Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", title: "Convert Sorted Array to Binary Search Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/merge-two-binary-trees/", title: "Merge Two Binary Trees", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", title: "Maximum Depth of Binary Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/binary-tree-paths/", title: "Binary Tree Paths", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/same-tree/", title: "Same Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", title: "Lowest Common Ancestor of a Binary Search Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/path-sum/", title: "Path Sum", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/minimum-absolute-difference-in-bst/", title: "Minimum Absolute Difference in BST", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/sum-of-left-leaves/", title: "Sum of Left Leaves", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/balanced-binary-tree/", title: "Balanced Binary Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Easy", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/", title: "Binary Tree Inorder Traversal", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/", title: "Count Good Nodes in Binary Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", title: "Lowest Common Ancestor of a Binary Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-right-side-view/", title: "Binary Tree Right Side View", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/", title: "All Nodes Distance K in Binary Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/validate-binary-search-tree/", title: "Validate Binary Search Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", title: "Binary Tree Zigzag Level Order Traversal", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/binary-search-tree-iterator/", title: "Binary Search Tree Iterator", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", title: "Binary Tree Level Order Traversal", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/path-sum-iii/", title: "Path Sum III", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/", title: "Construct Binary Tree from Preorder and Postorder Traversal", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/unique-binary-search-trees/", title: "Unique Binary Search Trees", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/recover-binary-search-tree/", title: "Recover Binary Search Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/", title: "Populating Next Right Pointers in Each Node", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", title: "Flatten Binary Tree to Linked List", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-width-of-binary-tree/", title: "Maximum Width of Binary Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/unique-binary-search-trees-ii/", title: "Unique Binary Search Trees II", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", title: "Kth Smallest Element in a BST", status: "Not Complete" },
    { topic: "Tree", difficulty: "Medium", url: "https://leetcode.com/problems/redundant-connection/", title: "Redundant Connection", status: "Not Complete" },
    { topic: "Tree", difficulty: "Hard", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", title: "Serialize and Deserialize Binary Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Hard", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", title: "Binary Tree Maximum Path Sum", status: "Not Complete" },
    { topic: "Tree", difficulty: "Hard", url: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", title: "Vertical Order Traversal of a Binary Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Hard", url: "https://leetcode.com/problems/binary-tree-cameras/", title: "Binary Tree Cameras", status: "Not Complete" },
    { topic: "Tree", difficulty: "Hard", url: "https://leetcode.com/problems/sum-of-distances-in-tree/", title: "Sum of Distances in Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Hard", url: "https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/", title: "Number of Ways to Reconstruct a Tree", status: "Not Complete" },
    { topic: "Tree", difficulty: "Hard", url: "https://leetcode.com/problems/redundant-connection-ii/", title: "Redundant Connection II", status: "Not Complete" },
    // Hash Table
    { topic: "Hash Table", difficulty: "Easy", url: "https://leetcode.com/problems/verifying-an-alien-dictionary/", title: "Verifying an Alien Dictionary", status: "Not Complete" },
    { topic: "Hash Table", difficulty: "Easy", url: "https://leetcode.com/problems/design-hashmap/", title: "Design HashMap", status: "Not Complete" },
    { topic: "Hash Table", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/", title: "Top K Frequent Elements", status: "Not Complete" },
    { topic: "Hash Table", difficulty: "Medium", url: "https://leetcode.com/problems/design-twitter/", title: "Design Twitter", status: "Not Complete" },
    // Binary Search
    { topic: "Binary Search", difficulty: "Easy", url: "https://leetcode.com/problems/sqrtx/", title: "Sqrt(x)", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Easy", url: "https://leetcode.com/problems/binary-search/", title: "Binary Search", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Easy", url: "https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/", title: "Count Negative Numbers in a Sorted Matrix", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Easy", url: "https://leetcode.com/problems/peak-index-in-a-mountain-array/", title: "Peak Index in a Mountain Array", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/time-based-key-value-store/", title: "Time Based Key-Value Store", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", title: "Search in Rotated Sorted Array", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/powx-n/", title: "Pow(x, n)", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", title: "Find First and Last Position of Element in Sorted Array", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/find-peak-element/", title: "Find Peak Element", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/search-a-2d-matrix/", title: "Search a 2D Matrix", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/divide-two-integers/", title: "Divide Two Integers", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", title: "Capacity To Ship Packages Within D Days", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/", title: "Minimum Limit of Balls in a Bag", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Hard", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", title: "Median of Two Sorted Arrays", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Hard", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", title: "Count of Smaller Numbers After Self", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Hard", url: "https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/", title: "Max Sum of Rectangle No Larger Than K", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Hard", url: "https://leetcode.com/problems/split-array-largest-sum/", title: "Split Array Largest Sum", status: "Not Complete" },
    { topic: "Binary Search", difficulty: "Hard", url: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/", title: "Shortest Subarray with Sum at Least K", status: "Not Complete" },
    // BFS
    { topic: "BFS", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/", title: "Number of Islands", status: "Not Complete" },
    { topic: "BFS", difficulty: "Medium", url: "https://leetcode.com/problems/rotting-oranges/", title: "Rotting Oranges", status: "Not Complete" },
    { topic: "BFS", difficulty: "Medium", url: "https://leetcode.com/problems/snakes-and-ladders/", title: "Snakes and Ladders", status: "Not Complete" },
    { topic: "BFS", difficulty: "Medium", url: "https://leetcode.com/problems/is-graph-bipartite/", title: "Is Graph Bipartite", status: "Not Complete" },
    { topic: "BFS", difficulty: "Medium", url: "https://leetcode.com/problems/minimum-jumps-to-reach-home/", title: "Minimum Jumps to Reach Home", status: "Not Complete" },
    { topic: "BFS", difficulty: "Hard", url: "https://leetcode.com/problems/word-ladder/", title: "Word Ladder", status: "Not Complete" },
    { topic: "BFS", difficulty: "Hard", url: "https://leetcode.com/problems/word-ladder-ii/", title: "Word Ladder II", status: "Not Complete" },
    { topic: "BFS", difficulty: "Hard", url: "https://leetcode.com/problems/cut-off-trees-for-golf-event/", title: "Cut Off Trees for Golf Event", status: "Not Complete" },
    { topic: "BFS", difficulty: "Hard", url: "https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/", title: "Reachable Nodes In Subdivided Graph", status: "Not Complete" },
    // Two Pointers
    { topic: "Two Pointers", difficulty: "Medium", url: "https://leetcode.com/problems/partition-labels/", title: "Partition Labels", status: "Not Complete" },
    { topic: "Two Pointers", difficulty: "Medium", url: "https://leetcode.com/problems/sort-colors/", title: "Sort Colors", status: "Not Complete" },
    { topic: "Two Pointers", difficulty: "Medium", url: "https://leetcode.com/problems/longest-repeating-character-replacement/", title: "Longest Repeating Character Replacement", status: "Not Complete" },
    { topic: "Two Pointers", difficulty: "Hard", url: "https://leetcode.com/problems/maximum-number-of-visible-points/", title: "Maximum Number of Visible Points", status: "Not Complete" },
    { topic: "Two Pointers", difficulty: "Hard", url: "https://leetcode.com/problems/subarrays-with-k-different-integers/", title: "Subarrays with K Different Integers", status: "Not Complete" },
    // Stack
    { topic: "Stack", difficulty: "Easy", url: "https://leetcode.com/problems/min-stack/", title: "Min Stack", status: "Not Complete" },
    { topic: "Stack", difficulty: "Easy", url: "https://leetcode.com/problems/next-greater-element-i/", title: "Next Greater Element I", status: "Not Complete" },
    { topic: "Stack", difficulty: "Easy", url: "https://leetcode.com/problems/backspace-string-compare/", title: "Backspace String Compare", status: "Not Complete" },
    { topic: "Stack", difficulty: "Easy", url: "https://leetcode.com/problems/implement-queue-using-stacks/", title: "Implement Queue using Stacks", status: "Not Complete" },
    { topic: "Stack", difficulty: "Easy", url: "https://leetcode.com/problems/implement-stack-using-queues/", title: "Implement Stack using Queues", status: "Not Complete" },
    { topic: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/", title: "Remove All Adjacent Duplicates in String II", status: "Not Complete" },
    { topic: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/daily-temperatures/", title: "Daily Temperatures", status: "Not Complete" },
    { topic: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/flatten-nested-list-iterator/", title: "Flatten Nested List Iterator", status: "Not Complete" },
    { topic: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/online-stock-span/", title: "Online Stock Span", status: "Not Complete" },
    { topic: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/", title: "Minimum Cost Tree From Leaf Values", status: "Not Complete" },
    { topic: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/sum-of-subarray-minimums/", title: "Sum of Subarray Minimums", status: "Not Complete" },
    { topic: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", title: "Evaluate Reverse Polish Notation", status: "Not Complete" },
    // Design
    { topic: "Design", difficulty: "Medium", url: "https://leetcode.com/problems/lru-cache/", title: "LRU Cache", status: "Not Complete" },
    { topic: "Design", difficulty: "Hard", url: "https://leetcode.com/problems/find-median-from-data-stream/", title: "Find Median from Data Stream", status: "Not Complete" },
    { topic: "Design", difficulty: "Medium", url: "https://leetcode.com/problems/design-underground-system/", title: "Design Underground System", status: "Not Complete" },
    { topic: "Design", difficulty: "Hard", url: "https://leetcode.com/problems/lfu-cache/", title: "LFU Cache", status: "Not Complete" },
    { topic: "Design", difficulty: "Medium", url: "https://leetcode.com/problems/tweet-counts-per-frequency/", title: "Tweet Counts Per Frequency", status: "Not Complete" },
    { topic: "Design", difficulty: "Hard", url: "https://leetcode.com/problems/all-oone-data-structure/", title: "All O`one Data Structure", status: "Not Complete" },
    { topic: "Design", difficulty: "Medium", url: "https://leetcode.com/problems/design-browser-history/", title: "Design Browser History", status: "Not Complete" },
    // Graph
    { topic: "Graph", difficulty: "Easy", url: "https://leetcode.com/problems/employee-importance/", title: "Employee Importance", status: "Not Complete" },
    { topic: "Graph", difficulty: "Easy", url: "https://leetcode.com/problems/find-the-town-judge/", title: "Find the Town Judge", status: "Not Complete" },
    { topic: "Graph", difficulty: "Medium", url: "https://leetcode.com/problems/evaluate-division/", title: "Evaluate Division", status: "Not Complete" },
    { topic: "Graph", difficulty: "Medium", url: "https://leetcode.com/problems/accounts-merge/", title: "Accounts Merge", status: "Not Complete" },
    { topic: "Graph", difficulty: "Medium", url: "https://leetcode.com/problems/network-delay-time/", title: "Network Delay Time", status: "Not Complete" },
    { topic: "Graph", difficulty: "Medium", url: "https://leetcode.com/problems/find-eventual-safe-states/", title: "Find Eventual Safe States", status: "Not Complete" },
    { topic: "Graph", difficulty: "Medium", url: "https://leetcode.com/problems/keys-and-rooms/", title: "Keys and Rooms", status: "Not Complete" },
    { topic: "Graph", difficulty: "Medium", url: "https://leetcode.com/problems/possible-bipartition/", title: "Possible Bipartition", status: "Not Complete" },
    { topic: "Graph", difficulty: "Medium", url: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/", title: "Most Stones Removed with Same Row or Column", status: "Not Complete" },
    { topic: "Graph", difficulty: "Medium", url: "https://leetcode.com/problems/regions-cut-by-slashes/", title: "Regions Cut By Slashes", status: "Not Complete" },
    { topic: "Graph", difficulty: "Medium", url: "https://leetcode.com/problems/satisfiability-of-equality-equations/", title: "Satisfiability of Equality Equations", status: "Not Complete" },
    { topic: "Graph", difficulty: "Medium", url: "https://leetcode.com/problems/as-far-from-land-as-possible/", title: "As Far From Land As Possible", status: "Not Complete" },
    { topic: "Graph", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-closed-islands/", title: "Number of Closed Islands", status: "Not Complete" },
    { topic: "Graph", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/", title: "Number of Operations to Make Network Connected", status: "Not Complete" },
    { topic: "Graph", difficulty: "Medium", url: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/", title: "Find City With Smallest Number of Neighbors at Threshold Distance", status: "Not Complete" },
    { topic: "Graph", difficulty: "Medium", url: "https://leetcode.com/problems/time-needed-to-inform-all-employees/", title: "Time Needed to Inform All Employees", status: "Not Complete" },
    // Bit Manipulation
    { topic: "Bit Manipulation", difficulty: "", url: "https://leetcode.com/problems/sum-of-two-integers/discuss/84278/A-summary%3A-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently", title: "Bit Manipulation Summary", status: "Not Complete" },
    // Linked List
    { topic: "Linked List", difficulty: "", url: "", title: "Uses of Linked List (Real Life)", status: "Not Complete" },
    { topic: "Linked List", difficulty: "", url: "", title: "Representation of Linked List", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/delete-node-in-a-linked-list/", title: "Delete Node in a Linked List", status: "Not Complete" },
    { topic: "Linked List", difficulty: "", url: "", title: "Arrays vs Linked List", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/middle-of-the-linked-list/", title: "Middle of the Linked List", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/", title: "Convert Binary Number in a Linked List to Integer", status: "Not Complete" },
    { topic: "Linked List", difficulty: "", url: "", title: "Doubly Linked List and STLs", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/design-hashset/", title: "Design HashSet", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/design-hashmap/", title: "Design HashMap", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-linked-list/", title: "Reverse Linked List", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Hard", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/", title: "Reverse Nodes in k-Group", status: "Not Complete" },
    { topic: "Linked List", difficulty: "", url: "", title: "Reverse Nodes in k-Group (No Extra Space)", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/merge-two-sorted-lists/", title: "Merge Two Sorted Lists", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Hard", url: "https://leetcode.com/problems/merge-k-sorted-lists/", title: "Merge k Sorted Lists", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/", title: "Remove Duplicates from Sorted List", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/linked-list-cycle/", title: "Linked List Cycle", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/linked-list-cycle-ii/", title: "Linked List Cycle II", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/intersection-of-two-linked-lists/", title: "Intersection of Two Linked Lists", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/palindrome-linked-list/", title: "Palindrome Linked List", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/remove-linked-list-elements/", title: "Remove Linked List Elements", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/design-browser-history/", title: "Design Browser History", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/lru-cache/", title: "LRU Cache", status: "Not Complete" },
    { topic: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", title: "Copy List with Random Pointer", status: "Not Complete" },
    { topic: "Linked List", difficulty: "", url: "", title: "Copy List with Random Pointer (No Extra Space)", status: "Not Complete" },
    // Heap
    { topic: "Heap", difficulty: "Medium", url: "https://leetcode.com/problems/k-closest-points-to-origin/", title: "K Closest Points to Origin", status: "Not Complete" },
    { topic: "Heap", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", title: "Kth Largest Element in an Array", status: "Not Complete" },
    { topic: "Heap", difficulty: "Medium", url: "https://leetcode.com/problems/reorganize-string/", title: "Reorganize String", status: "Not Complete" },
    { topic: "Heap", difficulty: "Medium", url: "https://leetcode.com/problems/furthest-building-you-can-reach/", title: "Furthest Building You Can Reach", status: "Not Complete" },
    { topic: "Heap", difficulty: "Medium", url: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/", title: "Kth Smallest Element in a Sorted Matrix", status: "Not Complete" },
    { topic: "Heap", difficulty: "Medium", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", title: "Cheapest Flights Within K Stops", status: "Not Complete" },
    { topic: "Heap", difficulty: "Medium", url: "https://leetcode.com/problems/find-the-most-competitive-subsequence/", title: "Find the Most Competitive Subsequence", status: "Not Complete" },
    { topic: "Heap", difficulty: "Medium", url: "https://leetcode.com/problems/ugly-number-ii/", title: "Ugly Number II", status: "Not Complete" },
    { topic: "Heap", difficulty: "Hard", url: "https://leetcode.com/problems/merge-k-sorted-lists/", title: "Merge k Sorted Lists", status: "Not Complete" },
    { topic: "Heap", difficulty: "Hard", url: "https://leetcode.com/problems/sliding-window-maximum/", title: "Sliding Window Maximum", status: "Not Complete" },
    { topic: "Heap", difficulty: "Hard", url: "https://leetcode.com/problems/the-skyline-problem/", title: "The Skyline Problem", status: "Not Complete" },
    { topic: "Heap", difficulty: "Hard", url: "https://leetcode.com/problems/trapping-rain-water-ii/", title: "Trapping Rain Water II", status: "Not Complete" },
    { topic: "Heap", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-number-of-refueling-stops/", title: "Minimum Number of Refueling Stops", status: "Not Complete" },
    { topic: "Heap", difficulty: "Hard", url: "https://leetcode.com/problems/swim-in-rising-water/", title: "Swim in Rising Water", status: "Not Complete" },
    { topic: "Heap", difficulty: "Hard", url: "https://leetcode.com/problems/shortest-path-to-get-all-keys/", title: "Shortest Path to Get All Keys", status: "Not Complete" },
    { topic: "Heap", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/", title: "Minimum Cost to Hire K Workers", status: "Not Complete" },
    { topic: "Heap", difficulty: "Hard", url: "https://leetcode.com/problems/k-th-smallest-prime-fraction/", title: "K-th Smallest Prime Fraction", status: "Not Complete" },
    // Sliding Window
    { topic: "Sliding Window", difficulty: "Hard", url: "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/", title: "Longest Substring with At Least K Repeating Characters", status: "Not Complete" },
    { topic: "Sliding Window", difficulty: "Medium", url: "https://leetcode.com/problems/max-consecutive-ones-iii/", title: "Max Consecutive Ones III", status: "Not Complete" },
    { topic: "Sliding Window", difficulty: "Medium", url: "https://leetcode.com/problems/grumpy-bookstore-owner/", title: "Grumpy Bookstore Owner", status: "Not Complete" },
    { topic: "Sliding Window", difficulty: "Hard", url: "https://leetcode.com/problems/sliding-window-median/", title: "Sliding Window Median", status: "Not Complete" },
    // Trie
    { topic: "Trie", difficulty: "", url: "https://leetcode.com/explore/learn/card/trie/", title: "Trie Tutorial", status: "Not Complete" },
    // Segment Tree
    { topic: "Segment Tree", difficulty: "", url: "https://leetcode.com/articles/a-recursive-approach-to-segment-trees-range-sum-queries-lazy-propagation/", title: "Segment Tree Tutorial", status: "Not Complete" }
];

let links = [];
let notificationIntervalId = null;

function saveLinks() {
    localStorage.setItem('links', JSON.stringify(links));
}

function saveTimerSettings() {
    const intervalValue = document.getElementById('notificationInterval').value;
    const intervalUnit = document.getElementById('intervalUnit').value;
    localStorage.setItem('timerSettings', JSON.stringify({ intervalValue, intervalUnit }));
}

function loadTimerSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('timerSettings'));
    if (savedSettings) {
        document.getElementById('notificationInterval').value = savedSettings.intervalValue;
        document.getElementById('intervalUnit').value = savedSettings.intervalUnit;
        setNotificationTimer();
    }
}

function extractProblemName(url) {
    if (!url) return '';
    const match = url.match(/\/([^/]+)\/?$/);
    if (!match) return url;
    const slug = match[1];
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function renderTable() {
    const tableBody = document.getElementById('linkTableBody');
    tableBody.innerHTML = '';
    let completeCount = 0;
    let notCompleteCount = 0;
    let currentTopic = '';
    let currentDifficulty = '';

    links.forEach((link, index) => {
        if (link.topic !== currentTopic) {
            currentTopic = link.topic;
            currentDifficulty = '';
            const topicRow = document.createElement('tr');
            topicRow.className = 'topic-header';
            topicRow.innerHTML = `<td colspan="5">${link.topic}</td>`;
            tableBody.appendChild(topicRow);
        }

        if (link.difficulty !== currentDifficulty && link.difficulty) {
            currentDifficulty = link.difficulty;
            const difficultyRow = document.createElement('tr');
            difficultyRow.className = 'difficulty-header';
            difficultyRow.innerHTML = `<td></td><td colspan="4">${currentDifficulty}</td>`;
            tableBody.appendChild(difficultyRow);
        }

        const row = document.createElement('tr');
        const actionText = link.status === 'Complete' ? 'Mark Not Complete' : 'Mark Complete';
        const displayTitle = link.url ? extractProblemName(link.url) : link.title;
        row.innerHTML = `
            <td></td>
            <td data-label="Difficulty">${link.difficulty || ''}</td>
            <td data-label="Link"><a href="${link.url || '#'}" target="_blank" title="${link.url || ''}">${displayTitle}</a></td>
            <td data-label="Status" data-status="${link.status}">${link.status}</td>
            <td data-label="Action"><span class="toggle-status" data-index="${index}">${actionText}</span></td>
        `;
        tableBody.appendChild(row);

        if (link.status === 'Complete') {
            completeCount++;
        } else {
            notCompleteCount++;
        }
    });

    document.getElementById('completeCount').textContent = completeCount;
    document.getElementById('notCompleteCount').textContent = notCompleteCount;
}

function showNotification(message) {
    if (Notification.permission === 'granted') {
        new Notification('LeetCode Tracker Reminder', { body: message });
    } else {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000);
    }
}

function sendNotification() {
    const firstIncomplete = links.find(link => link.status === 'Not Complete');
    if (firstIncomplete) {
        const displayTitle = firstIncomplete.url ? extractProblemName(firstIncomplete.url) : firstIncomplete.title;
        showNotification(`Reminder: Complete ${displayTitle} (${firstIncomplete.url || 'N/A'})`);
    }
}

function requestNotificationPermission() {
    if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                showNotification('Notifications enabled!');
            }
        });
    }
}

function setNotificationTimer() {
    if (notificationIntervalId) {
        clearInterval(notificationIntervalId);
    }

    const intervalValue = parseInt(document.getElementById('notificationInterval').value);
    const intervalUnit = document.getElementById('intervalUnit').value;
    if (intervalValue <= 0 || isNaN(intervalValue)) {
        showNotification('Please enter a valid interval value.');
        return;
    }

    let intervalInMs;
    switch (intervalUnit) {
        case 'seconds':
            intervalInMs = intervalValue * 1000;
            break;
        case 'minutes':
            intervalInMs = intervalValue * 60 * 1000;
            break;
        case 'hours':
            intervalInMs = intervalValue * 3600 * 1000;
            break;
        default:
            intervalInMs = intervalValue * 60 * 1000; // Default to minutes
    }

    notificationIntervalId = setInterval(sendNotification, intervalInMs);
    saveTimerSettings();
    showNotification('Timer set successfully!');
}

function initializeLinks() {
    try {
        const savedLinksJSON = localStorage.getItem('links');
        if (savedLinksJSON) {
            const savedLinks = JSON.parse(savedLinksJSON);

            if (Array.isArray(savedLinks)) {
                // Validate each link has the required properties and correct types.
                const isValid = savedLinks.every(link =>
                    link && // Ensures link is not null or undefined
                    typeof link.topic === 'string' &&
                    typeof link.title === 'string' &&
                    typeof link.url === 'string' &&
                    typeof link.difficulty === 'string' &&
                    (link.status === 'Complete' || link.status === 'Not Complete')
                );

                if (isValid) {
                    links = savedLinks;
                    return; // Successfully loaded links, so we exit the function.
                } else {
                    console.warn('Invalid data structure in saved links. Falling back to initial data.');
                }
            } else {
                console.warn('Saved links data is not an array. Falling back to initial data.');
            }
        }
    } catch (error) {
        console.warn('Error loading or parsing links from localStorage. Falling back to initial data.', error);
    }

    // Fallback to initialLinks if savedLinks is invalid, missing, or corrupted
    console.log('Resetting to initialLinks');
    links = initialLinks.map(link => ({ ...link })); // Create a shallow copy
}

document.addEventListener('DOMContentLoaded', () => {
    initializeLinks();
    loadTimerSettings();
    renderTable();
    requestNotificationPermission();

    document.getElementById('setTimer').addEventListener('click', setNotificationTimer);

    document.getElementById('linkTableBody').addEventListener('click', (event) => {
        if (event.target.classList.contains('toggle-status')) {
            const index = parseInt(event.target.getAttribute('data-index'));
            if (!isNaN(index) && links[index]) {
                links[index].status = links[index].status === 'Complete' ? 'Not Complete' : 'Complete';
                saveLinks();
                renderTable();
            }
        }
    });
});
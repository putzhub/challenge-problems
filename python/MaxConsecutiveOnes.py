# https://leetcode.com/problems/max-consecutive-ones/

class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        ones = 0
        longest = 0

        for i in range(len(nums)):
            if nums[i] == 1:
                ones += 1
            else:
                longest = max(ones, longest)
                ones = 0
        
        longest = max(ones, longest)
        return longest
        

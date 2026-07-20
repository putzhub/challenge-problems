# https://leetcode.com/problems/two-sum/

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        #Remove impossible answers
        #nums: List[int] = [n for n in nums if n < target]

        for i, n in enumerate(nums):
            if target - n in nums[i+1:]:
                return [nums.index(n), nums.index(target - n, i+1)]

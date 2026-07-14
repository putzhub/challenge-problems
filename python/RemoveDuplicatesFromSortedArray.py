# https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0

        highest = -101
        l = 0

        # nums is a pointer
        for i in range(len(nums)):
            if nums[i] > highest:
                nums[l] = nums[i]
                l += 1
                highest = nums[i]
                continue
            nums[i] = None

        return l

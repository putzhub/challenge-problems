# https://leetcode.com/problems/balanced-binary-tree/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def dfs(node, depth=0):
            if not node:
                return 0
            
            left = dfs(node.left, depth+1)
            right = dfs(node.right, depth+1)
            if abs(left - right) > 1 or (left < 0 or right < 0):
                return -1

            return max(left, right) + 1

        return dfs(root) != -1

        
            

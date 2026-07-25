# https://leetcode.com/problems/longest-substring-without-repeating-characters/

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seen = {}
        longest = 0
        count = 0
        # Don't count left of this index
        limit = 0

        # When we see a character note its index
        for i in range(len(s)):
            c = s[i]
            count += 1
            # If an index has already been set, we've seen it
            if c not in seen:
                seen[c] = i
            else:
                # Avoid backtracking if an already seen letter has a greater index than the one we're overwriting
                limit = max(limit, seen[c])
                count = i - limit
                seen[c] = i
            
            # Count distance from last time it was seen
            longest = max(longest, count)

            #Cannot be unique anymore according to hint
            if i > 100:
                break
        
        # Whichever is highest distance is the length
        return longest

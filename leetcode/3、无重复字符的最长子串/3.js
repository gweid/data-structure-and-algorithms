var lengthOfLongestSubstring = function(s) {
  let max = 0 // 结果
  const map = new Map()
  let left = 0 // 左指针
  const len = s.length

  for (let right = 0; right < len; right++) {
    const char = s[right]
    const idx = map.get(char)
    // 如果有重复，那么左指针移到重复字符的下一位
    // 注意同时满足重复字符的索引大于左指针
    if (map.has(char) && idx >= left) {
      left = idx + 1
    }
    max = Math.max(max, right - left + 1) // 计算结果
    map.set(char, right) // 存下指针位置
  }
  return max
}
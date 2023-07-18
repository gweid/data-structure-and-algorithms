// 暴力破解
// var twoSum = function(nums, target) {
//   const len = nums.length
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (nums[i] + nums[j] === target && i !== j) {
//         return [i, j]
//       }
//     }
//   }
// }

// 缓存提速
var twoSum = function(nums, target) {
  const len = nums.length
  const map = {}

  for(let i = 0; i < len; i++) {
    const curNum = nums[i]
    const targetNumIdx = map[target - curNum]
    if (targetNumIdx !== undefined) {
      return [targetNumIdx, i]
    }
    map[curNum] = i
  }
}

// Map 结构
// var twoSum = function(nums, target) {
//   const len = nums.length
//   const map = new Map()

//   for(let i = 0; i < len; i++) {
//     if (map.get(target - nums[i]) !== undefined) {
//       return [map.get(target - nums[i]), i]
//     }
//     map.set(nums[i], i)
//   }
// }

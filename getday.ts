let array = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"]
let newDay = new Date()
let dayIndex = newDay.getDay()
let dayOfWeek = array[dayIndex]
console.log(dayOfWeek)
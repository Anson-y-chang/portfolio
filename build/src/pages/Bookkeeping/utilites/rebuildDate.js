
export const rebuildDate = (dateString) => {
  const setMonth = (month) => {
    switch (month) {
      case "Jan":
        return "01"
      case "Feb":
        return "02"
      case "Mar":
        return "03"
      case "Apr":
        return "04"
      case "May":
        return "05"
      case "Jun":
        return "06"
      case "Jul":
        return "07"
      case "Aug":
        return "08"
      case "Sep":
        return "09"
      case "Oct":
        return "10"
      case "Nov":
        return "11"
      case "Dec":
        return "12"
      default:
        break;
    }
  }

  const dateStringArray = dateString.split(" ")
  const newDateStringArray = []
  newDateStringArray.push(dateStringArray[3])
  newDateStringArray.push(setMonth(dateStringArray[1]))
  newDateStringArray.push(dateStringArray[2])
  return newDateStringArray.join(", ")+" "+dateStringArray[0]
}


export const inViewport = (id, offset = 0) => {
  var myElement = document.getElementById(id)
  var bounding = myElement.getBoundingClientRect()

  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom + offset <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    return true
  }

  return false
}

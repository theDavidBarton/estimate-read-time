function readTime() {
  const fullText = document.querySelector('body').innerText
  const wordsPerMinute = 265 // WPM - English
  const wordCount = fullText.split(/\s/g).length
  const minutes = wordCount / wordsPerMinute
  const readTime = Math.ceil(minutes)

  return readTime + ' min read'
}
readTime()

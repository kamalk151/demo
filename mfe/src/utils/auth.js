// Function to sanitize text (removes newlines, tabs, and excessive spaces)
export const sanitizeText = (text)=>  {
  return text
    .replace(/\n/g, ' ')  // Replace newline characters with a single space
    .replace(/\t/g, ' ')  // Replace tab characters with a single space
    .replace(/ {5,}/g, ' ') // Replace 5 or more consecutive spaces with a single space
    .trim(); // Remove leading and trailing spaces
}

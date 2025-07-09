function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomeNoteLength = ransomNote.length;
  const magazineLength = magazine.length;
  if (ransomeNoteLength > magazineLength) return false;
  const magazineSet = new Map();
  for (const char of magazine) {
    if (magazineSet.has(char)) {
      let count = magazineSet.get(char);
      magazineSet.set(char, count + 1);
    } else {
      magazineSet.set(char, 1);
    }
  }
  for (const char of ransomNote) {
    if (!magazineSet.has(char)) {
      return false;
    }
    let count = magazineSet.get(char);
    if (count <= 0) return false;
    magazineSet.set(char, count - 1);
  }
  return true;
}

export const getAvatarLetters = (name?: string | null) => {
  if (!name || !name.trim()) return "?";

  const words = name.trim().split(" ").filter(Boolean);

  if (words.length >= 2) {
    return words[0][0].toUpperCase() + words[1][0].toUpperCase();
  }

  return words[0].slice(0, 2).toUpperCase();
};

 


export const getAvatarLetters = (name: string) => {
  const words = name.trim().split(" ");

  if (words.length >= 2) {
    return (
      words[0][0].toUpperCase() +
      words[1][0].toUpperCase()
    );
  }

  return name.slice(0, 2).toUpperCase();
};
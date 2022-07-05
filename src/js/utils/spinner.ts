const cards = document.querySelector(".cards") as HTMLDivElement;

export const spinner = () => {
  const loader = document.createElement("div");

  loader.className = "loader";

  cards.append(loader);
};

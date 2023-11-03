/* eslint-disable react/prop-types */
export const SlugToTitle = ({ slug }) => {
  return (
    <h3>
      {slug
        .replace(/-/g, " ")
        .split(" ")
        .splice(0, slug.split("-").length - 1)
        .map(function (word) {
          return word[0].toUpperCase() + word.substr(1);
        })
        .join(" ")}
    </h3>
  );
};

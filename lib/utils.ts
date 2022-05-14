// Function to return a custom comparator for sorting
// objects by property. Use with sort()
// e.g., sort(by("name"))
export const by = (prop: any): ((a: any, b: any) => number) => {
  return (objA: any, objB: any) => {
    const [a, b] = [objA, objB].map((obj) => {
      return typeof obj[prop] === "string"
        ? obj[prop].toLowerCase().replace(/\W/g, "")
        : obj[prop];
    });

    return a < b ? -1 : a > b ? 1 : 0;
  };
};

// Remove HTML tags from a string.
export const withoutHtmlTags = (string: string): string => {
  return string.replace(/(<([^>]+)>)/gi, "");
};

export const getExcerpt = (string: string): string => {
  // Remove HTML tags and line breaks:
  const text = withoutHtmlTags(string).replace(/\n/g, " ");
  const indexOfPeriod = text.indexOf(". ");
  return text.slice(0, indexOfPeriod + 1);
};

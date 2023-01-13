import { Linereader } from "./lineReader";

type Props = {
  title?: string;
  items?: Props[];
};

const getIndent = (line: string) =>
  Math.floor(Number(line.search(/[^\s]/)) / 3);

export const parseData = (data: string[], currentIndent = -1): Props[] => {
  const r = new Linereader(data);
  let out: Props[] = [];

  while (!r.eof) {
    const line = r.readLine();

    const newItem: Props = { title: line.trim() };
    const indent = getIndent(line);

    if (indent > currentIndent) {
      const lines = r.readUntilTrue((line) => getIndent(line) <= indent);

      if (lines !== undefined && lines.length > 0) {
        newItem.items = parseData(lines, indent);
      }
    }
    if (newItem.title !== "") out.push(newItem);
  }

  return out;
};

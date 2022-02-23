import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";

export type PostMarkdownAttributes = {
  title: string;
};
function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title;
}

export async function getFileMarkdown(pathToFile: string) {
  const filepath = path.normalize(pathToFile);
  const file = await fs.readFile(filepath);
  const { attributes, body } = parseFrontMatter(file.toString());
  const html = marked(body);
  //   invariant(
  //     isValidPostAttributes(attributes),
  //     `Post ${filepath} is missing attributes`
  //   );
  //   return { html, title: attributes.title };
  return { html, attributes };
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const files = fs.readdirSync(path.join("programs"));

export function getPrograms() {
  const programs = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("programs", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  console.log(programs);
  return programs;
}

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import gfm from "remark-gfm";
import "katex/dist/katex.min.css";
import "../interface/markdown.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

const PackedMarkdown = (props) => {
  const { children } = props;

  return (
    <ReactMarkdown
      remarkPlugins={[gfm, remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeRaw]}
      components={{
        img: ({ node, ...props }) => (
          <img
            style={{ maxWidth: "100%" }}
            alt={props.title}
            {...props}
          />
        ),
        a: ({ node, href, ...props }) => (
          <a
            target={href[0] === "#" ? "_self" : "_blank"}
            rel="noreferrer"
            href={href}
            children={props.children}
            {...props}
          />
        ),
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={vs}
              customStyle={{
                padding: "0",
                margin: "0",
                border: "0",
                fontSize: "0.9rem",
                backgroundColor: "rgba(255, 255, 255, 0)"
              }}
              language={match[1]}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        }
      }}
      children={children}
    />
  );
};

export default PackedMarkdown;

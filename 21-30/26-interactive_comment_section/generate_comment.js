import {
  GenerateElement,
  AppendChildrenToElement,
} from "./generate_element.js";

export function GenerateComment(data) {
  // IMAGES
  const replyImg = GenerateElement("img", ...[, , ,], [
    { attr: "src", value: "./images/icon-reply.svg" },
  ]);
  const plusImg = GenerateElement("img", ...[, , ,], [
    { attr: "src", value: "./images/icon-plus.svg " },
  ]);
  const minusImg = GenerateElement("img", ...[, , ,], [
    { attr: "src", value: "./images/icon-minus.svg" },
  ]);

  const plusButton = GenerateElement(
    "button",
    ["button"],
    ...[,],
    [plusImg],
    ...[]
  );
  const minusButton = GenerateElement(
    "button",
    ["button"],
    ...[,],
    [minusImg],
    ...[]
  );

  const replyContent = GenerateElement(
    "span",
    ["primary-clr"],
    "Reply",
    ...[, ,]
  );
  const reply = GenerateElement("div", ["reply", "flex"], ...[,], [
    replyImg,
    replyContent,
  ]);
  // SCORE
  const scoreContent = GenerateElement("span", ["primary-clr"], data.score);
  const score = GenerateElement(
    "div",
    ["split", "score"],
    [,],
    [plusButton, scoreContent, minusButton]
  );

  // INFO
  const name = GenerateElement("h1", ["name"], data.user.username);
  const lable = data.user.isCurrent
    ? GenerateElement("span", ["primary-bg", "lable"], "you")
    : "";

  const createdAt = GenerateElement("span", ["createdAt"], data.createdAt);
  const avatarImg = GenerateElement("img", ...[, , ,], [
    { attr: "src", value: data.user.image.png },
  ]);
  const info = GenerateElement(
    "div",
    ["flex", "info"],
    [,],
    [avatarImg, name, lable, createdAt]
  );

  // COMMENT
  const toWhom = data.isReplied
    ? GenerateElement("span", ["primary-clr", "to"], `@${data.replyingTo}`)
    : "";
  const commentContent = GenerateElement("span", ...[,], data.content);
  const content = GenerateElement("p", ["content"], ...[,], [
    toWhom,
    commentContent,
  ]);

  const comment = GenerateElement("div", ["comment"], ...[,], [
    info,
    content,
    score,
    reply,
  ]);

  let repliesWrapper;

  if (data.replies.length > 0) {
    const replies = GenerateElement("div", ["replies"], ...[,], [
      ...data.replies.map((reply) => GenerateComment(reply)),
    ]);
    const bar = GenerateElement("div", ["bar"], ...[, , ,]);
    repliesWrapper = GenerateElement("div", ["replies_wrapper"], ...[,], [
      bar,
      replies,
    ]);
  }

  const commentWrapper = GenerateElement(
    "div",
    ["comment_wrapper"],
    [,],
    [comment, repliesWrapper ? repliesWrapper : ""]
  );

  return commentWrapper;
}

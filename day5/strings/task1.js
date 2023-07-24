"use strict";

function rmHtmlTags(str) {
  if (typeof str !== "string") {
    throw new Error("parameter must be only string");
  } else {
    return str.replace(/<[^>]*>/g, "");
  }
}

console.log(rmHtmlTags("<p><strong><em>Content</em></strong></p>")); // Content);
console.log(rmHtmlTags({})); // Content);

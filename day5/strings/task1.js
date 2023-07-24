"use strict";

function rmHtmlTags(str) {
  try {
    if (typeof str !== "string") {
      throw new Error("parameter must be only string");
    }
    return str.replace(/<[^>]*>/g, "");
  } catch (err) {
    console.log(err);
  }
}

console.log(rmHtmlTags("<p><strong><em>Content</em></strong></p>")); // Content);
console.log(rmHtmlTags({})); //error

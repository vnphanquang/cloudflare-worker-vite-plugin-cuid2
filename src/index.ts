import { createId } from "@paralleldrive/cuid2";
export default {
  fetch() {
    return new Response(`Hello, your unique ID is: ${createId()}`);
  },
};

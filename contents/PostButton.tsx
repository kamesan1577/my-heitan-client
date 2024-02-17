import type { PlasmoCSConfig, PlasmoCSUI } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://twitter.com/*", "https://x.com/*"],
  all_frames: true
}

const defaultPostButton = (node: HTMLElement) => {
  // ポストボタンを取得
  let postButton
  if (node.querySelector<HTMLElement>("[data-testid='tweetButton']")) {
    postButton = node.querySelector<HTMLElement>("[data-testid='tweetButton']")
  } else if (
    node.querySelector<HTMLElement>("[data-testid='tweetButtonInline']")
  ) {
    postButton = node.querySelector<HTMLElement>(
      "[data-testid='tweetButtonInline']"
    )
  }

  if (postButton) {
    return postButton
  }
}

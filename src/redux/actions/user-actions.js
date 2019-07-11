const UP_VOTE = "up_vote";
const DOWN_VOTE = "down_vote";

export const actionTypes = {
  UP_VOTE,
  DOWN_VOTE
}

export function updateUpVote(payload) {
  return {
      type: UP_VOTE,
      payload: payload
  }
}

export function updateDownVote(payload) {
  return {
      type: DOWN_VOTE,
      payload: payload
  }
}

export default {
  updateUpVote,
  updateDownVote
}
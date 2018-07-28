import { SAVE_TOPICS } from 'actions/types';

export function saveTopics(topics) {
  return {
    type: SAVE_TOPICS,
    payload: topics
  };
}
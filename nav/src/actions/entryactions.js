import {
  ENTRY_UPDATE
} from './types';

export const entryupdate = ({ prop, value }) => {
  return {
    type: ENTRY_UPDATE,
    payload: { prop, value }
  };
};

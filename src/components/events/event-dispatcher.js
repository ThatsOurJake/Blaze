import shortId from 'shortid';

const eventHandlers = {};

export const EVENTS = {
  ENTER: 0,
  BACK: 1,
};

export const subscribeToEvent = (event, cb) => {
  const id = shortId();
  
  if (!eventHandlers[event]) {
    eventHandlers[event] = [];
  }

  eventHandlers[event].push({
    id,
    cb
  });

  return id;
};

export const unSubscribeToEvent = (event, id) => {
  if (!eventHandlers[event]) {
    return;
  }

  const index = eventHandlers[event].findIndex(e => e.id === id);
  eventHandlers[event].splice(index, 1);
};

export const dispatchEvent = (event) => {
  if (!eventHandlers[event]) {
    return;
  }

  const handlers = eventHandlers[event];

  handlers.forEach(({ cb }) => cb());
};
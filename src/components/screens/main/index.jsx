import React, { useEffect } from 'react';

import ControlWrapper from '../control-wrapper';
import { EVENTS, subscribeToEvent, unSubscribeToEvent } from '../../events/event-dispatcher';

const main = ({ history }) => {
  useEffect(() => {
    const id = subscribeToEvent(EVENTS.ENTER, () => history.push('/drawer'));
    return () => unSubscribeToEvent(EVENTS.ENTER, id);
  });

  return (
    <ControlWrapper>
      <div className="gradient-background" />
    </ControlWrapper>
  );
};

export default main;

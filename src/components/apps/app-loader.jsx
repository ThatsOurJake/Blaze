import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getApp } from './app-registy';
import ControlWrapper from '../screens/control-wrapper';
import { EVENTS, unSubscribeToEvent, subscribeToEvent } from '../events/event-dispatcher';

const appLoader = ({ history, match: { params } }) => {
  const { id } = params;
  const { component } = getApp(id);

  useEffect(() => {
    const id = subscribeToEvent(EVENTS.BACK, () => history.push('/drawer'));
    return () => unSubscribeToEvent(EVENTS.BACK, id);
  });

  return (
    <ControlWrapper>
      { React.createElement(component)}
    </ControlWrapper>
  )
}

export default withRouter(appLoader);

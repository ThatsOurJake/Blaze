import React, { useEffect } from 'react';

import { getApps } from '../../apps/app-registy';
import { subscribeToEvent, EVENTS, unSubscribeToEvent } from '../../events/event-dispatcher';

import ControlWrapper from '../control-wrapper';
import AppList from './app-list';

const appDrawer = ({ history }) => {
  useEffect(() => {
    const id = subscribeToEvent(EVENTS.BACK, () => history.push('/'));
    return () => unSubscribeToEvent(EVENTS.BACK, id);
  });

  return (
    <ControlWrapper>
      <div className="app-drawer-background" />
      <div className="container app-drawer u-padding-left-large u-padding-right-large u-padding-top-x-large u-padding-bottom-x-large">
        <div className="u-padding app-drawer-content scrollable-y">
          <p className="t-heading-first u-margin-top u-margin-bottom u-text-center">Apps</p>
          <AppList
            trackChildren
            forgetLastFocusedChild
            focusKey="TILE_LIST"
            apps={getApps()}
          />
        </div>
      </div>
    </ControlWrapper>
  );
};

export default appDrawer;

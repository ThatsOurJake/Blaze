import React, { useEffect, useCallback } from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

import AppTile from './app-tile';
import { withRouter } from 'react-router-dom';

const appList = ({ apps, stealFocus, history }) => {
  useEffect(() => {
    stealFocus();

    return () => stealFocus('NO_FOCUS');
  });

  const onEnter = useCallback(({ path }) => history.push(path));

  return (
    <div className="row">
      {
        apps.map(app => React.createElement(AppTile, {
          ...app,
          key: app.id,
          focusKey: `tile-${app.id}`,
          onEnterPress: onEnter
        }))
      }
    </div>
  )
};

export default withFocusable()(withRouter(appList));

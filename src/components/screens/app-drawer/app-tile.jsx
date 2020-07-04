import React, { useEffect } from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

const appTile = ({ icon, focused }) => {
  return (
    <div className="col-3 app-tile-wrapper">
      <div className="app-tile-content u-padding">
        <div className={`app-tile ${focused ? 'app-tile-focused' : ''}`}>
          {
            focused ?  null : <div className="u-padding app-tile-unfocused" />
          }
          <img className="app-tile-icon u-padding" src={icon} />
        </div>
      </div>
    </div>
  );
};

export default withFocusable()(appTile);

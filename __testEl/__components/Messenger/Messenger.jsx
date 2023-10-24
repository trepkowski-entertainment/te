
import styles from './messenger.module.scss'


import React, { useEffect } from 'react';

export const MessengerComponent = () => {
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: 'TWOJ_APP_ID',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v12.0',
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div className={styles.messenger}>
      {/* Placeholder dla komponentu Messengera */}
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="TWOJ_PAGE_ID"
      />
    </div>
  );
};



import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Modal, Icon } from 'antd';
import { isLocalStorageNameSupported } from '../utils';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <ul>
          <li>
            <h2><Icon type="github" /> GitHub</h2>
          </li>
          <li>
            <h2><Icon type="link" /> <FormattedMessage id="app.footer.links" /></h2>
          </li>
          <li>
            <h2><Icon type="customer-service" /> <FormattedMessage id="app.footer.community" /></h2>
          </li>
          <li>
            <h2>Copyright © {new Date().getFullYear()}</h2>
          </li>
        </ul>
      </footer>
    );
  }
}

export default injectIntl(Footer);

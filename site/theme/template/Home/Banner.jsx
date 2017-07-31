import React from 'react';
import { Link } from 'bisheng/router';
import { FormattedMessage } from 'react-intl';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import GitHubButton from 'react-github-button';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import * as utils from '../utils';

function typeFunc(a) {
  if (a.key === 'line') {
    return 'right';
  } else if (a.key === 'button') {
    return 'bottom';
  }
  return 'left';
}

export default function Banner({ location, onEnterChange }) {
  const isZhCN = utils.isZhCN(location.pathname);
  return (
    <section className="page banner-wrapper">
    </section>
  );
}

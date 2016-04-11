/* global describe:false, it:false, expect:false */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import Statistic from '../../app/components/Statistic';

describe('Statistic', () => {
  const shallowRender = (name, value) => {
    const renderer = createRenderer();
    renderer.render(<Statistic name={name} value={value} />);
    return renderer.getRenderOutput();
  };

  it('should display statistic name and value', () => {
    const statistic = shallowRender('Random stat', '20%');
    expect(statistic.props.children[0]).to.eql('Random stat');
    expect(statistic.props.children[1]).to.eql(': ');
    expect(statistic.props.children[2]).to.eql('20%');
  });
});

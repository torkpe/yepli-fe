import React from 'react';
import CollapsedPolygon from '../../assets/svg/polygon2.svg';
import ExpandedPolygon from '../../assets/svg/polygon.svg';

export default function CollapsiblePolygon(props) {
  if (props.isCollapsed) {
    return <img src={CollapsedPolygon} alt="collapsed"/>;
  }
  return <img src={ExpandedPolygon} alt="collapsed"/>;
}

import React from "react";
import './index.css';

interface ThreeLayoutProps {
  leftWidth?: number;
  rightWidth?: number;
  minWidth?: number;
  gap?: number;
  children?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
}


const ThreeLayout = (props: ThreeLayoutProps) => {

  const defaultProps = {
    leftWidth:200,
    rightWidth:200,
    minWidth:800,
    gap:2
  };

  const data = Object.assign({}, defaultProps, props);

  return (
    <div className="three-layout" style={{minWidth : data.minWidth}}>
      <div className="main">
        {props.children}
      </div>
      <div className="aside-left" style={{width:data.leftWidth, marginRight:data.gap}}>
        {props.left}
      </div>
      <div className="aside-right" style={{width:data.rightWidth, marginLeft:data.gap}}>
        {props.right}
      </div>
    </div>
  );
};

export default ThreeLayout;
 
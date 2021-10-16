import * as React from 'react';
import Svg, { Defs, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function JourneyStart({ isDone, ...rest }) {
  return (
    <Svg width={98.273} height={98.272} viewBox="0 0 98.273 98.272" {...rest}>
      <Defs />
      <Path
        className="prefix__a"
        d="M98.092 90.729l-3.494-14.092a17.437 17.437 0 00-3.758-7.222l-8.8-10.1.507-2.815 1.394 2.006a5.661 5.661 0 003.67 2.357 5.77 5.77 0 001.023.092 5.7 5.7 0 004.668-8.953l-9.879-14.219a11.157 11.157 0 00-.212-.322l-.017-.023a8.723 8.723 0 005.445-6.428l.149-.741a8.723 8.723 0 00-17.1-3.436l-.149.741a8.658 8.658 0 001.167 6.356 9.318 9.318 0 00-2.208 1.061 1.94 1.94 0 00-.136.086L51.114 48.45a5.819 5.819 0 00-2.034 2.5l-3.869-3.589a1.92 1.92 0 00-2.713.1L31.572 59.237a1.92 1.92 0 00.1 2.713l11.651 10.8a6.22 6.22 0 002.14 10.1l12.863 5.186a9.058 9.058 0 003.394.66 9.2 9.2 0 008.481-5.625l4.414-10.572 6.675 6.211 5.134 15.4a6.08 6.08 0 0011.668-3.386zm-7.636-35.146a1.86 1.86 0 01-3.359.732l-3.584-5.159.933-5.179 5.707 8.215a1.849 1.849 0 01.303 1.391zM75.303 28.329l.149-.741a4.888 4.888 0 014.778-3.923 4.929 4.929 0 01.972.1 4.884 4.884 0 013.827 5.75l-.149.741a4.884 4.884 0 11-9.576-1.924zm-22 23.273l19.144-13.3.082-.052a5.45 5.45 0 018.418 5.479l-2.564 14.237H67.308l1.559-8.655a1.92 1.92 0 00-2.984-1.917l-10.534 7.319a1.861 1.861 0 01-2.6-.485 1.918 1.918 0 01.556-2.627zm4.234 6.264l6.728-4.675-1.29 7.165-4.1 14.1-5.167-1.855 7.349-7.921a1.92 1.92 0 00-.1-2.713l-4.026-3.735a5.767 5.767 0 00.608-.367zm-13.531-6.389l12.933 12-8.314 8.962-12.933-12zm27.507 18.489l-4.857 11.63a5.339 5.339 0 01-6.9 2.884l-12.863-5.186a2.378 2.378 0 01-.758-3.926l1.281 1.189a1.919 1.919 0 001.306.512h.072a1.921 1.921 0 001.335-.613l.738-.8 8.63 3.1a1.92 1.92 0 002.492-1.271l3.827-13.166 5.813 5.408a1.927 1.927 0 00-.115.238zm22.443 23.606a2.24 2.24 0 01-3.889-.672l-5.288-15.865a1.92 1.92 0 00-.514-.8L68.752 61.802h10.369l8.825 10.133a13.58 13.58 0 012.927 5.625l3.493 14.09a2.227 2.227 0 01-.41 1.922zM35.959 44.233a1.919 1.919 0 00-2.555-.918 20.732 20.732 0 119.966-10.027 1.92 1.92 0 003.483 1.616 24.528 24.528 0 10-11.811 11.884 1.92 1.92 0 00.917-2.555z"
        fill={isDone ? '#B0B5B9' : '#342F2E'}
      />
      <Path
        className="prefix__a"
        d="M40.651 22.658h-1.394a1.92 1.92 0 000 3.839h1.394a1.92 1.92 0 000-3.839zM8.469 22.621a1.92 1.92 0 100 3.839h1.394a1.92 1.92 0 100-3.839zM24.542 37.333a1.92 1.92 0 00-1.92 1.92v1.394a1.92 1.92 0 103.839 0v-1.394a1.92 1.92 0 00-1.919-1.92zM26.497 9.928a1.92 1.92 0 00-1.917-1.922 1.92 1.92 0 00-1.92 1.917l-.018 13.989-5.131 6.76a1.92 1.92 0 103.056 2.323l5.522-7.274a1.919 1.919 0 00.391-1.158zM40.577 38.657a1.921 1.921 0 101.357.563 1.933 1.933 0 00-1.357-.563z"
        fill={isDone ? '#B0B5B9' : '#342F2E'}
      />
    </Svg>
  );
}

export default JourneyStart;

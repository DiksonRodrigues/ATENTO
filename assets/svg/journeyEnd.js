import * as React from 'react';
import Svg, { Defs, Path, G, ClipPath } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function JourneyEnd({ isDone, ...rest }) {
  return (
    <Svg width={99} height={99} viewBox="0 0 99 99" fill="none" {...rest}>
      <G clipPath="url(#prefix__clip0)" fill={isDone ? '#B0B5B9' : '#342F2E'}>
        <Path d="M.18 90.729l3.495-14.092a17.437 17.437 0 013.758-7.222l8.8-10.1-.507-2.815-1.394 2.006a5.66 5.66 0 01-3.67 2.357 5.7 5.7 0 01-5.691-8.861l9.879-14.219c.069-.108.139-.216.212-.322l.017-.023a8.723 8.723 0 01-5.445-6.428l-.15-.741a8.723 8.723 0 0117.1-3.436l.15.741a8.658 8.658 0 01-1.167 6.356 9.32 9.32 0 012.208 1.061c.046.027.092.055.136.086L47.159 48.45a5.819 5.819 0 012.034 2.5l3.869-3.589a1.92 1.92 0 012.713.1L66.7 59.237a1.92 1.92 0 01-.1 2.713L54.95 72.75a6.22 6.22 0 01-2.14 10.1l-12.863 5.186a9.057 9.057 0 01-3.394.66 9.2 9.2 0 01-8.481-5.625l-4.414-10.572-6.675 6.211-5.134 15.4A6.08 6.08 0 01.18 90.724v.005zm7.637-35.146a1.86 1.86 0 003.359.732l3.584-5.159-.933-5.179-5.707 8.215a1.848 1.848 0 00-.303 1.391zM22.97 28.329l-.15-.741a4.888 4.888 0 00-4.777-3.923 4.936 4.936 0 00-.972.1 4.885 4.885 0 00-3.827 5.75l.149.741a4.885 4.885 0 109.576-1.924v-.003zm22 23.273l-19.144-13.3a2.277 2.277 0 01-.082-.052 5.449 5.449 0 00-8.418 5.479l2.564 14.237h11.075l-1.56-8.655a1.921 1.921 0 012.985-1.917l10.534 7.319a1.86 1.86 0 002.6-.485 1.918 1.918 0 00-.556-2.627l.002.001zm-4.234 6.264l-6.728-4.675 1.29 7.165 4.1 14.1 5.167-1.855-7.35-7.921a1.92 1.92 0 01.1-2.713l4.027-3.735a5.772 5.772 0 01-.608-.367l.002.001zm13.53-6.389l-12.932 12 8.314 8.962 12.933-12-8.314-8.962zM26.76 69.966l4.857 11.63a5.34 5.34 0 006.9 2.884l12.863-5.186a2.378 2.378 0 00.758-3.926l-1.281 1.189c-.355.33-.822.512-1.306.512h-.072a1.921 1.921 0 01-1.335-.613l-.738-.8-8.63 3.1a1.919 1.919 0 01-2.492-1.271l-3.827-13.166-5.813 5.408c.044.077.082.156.115.238v.001zM4.317 93.572a2.24 2.24 0 003.889-.672l5.288-15.865c.101-.305.278-.58.514-.8L29.52 61.802H19.15l-8.824 10.133A13.58 13.58 0 007.4 77.56L3.907 91.65a2.227 2.227 0 00.41 1.922zM62.314 44.233a1.918 1.918 0 012.555-.918 20.732 20.732 0 10-9.966-10.027 1.92 1.92 0 01-3.483 1.616 24.528 24.528 0 1111.811 11.884 1.92 1.92 0 01-.917-2.555z" />
        <Path d="M57.622 22.658h1.394a1.92 1.92 0 010 3.839h-1.394a1.92 1.92 0 010-3.839zM89.804 22.621a1.92 1.92 0 110 3.839H88.41a1.92 1.92 0 110-3.839h1.394zM73.731 37.333a1.92 1.92 0 011.92 1.92v1.394a1.921 1.921 0 01-3.706.748 1.921 1.921 0 01-.133-.748v-1.394a1.92 1.92 0 011.919-1.92zM71.776 9.928a1.92 1.92 0 011.917-1.922 1.92 1.92 0 011.92 1.917l.018 13.989 5.131 6.76a1.92 1.92 0 11-3.056 2.323l-5.522-7.274a1.919 1.919 0 01-.391-1.158l-.017-14.635zM57.696 38.657a1.92 1.92 0 11.004 3.842 1.92 1.92 0 01-.004-3.842z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path
            transform="matrix(-1 0 0 1 98.273 0)"
            fill="#fff"
            d="M0 0h98.273v98.272H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default JourneyEnd;
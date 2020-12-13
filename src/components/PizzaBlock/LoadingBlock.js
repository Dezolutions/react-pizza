import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={260}
      height={455}
      viewBox="0 0 280 510"
      backgroundColor="#dedede"
      foregroundColor="#ecebeb">
      <circle cx="130" cy="154" r="130" />
      <rect x="0" y="312" rx="8" ry="8" width="260" height="25" />
      <rect x="0" y="353" rx="10" ry="10" width="260" height="70" />
      <rect x="0" y="442" rx="9" ry="9" width="76" height="25" />
      <rect x="139" y="438" rx="17" ry="17" width="119" height="30" />
    </ContentLoader>
  )
}

export default LoadingBlock

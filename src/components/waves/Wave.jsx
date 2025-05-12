import Waves from './Waves';

import React from 'react'

function Wave() {
  return (
    <div>
        <Waves
  lineColor="gray"
  backgroundColor="rgba(255, 255, 255, 0.2)"
  waveSpeedX={0.02}
  waveSpeedY={0.01}
  waveAmpX={40}
  waveAmpY={20}
  friction={0.9}
  tension={0.01}
  maxCursorMove={120}
  xGap={12}
  yGap={36}
/>
    </div>
  )
}

export default Wave
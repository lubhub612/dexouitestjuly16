import React from 'react'
import { Flex, IconButton, SettingIcon, CogIcon, useModal } from '@pancakeswap/uikit'
import SettingsModal from './SettingsModal'

type Props = {
  color?: string
  mr?: string
}

const GlobalSettings = ({ color, mr = '8px' }: Props) => {
  const [onPresentSettingsModal] = useModal(<SettingsModal />)

  return (
    <Flex>
      <IconButton onClick={onPresentSettingsModal} variant="text" scale="sm" mr={mr} id="open-settings-dialog-button">
            <SettingIcon height={32} width={32} color={color || 'textSubtle'} /> 
      </IconButton>
    </Flex>
  )
}

export default GlobalSettings

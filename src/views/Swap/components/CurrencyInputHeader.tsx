import React from 'react'
import styled from 'styled-components'
import { ChartIcon, Flex, Heading, HistoryIcon, WatchIcon,  IconButton, NotificationDot, Text, useModal } from '@pancakeswap/uikit'
import TransactionsModal from 'components/App/Transactions/TransactionsModal'
import GlobalSettings from 'components/Menu/GlobalSettings'
import { useExpertModeManager } from 'state/user/hooks'

interface Props {
  title: string
  subtitle: string
  noConfig?: boolean
  setIsChartDisplayed?: React.Dispatch<React.SetStateAction<boolean>>
  isChartDisplayed?: boolean
}

const CurrencyInputContainer = styled(Flex)`
  align-items: center;
  padding: 24px;
  width: 100%;
  border-bottom: 0px solid ${({ theme }) => theme.colors.cardBorder};
`
const SwapHeading = styled.h1`
font-weight: 1200;
color: ${({ theme }) => theme.colors.text};
font-size: 64px;
margin-bottom : 18px;
margin-top: 50px;
padding-left: 200px;
text-shadow: 0px 0px 64px rgba(225, 194, 255, 0.48),
    0px 0px 16px rgba(58, 54, 255, 0.24);
`

const TradeHeading = styled.h3`
font-weight: 460;
color: ${({ theme }) => theme.colors.grey};
font-size: 24px;
padding-left: 180px;
`

const DevIcon = styled.div`
margin-bottom : 18px;
margin-top: 30px;
margin-right : 20px;
`


const DevIcon2 = styled.div`
margin-bottom : 35px;
margin-top: 32px;
margin-right : 20px;
`


const CurrencyInputHeader: React.FC<Props> = ({ title, subtitle, setIsChartDisplayed }) => {
  const [expertMode] = useExpertModeManager()
  const toggleChartDisplayed = () => {
    setIsChartDisplayed((currentIsChartDisplayed) => !currentIsChartDisplayed)
  }
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)

  return (
    <CurrencyInputContainer>
      <Flex width="100%" alignItems="flex-start" justifyContent="space-between" >
        <Flex flexDirection="column" alignItems="center">
          <SwapHeading>
          {title}
          </SwapHeading>  
          <Flex alignItems="center">
             <TradeHeading>
                {subtitle}
          </TradeHeading> 
          </Flex>
        </Flex>
        <Flex>
        <DevIcon>
        <NotificationDot show={expertMode}>
            <GlobalSettings color="grey" mr="0"  />
          </NotificationDot>
          </DevIcon>
          <DevIcon2>
          <IconButton onClick={onPresentTransactionsModal} variant="text" scale="sm">
                <WatchIcon color="grey" width="32px" style={{ marginRight: '50px' }} />
          </IconButton>
          </DevIcon2>
          
        </Flex>
      </Flex>
    </CurrencyInputContainer>
  )
}

export default CurrencyInputHeader

import React from 'react'
import styled from 'styled-components'
import { Text } from '../../uikit'
import { Spinner } from '../Shared'
import { AutoColumn } from '../Column'
import Circle from '../../assets/images/blue-loader.svg'
import { Wrapper, Section, ConfirmedIcon, ContentHeader } from './helpers'
import useI18n from 'hooks/useI18n'

type ConfirmationPendingContentProps = { onDismiss: () => void; pendingText: string }

const CustomLightSpinner = styled(Spinner)<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

const ConfirmationPendingContent = ({ onDismiss, pendingText }: ConfirmationPendingContentProps) => {
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>{TranslateString(1314, 'Waiting for confirmation')}</ContentHeader>
        <ConfirmedIcon>
          <CustomLightSpinner src={Circle} alt="loader" size="90px" />
        </ConfirmedIcon>
        <AutoColumn gap="12px" justify="center">
          <AutoColumn gap="12px" justify="center">
            <Text fontSize="14px">
              <strong>{pendingText}</strong>
            </Text>
          </AutoColumn>
          <Text fontSize="14px">{TranslateString(1316, 'Confirm this transaction in your wallet')}</Text>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default ConfirmationPendingContent

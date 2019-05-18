/** @format */

import React from 'react'
import {Card, Content, Kpi, Chart, MachineVis, SiteNavigation, SiteBox, TextSnippet, Paper} from '../../components'

const SettingsView = (props: any) => {
  return (
    <SiteBox>
      <Content>
        <Paper
          title={'Notifications'}
          subtitle={'Manage your Notifications'}
          body={'lore ipsum'}
          footer={<button>test</button>}
        />
      </Content>
    </SiteBox>
  )
}

export default SettingsView

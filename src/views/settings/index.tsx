/** @format */

import React from 'react'
import {Card, Content, Kpi, Chart, MachineVis, SiteNavigation, SiteBox, TextSnippet, Paper} from '../../components'
import {
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  Select,
  FilledInput,
  OutlinedInput,
  NativeSelect,
  InputBase,
} from '@material-ui/core'
import {Flex, Box} from 'rebass'

const SettingsView = (props: any) => {
  const [sxelect, setSelect] = React.useState('Deutsch')
  return (
    <SiteBox>
      <Content alignItems="flex-start">
        <Paper
          title={'Benachrichtigungen'}
          subtitle={'Verwalte deine Benachrichtigungen'}
          body={
            <Flex flexDirection={'row'} justifyContent={'stretch'} alignItems={'stretch'}>
              <Box width={'250px'} my={'20px'}>
                <FormControlLabel
                  control={<Checkbox color="primary" checked={true} style={{margin: '5px 0'}} />}
                  label="Push-Benachrichtigung"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" value="" style={{margin: '5px 0'}} />}
                  label="SMS"
                />
              </Box>
              <Box width={'250px'} my={'20px'}>
                <FormControlLabel
                  control={<Checkbox color="primary" style={{margin: '5px 0'}} />}
                  label="Microsoft-Teams / Slack"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" style={{margin: '5px 0'}} checked={true} />}
                  label="E-mail"
                />
              </Box>
            </Flex>
          }
          footer={
            <Button variant="contained" color="primary">
              Speichern
            </Button>
          }
        />
        <Paper
          title={'Allgemeine Einstellungen'}
          body={
            <Flex flexDirection={'row'} justifyContent={'stretch'} alignItems={'stretch'}>
              <Box width={'250px'} my={'20px'}>
                <FormControlLabel
                  control={<Checkbox color="primary" value="" style={{margin: '5px 0'}} />}
                  label="Single Sign-on"
                />
                <FormControlLabel control={<Switch value="" color="primary" />} label="Dark Theme" />
              </Box>
              <Box width={'250px'} my={'20px'}>
                <FormControl variant="outlined">
                  <InputLabel>Sprache</InputLabel>
                  <Select
                    native
                    value={10}
                    onChange={() => {}}
                    input={<OutlinedInput name="age" color="primary" labelWidth={70} id="outlined-age-native-simple" />}
                    style={{width: 200}}>
                    <option value="" />
                    <option value={10}>Deutsch</option>
                    <option value={20}>Englisch</option>
                    <option value={30}>Polnisch</option>
                  </Select>
                </FormControl>
              </Box>
            </Flex>
          }
          footer={
            <Button variant="contained" color="primary">
              Speichern
            </Button>
          }
        />
      </Content>
    </SiteBox>
  )
}

export default SettingsView

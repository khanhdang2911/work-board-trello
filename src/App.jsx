import { Button, Stack } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'

function App() {
  return (
    <>
      <h1>Hello cac ban nhe</h1>
      <Stack direction="row" spacing={2}>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </Stack>
      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  )
}

export default App

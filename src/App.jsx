import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import { useColorScheme } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

function SelectMode() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-mode">Mode</InputLabel>
      <Select
        labelId="label-select-mode"
        id="select-light-dark-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="system">
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <SettingsBrightnessIcon fontSize='small' /> System
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <DarkModeIcon fontSize='small' /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="light">
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <LightModeIcon fontSize='small' /> Light
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <>
      <SelectMode/>
      <br />
      <HomeIcon color='text.secondary' />
      <br />
      <Button variant='contained' color='success'>
        Test Button
      </Button>
    </>
  )
}

export default App

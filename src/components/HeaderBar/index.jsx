import Box from '@mui/material/Box'
import SelectMode from '../SelectMode'

function HeaderBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      display: 'flex',
      alignItems: 'center',
      height: (theme) => theme.customTheme.headerHeight,
      width: '100%'
    }}>
      <SelectMode/>
    </Box>
  )
}

export default HeaderBar

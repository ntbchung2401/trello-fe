import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      display: 'flex',
      alignItems: 'center',
      height: (theme) => `calc(100vh - (${theme.customTheme.headerHeight} + ${theme.customTheme.navHeight}))`,
      width: '100%'
    }}>
      Board Content
    </Box>
  )
}

export default BoardContent

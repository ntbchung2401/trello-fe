import Container from '@mui/material/Container'
import HeaderBar from '../../components/HeaderBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <HeaderBar/>
      <BoardBar/>
      <BoardContent/>
    </Container>
  )
}
export default Board
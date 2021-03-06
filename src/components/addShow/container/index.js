import { connect } from 'react-redux'
import AddEvent from '../component'
import { addEvent, addEventRemote, resetAddEventRequest } from '../action'
import { pushRouteWihtDebounce } from 'rdx/actions'
import { getAllVenues } from 'components/venues/action'
import { getAllGenres } from 'components/genres/action'

const mapState = state => ({
  addShowRequest: state.addShowRequest,
  userCtx: state.userCtx,
  venues: state.venues,
  genres: state.genres
})

const mapDispatch = dispatch => ({
  addEvent: event => dispatch(addEvent(event)),
  addEventRemote: event => dispatch(addEventRemote(event)),
  resetAddEventRequest: () => dispatch(resetAddEventRequest()),
  pushRoute: () => {
    dispatch(pushRouteWihtDebounce(2000)('/'))
  },
  getAllVenues: () => dispatch(getAllVenues()),
  getAllGenres: () => dispatch(getAllGenres())
})

const connector = connect(mapState, mapDispatch)

export default connector(AddEvent)

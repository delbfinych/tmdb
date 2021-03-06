import { useSelector } from 'react-redux'
import { useActions } from '@src/hooks/useActions'
import { actions, tvReducer } from './reducers'
import {
  getAiringToday,
  getOnTheAir,
  getPopular,
  getRecommendations,
  getSimilar,
  getDetails,
  getTopRated,
  getDiscovered,
  getWatchList,
  getFavoriteList,
} from './selectors'

export { tvReducer }

export const tv = {
  currentTV: {
    useDetails: () => useSelector(getDetails),
  },
  usePopular: () => useSelector(getPopular),
  useAiringToday: () => useSelector(getAiringToday),
  useOnTheAir: () => useSelector(getOnTheAir),
  useTopRated: () => useSelector(getTopRated),
  useActions: (): typeof actions => useActions(actions),
  useSimilar: () => useSelector(getSimilar),
  useRecommendations: () => useSelector(getRecommendations),
  useWatchList: () => useSelector(getWatchList),
  useFavoriteList: () => useSelector(getFavoriteList),
  useDiscovered: () => useSelector(getDiscovered),
}

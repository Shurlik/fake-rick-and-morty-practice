import {useAppDispatch, useAppSelector} from "./useAppStore";
import {setHistory} from "../store/data/data.slices";


export function useHistory() {

  const {history} = useAppSelector(state => state.data)
  const dispatch = useAppDispatch()

  const getHistory = () => history

  const saveToHistory = (data: string) => {
    const updatedData = new Date().toISOString() + ' - ' + data
    const tmpArr = [...history]
    tmpArr.push(updatedData)


    dispatch(setHistory(tmpArr))
  }

  return {getHistory, saveToHistory}
}

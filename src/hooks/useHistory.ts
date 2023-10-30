import {useAppDispatch, useAppSelector} from "./useAppStore";
import {setHistory} from "../store/data/data.slices";


export function useHistory() {

  const {history} = useAppSelector(state => state.data)
  const dispatch = useAppDispatch()

  const getHistory = () => history

  const saveToHistory = (data: string) => {
    console.log({data})
    const updatedData = new Date().toISOString() + ' - ' + data
    console.log({updatedData})

    const updatedHistory = [...history]
    console.log({history})

    // dispatch(setHistory(updatedHistory))
  }

  return {getHistory, saveToHistory}
}

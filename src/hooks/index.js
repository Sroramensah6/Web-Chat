import useLoadData from "./useLoadDatas"
import { useDispatch, useSelector } from 'react-redux'
import useScrollToBottom from "./useScrollToBottom"

const useAppDispatch = useDispatch
const useAppSelector = useSelector

export { useLoadData, useScrollToBottom, useAppSelector, useAppDispatch }

import useLoadData from "./useLoadData"
import { useDispatch, useSelector } from 'react-redux'

const useAppDispatch = useDispatch
const useAppSelector = useSelector

export { useLoadData, useAppSelector, useAppDispatch }
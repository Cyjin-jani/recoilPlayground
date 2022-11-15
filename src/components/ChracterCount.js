import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil'
import { textState } from './TextInput'

const newCountAtom = atom({
  key: 'newInt', // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
})

const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState)

    return text.length
  },
  set: ({ set }, newValue) => {
    console.log('🚀 ~ file: ChracterCount.js ~ line 17 ~ newValue', newValue)
    set(textState, 'ohohoh')
    set(newCountAtom, 22)
  },
})

function CharacterCount() {
  const count = useRecoilValue(charCountState)
  const [dd, sets] = useRecoilState(charCountState)
  const [newInt, setNewInt] = useRecoilState(newCountAtom)

  const handleClick = () => {
    sets('huhu')
  }

  return (
    <div onClick={handleClick}>
      Character Count: {count} dd: {dd} newInt: {newInt}
    </div>
  )
}

export default CharacterCount

import { LogBox } from 'react-native'

export default function LogBoxMesagge() {
  return (
    LogBox.ignoreLogs([
      'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
    ])
  )
}
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import CardList from "../components/CardList";
import Card from "../components/Card";
import App from "../containers/App";
import Scroll from "../components/Scroll";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/CardList">
        <CardList/>
      </ComponentPreview>
      <ComponentPreview path="/Card">
        <Card/>
      </ComponentPreview>
      <ComponentPreview path="/App">
        <App/>
      </ComponentPreview>
      <ComponentPreview path="/Scroll">
        <Scroll/>
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews

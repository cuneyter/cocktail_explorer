import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import CardList from "../CardList";
import Card from "../Card";
import App from "../App";
import Scroll from "../Scroll";

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

import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() })

import CapeTile from "./CapeTile"

describe("CapeTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <CapeTile
          id={1}
          name="Super Nick"
          full_name="Nick Alberts"
          gender="Male"
          affiliation="Lornch Ablademy"
          intelligence={99}
          strength={5}
          speed={40}
          url="https://cdn.bulbagarden.net/upload/thumb/a/a6/Roxanne_Nosepass_Adventures.png/200px-Roxanne_Nosepass_Adventures.png"
        />
      </BrowserRouter>
    )
  })

  it('should render an h1 tag with the name of the cape', () => {
    expect(wrapper.find("h1").text()).toBe("Name: Super Nick")
  })

  it('should render a h2 tag with the full name of the cape', () => {
    expect(wrapper.find("h2").text()).toBe("Full Name: Nick Alberts")
  })

  it('should render a h3 tag with the gender of the cape', () => {
    expect(wrapper.find("h3").text()).toBe("Gender: Male")
  })

  it('should render a h4 tag with the affiliation of the cape', () => {
    expect(wrapper.find("h4").text()).toBe("Affiliation: Lornch Ablademy")
  })

  it('should render a h5 tag with the intelligence of the cape', () => {
    expect(wrapper.find("h5").text()).toBe("Intelligence: 99")
  })

  it('should render a h6 tag with the strength of the cape', () => {
    expect(wrapper.find("h6").text()).toBe("Strength: 5")
  })

  it('should render a p tag with the speed of the cape', () => {
    expect(wrapper.find("p").text()).toBe("Speed: 40")
  })

  it('should render an img tag with the url of the cape', () => {
    expect(wrapper.find("img").props()["src"]).toBe("https://cdn.bulbagarden.net/upload/thumb/a/a6/Roxanne_Nosepass_Adventures.png/200px-Roxanne_Nosepass_Adventures.png")
  })

  it('should have the correct assigned id', () => {
    expect(wrapper.find(CapeTile).props()["id"]).toBe(1)
  })

})

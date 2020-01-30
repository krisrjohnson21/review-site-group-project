import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter, Link } from "react-router-dom"

import CapeTile from "./CapeTile"

Enzyme.configure({ adapter: new Adapter() })

describe("CapeTile", () => {
  let wrapper
  let cape

  beforeEach(() => {
    cape = {
      name: "Super Nick",
      full_name: "Nick Alberts",
      gender: "Male",
      affiliation: "Lornch Ablademy",
      intelligence: 99,
      strength: 5,
      speed: 40,
      url: "https://cdn.bulbagarden.net/upload/thumb/a/a6/Roxanne_Nosepass_Adventures.png/200px-Roxanne_Nosepass_Adventures.png"
    }
    wrapper = mount(
      <BrowserRouter>
        <CapeTile
          cape={cape}
        />
      </BrowserRouter>
    )
  })

  it('should render an h1 tag with the name of the cape', () => {
    expect(wrapper.find("h1").text()).toBe("Super Nick")
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

})

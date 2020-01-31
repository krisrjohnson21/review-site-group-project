import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() })

import CapeShow from "./CapeShow"

describe("CapeShow", () => {
  let wrapper
  let capeData

  beforeEach(() => {
    capeData = {
      name: "Nedzilla",
      full_name: "Debbie Lehman",
      gender: "Male",
      affiliation: "Starbucks Galactica",
      intelligence: 100,
      strength: 77,
      speed: 89,
      url: "https://s3-prod.adage.com/s3fs-public/styles/width_1024/public/little_debbie.jpg"
    }

    wrapper = mount(
      <BrowserRouter>
        <CapeShow
          capeData={capeData}
        />
      </BrowserRouter>
    )
  })

  it('should render an img tag with the url of the cape', () => {
    expect(wrapper.find("img").props()["src"]).toBe("https://s3-prod.adage.com/s3fs-public/styles/width_1024/public/little_debbie.jpg")
  })

  it('should render an h1 tag with the name of the cape', () => {
    expect(wrapper.find("h1").text()).toBe("Detail page for Nedzilla")
  })

  it('should render an h4 tag with the full name of the cape', () => {
    expect(wrapper.find("#full-name").text()).toBe("Full Name: Debbie Lehman")
  })

  it('should render an h4 tag with the gender of the cape', () => {
    expect(wrapper.find("#gender").text()).toBe("Gender: Male")
  })

  it('should render an h4 tag with the affiliation of the cape', () => {
    expect(wrapper.find("#affiliation").text()).toBe("Affiliation: Starbucks Galactica")
  })

  it('should render an h2 tag with the power stats of the cape', () => {
    expect(wrapper.find("h2").text()).toBe("Nedzilla Power Stats")
  })

  it('should render an h4 tag with the intelligence of the cape', () => {
    expect(wrapper.find("#intelligence").text()).toBe("Intelligence: 100")
  })

  it('should render an h4 tag with the strength of the cape', () => {
    expect(wrapper.find("#strength").text()).toBe("Strength: 77")
  })

  it('should render an h4 tag with the speed of the cape', () => {
    expect(wrapper.find("#speed").text()).toBe("Speed: 89")
  })
})

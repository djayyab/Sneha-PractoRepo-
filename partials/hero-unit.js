import React from 'react'
import S from 'shorti'
export default class HeroUnit extends React.Component {
  render() {
    const page = this.props.page
    return (
      // style={{...S(`relative bg-cover bg-center w-100p`), background: `linear-gradient(140deg,${hero_gradient_color_hex_start.value} 10%,${page.metafield.hero_gradient_color_hex_end.value} 90%) center/cover no-repeat`}}
      <div className="hero-unit" >
        <h1 style={S('color-fff text-center absolute t-35p w-100p')}>value</h1>
      </div>
    )
  }
}
import React from 'react'
import SectionTitle from '../Common/SectionTitle'

export default function Menu() {
  return (
    <>
      <section id="menu" className="flex flex-col gap-10 text-center z-10 py-16 md:py-20 lg:py-28 menu-background">
        <div className='container'>
          <SectionTitle
            title="Menu"
            paragraph=""
            center
            width="665px"
          />
          <SectionTitle
            title="NADC Burger"
            paragraph="1/3lb Iron Table Wagyu Beef, American Cheese, Secret Sauce, Onions, Pickles, Slightly Tamed Jalapeños"
            center
            width="665px"
          />
          <SectionTitle
            title="Build Your Own Burger"
            paragraph=".... Not a Damn Chance"
            center
            width="665px"
          />
          <SectionTitle
            title="Sides"
            paragraph="Fries - Make them Beast Mode Fries by adding cheese, pickles, slightly tamed jalapeños, special sauce & seasoning"
            center
            width="665px"
          />
        </div>

      </section>
    </>
  )
}

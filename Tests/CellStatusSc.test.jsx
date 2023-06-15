import { expect, describe, it } from "vitest";
import CellStatusSC from "./CellStatusSC";
import { render, screen } from "@testing-library/react";


const expectedStatusStyles = {
   in: {
      bg: '#EEF9F2',
      tc: '#5AD07A'
   },
   out: {
      bg: '#FFEDEC',
      tc: '#E23428'
   },
   progress: {
      bg: '#fdfde0',
      tc: '#90811f'
   },
}

describe('Status Button', () => {
   it('Should render the correct "in" color once it receives "in" as status prop', () => {
      render(
         <CellStatusSC status="in" />
      )
      const button = screen.getByText("in")
      expect(button).toHaveStyle(`color: ${expectedStatusStyles.in.tc}`)
      expect(button).toHaveStyle(`background-color: ${expectedStatusStyles.in.bg}`)
   })

   it('Should render the correct "out" color once it receives "out" as status prop', () => {
      render(
         <CellStatusSC status="out" />
      )
      const button = screen.getByText("out")
      expect(button).toHaveStyle(`color: ${expectedStatusStyles.out.tc}`)
      expect(button).toHaveStyle(`background-color: ${expectedStatusStyles.out.bg}`)
   })

   it('Should render the correct "progress" color once it receives "progress" as status prop', () => {
      render(
         <CellStatusSC status="progress" />
      )
      const button = screen.getByText("progress")
      expect(button).toHaveStyle(`color: ${expectedStatusStyles.progress.tc}`)
      expect(button).toHaveStyle(`background-color: ${expectedStatusStyles.progress.bg}`)
   })
})
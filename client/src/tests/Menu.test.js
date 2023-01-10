import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderApp } from './helpers/renderApp.js'

describe('page routes', () => {
   test('route to dashboard', () => {
      renderApp()
      const dashboardPageLink = screen.getByTestId('dashboardPageLink')
      userEvent.click(dashboardPageLink)
      expect(screen.getByTestId('dashboard')).toBeInTheDocument()
   })
   test('route to assets', () => {
      renderApp()
      const assetsPageLink = screen.getByTestId('assetsPageLink')
      userEvent.click(assetsPageLink)
      expect(screen.getByTestId('assets')).toBeInTheDocument()
   })
})

describe('interval buttons', () => {
   test('is interval buttons on page', () => {
      renderApp()
      expect(screen.getByTestId('intervalButtons')).toBeInTheDocument()
   })
   test('is menu links on page', () => {
      renderApp()
      expect(screen.getByTestId('links')).toBeInTheDocument()
   })
})

describe('menu toggle', () => {
   test('show menu ', () => {
      renderApp()
      const setState = jest.fn()
      let isMenuActive = false

      userEvent.click(screen.getByTestId('burgerButton'))
      setState()
      isMenuActive = true
      expect(isMenuActive).toBe(true)
      expect(setState).toBeCalledTimes(1)
   })
   test('hide menu', () => {
      renderApp()
      const setState = jest.fn()
      let isMenuActive = true

      userEvent.click(screen.getByTestId('burgerButton'))
      setState()
      isMenuActive = false
      expect(isMenuActive).toBe(false)
      expect(setState).toBeCalledTimes(1)
   })
})

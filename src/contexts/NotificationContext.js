import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import notificationService from 'services/notification'

export const NotificationContext = createContext()

export default function NotificationContextProvider({ children }) {
  const history = useHistory()
  const [notifications, setNotifications] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function getData() {
    setIsLoading(true)
    const data = await notificationService.getAll()
    setNotifications(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const setAsRead = async (message) => {
    try {
      await notificationService.setAsRead(
        {
          status: true,
        },
        message,
      )
      getData()
      document.querySelector('body').scrollIntoView({
        behavior: 'smooth',
      })
    } catch (err) {
      if (err.response.status === 400) {
        history.push({
          pathname: '/login',
          state: { message: 'Silakan login terlebih dahulu' },
        })
      }
    }
  }

  const getTotalMessage = () => {
    let belumDibaca = notifications.filter((x) => x.status == false)
    return belumDibaca.length
  }

  const handleReadMessage = (id) => {
    setAsRead(id)
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        isLoading,
        getNotification: getData,
        getTotalMessage,
        setAsRead,
        handleReadMessage,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

NotificationContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

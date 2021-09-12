import { useContext } from 'react'
import { NotificationContext } from '../contexts/NotificationContext'
import { format } from 'date-fns'

export default function ListNotifications() {
  const { notifications, getNotifications, handleReadMessage } =
    useContext(NotificationContext)

  const onRead = (id) => {
    handleReadMessage(id)
    ;async () => await getNotifications()
  }

  return (
    <>
      <div className="table-responsive">
        <table className="table table-vcenter card-table">
          <thead>
            <tr>
              <th width="20%">Tanggal</th>
              <th width="60%">Pesan</th>
              <th width="20%"></th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification.id}>
                <td>
                  {format(
                    new Date(notification.createdAt),
                    'dd MMMM yyyy HH:ii',
                  )}
                </td>
                <td>{notification.message}</td>
                <td>
                  {notification.status == false ? (
                    <div className="btn-list">
                      <button
                        type="button"
                        className="btn btn-icon btn-success ms-auto"
                        style={{ width: 100 }}
                        onClick={() => onRead(notification.id)}
                      >
                        <div
                          className="icon-button"
                          style={{ marginRight: 20 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 12l5 5l10 -10" />
                            <path d="M2 12l5 5m5 -5l5 -5" />
                          </svg>
                        </div>
                        Baca
                      </button>
                    </div>
                  ) : (
                    <div className="btn-list">
                      <button
                        type="button"
                        className="btn telah-dibaca"
                        readOnly
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="green"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 12l5 5l10 -10" />
                          <path d="M2 12l5 5m5 -5l5 -5" />
                        </svg>
                        Telah Dibaca
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {notifications.length === 0 && (
              <tr>
                <td colSpan={5} align="center">
                  <br />
                  <br />
                  Data tidak tersedia !
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

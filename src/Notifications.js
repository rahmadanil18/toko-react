import ListNotifications from './components/ListNotifications'

export default function Carts() {
  return (
    <>
      <div className="container-xl">
        <div className="page-header d-print-none">
          <div className="row align-items-center">
            <div className="col">
              <h2 className="page-title text-light">Semua Notifikasi</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col-12">
              <div className="card">
                <ListNotifications />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

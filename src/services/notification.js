import api from 'utils/api'

const getAll = async () => {
  const response = await api
    .get(`notifications`)
    .catch((err) => console.log(err))
  return response ? response.data.data : []
}

const setRead = async (body, id) => {
  await api.put(`notifications/${id}`, body).catch((err) => console.log(err))
}

const notificationService = {
  getAll,
  setRead,
}

export default notificationService

class Api {
  constructor() {

  }
  getCardInitial() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-29/cards', {
      method: 'GET',
      headers: {
      authorization: '66763194-dff7-4592-9eca-89f9d6503745'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
  getInfoPersone() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-29/users/me', {
      method: 'GET',
      headers: {
      authorization: '66763194-dff7-4592-9eca-89f9d6503745',
      'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
  sendUserInfo(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-29/users/me', {
      method: 'PATCH',
      headers: {
      authorization: '66763194-dff7-4592-9eca-89f9d6503745',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(res => {

        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
  addNewCard(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-29/cards', {
      method: 'POST',
      headers: {
      authorization: '66763194-dff7-4592-9eca-89f9d6503745',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
  deleteCard(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-29/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
      authorization: '66763194-dff7-4592-9eca-89f9d6503745',
      'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
  likeCard(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-29/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
      authorization: '66763194-dff7-4592-9eca-89f9d6503745',
      'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
  cardLikeRemove(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-29/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
      authorization: '66763194-dff7-4592-9eca-89f9d6503745',
      'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
  editAvatar(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-29/users/me/avatar', {
      method: 'PATCH',
      headers: {
      authorization: '66763194-dff7-4592-9eca-89f9d6503745',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
};

export const api = new Api();

import axios from 'axios'
import * as types from '../mutation-types'
import config from "../../../config"

// state
export const state = {
  rooms: []
}

// getters
export const getters = {

}

// mutations 
export const mutations = {
  [types.GET_ROOMS_SUCCESS] (state, data) {
    state.rooms.push(data)
  },
  [types.GET_ROOMS_FAILURE] (state) {
    
  }
}

// actions
export const actions = {
  
  async getRooms({commit}, payload) {
    try {
      if (payload.startRooms == undefined)
        payload.startRooms = 0

      const { data } = await axios.get(config.apiPath + 'rooms', { params: 
        { roomsPerPage: payload.roomsPerPage, 
          startRooms: payload.startRooms } 
      })
      return data
    }
    catch(e) {
      return []
    }
  },

  async createRoom({commit}, users) {
    try {
      const {data} = await axios.post(config.apiPath + 'room', {users: users})
      return data
    }
    catch(e) {
      return {}
    }
  },

  async deleteRoom({commit}, roomId) {
    try {
      const {data} = await axios.delete(config.apiPath + 'room', { data: { roomId: roomId }})
      return data
    }
    catch(e) {
      return {}
    }
  },

  async getMessages({commit}, payload) {
    try {
      if (payload.startMessage == undefined)
        payload.startMessage = 0

      const { data } = await axios.get(config.apiPath + 'message', { params: 
        { roomId: payload.roomId, 
          startMessage: payload.startMessage,
          messagesPerPage: payload.messagesPerPage} 
        })
      return data
    }
    catch(e) {
      return []
    }
  },

  async sendMessage({commit}, payload) {
    try {
      const { data } = await axios.post(config.apiPath + 'message', 
                                        { roomId: payload.roomId, message: payload.message})
      return data
    }
    catch(e) {
      return {}
    }
  },

  async editMessage({commit}, payload) {
    try {
      const { data } = await axios.put(config.apiPath + 'message', 
                                        { roomId: payload.roomId, messageId: payload.messageId, 
                                          message: payload.message})
      return data
    }
    catch(e) {
      return {}
    }
  },

  async deleteMessage({commit}, payload) {
    try {
      const { data } = await axios.delete(config.apiPath + 'message', 
                                         { data: { roomId: payload.roomId, messageId: payload.messageId }})
      return data
    }
    catch(e) {
      return {}
    }
  },

  async getLastMessage({commit}, roomId) {
    try {
      const { data } = await axios.get(config.apiPath + 'lastMessage', 
                                       { params: { roomId: roomId } })
      return data
    }
    catch(e) {
      return {}
    }
  },

  // for chat21
  // async sendMessage({commit}, message) {
  //   try {
  //     message.sender_fullname = 'Test Fullname'
  //     message.recipient_id = 'CPt2sktOHo5bmdTRSBFN0Sm6ntIV' // test1@gmail.com
  //     message.recipient_fullname = 'Test1 Account'
  //     message.text = 'This is test message'
  //     message.channel_type = 'direct'
  //     message.attributes = ''
  //     message.type = 'text'

  //     const { data } = await axios.post(config.apiPath + 'message', message)
  //     console.log(data)
  //     commit(types.SEND_MESSAGE_SUCCESS, {})
  //   }
  //   catch (e) {
  //     commit(types.SEND_MESSAGE_FAILURE)
  //   }
  // },

  // // for chat21
  // async deleteMessage({commit}, recipient_id, message_id) {
  //   try {
  //     const { data } = await axios.delete(config.apiPath + `messages/${recipient_id}/${message_id}`)
  //     commit(types.DELETE_MESSAGE_SUCCESS, {})
  //   }
  //   catch(e) {
  //     commit(types.DELETE_MESSAGE_FAILURE)
  //   }
  // }
  
}
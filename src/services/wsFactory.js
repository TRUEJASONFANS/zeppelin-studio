import WsConnection from '@/classes/webSocket.js'

let wsConn = {}

export default {
  initNotebookConnection (notebookId, store) {
    wsConn[notebookId] = new WsConnection(store, store.state.ticket, notebookId)
  },

  getConn (notebookId) {
    return wsConn[notebookId]
  },

  closeConn (notebookId) {
    wsConn[notebookId].ws.close()
  }
}

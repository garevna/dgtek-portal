export default {
  registration: {
    reject: {
      message: true,
      messageType: 'Reject Leads request',
      messageText: 'Success. Leads request was rejected'
    },
    accept: {
      message: true,
      messageType: 'Accept Leads request',
      messageText: 'Success. Leads request has been accepted'
    }
  },
  rsp: {
    post: {
      message: true,
      messageType: 'Data saving',
      messageText: 'Users have been saved'
    }
  },
  address: {
    delete: {
      message: true,
      messageType: 'Delete ticket',
      messageText: 'Ticket has been removed forever'
    },
    reject: {
      message: true,
      messageType: 'Reject connection request',
      messageText: 'Success. Connection request was rejected'
    },
    accept: {
      message: true,
      messageType: 'Accept connection request',
      messageText: 'Success. Connection request has been accepted'
    },
    history: {
      message: true,
      messageType: 'Send message back',
      messageText: 'Success. Message has been delivered'
    },
    status: {
      message: true,
      messageType: 'Success',
      messageText: 'Connection request status has been changed'
    },
    type: {
      message: true,
      messageType: 'Success',
      messageText: 'Connection request type has been changed'
    },
    archive: {
      message: true,
      messageType: 'Empty result',
      messageText: 'There are no archived tickets of this RSP'
    }
  },
  common: {
    delete: {
      message: true,
      messageType: 'Delete ticket',
      messageText: 'Ticket has been removed forever'
    },
    history: {
      message: true,
      messageType: 'Send message back',
      messageText: 'Success. Message has been delivered'
    }
  },
  tariff: {
    create: {
      message: true,
      messageType: 'Creating new tariff',
      messageText: 'Operation has succeeded. New tariff has been created'
    },
    update: {
      message: true,
      messageType: 'Update tariff',
      messageText: 'Success. Tariff has been updated'
    },
    delete: {
      message: true,
      messageType: 'Delete tariff',
      messageText: 'Tariff has been deleted'
    }
  },
  services: {
    create: {
      message: true,
      messageType: 'Creating new service',
      messageText: 'Operation has succeeded. New service has been created'
    },
    update: {
      message: true,
      messageType: 'Update service',
      messageText: 'Success. Service has been updated'
    },
    upload: {
      message: true,
      messageType: 'Upload service SLA',
      messageText: 'Success. File has been uploded'
    },
    delete: {
      message: true,
      messageType: 'Removing service',
      messageText: 'Service has been removed forever'
    }
  }
}

export default {
  registration: {
    get: {
      error: true,
      errorType: 'Reading leads requests',
      errorMessage: 'Process failed... Data was not received'
    },
    reject: {
      error: true,
      errorType: 'Reject leads request',
      errorMessage: 'Process failed. Leads Request was not rejected'
    },
    accept: {
      error: true,
      errorType: 'Accept Leads request',
      errorMessage: 'Process failed. Leads Request was not accepted'
    },
    role: {
      error: true,
      errorType: 'Accept Leads request',
      errorMessage: 'You should set a role before accepting'
    }
  },

  users: {
    get: {
      error: true,
      errorType: 'Reading users',
      errorMessage: 'Process failed... Data was not received'
    }
  },

  rsp: {
    get: {
      error: true,
      errorType: 'Reading rsp list',
      errorMessage: 'Process failed... Data was not received'
    },
    post: {
      error: true,
      errorType: 'User preservation error',
      errorMessage: 'Process failed... Data was not saved'
    }
  },

  address: {
    get: {
      error: true,
      errorType: 'Reading requests',
      errorMessage: 'Process failed. Data was not received'
    },
    delete: {
      error: true,
      errorType: 'Delete request',
      errorMessage: 'Process failed. Request was not deleted'
    },
    reject: {
      error: true,
      errorType: 'Reject connection request',
      errorMessage: 'Process failed. Connection request was not rejected'
    },
    accept: {
      error: true,
      errorType: 'Reject connection request',
      errorMessage: 'Process failed. Connection request was not rejected'
    },
    history: {
      error: true,
      errorType: 'Send message back',
      errorMessage: 'Process failed. Message has not been delivered'
    },
    status: {
      error: true,
      errorType: 'Change connection request status',
      errorMessage: 'Process failed. Request status was not changed'
    },
    type: {
      error: true,
      errorType: 'Change connection request type',
      errorMessage: 'Process failed. Request type was not changed'
    }
  },

  common: {
    get: {
      error: true,
      errorType: 'Reading tikets',
      errorMessage: 'Process failed. Data was not received'
    },
    delete: {
      error: true,
      errorType: 'Delete ticket',
      errorMessage: 'Process failed. Ticket was not deleted'
    },
    history: {
      error: true,
      errorType: 'Send message back',
      errorMessage: 'Process failed. Message has not been delivered'
    }
  },

  tariff: {
    get: {
      error: true,
      errorType: 'Reading tariffs',
      errorMessage: 'Process failed...'
    },
    create: {
      error: true,
      errorType: 'Creating new tariff',
      errorMessage: 'Operation failed. New tariff was not created'
    },
    update: {
      error: true,
      errorType: 'Update tariff',
      errorMessage: 'Process failed. Tariff was not updated'
    },
    delete: {
      error: true,
      errorType: 'Delete tariff',
      errorMessage: 'Operation failed. Tariff was not deleted'
    },
    id: {
      error: true,
      errorType: 'Delete tariff',
      errorMessage: 'Operation failed. Select tariff before deleting'
    }
  },

  services: {
    get: {
      error: true,
      errorType: 'Reading services',
      errorMessage: 'Process failed...'
    },
    create: {
      error: true,
      errorType: 'Creating new service',
      errorMessage: 'Operation failed. New service was not created'
    },
    update: {
      error: true,
      errorType: 'Update service',
      errorMessage: 'Process failed. Service was not updated'
    },
    upload: {
      error: true,
      errorType: 'Upload file',
      errorMessage: 'Operation failed. File was not uploaded'
    },
    uploadFileTypeError: {
      error: true,
      errorType: 'Upload file',
      errorMessage: 'Invalid file type'
    },
    delete: {
      error: true,
      errorType: 'Delete service',
      errorMessage: 'Operation failed. Service was not deleted'
    }
  }
}
